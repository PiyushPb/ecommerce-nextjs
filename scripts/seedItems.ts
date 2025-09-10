import "dotenv/config";

import dbConnect from "@/lib/dbConnect";
import Item from "@/models/Item";

async function seedItems() {
  await dbConnect();

  const items = [
    {
      title: "Classic White T-Shirt",
      description: "Comfortable cotton t-shirt, perfect for everyday wear.",
      category: "T-shirt",
      images: {
        thumbnail: "https://picsum.photos/seed/tshirt1/300/300",
        gallery: [
          "https://picsum.photos/seed/tshirt1/400/400",
          "https://picsum.photos/seed/tshirt2/400/400",
          "https://picsum.photos/seed/tshirt3/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 499,
      quantity: 50,
    },
    {
      title: "Denim Blue Jeans",
      description: "Slim fit denim jeans with stretch fabric.",
      category: "Jeans",
      images: {
        thumbnail: "https://picsum.photos/seed/jeans1/300/300",
        gallery: [
          "https://picsum.photos/seed/jeans1/400/400",
          "https://picsum.photos/seed/jeans2/400/400",
          "https://picsum.photos/seed/jeans3/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 1499,
      quantity: 30,
    },
    {
      title: "Leather Jacket",
      description: "Premium black leather jacket for a stylish look.",
      category: "Jackets",
      images: {
        thumbnail: "https://picsum.photos/seed/jacket1/300/300",
        gallery: [
          "https://picsum.photos/seed/jacket1/400/400",
          "https://picsum.photos/seed/jacket2/400/400",
          "https://picsum.photos/seed/jacket3/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 3999,
      quantity: 15,
    },
    {
      title: "Black Hoodie",
      description: "Warm fleece hoodie for casual wear.",
      category: "Hoodies",
      images: {
        thumbnail: "https://picsum.photos/seed/hoodie1/300/300",
        gallery: [
          "https://picsum.photos/seed/hoodie1/400/400",
          "https://picsum.photos/seed/hoodie2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 1099,
      quantity: 40,
    },
    {
      title: "Cotton Kurta",
      description: "Traditional Indian kurta made from soft cotton fabric.",
      category: "Kurta",
      images: {
        thumbnail: "https://picsum.photos/seed/kurta1/300/300",
        gallery: [
          "https://picsum.photos/seed/kurta1/400/400",
          "https://picsum.photos/seed/kurta2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 799,
      quantity: 25,
    },
    {
      title: "Checked Shirt",
      description: "Stylish checked shirt for casual outings.",
      category: "Shirts",
      images: {
        thumbnail: "https://picsum.photos/seed/shirt1/300/300",
        gallery: [
          "https://picsum.photos/seed/shirt1/400/400",
          "https://picsum.photos/seed/shirt2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 999,
      quantity: 35,
    },
    {
      title: "Track Pants",
      description: "Comfortable and breathable track pants for workouts.",
      category: "Bottomwear",
      images: {
        thumbnail: "https://picsum.photos/seed/track1/300/300",
        gallery: [
          "https://picsum.photos/seed/track1/400/400",
          "https://picsum.photos/seed/track2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 899,
      quantity: 20,
    },
    {
      title: "Formal Blazer",
      description: "Perfect for office and formal occasions.",
      category: "Blazers",
      images: {
        thumbnail: "https://picsum.photos/seed/blazer1/300/300",
        gallery: [
          "https://picsum.photos/seed/blazer1/400/400",
          "https://picsum.photos/seed/blazer2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 2499,
      quantity: 10,
    },
    {
      title: "Polo T-Shirt",
      description: "Collared t-shirt with a sporty look.",
      category: "T-shirt",
      images: {
        thumbnail: "https://picsum.photos/seed/polo1/300/300",
        gallery: [
          "https://picsum.photos/seed/polo1/400/400",
          "https://picsum.photos/seed/polo2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 649,
      quantity: 45,
    },
    {
      title: "Sleeveless Jacket",
      description: "Lightweight sleeveless puffer jacket.",
      category: "Jackets",
      images: {
        thumbnail: "https://picsum.photos/seed/jacket4/300/300",
        gallery: [
          "https://picsum.photos/seed/jacket4/400/400",
          "https://picsum.photos/seed/jacket5/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 1999,
      quantity: 18,
    },
    {
      title: "Chinos",
      description: "Slim-fit chinos for office or casual wear.",
      category: "Bottomwear",
      images: {
        thumbnail: "https://picsum.photos/seed/chino1/300/300",
        gallery: [
          "https://picsum.photos/seed/chino1/400/400",
          "https://picsum.photos/seed/chino2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 1299,
      quantity: 22,
    },
    {
      title: "Sweatshirt",
      description: "Soft, cozy sweatshirt with printed design.",
      category: "Hoodies",
      images: {
        thumbnail: "https://picsum.photos/seed/sweatshirt1/300/300",
        gallery: [
          "https://picsum.photos/seed/sweatshirt1/400/400",
          "https://picsum.photos/seed/sweatshirt2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 899,
      quantity: 28,
    },
    {
      title: "Ethnic Nehru Jacket",
      description: "Traditional Nehru jacket for festive occasions.",
      category: "Ethnic",
      images: {
        thumbnail: "https://picsum.photos/seed/nehru1/300/300",
        gallery: [
          "https://picsum.photos/seed/nehru1/400/400",
          "https://picsum.photos/seed/nehru2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 1799,
      quantity: 12,
    },
    {
      title: "Casual Shorts",
      description: "Breathable cotton shorts for summer.",
      category: "Bottomwear",
      images: {
        thumbnail: "https://picsum.photos/seed/shorts1/300/300",
        gallery: [
          "https://picsum.photos/seed/shorts1/400/400",
          "https://picsum.photos/seed/shorts2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 599,
      quantity: 30,
    },
    {
      title: "Printed T-Shirt",
      description: "Trendy graphic t-shirt for casual wear.",
      category: "T-shirt",
      images: {
        thumbnail: "https://picsum.photos/seed/printtee1/300/300",
        gallery: [
          "https://picsum.photos/seed/printtee1/400/400",
          "https://picsum.photos/seed/printtee2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 549,
      quantity: 50,
    },
    {
      title: "Woolen Pullover",
      description: "Keep warm with this soft woolen pullover.",
      category: "Winterwear",
      images: {
        thumbnail: "https://picsum.photos/seed/pullover1/300/300",
        gallery: [
          "https://picsum.photos/seed/pullover1/400/400",
          "https://picsum.photos/seed/pullover2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 1299,
      quantity: 14,
    },
    {
      title: "Linen Shirt",
      description: "Light and breathable linen shirt.",
      category: "Shirts",
      images: {
        thumbnail: "https://picsum.photos/seed/linenshirt1/300/300",
        gallery: [
          "https://picsum.photos/seed/linenshirt1/400/400",
          "https://picsum.photos/seed/linenshirt2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 1399,
      quantity: 26,
    },
    {
      title: "Bomber Jacket",
      description: "Trendy bomber jacket for winter.",
      category: "Jackets",
      images: {
        thumbnail: "https://picsum.photos/seed/bomber1/300/300",
        gallery: [
          "https://picsum.photos/seed/bomber1/400/400",
          "https://picsum.photos/seed/bomber2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 2899,
      quantity: 17,
    },
    {
      title: "Graphic Hoodie",
      description: "Printed hoodie with adjustable hood.",
      category: "Hoodies",
      images: {
        thumbnail: "https://picsum.photos/seed/graphichoodie1/300/300",
        gallery: [
          "https://picsum.photos/seed/graphichoodie1/400/400",
          "https://picsum.photos/seed/graphichoodie2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 1199,
      quantity: 30,
    },
    {
      title: "Joggers",
      description: "Comfortable joggers for daily workouts or casual wear.",
      category: "Bottomwear",
      images: {
        thumbnail: "https://picsum.photos/seed/joggers1/300/300",
        gallery: [
          "https://picsum.photos/seed/joggers1/400/400",
          "https://picsum.photos/seed/joggers2/400/400",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 999,
      quantity: 35,
    },
  ];

  await Item.deleteMany();
  await Item.insertMany(items);

  console.log("✅ 20 dummy items seeded successfully");
  process.exit(0);
}

seedItems().catch((err) => {
  console.error("❌ Error seeding items:", err);
  process.exit(1);
});
