// seed-products.js — must be loaded AFTER firebase-config.js
// Run once from browser DevTools console: runSeed()

const seedProducts = [

  // ── Gaming PCs ─────────────────────────────────────────────────────────────
  {
    nameEn: 'HP OMEN 35L Gaming PC - Ryzen 7 8700F + RTX 5060 Ti 16GB + 16GB DDR5',
    nameAr: '', price: 1169, salePrice: null, category: 'gaming', stock: 50,
    description: 'HP OMEN 35L Gaming PC - Ryzen 7 8700F + RTX 5060 Ti 16GB + 16GB DDR5',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/desktop/BE8B1AA/1e790c51-890c-4133-9242-d059516764f7-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/desktop/BE8B1AA/1e790c51-890c-4133-9242-d059516764f7-400x400.jpg',
                'https://os-jo.com/image/cache/catalog/products/desktop/BC4K6AA/OMEN-16L-Gaming-Desktop-PC-left-view-400x400.jpg']
  },
  {
    nameEn: 'HP OMEN 16L Gaming PC - Core i5-14400F + RTX 5060 Ti 8GB + 16GB DDR5',
    nameAr: '', price: 929, salePrice: null, category: 'gaming', stock: 50,
    description: 'HP OMEN 16L Gaming PC - Core i5-14400F + RTX 5060 Ti 8GB + 16GB DDR5',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/desktop/BC4K6AA/OMEN-16L-Gaming-Desktop-PC-left-view-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/desktop/BC4K6AA/OMEN-16L-Gaming-Desktop-PC-left-view-400x400.jpg',
                'https://os-jo.com/image/cache/catalog/products/desktop/BE8B1AA/1e790c51-890c-4133-9242-d059516764f7-400x400.jpg']
  },
  {
    nameEn: 'Intel Core i5-12400F + RTX 5060 8GB + 16GB DDR4 - Custom Build',
    nameAr: '', price: 859, salePrice: null, category: 'gaming', stock: 50,
    description: 'Intel Core i5-12400F + RTX 5060 8GB + 16GB DDR4 - Custom Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/16-400x400.png',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/16-400x400.png']
  },
  {
    nameEn: 'AMD Ryzen 5 9600X + RTX 5070 12GB + 16GB DDR5 - PC Build',
    nameAr: '', price: 1519, salePrice: null, category: 'gaming', stock: 50,
    description: 'AMD Ryzen 5 9600X + RTX 5070 12GB + 16GB DDR5 - PC Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/15-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/15-400x400.jpg']
  },
  {
    nameEn: 'AMD Ryzen 5 9600X + RTX 5060 Ti 8GB + 16GB DDR5 - Custom Build',
    nameAr: '', price: 1179, salePrice: null, category: 'gaming', stock: 50,
    description: 'AMD Ryzen 5 9600X + RTX 5060 Ti 8GB + 16GB DDR5 - Custom Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/14-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/14-400x400.jpg']
  },
  {
    nameEn: 'AMD Ryzen 5 5500 + RTX 5050 8GB + 8GB RAM - Custom Build',
    nameAr: '', price: 629, salePrice: 779, category: 'gaming', stock: 50,
    description: 'AMD Ryzen 5 5500 + RTX 5050 8GB + 8GB RAM - Custom Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/13-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/13-400x400.jpg']
  },
  {
    nameEn: 'Intel Core Ultra 7 265K + RTX 5080 16GB + 32GB DDR5 - PC Build',
    nameAr: '', price: 2499, salePrice: null, category: 'gaming', stock: 50,
    description: 'Intel Core Ultra 7 265K + RTX 5080 16GB + 32GB DDR5 - PC Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/11-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/11-400x400.jpg']
  },
  {
    nameEn: 'Intel Core Ultra 7 265F + RTX 5070 Ti 16GB + 16GB DDR5 - PC Build',
    nameAr: '', price: 1829, salePrice: null, category: 'gaming', stock: 50,
    description: 'Intel Core Ultra 7 265F + RTX 5070 Ti 16GB + 16GB DDR5 - PC Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/10-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/10-400x400.jpg']
  },
  {
    nameEn: 'Intel Core Ultra 7 265K + RTX 5070 12GB + 16GB DDR5 - PC Build',
    nameAr: '', price: 1749, salePrice: null, category: 'gaming', stock: 50,
    description: 'Intel Core Ultra 7 265K + RTX 5070 12GB + 16GB DDR5 - PC Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/9-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/9-400x400.jpg']
  },
  {
    nameEn: 'AMD Ryzen 5 5500 + RTX 3050 6GB + 8GB RAM - Custom Build',
    nameAr: '', price: 539, salePrice: 599, category: 'gaming', stock: 50,
    description: 'AMD Ryzen 5 5500 + RTX 3050 6GB + 8GB RAM - Custom Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/12-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/12-400x400.jpg']
  },

  // ── Components / CPU ───────────────────────────────────────────────────────
  {
    nameEn: 'AMD RYZEN 5 7600 Up To 5.1GHz 6 Cores 32MB Cache AM5 CPU (Tray)',
    nameAr: '', price: 159, salePrice: 169, category: 'cpu', stock: 50,
    description: 'AMD RYZEN 5 7600 Up To 5.1GHz 6 Cores 32MB Cache AM5 CPU (Tray)',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/processor/RYZEN-5-7600/ezgif.com-webp-to-jpg-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/processor/RYZEN-5-7600/ezgif.com-webp-to-jpg-400x400.jpg']
  },
  {
    nameEn: 'AMD RYZEN 7 7800X3D 5.0GHz 8 Cores 96MB 3D V-Cache AM5 CPU (Tray)',
    nameAr: '', price: 319, salePrice: 349, category: 'cpu', stock: 50,
    description: 'AMD RYZEN 7 7800X3D 5.0GHz 8 Cores 96MB 3D V-Cache AM5 CPU (Tray)',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/processor/RYZEN-5-7600/ezgif.com-webp-to-jpg-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/processor/RYZEN-5-7600/ezgif.com-webp-to-jpg-400x400.jpg']
  },
  {
    nameEn: 'ASUS Prime X870-P GAMING WIFI AMD Ryzen AM5 DDR5 PCIe 5.0 ATX',
    nameAr: '', price: 259, salePrice: null, category: 'cpu', stock: 50,
    description: 'ASUS Prime X870-P GAMING WIFI AMD Ryzen AM5 DDR5 PCIe 5.0 ATX',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/-Motherboard/PRIME-X870-P/wf8701186-1200x12000-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/-Motherboard/PRIME-X870-P/wf8701186-1200x12000-400x400.jpg']
  },
  {
    nameEn: 'AeroCool Mirage Gold 650W ARGB 80 Plus Gold Fully Modular PSU',
    nameAr: '', price: 59, salePrice: 65, category: 'cpu', stock: 50,
    description: 'AeroCool Mirage Gold 650W ARGB 80 Plus Gold Fully Modular PSU',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/power-supply/4711099472581/Mirage-Gold-650W-Fully-Modular-Gallery-Image-3-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/power-supply/4711099472581/Mirage-Gold-650W-Fully-Modular-Gallery-Image-3-400x400.jpg']
  },
  {
    nameEn: 'Lian Li RB750B PSU BLACK 80 PLUS Bronze Non-Modular PCIe 5.1',
    nameAr: '', price: 65, salePrice: null, category: 'cpu', stock: 50,
    description: 'Lian Li RB750B PSU BLACK 80 PLUS Bronze Non-Modular PCIe 5.1',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/power-supply/RB750B/rb0033-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/power-supply/RB750B/rb0033-400x400.jpg',
                'https://os-jo.com/image/cache/catalog/products/power-supply/RB650B/rb0022-400x400.jpg']
  },
  {
    nameEn: 'Lian Li RB650B PSU BLACK 80 PLUS Bronze Non-Modular PCIe 5.1',
    nameAr: '', price: 55, salePrice: null, category: 'cpu', stock: 50,
    description: 'Lian Li RB650B PSU BLACK 80 PLUS Bronze Non-Modular PCIe 5.1',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/power-supply/RB650B/rb0022-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/power-supply/RB650B/rb0022-400x400.jpg']
  },
  {
    nameEn: 'Lian Li O11 Vision Compact Black ATX Mid Tower 3-Sided Tempered Glass',
    nameAr: '', price: 115, salePrice: null, category: 'cpu', stock: 50,
    description: 'Lian Li O11 Vision Compact Black ATX Mid Tower 3-Sided Tempered Glass',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/cases/O11VPX-BLACK/O11VP_X011-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/cases/O11VPX-BLACK/O11VP_X011-400x400.jpg']
  },

  // ── Systems / Laptop ───────────────────────────────────────────────────────
  {
    nameEn: 'HP OMEN 35L Gaming PC - Ryzen 7 8700F + RTX 5060 Ti 16GB',
    nameAr: '', price: 1169, salePrice: null, category: 'laptop', stock: 50,
    description: 'HP OMEN 35L Gaming PC - Ryzen 7 8700F + RTX 5060 Ti 16GB',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/desktop/BE8B1AA/1e790c51-890c-4133-9242-d059516764f7-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/desktop/BE8B1AA/1e790c51-890c-4133-9242-d059516764f7-400x400.jpg',
                'https://os-jo.com/image/cache/catalog/products/desktop/BC4K6AA/OMEN-16L-Gaming-Desktop-PC-left-view-400x400.jpg']
  },
  {
    nameEn: 'HP OMEN 16L Gaming PC - Core i5-14400F + RTX 5060 Ti 8GB',
    nameAr: '', price: 929, salePrice: null, category: 'laptop', stock: 50,
    description: 'HP OMEN 16L Gaming PC - Core i5-14400F + RTX 5060 Ti 8GB',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/desktop/BC4K6AA/OMEN-16L-Gaming-Desktop-PC-left-view-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/desktop/BC4K6AA/OMEN-16L-Gaming-Desktop-PC-left-view-400x400.jpg',
                'https://os-jo.com/image/cache/catalog/products/desktop/BE8B1AA/1e790c51-890c-4133-9242-d059516764f7-400x400.jpg']
  },
  {
    nameEn: 'AMD RYZEN 5 8500G + Integrated GPU + 16GB RAM - Custom Build',
    nameAr: '', price: 589, salePrice: 709, category: 'laptop', stock: 50,
    description: 'AMD RYZEN 5 8500G + Integrated GPU + 16GB RAM - Custom Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/1-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/1-400x400.jpg']
  },
  {
    nameEn: 'AMD RYZEN 7 8700G + Integrated GPU + 16GB RAM - Custom Build',
    nameAr: '', price: 669, salePrice: 719, category: 'laptop', stock: 50,
    description: 'AMD RYZEN 7 8700G + Integrated GPU + 16GB RAM - Custom Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/2-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2026/2-400x400.jpg']
  },
  {
    nameEn: 'Lenovo IdeaPad Slim 3 - Core i5-13420H + Intel UHD + 8GB DDR5 + 512GB SSD + 15.3" FHD+',
    nameAr: '', price: 419, salePrice: null, category: 'laptop', stock: 50,
    description: 'Lenovo IdeaPad Slim 3 - Core i5-13420H + Intel UHD + 8GB DDR5 + 512GB SSD + 15.3" FHD+',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/laptops/83K100VDIN/Screenshot-2025-07-20-113235-1200x1200-1200x630.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/laptops/83K100VDIN/Screenshot-2025-07-20-113235-1200x1200-1200x630.jpg']
  },
  {
    nameEn: 'Lenovo ThinkPad E16 Gen 3 - Ryzen 7 250 + Radeon 780M + 16GB DDR5 + 512GB SSD + 16" WUXGA',
    nameAr: '', price: 699, salePrice: null, category: 'laptop', stock: 50,
    description: 'Lenovo ThinkPad E16 Gen 3 - Ryzen 7 250 + Radeon 780M + 16GB DDR5 + 512GB SSD + 16" WUXGA',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/laptops/21ST000LEQ-/ThinkPad_E16_Gen_3_AMD_CT1_03-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/laptops/21ST000LEQ-/ThinkPad_E16_Gen_3_AMD_CT1_03-400x400.jpg']
  },

  // ── GPU ────────────────────────────────────────────────────────────────────
  {
    nameEn: 'ASUS Dual GeForce RTX 5060 Ti OC Edition 8GB GDDR7 - Graphics Card',
    nameAr: '', price: 419, salePrice: null, category: 'gpu', stock: 50,
    description: 'ASUS Dual GeForce RTX 5060 Ti OC Edition 8GB GDDR7 - Graphics Card',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/Graphics-cards/DUAL-RTX5060TI-O8G/DUAL-RTX5060TI-O8G-1200x630.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/Graphics-cards/DUAL-RTX5060TI-O8G/DUAL-RTX5060TI-O8G-1200x630.jpg']
  },

  // ── Cooling ────────────────────────────────────────────────────────────────
  {
    nameEn: 'Lian Li UNI Fan CL Wireless 120 Triple Pack - White',
    nameAr: '', price: 59, salePrice: null, category: 'cooling', stock: 50,
    description: 'Lian Li UNI Fan CL Wireless 120 Triple Pack - White',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3W.00/p_cl_0022-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3W.00/p_cl_0022-400x400.jpg',
                'https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3B.00/p_cl_0011-400x400.jpg']
  },
  {
    nameEn: 'Lian Li UNI Fan CL Wireless 120 Triple Pack - Black',
    nameAr: '', price: 59, salePrice: null, category: 'cooling', stock: 50,
    description: 'Lian Li UNI Fan CL Wireless 120 Triple Pack - Black',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3B.00/p_cl_0011-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3B.00/p_cl_0011-400x400.jpg']
  },
  {
    nameEn: 'LIAN LI 4 Slots Vertical GPU Kit (VG4v4) White',
    nameAr: '', price: 69, salePrice: null, category: 'cooling', stock: 50,
    description: 'LIAN LI 4 Slots Vertical GPU Kit (VG4v4) White',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/Accessories/Other-Accessories/VG4-5-V4W/r0022-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/Accessories/Other-Accessories/VG4-5-V4W/r0022-400x400.jpg',
                'https://os-jo.com/image/cache/catalog/products/Accessories/Other-Accessories/VG4v4/r001aa-400x400.jpg']
  },
  {
    nameEn: 'LIAN LI 4 Slots Vertical GPU Kit (VG4v4) Black',
    nameAr: '', price: 69, salePrice: null, category: 'cooling', stock: 50,
    description: 'LIAN LI 4 Slots Vertical GPU Kit (VG4v4) Black',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/Accessories/Other-Accessories/VG4v4/r001aa-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/Accessories/Other-Accessories/VG4v4/r001aa-400x400.jpg',
                'https://os-jo.com/image/cache/catalog/products/Accessories/Other-Accessories/VG4-5-V4W/r0022-400x400.jpg']
  },
  {
    nameEn: 'Lian Li Universal Screen 8.8 IPS LCD BLACK 1920x480',
    nameAr: '', price: 75, salePrice: null, category: 'cooling', stock: 50,
    description: 'Lian Li Universal Screen 8.8 IPS LCD BLACK 1920x480',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/Accessories/Other-Accessories/Lian-Li-Universal-Screen/8in_03-11-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/Accessories/Other-Accessories/Lian-Li-Universal-Screen/8in_03-11-400x400.jpg']
  },
  {
    nameEn: 'Lian Li UNI Fan CL Wireless 120 Triple Pack - White Reverse Blade',
    nameAr: '', price: 59, salePrice: null, category: 'cooling', stock: 50,
    description: 'Lian Li UNI Fan CL Wireless 120 Triple Pack - White Reverse Blade',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3W.00/p_cl_0022-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3W.00/p_cl_0022-400x400.jpg',
                'https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3B.00/p_cl_0011-400x400.jpg']
  },
  {
    nameEn: 'Lian Li UNI Fan CL Wireless 120 Triple Pack - Black Reverse Blade',
    nameAr: '', price: 59, salePrice: null, category: 'cooling', stock: 50,
    description: 'Lian Li UNI Fan CL Wireless 120 Triple Pack - Black Reverse Blade',
    imageUrl:  'https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3B.00/p_cl_0011-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/products/Accessories/CPU-COOLER/G99.12RCL1W3B.00/p_cl_0011-400x400.jpg']
  },

  // ── Wheel ──────────────────────────────────────────────────────────────────
  // Note: original HTML had base64-encoded images for this product.
  // Upload a real image via the dashboard after seeding.
  {
    nameEn: 'Logitech G29 Driving Force Racing Wheel + Pedals + Shifter - PS5/PS4/PS3/PC',
    nameAr: '', price: 199, salePrice: null, category: 'wheel', stock: 50,
    description: 'Logitech G29 Driving Force Racing Wheel + Pedals + Shifter - PS5/PS4/PS3/PC',
    imageUrl:  '',
    imageUrls: []
  },

  // ── Headset ────────────────────────────────────────────────────────────────
  // Note: original HTML had base64-encoded images for this product.
  // Upload a real image via the dashboard after seeding.
  {
    nameEn: 'HyperX Cloud II Gaming Headset - 7.1 Surround Sound + Noise Cancelling Mic - Red',
    nameAr: '', price: 79, salePrice: null, category: 'headset', stock: 50,
    description: 'HyperX Cloud II Gaming Headset - 7.1 Surround Sound + Noise Cancelling Mic - Red',
    imageUrl:  '',
    imageUrls: []
  },

  // ── Sale-only items (unique, not in primary arrays) ────────────────────────
  {
    nameEn: 'AMD Ryzen 5 7600 + RTX 5050 8GB + 16GB RAM - Custom Build',
    nameAr: '', price: 899, salePrice: 1079, category: 'gaming', stock: 50,
    description: 'AMD Ryzen 5 7600 + RTX 5050 8GB + 16GB RAM - Custom Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2025/20-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2025/20-400x400.jpg']
  },
  {
    nameEn: 'AMD Ryzen 7 7800X3D + RTX 5070 Ti 16GB + 32GB RAM - PC Build',
    nameAr: '', price: 2149, salePrice: 2249, category: 'gaming', stock: 50,
    description: 'AMD Ryzen 7 7800X3D + RTX 5070 Ti 16GB + 32GB RAM - PC Build',
    imageUrl:  'https://os-jo.com/image/cache/catalog/GAMING-PCS/2025/1-400x400.jpg',
    imageUrls: ['https://os-jo.com/image/cache/catalog/GAMING-PCS/2025/1-400x400.jpg']
  }
];

window.runSeed = async function () {
  if (!window.db) { console.error('Load firebase-config.js first'); return; }
  const seen = new Set();
  const unique = seedProducts.filter(p => {
    if (seen.has(p.nameEn)) return false;
    seen.add(p.nameEn);
    return true;
  });
  console.log('Seeding ' + unique.length + ' products...');
  for (const p of unique) {
    const ref = await db.collection('products').add({ ...p, createdAt: new Date() });
    console.log('✓ ' + p.nameEn + ' — ' + ref.id);
  }
  console.log('✓ Seed complete! Refresh the store page.');
};
