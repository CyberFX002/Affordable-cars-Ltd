// Affordable Cars Limited — vehicle inventory data
// Shared across index.html, inventory.html and car.html
const CARS = [
  {
    id: "land-cruiser",
    brand: "Toyota",
    name: "Toyota Land Cruiser",
    tag: "NEW",
    category: "Full-size SUV",
    year: 2024,
    price: 18500000,
    transmission: "Automatic",
    fuel: "Petrol",
    mileage: "0 km (Brand New)",
    engine: "4.0L V6",
    color: "Pearl White",
    seats: 7,
    image: "https://images.unsplash.com/photo-1572629166063-011a332eafed?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1572629166063-011a332eafed?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1637859460045-ac3ae9ced99d?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598248691267-4a62dfdfd8a8?fm=jpg&q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A brand-new Land Cruiser built for Lagos roads and everything beyond them. Comes with full manufacturer warranty and our standard after-sales service package.",
    features: ["4WD with terrain select", "Leather interior", "Reverse camera & sensors", "3-row seating (7 seats)", "Manufacturer warranty", "Flexible financing available"]
  },
  {
    id: "lexus-rx350",
    brand: "Lexus",
    name: "Lexus RX 350",
    tag: "USED",
    category: "Midsize Luxury SUV",
    year: 2019,
    price: 21000000,
    transmission: "Automatic",
    fuel: "Petrol",
    mileage: "42,000 km",
    engine: "3.5L V6",
    color: "Silver",
    seats: 5,
    image: "https://images.unsplash.com/photo-1568074532275-b57393b08c64?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1568074532275-b57393b08c64?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568074532099-1e0dc3206a74?fm=jpg&q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A well-kept Nigerian-used RX 350 with full service history. Inspected and reconditioned in-house before listing.",
    features: ["Heated leather seats", "Panoramic sunroof", "Premium sound system", "Full service history", "Recently serviced", "Trade-in accepted"]
  },
  {
    id: "mercedes-gle",
    brand: "Mercedes-Benz",
    name: "Mercedes-Benz GLE",
    tag: "NEW",
    category: "Luxury SUV",
    year: 2024,
    price: 42000000,
    transmission: "Automatic",
    fuel: "Petrol",
    mileage: "0 km (Brand New)",
    engine: "3.0L Inline-6",
    color: "Obsidian Black",
    seats: 5,
    image: "https://images.unsplash.com/photo-1622893288761-823ba60f17a6?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1622893288761-823ba60f17a6?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603050087224-98d2e1e8930a?fm=jpg&q=80&w=1200&auto=format&fit=crop"
    ],
    description: "The flagship of our new arrivals. Full manufacturer warranty, corporate-ready, and available for immediate delivery.",
    features: ["Air suspension", "MBUX infotainment", "360° camera", "Ambient lighting", "Manufacturer warranty", "Corporate leasing available"]
  },
  {
    id: "range-rover-sport",
    brand: "Range Rover",
    name: "Range Rover Sport",
    tag: "USED",
    category: "Luxury SUV",
    year: 2020,
    price: 38000000,
    transmission: "Automatic",
    fuel: "Petrol",
    mileage: "35,000 km",
    engine: "3.0L V6",
    color: "Santorini Black",
    seats: 5,
    image: "https://images.unsplash.com/photo-1563458563737-e60b1f1b345f?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563458563737-e60b1f1b345f?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1638686302275-0e87df720aca?fm=jpg&q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Nigerian-used Range Rover Sport in excellent condition, thoroughly inspected with a clean mechanical history.",
    features: ["Adaptive air suspension", "Terrain Response 2", "Meridian sound system", "Recently serviced", "Clean title", "Trade-in accepted"]
  },
  {
    id: "honda-accord",
    brand: "Honda",
    name: "Honda Accord",
    tag: "USED",
    category: "Executive Sedan",
    year: 2021,
    price: 14500000,
    transmission: "Automatic",
    fuel: "Petrol",
    mileage: "28,000 km",
    engine: "1.5L Turbo",
    color: "Modern Steel",
    seats: 5,
    image: "https://images.unsplash.com/photo-1602013871952-8379f19a15f1?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1602013871952-8379f19a15f1?fm=jpg&q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A reliable, fuel-efficient executive sedan — ideal for daily driving or as a first premium car.",
    features: ["Apple CarPlay / Android Auto", "Lane-keep assist", "Low mileage", "Single previous owner", "Recently serviced", "Financing available"]
  },
  {
    id: "nissan-pathfinder",
    brand: "Nissan",
    name: "Nissan Pathfinder",
    tag: "NEW",
    category: "Family SUV",
    year: 2024,
    price: 26500000,
    transmission: "Automatic",
    fuel: "Petrol",
    mileage: "0 km (Brand New)",
    engine: "3.5L V6",
    color: "Glacier White",
    seats: 7,
    image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?fm=jpg&q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Spacious 3-row family SUV, brand new with full manufacturer warranty — built for school runs and weekend trips alike.",
    features: ["3-row, 7-seat layout", "Rear entertainment package", "Blind-spot warning", "Manufacturer warranty", "Flexible financing", "Free first service"]
  },
  {
    id: "kia-sorento",
    brand: "Kia",
    name: "Kia Sorento",
    tag: "NEW",
    category: "Midsize SUV",
    year: 2024,
    price: 23000000,
    transmission: "Automatic",
    fuel: "Petrol",
    mileage: "0 km (Brand New)",
    engine: "2.5L 4-Cylinder",
    color: "Gravity Grey",
    seats: 7,
    image: "https://images.unsplash.com/photo-1705624843697-4461f9dce482?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1705624843697-4461f9dce482?fm=jpg&q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Kia's flagship SUV, brand new — a strong balance of comfort, safety tech, and value.",
    features: ["Advanced driver-assist suite", "Wireless charging", "Heated & ventilated seats", "Manufacturer warranty", "Flexible financing", "7-year drivetrain cover"]
  },
  {
    id: "mitsubishi-outlander",
    brand: "Mitsubishi",
    name: "Mitsubishi Outlander",
    tag: "USED",
    category: "Compact SUV",
    year: 2020,
    price: 16800000,
    transmission: "Automatic",
    fuel: "Petrol",
    mileage: "31,000 km",
    engine: "2.4L 4-Cylinder",
    color: "Diamond Grey",
    seats: 7,
    image: "https://images.unsplash.com/photo-1694649686884-0d62d0dc47d1?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1694649686884-0d62d0dc47d1?fm=jpg&q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A practical, well-maintained 7-seater. Great value Nigerian-used pick for a growing family.",
    features: ["7-seat configuration", "Reverse camera", "Full service history", "Recently serviced", "Clean title", "Trade-in accepted"]
  }
];

function formatNaira(n){
  return "₦" + n.toLocaleString("en-NG");
}
