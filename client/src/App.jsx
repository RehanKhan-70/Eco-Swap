// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { Routes, Route } from "react-router-dom";
// // // // // // // import Navbar from "./components/Navbar";
// // // // // // // import Footer from "./components/Footer";
// // // // // // // import Home from "./pages/Home";
// // // // // // // import { fetchListings } from "./services/api";
// // // // // // // import SwapHub from "./pages/SwapHub";
// // // // // // // import NearbyMap from "./pages/NearbyMap";
// // // // // // // import Profile from "./pages/Profile";

// // // // // // // export default function App() {
// // // // // // //   const [clothes, setClothes] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   useEffect(() => {
// // // // // // //     loadListings();
// // // // // // //   }, []);

// // // // // // //   const loadListings = async () => {
// // // // // // //     try {
// // // // // // //       setLoading(true);
// // // // // // //       const data = await fetchListings();
// // // // // // //       setClothes(data);
// // // // // // //     } catch (err) {
// // // // // // //       console.error("API Error:", err);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
// // // // // // //       <div>
// // // // // // //         <Navbar onOpenAddModal={() => alert("Add Modal Opened")} />
// // // // // // //         <main className="max-w-7xl mx-auto px-4 py-8">
// // // // // // //           <Routes>
// // // // // // //             <Route
// // // // // // //               path="/"
// // // // // // //               element={
// // // // // // //                 <Home
// // // // // // //                   clothes={clothes}
// // // // // // //                   loading={loading}
// // // // // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // // // // //                 />
// // // // // // //               }
// // // // // // //             />
// // // // // // //             <Route path="/swaps" element={<SwapHub />} />
// // // // // // //             <Route
// // // // // // //               path="/map"
// // // // // // //               element={
// // // // // // //                 <NearbyMap
// // // // // // //                   clothes={clothes}
// // // // // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // // // // //                 />
// // // // // // //               }
// // // // // // //             />
// // // // // // //             <Route path="/profile" element={<Profile userListings={clothes} />} />
// // // // // // //           </Routes>
// // // // // // //         </main>
// // // // // // //       </div>

// // // // // // //       <Footer />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { Routes, Route } from 'react-router-dom';
// // // // // // import Navbar from './components/Navbar';
// // // // // // import Footer from './components/Footer';
// // // // // // import AddItemModal from './components/AddItemModal'; // Modal Component Imported
// // // // // // import { fetchListings, createListing } from './services/api';
// // // // // // import Profile from './pages/Profile';
// // // // // // import Home from './pages/Home';
// // // // // // import SwapHub from './pages/SwapHub';
// // // // // // import NearbyMap from './pages/NearbyMap';

// // // // // // export default function App() {
// // // // // //   const [clothes, setClothes] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [showAddModal, setShowAddModal] = useState(false); // State to control modal visibility

// // // // // //   useEffect(() => {
// // // // // //     loadListings();
// // // // // //   }, []);

// // // // // //   const loadListings = async () => {
// // // // // //     try {
// // // // // //       setLoading(true);
// // // // // //       const data = await fetchListings();
// // // // // //       setClothes(data);
// // // // // //     } catch (err) {
// // // // // //       console.error('API Error:', err);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // Function to save new clothing item to MongoDB
// // // // // //   const handleAddItem = async (newItemData) => {
// // // // // //     try {
// // // // // //       const createdItem = await createListing(newItemData);
// // // // // //       setClothes([createdItem, ...clothes]); // Immediately show on homepage
// // // // // //       setShowAddModal(false); // Close the modal
// // // // // //     } catch (err) {
// // // // // //       console.error('Error adding item:', err);
// // // // // //       alert('Failed to save item. Make sure backend is running!');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
// // // // // //       <div>
// // // // // //         {/* FIXED: Replaced alert with state trigger */}
// // // // // //         <Navbar onOpenAddModal={() => setShowAddModal(true)} />

// // // // // //         <main className="max-w-7xl mx-auto px-4 py-8">
// // // // // //           <Routes>
// // // // // //             <Route
// // // // // //               path="/"
// // // // // //               element={
// // // // // //                 <Home
// // // // // //                   clothes={clothes}
// // // // // //                   loading={loading}
// // // // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // // // //                 />
// // // // // //               }
// // // // // //             />
// // // // // //             <Route path="/swaps" element={<SwapHub />} />
// // // // // //             <Route
// // // // // //               path="/map"
// // // // // //               element={
// // // // // //                 <NearbyMap
// // // // // //                   clothes={clothes}
// // // // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // // // //                 />
// // // // // //               }
// // // // // //             />
// // // // // //             <Route path="/profile" element={<Profile userListings={clothes} />} />
// // // // // //           </Routes>
// // // // // //         </main>
// // // // // //       </div>

// // // // // //       <Footer />

// // // // // //       {/* Renders the Add Clothing Form Popup Modal when state is true */}
// // // // // //       {showAddModal && (
// // // // // //         <AddItemModal
// // // // // //           onClose={() => setShowAddModal(false)}
// // // // // //           onItemAdded={handleAddItem}
// // // // // //         />
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Routes, Route } from 'react-router-dom';
// // // // // import Navbar from './components/Navbar';
// // // // // import Footer from './components/Footer';
// // // // // import AddItemModal from './components/AddItemModal';
// // // // // import HomePage from './pages/HomePage';
// // // // // import SwapHubPage from './pages/SwapHubPage';
// // // // // import NearbyMapPage from './pages/NearbyMapPage';
// // // // // import ProfilePage from './pages/ProfilePage';
// // // // // import ItemDetailPage from './pages/ItemDetailPage'; // <-- IMPORT THIS
// // // // // import { fetchListings, createListing } from './services/api';

// // // // // export default function App() {
// // // // //   const [clothes, setClothes] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [showAddModal, setShowAddModal] = useState(false);

// // // // //   useEffect(() => {
// // // // //     loadListings();
// // // // //   }, []);

// // // // //   const loadListings = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const data = await fetchListings();
// // // // //       setClothes(data);
// // // // //     } catch (err) {
// // // // //       console.error('API Error:', err);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleAddItem = async (newItemData) => {
// // // // //     try {
// // // // //       const createdItem = await createListing(newItemData);
// // // // //       setClothes([createdItem, ...clothes]);
// // // // //       setShowAddModal(false);
// // // // //     } catch (err) {
// // // // //       console.error('Error adding item:', err);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
// // // // //       <div>
// // // // //         <Navbar onOpenAddModal={() => setShowAddModal(true)} />

// // // // //         <main className="max-w-7xl mx-auto px-4 py-8">
// // // // //           <Routes>
// // // // //             <Route
// // // // //               path="/"
// // // // //               element={
// // // // //                 <HomePage
// // // // //                   clothes={clothes}
// // // // //                   loading={loading}
// // // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // // //                 />
// // // // //               }
// // // // //             />
// // // // //             <Route path="/swaps" element={<SwapHubPage />} />
// // // // //             <Route
// // // // //               path="/map"
// // // // //               element={
// // // // //                 <NearbyMapPage
// // // // //                   clothes={clothes}
// // // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // // //                 />
// // // // //               }
// // // // //             />
// // // // //             <Route path="/profile" element={<ProfilePage userListings={clothes} />} />

// // // // //             {/* REGISTER ITEM DETAIL ROUTE */}
// // // // //             <Route
// // // // //               path="/item/:id"
// // // // //               element={
// // // // //                 <ItemDetailPage
// // // // //                   clothes={clothes}
// // // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // // //                 />
// // // // //               }
// // // // //             />
// // // // //           </Routes>
// // // // //         </main>
// // // // //       </div>

// // // // //       <Footer />

// // // // //       {showAddModal && (
// // // // //         <AddItemModal
// // // // //           onClose={() => setShowAddModal(false)}
// // // // //           onItemAdded={handleAddItem}
// // // // //         />
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useState, useEffect } from "react";
// // // // import { Routes, Route } from "react-router-dom";
// // // // import Navbar from "./components/Navbar";
// // // // import Footer from "./components/Footer";
// // // // import AddItemModal from "./components/AddItemModal";

// // // // import { fetchListings, createListing } from "./services/api";
// // // // import SwapHub from "./pages/SwapHub";
// // // // import Home from "./pages/Home";
// // // // import NearbyMap from "./pages/NearbyMap";
// // // // import Profile from "./pages/Profile";
// // // // import ItemDetail from "./pages/ItemDetail";
// // // // import AdminPanel from "./pages/AdminPanel";
// // // // import AuthModal from "./components/AuthModal";

// // // // export default function App() {
// // // //   const [clothes, setClothes] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [showAddModal, setShowAddModal] = useState(false);

// // // //   useEffect(() => {
// // // //     loadListings();
// // // //   }, []);

// // // //   const loadListings = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       const data = await fetchListings();
// // // //       setClothes(data);
// // // //     } catch (err) {
// // // //       console.error("API Error:", err);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleAddItem = async (newItemData) => {
// // // //     try {
// // // //       const createdItem = await createListing(newItemData);
// // // //       setClothes([createdItem, ...clothes]);
// // // //       setShowAddModal(false);
// // // //     } catch (err) {
// // // //       console.error("Error adding item:", err);
// // // //     }
// // // //   };

// // // //   // Admin delete listing handler
// // // //   const handleDeleteListing = (id) => {
// // // //     if (window.confirm("Are you sure you want to remove this listing?")) {
// // // //       setClothes(clothes.filter((c) => (c._id || c.id) !== id));
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
// // // //       <div>
// // // //         <Navbar onOpenAddModal={() => setShowAddModal(true)} />

// // // //         <main className="max-w-7xl mx-auto px-4 py-8">
// // // //           <Routes>
// // // //             <Route
// // // //               path="/"
// // // //               element={
// // // //                 <Home
// // // //                   clothes={clothes}
// // // //                   loading={loading}
// // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // //                 />
// // // //               }
// // // //             />
// // // //             <Route path="/swaps" element={<SwapHub />} />
// // // //             <Route
// // // //               path="/map"
// // // //               element={
// // // //                 <NearbyMap
// // // //                   clothes={clothes}
// // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // //                 />
// // // //               }
// // // //             />
// // // //             <Route
// // // //               path="/profile"
// // // //               element={<Profile userListings={clothes} />}
// // // //             />
// // // //             <Route
// // // //               path="/item/:id"
// // // //               element={
// // // //                 <ItemDetail
// // // //                   clothes={clothes}
// // // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // // //                 />
// // // //               }
// // // //             />

// // // //             {/* REGISTER ADMIN ROUTE */}
// // // //             <Route
// // // //               path="/admin"
// // // //               element={
// // // //                 <AdminPanel
// // // //                   clothes={clothes}
// // // //                   onDeleteListing={handleDeleteListing}
// // // //                 />
// // // //               }
// // // //             />
// // // //           </Routes>
// // // //         </main>
// // // //       </div>

// // // //       <Footer />

// // // //       {showAddModal && (
// // // //         <AddItemModal
// // // //           onClose={() => setShowAddModal(false)}
// // // //           onItemAdded={handleAddItem}
// // // //         />
// // // //       )}

// // // //       {showAuthModal && (
// // // //         <AuthModal
// // // //           onClose={() => setShowAuthModal(false)}
// // // //           onLoginSuccess={(user) => setCurrentUser(user)}
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useState, useEffect } from 'react';
// // // import { Routes, Route } from 'react-router-dom';
// // // import Navbar from './components/Navbar';
// // // import Footer from './components/Footer';
// // // import AddItemModal from './components/AddItemModal';
// // // import AuthModal from './components/AuthModal'; // <-- IMPORT THIS
// // // import { fetchListings, createListing } from './services/api';
// // // import AdminPanel from './pages/AdminPanel';
// // // import ItemDetail from './pages/ItemDetail';
// // // import Profile from './pages/Profile';
// // // import NearbyMap from './pages/NearbyMap';
// // // import SwapHub from './pages/SwapHub';
// // // import Home from './pages/Home';

// // // export default function App() {
// // //   const [clothes, setClothes] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [showAddModal, setShowAddModal] = useState(false);
// // //   const [showAuthModal, setShowAuthModal] = useState(false);
// // //   const [currentUser, setCurrentUser] = useState(null);

// // //   useEffect(() => {
// // //     loadListings();
// // //   }, []);

// // //   const loadListings = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const data = await fetchListings();
// // //       setClothes(data);
// // //     } catch (err) {
// // //       console.error('API Error:', err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleAddItem = async (newItemData) => {
// // //     try {
// // //       const createdItem = await createListing(newItemData);
// // //       setClothes([createdItem, ...clothes]);
// // //       setShowAddModal(false);
// // //     } catch (err) {
// // //       console.error('Error adding item:', err);
// // //     }
// // //   };

// // //   const handleDeleteListing = (id) => {
// // //     if (window.confirm("Are you sure you want to remove this listing?")) {
// // //       setClothes(clothes.filter((c) => (c._id || c.id) !== id));
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
// // //       <div>
// // //         <Navbar
// // //           onOpenAddModal={() => setShowAddModal(true)}
// // //           currentUser={currentUser}
// // //           onOpenAuthModal={() => setShowAuthModal(true)}
// // //         />

// // //         <main className="max-w-7xl mx-auto px-4 py-8">
// // //           <Routes>
// // //             <Route
// // //               path="/"
// // //               element={
// // //                 <Home
// // //                   clothes={clothes}
// // //                   loading={loading}
// // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // //                 />
// // //               }
// // //             />
// // //             <Route path="/swaps" element={<SwapHub />} />
// // //             <Route
// // //               path="/map"
// // //               element={
// // //                 <NearbyMap
// // //                   clothes={clothes}
// // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // //                 />
// // //               }
// // //             />
// // //             <Route path="/profile" element={<Profile userListings={clothes} />} />
// // //             <Route
// // //               path="/item/:id"
// // //               element={
// // //                 <ItemDetail
// // //                   clothes={clothes}
// // //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// // //                 />
// // //               }
// // //             />
// // //             <Route
// // //               path="/admin"
// // //               element={
// // //                 <AdminPanel
// // //                   clothes={clothes}
// // //                   onDeleteListing={handleDeleteListing}
// // //                 />
// // //               }
// // //             />
// // //           </Routes>
// // //         </main>
// // //       </div>

// // //       <Footer />

// // //       {showAddModal && (
// // //         <AddItemModal
// // //           onClose={() => setShowAddModal(false)}
// // //           onItemAdded={handleAddItem}
// // //         />
// // //       )}

// // //       {showAuthModal && (
// // //         <AuthModal
// // //           onClose={() => setShowAuthModal(false)}
// // //           onLoginSuccess={(user) => setCurrentUser(user)}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useEffect } from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Footer from './components/Footer';
// // import AddItemModal from './components/AddItemModal';
// // import AuthModal from './components/AuthModal';
// // import { fetchListings, createListing } from './services/api';
// // import AdminPanel from './pages/AdminPanel';
// // import ItemDetail from './pages/ItemDetail';
// // import NearbyMap from './pages/NearbyMap';
// // import SwapHub from './pages/SwapHub';
// // import Home from './pages/Home';
// // import Profile from './pages/Profile';

// // export default function App() {
// //   const [clothes, setClothes] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [showAddModal, setShowAddModal] = useState(false);
// //   const [showAuthModal, setShowAuthModal] = useState(false);
// //   const [currentUser, setCurrentUser] = useState({ name: 'mohdrehan', email: 'rehan@example.com' });

// //   useEffect(() => {
// //     loadListings();
// //   }, []);

// //   const loadListings = async () => {
// //     try {
// //       setLoading(true);
// //       const data = await fetchListings();
// //       setClothes(Array.isArray(data) ? data : []);
// //     } catch (err) {
// //       console.error('API Error:', err);
// //       setClothes([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAddItem = async (newItemData) => {
// //     try {
// //       const createdItem = await createListing(newItemData);
// //       setClothes((prev) => [createdItem, ...prev]);
// //       setShowAddModal(false);
// //     } catch (err) {
// //       console.error('Error adding item:', err);
// //     }
// //   };

// //   const handleDeleteListing = (id) => {
// //     if (window.confirm("Are you sure you want to remove this listing?")) {
// //       setClothes((prev) => prev.filter((c) => (c._id || c.id) !== id));
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
// //       <div>
// //         <Navbar
// //           onOpenAddModal={() => setShowAddModal(true)}
// //           currentUser={currentUser}
// //           onOpenAuthModal={() => setShowAuthModal(true)}
// //         />

// //         <main className="max-w-7xl mx-auto px-4 py-8">
// //           <Routes>
// //             <Route
// //               path="/"
// //               element={
// //                 <Home
// //                   clothes={clothes}
// //                   loading={loading}
// //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// //                 />
// //               }
// //             />
// //             <Route path="/swaps" element={<SwapHub />} />
// //             <Route
// //               path="/map"
// //               element={
// //                 <NearbyMap
// //                   clothes={clothes}
// //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// //                 />
// //               }
// //             />
// //             <Route 
// //               path="/profile" 
// //               element={<Profile userListings={clothes} currentUser={currentUser} />} 
// //             />
// //             <Route
// //               path="/item/:id"
// //               element={
// //                 <ItemDetail
// //                   clothes={clothes}
// //                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
// //                 />
// //               }
// //             />
// //             <Route
// //               path="/admin"
// //               element={
// //                 <AdminPanel
// //                   clothes={clothes}
// //                   onDeleteListing={handleDeleteListing}
// //                 />
// //               }
// //             />
// //           </Routes>
// //         </main>
// //       </div>

// //       <Footer />

// //       {showAddModal && (
// //         <AddItemModal
// //           onClose={() => setShowAddModal(false)}
// //           onItemAdded={handleAddItem}
// //         />
// //       )}

// //       {showAuthModal && (
// //         <AuthModal
// //           onClose={() => setShowAuthModal(false)}
// //           onLoginSuccess={(user) => setCurrentUser(user)}
// //         />
// //       )}
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import AddItemModal from './components/AddItemModal';
// import AuthModal from './components/AuthModal';
// import { fetchListings, createListing } from './services/api';
// import AdminPanel from './pages/AdminPanel';
// import ItemDetail from './pages/ItemDetail';
// import Profile from './pages/Profile';
// import NearbyMap from './pages/NearbyMap';
// import SwapHub from './pages/SwapHub';
// import Home from './pages/Home';

// export default function App() {
//   const [clothes, setClothes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [currentUser, setCurrentUser] = useState({ name: 'mohdrehan', email: 'rehan@example.com' });

//   useEffect(() => {
//     loadListings();
//   }, []);

//   const loadListings = async () => {
//     try {
//       setLoading(true);
//       const data = await fetchListings();
//       setClothes(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error('API Error:', err);
//       setClothes([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddItem = async (newItemData) => {
//     try {
//       const createdItem = await createListing(newItemData);
//       setClothes((prev) => [createdItem, ...prev]);
//       setShowAddModal(false);
//     } catch (err) {
//       console.error('Error adding item:', err);
//     }
//   };

//   const handleDeleteListing = (id) => {
//     if (window.confirm("Are you sure you want to remove this listing?")) {
//       setClothes((prev) => prev.filter((c) => (c._id || c.id) !== id));
//     }
//   };

//   const handleLogout = () => {
//     setCurrentUser(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
//       <div>
//         <Navbar
//           onOpenAddModal={() => setShowAddModal(true)}
//           currentUser={currentUser}
//           onOpenAuthModal={() => setShowAuthModal(true)}
//           onLogout={handleLogout}
//         />

//         <main className="max-w-7xl mx-auto px-4 py-8">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <Home
//                   clothes={clothes}
//                   loading={loading}
//                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
//                 />
//               }
//             />
//             <Route path="/swaps" element={<SwapHub />} />
//             <Route
//               path="/map"
//               element={
//                 <NearbyMap
//                   clothes={clothes}
//                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
//                 />
//               }
//             />
//             <Route 
//               path="/profile" 
//               element={<Profile userListings={clothes} currentUser={currentUser} />} 
//             />
//             <Route
//               path="/item/:id"
//               element={
//                 <ItemDetail
//                   clothes={clothes}
//                   onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
//                 />
//               }
//             />
//             <Route
//               path="/admin"
//               element={
//                 <AdminPanel
//                   clothes={clothes}
//                   onDeleteListing={handleDeleteListing}
//                 />
//               }
//             />
//           </Routes>
//         </main>
//       </div>

//       <Footer />

//       {showAddModal && (
//         <AddItemModal
//           onClose={() => setShowAddModal(false)}
//           onItemAdded={handleAddItem}
//         />
//       )}

//       {showAuthModal && (
//         <AuthModal
//           onClose={() => setShowAuthModal(false)}
//           onLoginSuccess={(user) => setCurrentUser(user)}
//         />
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddItemModal from './components/AddItemModal';
import AuthModal from './components/AuthModal';
import { fetchListings, createListing } from './services/api';
import AdminPanel from './pages/AdminPanel';
import ItemDetail from './pages/ItemDetail';
import Profile from './pages/Profile';
import NearbyMap from './pages/NearbyMap';
import SwapHub from './pages/SwapHub';
import Home from './pages/Home';

export default function App() {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: 'mohdrehan', email: 'rehan@example.com' });

  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    try {
      setLoading(true);
      const data = await fetchListings();
      setClothes(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('API Error:', err);
      setClothes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async (newItemData) => {
    try {
      const createdItem = await createListing(newItemData);
      setClothes((prev) => [createdItem, ...prev]);
      setShowAddModal(false);
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };

  const handleDeleteListing = (id) => {
    if (window.confirm("Are you sure you want to remove this listing?")) {
      setClothes((prev) => prev.filter((c) => (c._id || c.id) !== id));
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    // Do NOT modify admin state here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      <div>
        {/* HIDE USER NAVBAR ON ADMIN PAGE */}
        {!isAdminRoute && (
          <Navbar
            onOpenAddModal={() => setShowAddModal(true)}
            currentUser={currentUser}
            onOpenAuthModal={() => setShowAuthModal(true)}
            onLogout={handleLogout}
          />
        )}

        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  clothes={clothes}
                  loading={loading}
                  onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
                />
              }
            />
            <Route path="/swaps" element={<SwapHub />} />
            <Route
              path="/map"
              element={
                <NearbyMap
                  clothes={clothes}
                  onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
                />
              }
            />
            <Route 
              path="/profile" 
              element={<Profile userListings={clothes} currentUser={currentUser} />} 
            />
            <Route
              path="/item/:id"
              element={
                <ItemDetail
                  clothes={clothes}
                  onProposeSwap={(i) => alert(`Swap proposed for ${i.title}`)}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <AdminPanel
                  clothes={clothes}
                  onDeleteListing={handleDeleteListing}
                />
              }
            />
          </Routes>
        </main>
      </div>

      <Footer />

      {showAddModal && (
        <AddItemModal
          onClose={() => setShowAddModal(false)}
          onItemAdded={handleAddItem}
        />
      )}

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={(user) => setCurrentUser(user)}
        />
      )}
    </div>
  );
}