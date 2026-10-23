// // const API_BASE_URL = 'http://localhost:5000/api/listings';


// // // Fetch all items from MongoDB
// // export const fetchListings = async () => {
// //   const res = await fetch(API_BASE_URL);
// //   if (!res.ok) throw new Error('Failed to fetch listings');
// //   return res.json();
// // };

// // // Create a new clothing item
// // export const createListing = async (itemData) => {
// //   const res = await fetch(API_BASE_URL, {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify(itemData),
// //   });
// //   if (!res.ok) throw new Error('Failed to add listing');
// //   return res.json();
// // };

// const API_BASE_URL = 'https://rethread-backend-ybub.onrender.com/api/listings';

// // Fetch all items from MongoDB
// export const fetchListings = async () => {
//   const res = await fetch(API_BASE_URL);
//   if (!res.ok) throw new Error('Failed to fetch listings');
//   return res.json();
// };

// // Create a new clothing item
// export const createListing = async (itemData) => {
//   const res = await fetch(API_BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(itemData),
//   });
//   if (!res.ok) throw new Error('Failed to add listing');
//   return res.json();
// };

const API_BASE_URL = 'https://rethread-backend-ybub.onrender.com/api/listings';

// Fetch all items from MongoDB
export const fetchListings = async () => {
  const res = await fetch(API_BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch listings');
  return res.json();
};

// Create a new clothing item
export const createListing = async (itemData) => {
  // Field normalization: image/imageUrl support
  const payload = {
    ...itemData,
    imageUrl: itemData.imageUrl || itemData.image || 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600',
  };

  const res = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error('Backend Server Error:', errorData);
    throw new Error(errorData.message || 'Failed to add listing');
  }

  return res.json();
};