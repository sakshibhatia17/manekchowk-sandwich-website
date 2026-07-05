import dishPaneer from "@/assets/menu/dish-paneer.jpg";
import dishMexican from "@/assets/menu/hero-sandwich.jpg";
import dishVadapav from "@/assets/menu/bhaji-pav.jpg.jpg";
import dishCoffee from "@/assets/menu/dish-coffee.jpg";
import dishFries from "@/assets/menu/dish-fries.jpg";
import dishPizza from "@/assets/menu/dish-pizza.jpg";
import dishBurger from "@/assets/menu/cheese-sand.jpg.jpg";
import heroSandwich from "@/assets/menu/hero-sandwich.jpg";
import dishVegSandwich from "@/assets/menu/veg-sand.jpg.jpeg";

// New Specific Uploads
import imgAlooMutter from "@/assets/menu/aloo-mutter.jpg.jpg";
import imgBhajiPav from "@/assets/menu/bhaji-pav.jpg.jpg";
import imgBreadButter from "@/assets/menu/bread-butter.jpg";
import imgCheeseBhel from "@/assets/menu/cheese-bhel.jpg.jpg";
import imgCheeseCornPizza from "@/assets/menu/cheese-corn-pizza.jpg.jpg";
import imgCheeseGarlicGrill from "@/assets/menu/cheese-garlic-grill.jpg.jpg";
import imgCheeseSand from "@/assets/menu/cheese-sand.jpg.jpg";
import imgChocCheese from "@/assets/menu/choc-cheese.jpg.jpg";
import imgGarlicGhughra from "@/assets/menu/garlic-ghughra.jpg.jpg";
import imgGhughraCheese from "@/assets/menu/ghughra-cheese.jpg.jpg";
import imgGotalaDosa from "@/assets/menu/gotala-dosa.jpg.jpg";
import imgItalianDouble from "@/assets/menu/italian-double.jpg.jpg";
import imgJamPlain from "@/assets/menu/jam-plain.jpg";
import imgJiniDosa from "@/assets/menu/jini-dosa.jpg.jpg";
import imgMargherita from "@/assets/menu/margherita.jpg.jpg";
import imgMysoreDosa from "@/assets/menu/mysore-dosa.jpg.jpg";
import imgVegCheeseSand from "@/assets/menu/veg-cheese-sand.jpg.jpg";
import imgVegSand from "@/assets/menu/veg-sand.jpg.jpeg";

// Latest specific uploads
import img3in1Mix from "@/assets/menu/3in1-mix.jpg";
import imgCheeseFries from "@/assets/menu/cheese-fries.jpg";
import imgCheeseMaggi from "@/assets/menu/cheese-maggi.jpg";
import imgCheesePulav from "@/assets/menu/cheese-pulav.jpg";
import imgCheeseSlice from "@/assets/menu/cheese-slice.jpg";
import imgColdCoffee from "@/assets/menu/cold-coffee.jpg";
import imgCtcCheese from "@/assets/menu/ctc-cheese.jpg";
import imgOreoShake from "@/assets/menu/oreo-shake.jpg";
import imgRegPulav from "@/assets/menu/reg-pulav.jpg";
import imgTandooriPaneer from "@/assets/menu/tandoori-paneer.jpg";
import imgVegGrill from "@/assets/menu/veg-grill.jpg";
import imgVegPuff from "@/assets/menu/veg-puff.jpg";

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
  { id: "veg-sand", name: "Vegetable Sandwich", category: "Sandwich (Plain)", desc: "Fresh vegetable sandwich", price: 50, rating: 4.5, cal: 250, veg: true, popular: true, image: imgVegSand },
  { id: "aloo-mutter", name: "Aloo Mutter Sandwich", category: "Sandwich (Plain)", desc: "Potato and peas sandwich", price: 50, rating: 4.6, cal: 280, veg: true, image: imgAlooMutter },
  { id: "jam-plain", name: "Jam Plain Sandwich", category: "Sandwich (Plain)", desc: "Sweet jam sandwich", price: 50, rating: 4.5, cal: 200, veg: true, image: imgJamPlain },
  { id: "bread-butter", name: "Bread Butter Sandwich", category: "Sandwich (Plain)", desc: "Classic bread and Amul butter", price: 60, rating: 4.7, cal: 220, veg: true, image: imgBreadButter },
  { id: "cheese-sand", name: "Cheese Sandwich", category: "Sandwich (Plain)", desc: "Loaded with Amul cheese", price: 100, rating: 4.8, cal: 350, veg: true, popular: true, image: imgCheeseSand },
  { id: "veg-cheese-sand", name: "Vegetable Cheese Sandwich", category: "Sandwich (Plain)", desc: "Veggies and cheese combined", price: 110, rating: 4.9, cal: 380, veg: true, popular: true, image: imgVegCheeseSand },
  
  // Special Sandwich
  { id: "pine-cheese", name: "Pineapple Cheese Sandwich", category: "Special Sandwich", desc: "Sweet pineapple and cheese", price: 170, rating: 4.8, cal: 400, veg: true, image: dishFries },
  { id: "choc-cheese", name: "Chocolate Cheese Sandwich", category: "Special Sandwich", desc: "Chocolate and melted cheese", price: 170, rating: 4.9, cal: 450, veg: true, popular: true, image: imgChocCheese },
  { id: "3in1-mix", name: "3 in 1 Mix Sandwich", category: "Special Sandwich", desc: "Triple layered mix sandwich", price: 190, rating: 4.9, cal: 500, veg: true, image: img3in1Mix },

  // Manekchowk Sp. Sandwich
  { id: "ghughra-cheese", name: "Ghughra Cheese Sandwich", category: "Manekchowk Sp. Sandwich", desc: "Our famous ghughra style sandwich", price: 160, rating: 4.9, cal: 480, veg: true, popular: true, image: imgGhughraCheese },
  { id: "jain-ghughra", name: "Jain Ghughra Cheese Sandwich", category: "Manekchowk Sp. Sandwich", desc: "No onion no garlic ghughra sandwich", price: 160, rating: 4.8, cal: 470, veg: true, image: heroSandwich },
  { id: "garlic-ghughra", name: "Garlic Ghughra Cheese Sandwich", category: "Manekchowk Sp. Sandwich", desc: "Spicy garlic flavored ghughra sandwich", price: 170, rating: 4.9, cal: 490, veg: true, image: imgGarlicGhughra },

  // Toasted & Grill Sandwich
  { id: "cheese-garlic-grill", name: "Cheese Garlic Grill", category: "Toasted & Grill Sandwich", desc: "Garlic and cheese grilled to perfection", price: 180, rating: 4.8, cal: 420, veg: true, popular: true, image: imgCheeseGarlicGrill },
  { id: "veg-grill", name: "Vegetable Grill", category: "Toasted & Grill Sandwich", desc: "Grilled veggie sandwich", price: 130, rating: 4.7, cal: 350, veg: true, image: imgVegGrill },
  { id: "cheese-grill", name: "Cheese Grill", category: "Toasted & Grill Sandwich", desc: "Loaded cheese grill", price: 180, rating: 4.9, cal: 450, veg: true, popular: true, image: heroSandwich },
  
  // Jumbo Grill Sandwich
  { id: "ctc-cheese", name: "C.T.C. Cheese Sandwich", category: "Jumbo Grill Sandwich", desc: "Jumbo CTC cheese sandwich", price: 180, rating: 4.8, cal: 550, veg: true, image: imgCtcCheese },
  { id: "mexican-club", name: "Mexican Club Sandwich", category: "Jumbo Grill Sandwich", desc: "Jumbo mexican flavor", price: 180, rating: 4.9, cal: 580, veg: true, popular: true, image: dishMexican },
  { id: "tandoori-paneer", name: "Tandoori Panner Sandwich", category: "Jumbo Grill Sandwich", desc: "Tandoori spiced paneer", price: 190, rating: 4.9, cal: 600, veg: true, popular: true, image: imgTandooriPaneer },

  // Pizza
  { id: "margherita", name: "Margherita Cheese Pizza", category: "Pizza", desc: "Classic cheese pizza", price: 140, rating: 4.7, cal: 500, veg: true, image: imgMargherita },
  { id: "italian-double", name: "Italian Double Cheese Pizza", category: "Pizza", desc: "Double cheese italian style", price: 170, rating: 4.8, cal: 650, veg: true, popular: true, image: imgItalianDouble },
  { id: "cheese-corn-pizza", name: "Cheese Corn Pizza", category: "Pizza", desc: "Sweet corn and cheese", price: 160, rating: 4.7, cal: 580, veg: true, image: imgCheeseCornPizza },

  // Slices & Puff & Fries
  { id: "cheese-slice", name: "Cheese Slice", category: "Slices", desc: "Premium cheese slice", price: 50, rating: 4.6, cal: 150, veg: true, image: imgCheeseSlice },
  { id: "cheese-fries", name: "Cheese French Fries", category: "Fries", desc: "Fries loaded with cheese", price: 90, rating: 4.8, cal: 450, veg: true, popular: true, image: imgCheeseFries },
  { id: "veg-puff", name: "Veg. Puff", category: "Puff", desc: "Crispy veg puff", price: 60, rating: 4.5, cal: 300, veg: true, image: imgVegPuff },

  // Maskabun & Bhel & Maggi
  { id: "butter-maskabun", name: "Butter Maskabun", category: "Maskabun", desc: "Classic maskabun with Amul butter", price: 40, rating: 4.8, cal: 280, veg: true, popular: true, image: dishBurger },
  { id: "cheese-bhel", name: "Cheese Bhel", category: "Bhel", desc: "Street style bhel with cheese", price: 90, rating: 4.7, cal: 350, veg: true, image: imgCheeseBhel },
  { id: "cheese-maggi", name: "Cheese Maggi", category: "Maggi", desc: "Everyone's favorite cheese maggi", price: 100, rating: 4.8, cal: 400, veg: true, popular: true, image: imgCheeseMaggi },

  // Shake & Thick Shake
  { id: "cold-coffee", name: "Sp. Cold Coffee", category: "Shake & Thick Shake", desc: "Special cold coffee thick shake", price: 80, rating: 4.9, cal: 350, veg: true, popular: true, image: imgColdCoffee },
  { id: "oreo-shake", name: "Oreo Coffee", category: "Shake & Thick Shake", desc: "Oreo blended coffee", price: 190, rating: 4.8, cal: 450, veg: true, image: imgOreoShake },

  // Bhaji Pav
  { id: "bhaji-pav", name: "Bhaji Pav", category: "Bhaji Pav", desc: "Classic bhaji pav in butter", price: 150, rating: 4.9, cal: 550, veg: true, popular: true, image: imgBhajiPav },
  { id: "sp-bhaji", name: "Sp. Manekchowk Bhaji Pav", category: "Bhaji Pav", desc: "Our signature special bhaji pav", price: 200, rating: 4.9, cal: 650, veg: true, popular: true, image: dishBurger },

  // Pulav
  { id: "reg-pulav", name: "Regular Pulav", category: "Pulav", desc: "Street style tawa pulav", price: 150, rating: 4.7, cal: 450, veg: true, image: imgRegPulav },
  { id: "cheese-pulav", name: "Cheese Pulav", category: "Pulav", desc: "Pulav loaded with cheese", price: 200, rating: 4.8, cal: 550, veg: true, image: imgCheesePulav },

  // Dosa & Fancy Dosa
  { id: "mysore-dosa", name: "Mysore Masala Dosa", category: "Dosa", desc: "Spicy mysore masala dosa", price: 160, rating: 4.8, cal: 450, veg: true, image: imgMysoreDosa },
  { id: "jini-dosa", name: "Jini Dosa", category: "Fancy Dosa", desc: "Famous jini fusion dosa", price: 240, rating: 4.9, cal: 600, veg: true, popular: true, image: imgJiniDosa },
  { id: "gotala-dosa", name: "Sp. Gotala Dosa", category: "Fancy Dosa", desc: "Special gotala dosa", price: 280, rating: 4.9, cal: 700, veg: true, popular: true, image: imgGotalaDosa }
];

export const BRANCHES = [
  { name: "Ahmedabad Food Court", address: "Ahmedabad Food Court, Opp. Karnavati Club, SG Highway, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 83207 88313", mapLink: "https://share.google/kX3MEpaUSZVqXhuO8" },
  { name: "Downtown Food Court", address: "Downtown Food Court, Ring Road, Vaishnodevi, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 83207 88313", mapLink: "https://share.google/XgQiSJrHfWhYhk3tB" },
  { name: "Madhuvrun Row House", address: "1/153, Madhuvrun Row House, KK Nagar Road, Ghatlodia, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 83207 88313", mapLink: "https://maps.app.goo.gl/DjYkYpNGdzKVYc6Q9?g_st=aw" },
  { name: "Karnavati NX Food Court", address: "Karnavati NX Food Court, Zydus, Thaltej, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 83207 88313", mapLink: "" },
  { name: "Krishna Tower", address: "01, Krishna Tower, Opp. IOC Petrol Pump, Anand Nagar Road, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 82398 26561", mapLink: "https://maps.app.goo.gl/9QCxN5sPT85JhSwW6" },
  { name: "Vandematram Arcade", address: "24, Vandematram Arcade, Vandematram Road, Gota, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 82398 26561", mapLink: "https://maps.app.goo.gl/YDd4FFLgHjgZXxh78" },
  { name: "Vastrapur Food Court", address: "Vastrapur Food Court, Near GMDC Ground, Vastrapur, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 83473 08735", mapLink: "https://maps.app.goo.gl/hzC2fBXz2UFmTqHQ6" },
  { name: "Swati Complex", address: "01, Swati Complex, Opp. Tejas Society, KK Nagar Road, Ghatlodia, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 83207 88313", mapLink: "https://maps.app.goo.gl/BydhfSXR4EKfXkXy8" },
  { name: "Foodilon Food Park", address: "Foodilon Food Park, VIP Road, South Bopal, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 88245 88076", mapLink: "https://maps.app.goo.gl/xqC2srJfJxW4KMX58" },
  { name: "Mangal Jyot Tower", address: "08, Mangal Jyot Tower, Jodhpur Char Rasta, Satellite, Ahmedabad", hours: "10 AM – 12 AM", phone: "+91 98987 19146", mapLink: "https://maps.app.goo.gl/qLN3KinQEgz1LvsCA" },
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
