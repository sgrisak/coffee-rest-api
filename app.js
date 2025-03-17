// Import required packages
const express = require("express");
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for coffee products
let coffees = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    roast: "Light",
    price: 16.99,
    origin: "Ethiopia",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    roast: "Medium",
    price: 14.99,
    origin: "Colombia",
  },
  {
    id: 3,
    name: "Mt. Comfort",
    roast: "Medium",
    price: 16.98,
    origin: "Peru",
  },
  {
    id: 4,
    name: "Sumatra Mandheling",
    roast: "Dark",
    price: 15.49,
    origin: "Indonesia",
  },
  {
    id: 5,
    name: "Guatemalan Antigua",
    roast: "Medium",
    price: 13.99,
    origin: "Guatemala",
  },
  {
    id: 6,
    name: "Costa Rican Tarrazu",
    roast: "Medium-Light",
    price: 14.49,
    origin: "Costa Rica",
  },
  {
    id: 7,
    name: "Kenyan AA",
    roast: "Medium",
    price: 17.99,
    origin: "Kenya",
  },
  {
    id: 8,
    name: "Brazilian Santos",
    roast: "Medium-Dark",
    price: 12.99,
    origin: "Brazil",
  },
  {
    id: 9,
    name: "Jamaican Blue Mountain",
    roast: "Medium",
    price: 49.99,
    origin: "Jamaica",
  },
  {
    id: 10,
    name: "Hawaiian Kona",
    roast: "Medium-Light",
    price: 36.99,
    origin: "United States",
  },
  {
    id: 11,
    name: "Vietnamese Robusta",
    roast: "Dark",
    price: 11.99,
    origin: "Vietnam",
  },
  {
    id: 12,
    name: "Rwanda Nyungwe",
    roast: "Light",
    price: 15.99,
    origin: "Rwanda",
  },
];

// GET all coffee products
app.get("/api/coffees", (req, res) => {
  res.json(coffees);
});

// GET a specific coffee by ID
app.get("/api/coffees/:id", (req, res) => {
  const coffee = coffees.find((c) => c.id === parseInt(req.params.id));
  if (!coffee) {
    return res.status(404).json({ message: "Coffee not found" });
  }
  res.json(coffee);
});

// POST a new coffee
app.post("/api/coffees", (req, res) => {
  const newCoffee = {
    id: coffees.length + 1,
    name: req.body.name,
    roast: req.body.roast,
    price: req.body.price,
    origin: req.body.origin,
  };
  coffees.push(newCoffee);
  res.status(201).json(newCoffee);
});

// PUT (update) a coffee
app.put("/api/coffees/:id", (req, res) => {
  const coffee = coffees.find((c) => c.id === parseInt(req.params.id));
  if (!coffee) {
    return res.status(404).json({ message: "Coffee not found" });
  }

  coffee.name = req.body.name || coffee.name;
  coffee.roast = req.body.roast || coffee.roast;
  coffee.price = req.body.price || coffee.price;
  coffee.origin = req.body.origin || coffee.origin;
  res.json(coffee);
});

// DELETE a coffee
app.delete("/api/coffees/:id", (req, res) => {
  const coffeeIndex = coffees.findIndex(
    (c) => c.id === parseInt(req.params.id)
  );
  if (coffeeIndex === -1) {
    return res.status(404).json({ message: "Coffee not found" });
  }

  coffees.splice(coffeeIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
