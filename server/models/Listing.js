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
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Jackets', 'Dresses', 'Hoodies', 'Tops', 'Pants'],
    },
    condition: {
      type: String,
      required: true,
      enum: ['Like New', 'Good', 'Fair'],
    },
    estimatedValue: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
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

export const Listing = mongoose.model('Listing', listingSchema);