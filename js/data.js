// Data for Pharmacy Products (Total 30 Items)
export const products = [
  // --- 1. Medicines (8 Items) ---
  {
    id: 1,
    name: "Panadol Advance 500mg",
    category: "medicines",
    price: 35.0,
    discount: 0,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500",
    description: "Effective pain relief and fever reducer.",
  },
  {
    id: 2,
    name: "Augmentin 1g Tablets",
    category: "medicines",
    price: 90.0,
    discount: 10,
    image: "/images/prod-1.jpeg",
    description: "Broad-spectrum antibiotic for infections.",
  },
  {
    id: 3,
    name: "Zyrtec Allergy Relief",
    category: "medicines",
    price: 45.0,
    discount: 5,
    image: "/images/prod-2.jpeg",
    description: "Relief from seasonal allergies and hay fever.",
  },
  {
    id: 4,
    name: "Antinal 200mg",
    category: "medicines",
    price: 21.0,
    discount: 0,
    image: "/images/prod-3.jpeg",
    description: "Intestinal antiseptic for diarrhea treatment.",
  },
  {
    id: 5,
    name: "Catafast 50mg Sachet",
    category: "medicines",
    price: 65.0,
    discount: 0,
    image: "/images/prod-1.jpeg",
    description: "Fast-acting analgesic and anti-inflammatory.",
  },
  {
    id: 6,
    name: "Strepsils Honey & Lemon",
    category: "medicines",
    price: 120.0,
    discount: 15,
    image: "/images/prod-2.jpeg",
    description: "Soothes sore throat and kills bacteria.",
  },
  {
    id: 7,
    name: "Brufen 400mg",
    category: "medicines",
    price: 31.0,
    discount: 0,
    image: "/images/prod-5.jpeg",
    description: "Standard relief for pain and inflammation.",
  },
  {
    id: 8,
    name: "Gaviscon Liquid 200ml",
    category: "medicines",
    price: 145.0,
    discount: 10,
    image: "/images/prod-4.jpeg",
    description: "Fast relief from heartburn and indigestion.",
  },

  // --- 2. Medical Devices (8 Items) ---
  {
    id: 9,
    name: "Omron M3 Comfort",
    category: "devices",
    price: 2450.0,
    discount: 12,
    image: "/images/prod-4.jpeg",
    description: "Automatic Blood Pressure Monitor.",
  },
  {
    id: 10,
    name: "Accu-Chek Guide Me",
    category: "devices",
    price: 1100.0,
    discount: 0,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=500",
    description: "Accurate blood glucose monitoring.",
  },
  {
    id: 11,
    name: "Beurer FT 90 Thermometer",
    category: "devices",
    price: 1250.0,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1609725236589-d987ffc8133a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhlcm1vbWV0ZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Non-contact infrared thermometer.",
  },
  {
    id: 12,
    name: "Finger Pulse Oximeter",
    category: "devices",
    price: 350.0,
    discount: 20,
    image:
      "https://plus.unsplash.com/premium_photo-1678459866711-f0acca9a7e61?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3hpbWV0ZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Measures oxygen saturation and pulse rate.",
  },
  {
    id: 13,
    name: "Nebulizer CompMist",
    category: "devices",
    price: 850.0,
    discount: 5,
    image:
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljYWwlMjBkZXZpY2V8ZW58MHx8MHx8fDA%3D",
    description: "Efficient respiratory therapy device.",
  },
  {
    id: 14,
    name: "Digital Body Scale",
    category: "devices",
    price: 400.0,
    discount: 0,
    image:
      "https://images.unsplash.com/photo-1764314282846-3ada59e16cfe?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlaWdodCUyMHNjYWxlc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Precise weight measurement scale.",
  },
  {
    id: 15,
    name: "Electric Heating Pad",
    category: "devices",
    price: 550.0,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500",
    description: "Relieves muscle pain with soothing heat.",
  },
  {
    id: 16,
    name: "Steam Inhaler",
    category: "devices",
    price: 280.0,
    discount: 0,
    image:
      "https://plus.unsplash.com/premium_photo-1679511007600-bb745b470f81?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbCUyMGRldmljZXN8ZW58MHx8MHx8fDA%3D",
    description: "Helps clear congestion and sinus relief.",
  },

  // --- 3. Baby Care (7 Items) ---
  {
    id: 17,
    name: "Pampers Premium Size 4",
    category: "baby care",
    price: 450.0,
    discount: 15,
    image: "/images/prod-1.jpeg",
    description: "Best skin protection for babies.",
  },
  {
    id: 18,
    name: "Johnson's Baby Shampoo",
    category: "baby care",
    price: 85.0,
    discount: 0,
    image:
      "https://russkaya-apteka.com/wp-content/uploads/2021/06/dzhonsons-shampun-100-ml_resize_29.jpg",
    description: "Gentle No More Tears formula.",
  },
  {
    id: 19,
    name: "Avent Baby Bottle 260ml",
    category: "baby care",
    price: 320.0,
    discount: 20,
    image: "/images/prod-2.jpeg",
    description: "Natural nipple for easy latch on.",
  },
  {
    id: 20,
    name: "Bepanthen Ointment 30g",
    category: "baby care",
    price: 110.0,
    discount: 0,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=500",
    description: "Treats and prevents diaper rash.",
  },
  {
    id: 21,
    name: "Cerelac Wheat & Milk",
    category: "baby care",
    price: 65.0,
    discount: 5,
    image:
      "https://russkaya-apteka.com/wp-content/uploads/2023/12/nestle-cerelac-apple-125-ml--768x768.jpg",
    description: "Nutritious cereal for infants 6+ months.",
  },
  {
    id: 22,
    name: "Sudocrem 125g",
    category: "baby care",
    price: 210.0,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500",
    description: "Protective cream for delicate skin.",
  },
  {
    id: 23,
    name: "Baby Wipes 72pcs",
    category: "baby care",
    price: 45.0,
    discount: 0,
    image:
      "https://m.media-amazon.com/images/I/61pDOBKskVL._AC_UF894,1000_QL80_.jpg",
    description: "Fragrance-free sensitive wipes.",
  },

  // --- 4. Personal Care & Vitamins (7 Items) ---
  {
    id: 24,
    name: "La Roche Effaclar Duo",
    category: "personal care",
    price: 650.0,
    discount: 5,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=500",
    description: "Corrective moisturizing acne treatment.",
  },
  {
    id: 25,
    name: "Vitamin C 1000mg",
    category: "personal care",
    price: 120.0,
    discount: 0,
    image:
      "https://www.oaklifevitamins.com/cdn/shop/files/CALGOVITVIT-C_1200x1200.jpg?v=1684760696",
    description: "Immune system support.",
  },
  {
    id: 26,
    name: "CeraVe Moisturizer",
    category: "personal care",
    price: 480.0,
    discount: 8,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500",
    description: "Daily cream for dry to very dry skin.",
  },
  {
    id: 27,
    name: "Centrum Lutein 30 Tabs",
    category: "personal care",
    price: 350.0,
    discount: 0,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500",
    description: "Complete multivitamin for adults.",
  },
  {
    id: 28,
    name: "Bioderma Sensibio H2O",
    category: "personal care",
    price: 390.0,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500",
    description: "Micellar water for sensitive skin.",
  },
  {
    id: 29,
    name: "Sensodyne Multi Care",
    category: "personal care",
    price: 75.0,
    discount: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK7_NZSQnhKX-8aw-3iAlt9dmSff0xffUmw&s",
    description: "Sensitivity relief and cavity protection.",
  },
  {
    id: 30,
    name: "Vichy Mineral 89",
    category: "personal care",
    price: 720.0,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=500",
    description: "Hyaluronic acid booster for skin.",
  },
];
