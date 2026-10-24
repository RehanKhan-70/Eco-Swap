// // import mongoose from 'mongoose';

// // export const connectDB = async () => {
// //   try {
// //     const conn = await mongoose.connect(process.env.MONGODB_URI);
// //     console.log(`✅ Connected to MongoDB: ${conn.connection.host}`);
// //   } catch (error) {
// //     console.error(`❌ MongoDB Connection Error: ${error.message}`);
// //     process.exit(1);
// //   }
// // };


// import mongoose from 'mongoose';

// export const connectDB = async (uri) => {
//   const connectionString = uri || process.env.MONGO_URI;

//   if (!connectionString) {
//     console.error("❌ CRITICAL ERROR: MongoDB Connection String is missing!");
//     return;
//   }

//   try {
//     const conn = await mongoose.connect(connectionString);
//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`❌ MongoDB Connection Error: ${error.message}`);
//     process.exit(1);
//   }
// };



import mongoose from "mongoose";

export const connectDB = async (mongoURI) => {
  try {
    const connection = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 15000,
    });

    console.log(
      `MongoDB Connected: ${connection.connection.host}`
    );

    return connection;
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    throw error;
  }
};
