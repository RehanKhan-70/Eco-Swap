import { Listing } from '../models/Listing.js';

// Get all clothing items
export const getListings = async (req, res) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch items', error: error.message });
  }
};

// Create a new clothing item
export const createListing = async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create item', error: error.message });
  }
};

// Seed initial sample data
export const seedListings = async (req, res) => {
  try {
    await Listing.deleteMany({});
    const sampleData = [
      {
        title: "Vintage Denim Jacket",
        brand: "Levi's",
        size: "M",
        category: "Jackets",
        condition: "Like New",
        estimatedValue: 60,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
        owner: "Sarah M.",
        location: "2 km away"
      },
      {
        title: "Floral Summer Sundress",
        brand: "Zara",
        size: "S",
        category: "Dresses",
        condition: "Good",
        estimatedValue: 40,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
        owner: "Elena R.",
        location: "4 km away"
      },
      {
        title: "Organic Cotton Hoodie",
        brand: "Patagonia",
        size: "L",
        category: "Hoodies",
        condition: "Fair",
        estimatedValue: 45,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80",
        owner: "Marcus K.",
        location: "5 km away"
      }
    ];
    const inserted = await Listing.insertMany(sampleData);
    res.status(201).json({ message: 'Sample items seeded successfully!', data: inserted });
  } catch (error) {
    res.status(500).json({ message: 'Seeding failed', error: error.message });
  }
};