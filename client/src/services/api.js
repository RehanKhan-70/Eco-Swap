const API_BASE_URL = 'http://localhost:5000/api/listings';

// Fetch all items from MongoDB
export const fetchListings = async () => {
  const res = await fetch(API_BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch listings');
  return res.json();
};

// Create a new clothing item
export const createListing = async (itemData) => {
  const res = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  if (!res.ok) throw new Error('Failed to add listing');
  return res.json();
};