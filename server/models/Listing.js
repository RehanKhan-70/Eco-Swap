// import mongoose from 'mongoose';

// const listingSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, 'Please add a clothing title'],
//       trim: true,
//     },
//     brand: {
//       type: String,
//       required: true,
//     },
//     size: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//       enum: ['Jackets', 'Dresses', 'Hoodies', 'Tops', 'Pants'],
//     },
//     condition: {
//       type: String,
//       required: true,
//       enum: ['Like New', 'Good', 'Fair'],
//     },
//     estimatedValue: {
//       type: Number,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     owner: {
//       type: String,
//       default: 'Alex Johnson',
//     },
//     location: {
//       type: String,
//       default: 'Nearby',
//     },
//   },
//   { timestamps: true }
// );

// export const Listing = mongoose.model('Listing', listingSchema);

import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a clothing title'],
      trim: true,
    },
    brand: {
      type: String,
      default: 'Generic',
    },
    size: {
      type: String,
      default: 'M',
    },
    category: {
      type: String,
      default: 'Tops',
    },
    condition: {
      type: String,
      default: 'Like New',
    },
    estimatedValue: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600',
    },
    imageUrl: {
      type: String,
      default: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600',
    },
    owner: {
      type: String,
      default: 'Alex Johnson',
    },
    location: {
      type: String,
      default: 'Nearby',
    },
  },
  { timestamps: true }
);

// Named and Default exports both provided to prevent import crashes
export const Listing = mongoose.model('Listing', listingSchema);
export default Listing;