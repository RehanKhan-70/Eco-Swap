// // import express from 'express';
// // import cors from 'cors';
// // import dotenv from 'dotenv';
// // import { connectDB } from './config/db.js';
// // import listingRoutes from './routes/listingRoutes.js';

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;
// // const MONGO_URI = process.env.MONGO_URI;

// // if (!MONGO_URI) {
// //   console.error("MONGO_URI variable missing in environment!");
// // }

// // // Connect to MongoDB
// // connectDB();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Routes
// // app.use('/api/listings', listingRoutes);

// // // Base Route
// // app.get('/', (req, res) => {
// //   res.send('API is running...');
// // });

// // // Start Server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // });

// // import express from 'express';
// // import cors from 'cors';
// // import dotenv from 'dotenv';
// // import { connectDB } from './config/db.js';
// // import listingRoutes from './routes/listingRoutes.js';

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // MONGO_URI from env or hardcoded Atlas URI fallback
// // const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/rethread?retryWrites=true&w=majority";

// // // Connect to MongoDB with URI
// // connectDB(MONGO_URI);

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Routes
// // app.use('/api/listings', listingRoutes);

// // // Base Route
// // app.get('/', (req, res) => {
// //   res.send('ReThread API is running live!');
// // });

// // // Start Server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on port ${PORT}`);
// // });


// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';
// import listingRoutes from './routes/listingRoutes.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // MONGO_URI from env or hardcoded Atlas URI fallback
// const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/rethread?retryWrites=true&w=majority";

// // Connect to MongoDB with URI
// connectDB(MONGO_URI);

// // 1. CORS Configuration: All origins & methods allow karein
// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// // 2. Body Parser Limit: Image upload (Base64) ke liye limit badhaein
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

// // Routes
// app.use('/api/listings', listingRoutes);

// // Base Route
// app.get('/', (req, res) => {
//   res.send('ReThread API is running live!');
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import listingRoutes from './routes/listingRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Update this line with your ACTUAL MongoDB username & password (NOT placeholders)
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://rehan:your_real_password@cluster0.abcde.mongodb.net/rethread?retryWrites=true&w=majority";

// Connect to MongoDB
connectDB(MONGO_URI);

// CORS Config
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Payload Limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/api/listings', listingRoutes);

// Base Route
app.get('/', (req, res) => {
  res.send('ReThread API is running live!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});