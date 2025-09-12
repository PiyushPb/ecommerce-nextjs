import "dotenv/config";

import dbConnect from "@/lib/dbConnect";
import Item from "@/models/Item";

async function seedItems() {
  await dbConnect();

  const items = [
    {
      title: "Classic Red T-Shirt",
      description: "Comfortable cotton t-shirt, perfect for everyday wear.",
      category: "T-shirt",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/young-boy-with-curly-hairs-makes-thumb-up-sign_114579-17329.jpg?",
        gallery: [
          "https://img.freepik.com/free-photo/young-boy-with-curly-hairs-makes-thumb-up-sign_114579-17329.jpg?",
          "https://img.freepik.com/free-photo/young-boy-with-curly-hairs-makes-agressive-face_114579-17375.jpg",
          "https://img.freepik.com/free-photo/young-boy-with-curly-hairs-casting_114579-17327.jpg",
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
        thumbnail:
          "https://img.freepik.com/free-photo/full-shot-smiley-woman-posing-outdoors_23-2150361019.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/full-shot-smiley-woman-posing-outdoors_23-2150361019.jpg",
          "https://img.freepik.com/free-photo/full-shot-smiley-woman-posing-outdoors_23-2150360988.jpg",
          "https://img.freepik.com/free-photo/beautiful-woman-jeans_171337-11956.jpg",
        ],
      },
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      price: 1499,
      quantity: 30,
    },
    {
      title: "Leather Jacket",
      description: "Premium black leather jacket for a stylish look.",
      category: "Jackets",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/annoyed-attractive-male-gestures-with-irritation-keeping-palms-opened-dressed-black-leather-jacket-jeans-frowns-face-bacause-miscommunication-negative-human-emotions-reaction_176420-13379.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/annoyed-attractive-male-gestures-with-irritation-keeping-palms-opened-dressed-black-leather-jacket-jeans-frowns-face-bacause-miscommunication-negative-human-emotions-reaction_176420-13379.jpg",
          "https://img.freepik.com/free-photo/suspicious-pensive-young-caucasian-male-black-leather-jacket-touching-face-while-thinking-something-trying-come-up-with-solution-having-perplexed-puzzled-expression-face-expression_176420-13388.jpg",
          "https://img.freepik.com/free-photo/handsome-positive-man-black-leather-jacket-with-faint-smile-listens-music-earphones-young-caucasian-male-enjoys-pleasant-melodies-wearing-white-earphones-looking-with-blue-eyes_176420-13385.jpg",
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
        thumbnail:
          "https://img.freepik.com/free-photo/medium-shot-woman-wearing-hoodie_23-2149359805.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/young-lady-oversized-hoodie-pants-pointing-aside-while-shouting-something-with-hand-looking-puzzled-front-view_176474-58490.jpg",
          "https://img.freepik.com/free-photo/medium-shot-woman-wearing-hoodie_23-2149359805.jpg",
          "https://img.freepik.com/free-photo/young-lady-showing-victory-sign-oversized-hoodie-pants-looking-confident-front-view_176474-58566.jpg?t=st=1757681422~exp=1757685022~hmac=094909c62c3c235a87700bcc96ec37b893b54302d35c6098730d3130bc333918&w=740",
        ],
      },
      sizes: ["S", "M", "L", "XL", "XXXL"],
      price: 1099,
      quantity: 40,
    },
    {
      title: "Cotton Kurta",
      description: "Traditional Indian kurta made from soft cotton fabric.",
      category: "Kurta",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/young-attractive-indian-woman-traditional-dress-woman-dancing-against-white-background_1157-48160.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/young-attractive-indian-woman-traditional-dress-woman-dancing-against-white-background_1157-48160.jpg",
          "https://img.freepik.com/free-photo/young-attractive-indian-woman-traditional-dress-woman-dancing-against-white-background_1157-48168.jpg",
          "https://img.freepik.com/free-photo/young-attractive-indian-woman-traditional-dress-woman-dancing-against-white-background_1157-48166.jpg",
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
        thumbnail:
          "https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14983.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14983.jpg",
          "https://img.freepik.com/free-photo/cheerful-man-wearing-sunglasses_171337-14987.jpg",
          "https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14983.jpg",
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
        thumbnail:
          "https://img.freepik.com/free-photo/stock-photo-charming-young-girl-olive-hoodie-joggers-sitting-bench-with-cup-coffee-street_132075-9197.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/stock-photo-charming-young-girl-olive-hoodie-joggers-sitting-bench-with-cup-coffee-street_132075-9197.jpg",
          "https://img.freepik.com/free-photo/full-length-photo-stylish-woman-trendy-sportswear-posing-street-with-building-background-female-fashion-city-lifestyle_132075-9171.jpg",
        ],
      },
      sizes: ["S", "M", "L", "XL", "XXL"],
      price: 899,
      quantity: 20,
    },
    {
      title: "Formal Blazer",
      description: "Perfect for office and formal occasions.",
      category: "Blazers",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/portrait-confident-handsome-man_171337-16753.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/portrait-confident-handsome-man_171337-16753.jpg",
          "https://img.freepik.com/free-photo/portrait-serious-successful-man-dressed-jacket_171337-16756.jpg",
        ],
      },
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      price: 2499,
      quantity: 10,
    },
    {
      title: "Polo T-Shirt",
      description: "Collared t-shirt with a sporty look.",
      category: "T-shirt",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/young-confused-man-black-shirt-with-optical-glasses-looks-side-isolated-pink-wall_141793-35279.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/young-pleased-man-black-shirt-with-optical-glasses-holds-coffee-takeaway-cup-puts-hand-waist-isolated-pink-wall_141793-35407.jpg0",
          "https://img.freepik.com/free-photo/young-pleased-man-black-shirt-with-optical-glasses-pretends-hold-something-hand-puts-hand-waist-isolated-pink-wall_141793-35414.jpg",
        ],
      },
      sizes: ["S", "M", "L", "XL", "XXXL"],
      price: 649,
      quantity: 45,
    },
    {
      title: "Sleeveless Jacket",
      description: "Lightweight sleeveless puffer jacket.",
      category: "Jackets",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102156.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102021.jpg",
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102018.jpg",
        ],
      },
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      price: 1999,
      quantity: 18,
    },
    {
      title: "Chinos",
      description: "Slim-fit chinos for office or casual wear.",
      category: "Bottomwear",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102156.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102021.jpg",
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102018.jpg",
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
        thumbnail:
          "https://img.freepik.com/free-photo/concentrated-young-man-sitting-isolated-grey_171337-10555.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/handsome-young-man-sitting-isolated-grey_171337-10550.jpg",
        ],
      },
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      price: 899,
      quantity: 28,
    },
    {
      title: "Ethnic Nehru Jacket",
      description: "Traditional Nehru jacket for festive occasions.",
      category: "Ethnic",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/close-up-hands-holding-embroidered-shirt_23-2149318814.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/medium-shot-people-wearing-ukranian-shirts_23-2149318758.jpg",
          "https://img.freepik.com/free-photo/medium-shot-smiley-man-wearing-ukranian-shirt_23-2149318757.jpg",
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
        thumbnail:
          "https://img.freepik.com/free-photo/yellow-background-woman-with-headphones_23-2148286119.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/yellow-background-woman-with-headphones_23-2148286119.jpg",
          "https://img.freepik.com/free-photo/woman-with-short-pants-looking-away_23-2148286154.jpg",
          "https://img.freepik.com/free-photo/woman-with-floral-shirt-sitting-stairs-looking-camera_23-2148286123.jpg",
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
        thumbnail:
          "https://img.freepik.com/free-photo/portrait-young-latin-man-wearing-summer-clothes-listening-music-with-earphones-against-yellow_58466-11451.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/portrait-young-latin-man-wearing-summer-clothes-listening-music-with-earphones-against-yellow_58466-11451.jpg",
          "https://img.freepik.com/free-photo/portrait-young-latin-man-wearing-summer-clothes-listening-music-with-earphones-against-yellow_58466-11451.jpg",
        ],
      },
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      price: 549,
      quantity: 50,
    },
    {
      title: "Woolen Pullover",
      description: "Keep warm with this soft woolen pullover.",
      category: "Winterwear",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/i-bought-it-sale-emotive-carefree-woman-stylish-outfit-looking-happy-pleased-while-posing-smiling-stretching-sweater-standing-i-received-good-feedback_176420-13752.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg",
          "https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg",
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
        thumbnail:
          "https://img.freepik.com/free-photo/portrait-handsome-bearded-man-outside_23-2150266914.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/portrait-handsome-bearded-man-outside_23-2150266914.jpg",
          "https://img.freepik.com/free-photo/portrait-brothers-outdoors-haircut-session_23-2150266908.jpg",
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
        thumbnail:
          "https://img.freepik.com/free-photo/photo-woman-looking-away-black-leather-jacket-cap_114579-59398.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102021.jpg",
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102018.jpg",
        ],
      },
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      price: 2899,
      quantity: 17,
    },
    {
      title: "Graphic Hoodie",
      description: "Printed hoodie with adjustable hood.",
      category: "Hoodies",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/young-girl-sport-outfits-having-fun_114579-17727.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/young-girl-sport-outfits-castings-looks-fun_114579-17720.jpg",
        ],
      },
      sizes: ["M", "L", "XL"],
      price: 1199,
      quantity: 30,
    },

    {
      title: "Bomber Jacket T-Shirt",
      description: "Trendy bomber jacket for winter.",
      category: "T-shirt",
      images: {
        thumbnail:
          "https://img.freepik.com/free-photo/photo-woman-looking-away-black-leather-jacket-cap_114579-59398.jpg",
        gallery: [
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102021.jpg",
          "https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-102018.jpg",
        ],
      },
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      price: 2899,
      quantity: 17,
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
