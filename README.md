# ⚖️ LAGE-tool

**Local AI Inference GPU Economics**

This repo is primarily a **CI/CD and agentic deployment testbed**. The main goal is to automate deployment and test agentic workflows — letting AI agents deploy software themselves and periodically verify their work online. The GPU comparison tools are the deployed content that agents use to validate end-to-end automation.

---

## What’s in here

Two static tools for GPU research and buying decisions (used as deployment targets):

| Tool | What it does |
|------|--------------|
| **[Full Comparison Table](gpu-comparison.html)** | Search, filter, and sort 60+ GPUs. Compare VRAM, bandwidth, TFLOPS, prices, and LLM token speeds. Add up to 6 GPUs to a side‑by‑side compare view. |
| **[Price vs Bandwidth & VRAM](gpu-price-bandwidth-analysis.html)** | Interactive scatter charts. See which GPUs offer the best value for bandwidth or VRAM. Click the legend to filter by vendor. |

**Coverage:** NVIDIA RTX 30/40/50, data center (T4 → B200), DGX Spark, AMD ROCm, Intel Arc, plus cloud rental and used/refurb pricing.

---

## Data sources

- **Consumer (used):** Marktplaats.nl  
- **Cloud rental:** Modal.com, Lambda Labs  
- **Purchase (data center):** eBay used/refurbished  
- **DGX Spark:** NVIDIA  

---

## Updating GPU data

Edit `gpu-data.js` directly — it's the single source of truth.

---

## Tech & deployment

- **Stack:** Static HTML, vanilla JS, Chart.js, Google Fonts (DM Sans)  
- **Hosting:** Works on Vercel, Netlify, GitHub Pages — no build step  
- **Config:** `vercel.json` for clean URLs and trailing slash handling  

---

© 2026. All Rights Reserved. No part of this software may be copied, reproduced, or distributed without permission.
