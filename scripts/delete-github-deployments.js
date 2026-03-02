#!/usr/bin/env node
/**
 * Delete all GitHub deployments for this repo.
 * Requires: GITHUB_TOKEN env var with repo scope
 *
 * Run (PowerShell): $env:GITHUB_TOKEN="your_token"; node scripts/delete-github-deployments.js
 * Run (bash):       GITHUB_TOKEN=your_token node scripts/delete-github-deployments.js
 *
 * Note: If Vercel is connected, it will create new deployments on each deploy.
 * To stop that: Vercel Dashboard → Project → Settings → Git → disable "Deployment Comments"
 * or disconnect the repo.
 */
const owner = 'Cityjohn';
const repo = 'LAGE-tool';

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('Set GITHUB_TOKEN env var (needs repo scope)');
    process.exit(1);
  }

  const headers = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${token}`,
  };

  // List deployments
  const listRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/deployments`,
    { headers }
  );
  if (!listRes.ok) {
    console.error('Failed to list deployments:', listRes.status, await listRes.text());
    process.exit(1);
  }
  const deployments = await listRes.json();
  console.log(`Found ${deployments.length} deployment(s)`);

  for (const d of deployments) {
    // Mark inactive first (required when there are multiple)
    await fetch(
      `https://api.github.com/repos/${owner}/${repo}/deployments/${d.id}/statuses`,
      {
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          state: 'inactive',
          description: 'Removed',
        }),
      }
    );

    const delRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/deployments/${d.id}`,
      { method: 'DELETE', headers }
    );
    if (delRes.ok) {
      console.log(`Deleted deployment ${d.id}`);
    } else {
      console.error(`Failed to delete ${d.id}:`, delRes.status);
    }
  }
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
