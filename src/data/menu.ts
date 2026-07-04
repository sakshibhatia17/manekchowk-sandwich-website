import dishPaneer from "@/assets/dish-paneer.jpg";
import dishMexican from "@/assets/dish-mexican.jpg";
import dishVadapav from "@/assets/dish-vadapav.jpg";
import dishCoffee from "@/assets/dish-coffee.jpg";
import dishFries from "@/assets/dish-fries.jpg";
import dishPizza from "@/assets/dish-pizza.jpg";
import dishBurger from "@/assets/dish-burger.jpg";
import heroSandwich from "@/assets/hero-sandwich.jpg";

export type Dish = {
  id: string;
  name: string;
  category: string;
  desc: string;
  price: number;
  rating: number;
  cal: number;
  veg: boolean;
  popular?: boolean;
  image: string;
};

export const CATEGORIES = [
  "Sandwich (Plain)",
  "Ice-Cream Sandwich",
  "Special Sandwich",
  "Manekchowk Sp. Sandwich",
  "Toasted & Grill Sandwich",
  "Pizza",
  "Jumbo Grill Sandwich",
  "Slices",
  "Fries",
  "Puff",
  "Maskabun",
  "Bhel",
  "Maggi",
  "Open Toast",
  "Burger",
  "Milk Shake",
  "Sweet Corn",
  "Hot Variety",
  "Shake & Thick Shake",
  "Choco Chocolate",
  "Bhaji Pav",
  "Pulav",
  "Dosa",
  "Fancy Dosa",
] as const;

export const DISHES: Dish[] = [
  // Sandwich (Plain)
  { id: "veg-sand", name: "Vegetable Sandwich", category: "Sandwich (Plain)", desc: "Fresh vegetable sandwich", price: 50, rating: 4.5, cal: 250, veg: true, image: heroSandwich },
  { id: "aloo-mutter", name: "Aloo Mutter Sandwich", category: "Sandwich (Plain)", desc: "Potato and peas sandwich", price: 50, rating: 4.6, cal: 280, veg: true, image: dishVadapav },
  { id: "jam-plain", name: "Jam Plain Sandwich", category: "Sandwich (Plain)", desc: "Sweet jam sandwich", price: 50, rating: 4.5, cal: 200, veg: true, image: dishCoffee },
  { id: "bread-butter", name: "Bread Butter Sandwich", category: "Sandwich (Plain)", desc: "Classic bread and Amul butter", price: 60, rating: 4.7, cal: 220, veg: true, image: dishPaneer },
  { id: "cheese-sand", name: "Cheese Sandwich", category: "Sandwich (Plain)", desc: "Loaded with Amul cheese", price: 100, rating: 4.8, cal: 350, veg: true, popular: true, image: heroSandwich },
  { id: "veg-cheese-sand", name: "Vegetable Cheese Sandwich", category: "Sandwich (Plain)", desc: "Veggies and cheese combined", price: 110, rating: 4.9, cal: 380, veg: true, popular: true, image: heroSandwich },
  
  // Special Sandwich
  { id: "pine-cheese", name: "Pineapple Cheese Sandwich", category: "Special Sandwich", desc: "Sweet pineapple and cheese", price: 170, rating: 4.8, cal: 400, veg: true, image: dishFries },
  { id: "choc-cheese", name: "Chocolate Cheese Sandwich", category: "Special Sandwich", desc: "Chocolate and melted cheese", price: 170, rating: 4.9, cal: 450, veg: true, popular: true, image: dishCoffee },
  { id: "3in1-mix", name: "3 in 1 Mix Sandwich", category: "Special Sandwich", desc: "Triple layered mix sandwich", price: 190, rating: 4.9, cal: 500, veg: true, image: dishBurger },

  // Manekchowk Sp. Sandwich
  { id: "ghughra-cheese", name: "Ghughra Cheese Sandwich", category: "Manekchowk Sp. Sandwich", desc: "Our famous ghughra style sandwich", price: 160, rating: 4.9, cal: 480, veg: true, popular: true, image: heroSandwich },
  { id: "jain-ghughra", name: "Jain Ghughra Cheese Sandwich", category: "Manekchowk Sp. Sandwich", desc: "No onion no garlic ghughra sandwich", price: 160, rating: 4.8, cal: 470, veg: true, image: heroSandwich },
  { id: "garlic-ghughra", name: "Garlic Ghughra Cheese Sandwich", category: "Manekchowk Sp. Sandwich", desc: "Spicy garlic flavored ghughra sandwich", price: 170, rating: 4.9, cal: 490, veg: true, image: heroSandwich },

  // Toasted & Grill Sandwich
  { id: "cheese-garlic-grill", name: "Cheese Garlic Grill", category: "Toasted & Grill Sandwich", desc: "Garlic and cheese grilled to perfection", price: 180, rating: 4.8, cal: 420, veg: true, popular: true, image: dishMexican },
  { id: "veg-grill", name: "Vegetable Grill", category: "Toasted & Grill Sandwich", desc: "Grilled veggie sandwich", price: 130, rating: 4.7, cal: 350, veg: true, image: dishVadapav },
  { id: "cheese-grill", name: "Cheese Grill", category: "Toasted & Grill Sandwich", desc: "Loaded cheese grill", price: 180, rating: 4.9, cal: 450, veg: true, popular: true, image: heroSandwich },
  
  // Jumbo Grill Sandwich
  { id: "ctc-cheese", name: "C.T.C. Cheese Sandwich", category: "Jumbo Grill Sandwich", desc: "Jumbo CTC cheese sandwich", price: 180, rating: 4.8, cal: 550, veg: true, image: dishFries },
  { id: "mexican-club", name: "Mexican Club Sandwich", category: "Jumbo Grill Sandwich", desc: "Jumbo mexican flavor", price: 180, rating: 4.9, cal: 580, veg: true, popular: true, image: dishMexican },
  { id: "tandoori-paneer", name: "Tandoori Panner Sandwich", category: "Jumbo Grill Sandwich", desc: "Tandoori spiced paneer", price: 190, rating: 4.9, cal: 600, veg: true, popular: true, image: dishPaneer },

  // Pizza
  { id: "margherita", name: "Margherita Cheese Pizza", category: "Pizza", desc: "Classic cheese pizza", price: 140, rating: 4.7, cal: 500, veg: true, image: dishPizza },
  { id: "italian-double", name: "Italian Double Cheese Pizza", category: "Pizza", desc: "Double cheese italian style", price: 170, rating: 4.8, cal: 650, veg: true, popular: true, image: dishPizza },
  { id: "cheese-corn-pizza", name: "Cheese Corn Pizza", category: "Pizza", desc: "Sweet corn and cheese", price: 160, rating: 4.7, cal: 580, veg: true, image: dishPizza },

  // Slices & Puff & Fries
  { id: "cheese-slice", name: "Cheese Slice", category: "Slices", desc: "Premium cheese slice", price: 50, rating: 4.6, cal: 150, veg: true, image: dishBurger },
  { id: "cheese-fries", name: "Cheese French Fries", category: "Fries", desc: "Fries loaded with cheese", price: 90, rating: 4.8, cal: 450, veg: true, popular: true, image: dishFries },
  { id: "veg-puff", name: "Veg. Puff", category: "Puff", desc: "Crispy veg puff", price: 60, rating: 4.5, cal: 300, veg: true, image: dishVadapav },

  // Maskabun & Bhel & Maggi
  { id: "butter-maskabun", name: "Butter Maskabun", category: "Maskabun", desc: "Classic maskabun with Amul butter", price: 40, rating: 4.8, cal: 280, veg: true, popular: true, image: dishBurger },
  { id: "cheese-bhel", name: "Cheese Bhel", category: "Bhel", desc: "Street style bhel with cheese", price: 90, rating: 4.7, cal: 350, veg: true, image: dishMexican },
  { id: "cheese-maggi", name: "Cheese Maggi", category: "Maggi", desc: "Everyone's favorite cheese maggi", price: 100, rating: 4.8, cal: 400, veg: true, popular: true, image: dishFries },

  // Shake & Thick Shake
  { id: "cold-coffee", name: "Sp. Cold Coffee", category: "Shake & Thick Shake", desc: "Special cold coffee thick shake", price: 80, rating: 4.9, cal: 350, veg: true, popular: true, image: dishCoffee },
  { id: "oreo-shake", name: "Oreo Coffee", category: "Shake & Thick Shake", desc: "Oreo blended coffee", price: 190, rating: 4.8, cal: 450, veg: true, image: dishCoffee },

  // Bhaji Pav
  { id: "bhaji-pav", name: "Bhaji Pav", category: "Bhaji Pav", desc: "Classic bhaji pav in butter", price: 150, rating: 4.9, cal: 550, veg: true, popular: true, image: dishVadapav },
  { id: "sp-bhaji", name: "Sp. Manekchowk Bhaji Pav", category: "Bhaji Pav", desc: "Our signature special bhaji pav", price: 200, rating: 4.9, cal: 650, veg: true, popular: true, image: dishBurger },

  // Pulav
  { id: "reg-pulav", name: "Regular Pulav", category: "Pulav", desc: "Street style tawa pulav", price: 150, rating: 4.7, cal: 450, veg: true, image: dishPizza },
  { id: "cheese-pulav", name: "Cheese Pulav", category: "Pulav", desc: "Pulav loaded with cheese", price: 200, rating: 4.8, cal: 550, veg: true, image: dishPizza },

  // Dosa & Fancy Dosa
  { id: "mysore-dosa", name: "Mysore Masala Dosa", category: "Dosa", desc: "Spicy mysore masala dosa", price: 160, rating: 4.8, cal: 450, veg: true, image: dishPaneer },
  { id: "jini-dosa", name: "Jini Dosa", category: "Fancy Dosa", desc: "Famous jini fusion dosa", price: 240, rating: 4.9, cal: 600, veg: true, popular: true, image: dishMexican },
  { id: "gotala-dosa", name: "Sp. Gotala Dosa", category: "Fancy Dosa", desc: "Special gotala dosa", price: 280, rating: 4.9, cal: 700, veg: true, popular: true, image: dishPaneer }
];

export const BRANCHES = [
  { name: "KK Nagar Road", area: "Ghatlodia", hours: "10 AM – 12 AM", phone: "+91 83207 88313" },
  { name: "Zydus Thaltej", area: "Thaltej", hours: "10 AM – 12 AM", phone: "+91 83207 88313" },
  { name: "Ghatlodia", area: "Ghatlodia", hours: "10 AM – 12 AM", phone: "+91 83207 88313" },
  { name: "Anand Nagar Road", area: "Satellite", hours: "10 AM – 12 AM", phone: "+91 83207 88313" },
  { name: "Vandematram", area: "Gota", hours: "10 AM – 12 AM", phone: "+91 83207 88313" },
  { name: "Gota", area: "Gota", hours: "10 AM – 12 AM", phone: "+91 83207 88313" },
  { name: "Science City", area: "Science City", hours: "10 AM – 12 AM", phone: "+91 83207 88313" },
  { name: "New CG Road", area: "Chandkheda", hours: "10 AM – 12 AM", phone: "+91 83207 88313" },
];

export const TESTIMONIALS = [
  {
    name: "Rhea Shah",
    role: "Local Foodie",
    text: "The cheese grill is unreal. Feels like a Bombay street cafe with the polish of a high-end deli.",
    rating: 5,
  },
  {
    name: "Aarav Mehta",
    role: "Regular Customer",
    text: "I've tried every branch. Mexican Club never misses. Service is genuinely fast and the taste is perfectly authentic.",
    rating: 5,
  },
  {
    name: "Kavya Patel",
    role: "University Student",
    text: "My comfort meal after every exam. The chocolate cheese sandwich is dangerously good.",
    rating: 5,
  },
  {
    name: "Neel Trivedi",
    role: "Business Owner",
    text: "Meetings, dates, late-night cravings — this is Ahmedabad's true iconic food destination.",
    rating: 5,
  },
];
