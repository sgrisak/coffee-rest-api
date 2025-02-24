// Import required packages
const express = require("express");
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for coffee products (in practice, you'd use a database)
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
