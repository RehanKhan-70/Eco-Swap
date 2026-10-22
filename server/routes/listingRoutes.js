import express from 'express';
import { getListings, createListing, seedListings } from '../controllers/listingController.js';

const router = express.Router();

router.get('/', getListings);
router.post('/', createListing);
router.post('/seed', seedListings);

export default router;