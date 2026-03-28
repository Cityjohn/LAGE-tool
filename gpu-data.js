window.GPU_DATA = [
  // RTX 30 Series (Ampere — no native FP4, dequantizes to FP16)
  { name: "RTX 3050", price: 235, bandwidth: 224, series: "30", vram: "8GB", fp4Tokens: 21, fp4Method: "emulated" },
  { name: "RTX 3060 12GB", price: 225, bandwidth: 360, series: "30", vram: "12GB", fp4Tokens: 34, fp4Method: "emulated" },
  { name: "RTX 3060 Ti", price: 340, bandwidth: 448, series: "30", vram: "8GB", fp4Tokens: 42, fp4Method: "emulated" },
  { name: "RTX 3070", price: 325, bandwidth: 448, series: "30", vram: "8GB", fp4Tokens: 42, fp4Method: "emulated" },
  { name: "RTX 3070 Ti", price: 420, bandwidth: 608, series: "30", vram: "8GB", fp4Tokens: 57, fp4Method: "emulated" },
  { name: "RTX 3080 10GB", price: 375, bandwidth: 760, series: "30", vram: "10GB", fp4Tokens: 71, fp4Method: "emulated" },
  { name: "RTX 3080 12GB", price: 600, bandwidth: 912, series: "30", vram: "12GB", fp4Tokens: 85, fp4Method: "emulated" },
  { name: "RTX 3080 Ti", price: 575, bandwidth: 912, series: "30", vram: "12GB", fp4Tokens: 85, fp4Method: "emulated" },
  { name: "RTX 3090", price: 675, bandwidth: 936, series: "30", vram: "24GB", fp4Tokens: 87, fp4Method: "emulated" },
  { name: "RTX 3090 Ti", price: 1025, bandwidth: 1008, series: "30", vram: "24GB", fp4Tokens: 94, fp4Method: "emulated" },
  // RTX 40 Series (Ada — FP8 partial, no native FP4, dequantizes to FP16)
  { name: "RTX 4060 8GB", price: 340, bandwidth: 272, series: "40", vram: "8GB", fp4Tokens: 25, fp4Method: "emulated" },
  { name: "RTX 4060 16GB", price: 440, bandwidth: 272, series: "40", vram: "16GB", fp4Tokens: 25, fp4Method: "emulated" },
  { name: "RTX 4060 Ti 8GB", price: 420, bandwidth: 288, series: "40", vram: "8GB", fp4Tokens: 27, fp4Method: "emulated" },
  { name: "RTX 4060 Ti 16GB", price: 520, bandwidth: 288, series: "40", vram: "16GB", fp4Tokens: 27, fp4Method: "emulated" },
  { name: "RTX 4070", price: 495, bandwidth: 504, series: "40", vram: "12GB", fp4Tokens: 47, fp4Method: "emulated" },
  { name: "RTX 4070 Super", price: 625, bandwidth: 504, series: "40", vram: "12GB", fp4Tokens: 47, fp4Method: "emulated" },
  { name: "RTX 4070 Ti", price: 750, bandwidth: 504, series: "40", vram: "12GB", fp4Tokens: 47, fp4Method: "emulated" },
  { name: "RTX 4070 Ti Super", price: 850, bandwidth: 672, series: "40", vram: "16GB", fp4Tokens: 63, fp4Method: "emulated" },
  { name: "RTX 4080", price: 875, bandwidth: 716, series: "40", vram: "16GB", fp4Tokens: 67, fp4Method: "emulated" },
  { name: "RTX 4080 Super", price: 855, bandwidth: 736, series: "40", vram: "16GB", fp4Tokens: 69, fp4Method: "emulated" },
  { name: "RTX 4090", price: 2225, bandwidth: 1008, series: "40", vram: "24GB", fp4Tokens: 94, fp4Method: "emulated" },
  // RTX 50 Series (Blackwell — native FP4 via 5th-gen Tensor Cores)
  { name: "RTX 5060", price: 360, bandwidth: 448, series: "50", vram: "8GB", fp4Tokens: 67, fp4Method: "native" },
  { name: "RTX 5060 Ti 8GB", price: 440, bandwidth: 448, series: "50", vram: "8GB", fp4Tokens: 67, fp4Method: "native" },
  { name: "RTX 5060 Ti 16GB", price: 500, bandwidth: 448, series: "50", vram: "16GB", fp4Tokens: 82, fp4Method: "native" },
  { name: "RTX 5070", price: 675, bandwidth: 672, series: "50", vram: "12GB", fp4Tokens: 100, fp4Method: "native" },
  { name: "RTX 5070 Ti", price: 925, bandwidth: 896, series: "50", vram: "16GB", fp4Tokens: 134, fp4Method: "native" },
  { name: "RTX 5080", price: 1275, bandwidth: 960, series: "50", vram: "16GB", fp4Tokens: 144, fp4Method: "native" },
  { name: "RTX 5090", price: 2550, bandwidth: 1792, series: "50", vram: "32GB", fp4Tokens: 268, fp4Method: "native" },
  // NVIDIA Cloud (datacenter — mixed FP4 support)
  { name: "T4", price: 280, bandwidth: 320, series: "cloud", vram: "16GB", note: "Cloud $0.59/hr", fp4Tokens: 30, fp4Method: "emulated" },
  { name: "L4", price: 380, bandwidth: 300, series: "cloud", vram: "24GB", note: "Cloud $0.80/hr", fp4Tokens: 28, fp4Method: "emulated" },
  { name: "A10", price: 523, bandwidth: 600, series: "cloud", vram: "24GB", note: "Cloud $1.10/hr", fp4Tokens: 56, fp4Method: "emulated" },
  { name: "L40S", price: 926, bandwidth: 864, series: "cloud", vram: "48GB", note: "Cloud $1.95/hr", fp4Tokens: 81, fp4Method: "emulated" },
  { name: "A100 40GB", price: 998, bandwidth: 1555, series: "cloud", vram: "40GB", note: "Cloud $2.10/hr", fp4Tokens: 145, fp4Method: "emulated" },
  { name: "A100 80GB", price: 1188, bandwidth: 2039, series: "cloud", vram: "80GB", note: "Cloud $2.50/hr", fp4Tokens: 191, fp4Method: "emulated" },
  { name: "H100", price: 1876, bandwidth: 3350, series: "cloud", vram: "80GB", note: "Cloud $3.95/hr", fp4Tokens: 313, fp4Method: "emulated" },
  { name: "H200", price: 2157, bandwidth: 4800, series: "cloud", vram: "141GB", note: "Cloud $4.54/hr", fp4Tokens: 449, fp4Method: "emulated" },
  { name: "B200", price: 2969, bandwidth: 8000, series: "cloud", vram: "192GB", note: "Cloud $6.25/hr", fp4Tokens: 748, fp4Method: "native" },
  // NVIDIA DGX
  { name: "DGX Spark", price: 2800, bandwidth: 273, series: "dgx", vram: "128GB", note: "~$4,700 / €2,800–4,200", fp4Tokens: 41, fp4Method: "native" },
  // AMD RDNA 2 (no FP4 support)
  { name: "RX 6800 XT", price: 315, bandwidth: 512, series: "rdna2", vram: "16GB", fp4Tokens: 48, fp4Method: "emulated" },
  { name: "RX 6900 XT", price: 390, bandwidth: 512, series: "rdna2", vram: "16GB", fp4Tokens: 48, fp4Method: "emulated" },
  // AMD RDNA 3 (no FP4 support)
  { name: "RX 7700 XT", price: 310, bandwidth: 432, series: "rdna3", vram: "12GB", fp4Tokens: 40, fp4Method: "emulated" },
  { name: "RX 7800 XT", price: 390, bandwidth: 576, series: "rdna3", vram: "16GB", fp4Tokens: 54, fp4Method: "emulated" },
  { name: "RX 7900 GRE", price: 450, bandwidth: 576, series: "rdna3", vram: "16GB", fp4Tokens: 54, fp4Method: "emulated" },
  { name: "RX 7900 XT", price: 600, bandwidth: 800, series: "rdna3", vram: "20GB", fp4Tokens: 75, fp4Method: "emulated" },
  { name: "RX 7900 XTX", price: 725, bandwidth: 960, series: "rdna3", vram: "24GB", fp4Tokens: 90, fp4Method: "emulated" },
  // AMD RDNA 4 (no native FP4)
  { name: "RX 9070", price: 500, bandwidth: 512, series: "rdna4", vram: "16GB", fp4Tokens: 48, fp4Method: "emulated" },
  { name: "RX 9070 XT", price: 600, bandwidth: 640, series: "rdna4", vram: "16GB", fp4Tokens: 60, fp4Method: "emulated" },
  // AMD Instinct
  { name: "MI300X", price: 1900, bandwidth: 5300, series: "instinct", vram: "192GB", note: "Cloud ~$4/hr", fp4Tokens: 496, fp4Method: "emulated" },
  // Intel Arc Alchemist (no FP4 support)
  { name: "Arc A380", price: 105, bandwidth: 188, series: "arcA", vram: "6GB", fp4Tokens: 18, fp4Method: "emulated" },
  { name: "Arc A580", price: 150, bandwidth: 512, series: "arcA", vram: "8GB", fp4Tokens: 48, fp4Method: "emulated" },
  { name: "Arc A750", price: 210, bandwidth: 512, series: "arcA", vram: "8GB", fp4Tokens: 48, fp4Method: "emulated" },
  { name: "Arc A770 8GB", price: 260, bandwidth: 560, series: "arcA", vram: "8GB", fp4Tokens: 52, fp4Method: "emulated" },
  { name: "Arc A770 16GB", price: 325, bandwidth: 560, series: "arcA", vram: "16GB", fp4Tokens: 52, fp4Method: "emulated" },
  // Intel Arc Battlemage (no native FP4)
  { name: "Arc B50", price: 120, bandwidth: 224, series: "arcB", vram: "8GB", fp4Tokens: 21, fp4Method: "emulated" },
  { name: "Arc B60", price: 170, bandwidth: 320, series: "arcB", vram: "8GB", fp4Tokens: 30, fp4Method: "emulated" },
  { name: "Arc B580", price: 255, bandwidth: 456, series: "arcB", vram: "12GB", fp4Tokens: 43, fp4Method: "emulated" },
  { name: "Arc B770", price: 400, bandwidth: 616, series: "arcB", vram: "16GB", fp4Tokens: 58, fp4Method: "emulated" },
  // Intel Arc Pro Battlemage (no native FP4, 32GB workstation)
  { name: "Arc Pro B70", price: 949, bandwidth: 608, series: "arcB", vram: "32GB", note: "Workstation, 230W TBP, INT8 367 TOPS", fp4Tokens: 57, fp4Method: "emulated" },
  // NVIDIA Workstation (Ampere/Ada — no native FP4)
  { name: "RTX A6000", price: 4500, bandwidth: 768, series: "workstation", vram: "48GB", note: "Ampere workstation, ECC, NVLink", fp4Tokens: 72, fp4Method: "emulated" },
  { name: "RTX 6000 Ada", price: 6800, bandwidth: 960, series: "workstation", vram: "48GB", note: "Ada workstation, ECC, 300W", fp4Tokens: 90, fp4Method: "emulated" },
  // NVIDIA Workstation (Blackwell — native FP4)
  { name: "RTX Pro 6000 Blackwell", price: 8500, bandwidth: 1800, series: "workstationBlackwell", vram: "96GB", note: "Blackwell workstation, GDDR7, ECC, 5th-gen Tensor, 600W", fp4Tokens: 259, fp4Method: "native" },
  // AMD Workstation (RDNA 3 — no native FP4)
  { name: "Radeon Pro W7900", price: 3499, bandwidth: 864, series: "workstationAmd", vram: "48GB", note: "RDNA 3 workstation, ECC, 384-bit", fp4Tokens: 81, fp4Method: "emulated" },
  // Apple Silicon (unified memory — no FP4, no discrete VRAM)
  { name: "Mac Mini M4 Pro 48GB", price: 1599, bandwidth: 273, series: "apple", vram: "48GB", note: "Unified memory, no FP4, 5W idle", fp4Tokens: 25, fp4Method: "emulated" },
  { name: "Mac Mini M4 Pro 64GB", price: 1999, bandwidth: 273, series: "apple", vram: "64GB", note: "Unified memory, no FP4, 5W idle", fp4Tokens: 25, fp4Method: "emulated" },
  { name: "Mac Studio M2 Ultra 64GB", price: 3999, bandwidth: 800, series: "apple", vram: "64GB", note: "Unified memory, no FP4, 800GB/s", fp4Tokens: 75, fp4Method: "emulated" },
  { name: "Mac Studio M2 Ultra 192GB", price: 6199, bandwidth: 800, series: "apple", vram: "192GB", note: "Unified memory, no FP4, can run 70B+ models", fp4Tokens: 75, fp4Method: "emulated" },
  { name: "Mac Studio M3 Ultra 96GB", price: 3999, bandwidth: 819, series: "apple", vram: "96GB", note: "Unified memory, no FP4, 819GB/s", fp4Tokens: 77, fp4Method: "emulated" },
  { name: "Mac Studio M3 Ultra 512GB", price: 10499, bandwidth: 819, series: "apple", vram: "512GB", note: "Unified memory, no FP4, can run any model", fp4Tokens: 77, fp4Method: "emulated" },
  // Edge / Dev Boards (no FP4)
  { name: "Jetson Orin NX 16GB", price: 599, bandwidth: 102, series: "edge", vram: "16GB", note: "Edge AI, Ampere, 157 TOPS, 25W TDP", fp4Tokens: 10, fp4Method: "emulated" },
  { name: "RPi 5 + Hailo-8L", price: 110, bandwidth: 102, series: "edge", vram: "8GB", note: "Ultra-budget edge, ARM + NPU, ~13 TOPS", fp4Tokens: 10, fp4Method: "emulated" },
];

/*
 * FP4 Token Generation Methodology
 * =================================
 *
 * Model: Qwen3 8B, 16K context, single-stream token generation
 * Baseline: RTX 3090 = 87.5 t/s (measured, hardware-corner.net, llama.cpp Q4_K_XL)
 *
 * Cards WITHOUT native FP4 (Ampere, Ada, AMD, Intel):
 *   - FP4 weights are dequantized to FP16 at inference time
 *   - No compute speedup from FP4 — same throughput as FP16/Q4
 *   - Estimated via bandwidth ratio: fp4Tokens = 87.5 × (card_bw / 936)
 *
 * Cards WITH native FP4 (Blackwell RTX 50-series, B200):
 *   - NVFP4 uses 5th-gen Tensor Cores for native 4-bit compute
 *   - arxiv:2601.09527 (Holtmann, Jan 2026) measures 1.6x NVFP4 over BF16 on Blackwell
 *   - Estimated: fp4Tokens = (87.5 × card_bw / 936) × 1.6
 *
 * Sources:
 *   1. hardware-corner.net — GPU Ranking for LLMs (Dec 2025), llama.cpp Q4_K_XL
 *   2. arxiv:2601.09527 — Private LLM Inference on Consumer Blackwell GPUs (Jan 2026)
 *   3. Ziegler, Medium — Budget LLM Inference Box (Nov 2025), vLLM benchmarks
 *   4. NVIDIA developer blog — NVFP4 specs and Blackwell throughput claims
 *
 * Caveats:
 *   - These are ESTIMATES for Qwen3 8B at 16K context only
 *   - Real performance varies by model size, context length, backend, batch size
 *   - Prompt processing (prefill) favors Blackwell more heavily than token generation
 *   - Cloud GPU estimates use same bandwidth ratio — actual datacenter perf may differ
 *   - AMD/Intel numbers assume llama.cpp ROCm/SYCL — native support may differ
 */
