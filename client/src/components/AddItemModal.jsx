// // import React, { useState } from 'react';

// // export default function AddItemModal({ onClose, onItemAdded }) {
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     brand: '',
// //     size: 'M',
// //     category: 'Jackets',
// //     condition: 'Good',
// //     estimatedValue: 50,
// //     image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80',
// //   });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onItemAdded(formData);
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// //       <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl animate-fade-in">
// //         <h2 className="text-xl font-bold text-gray-900">List New Clothing Item</h2>
        
// //         <form onSubmit={handleSubmit} className="space-y-3 text-xs font-semibold">
// //           <div>
// //             <label className="block mb-1 text-gray-700">Item Title</label>
// //             <input
// //               required
// //               type="text"
// //               placeholder="e.g. Vintage Denim Jacket"
// //               value={formData.title}
// //               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
// //               className="w-full p-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
// //             />
// //           </div>

// //           <div>
// //             <label className="block mb-1 text-gray-700">Brand Name</label>
// //             <input
// //               required
// //               type="text"
// //               placeholder="e.g. Levi's, Zara"
// //               value={formData.brand}
// //               onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
// //               className="w-full p-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
// //             />
// //           </div>

// //           <div className="grid grid-cols-2 gap-2">
// //             <div>
// //               <label className="block mb-1 text-gray-700">Category</label>
// //               <select
// //                 value={formData.category}
// //                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
// //                 className="w-full p-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
// //               >
// //                 <option value="Jackets">Jackets</option>
// //                 <option value="Dresses">Dresses</option>
// //                 <option value="Hoodies">Hoodies</option>
// //                 <option value="Tops">Tops</option>
// //                 <option value="Pants">Pants</option>
// //               </select>
// //             </div>

// //             <div>
// //               <label className="block mb-1 text-gray-700">Estimated Value ($)</label>
// //               <input
// //                 type="number"
// //                 value={formData.estimatedValue}
// //                 onChange={(e) => setFormData({ ...formData, estimatedValue: Number(e.target.value) })}
// //                 className="w-full p-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="block mb-1 text-gray-700">Image URL</label>
// //             <input
// //               type="text"
// //               value={formData.image}
// //               onChange={(e) => setFormData({ ...formData, image: e.target.value })}
// //               className="w-full p-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
// //             />
// //           </div>

// //           <div className="flex gap-2 pt-2">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-gray-700"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md"
// //             >
// //               Save to Database
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import { X, Upload, Tag, MapPin, FileText, Image as ImageIcon } from 'lucide-react';

// export default function AddItemModal({ onClose, onItemAdded }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     brand: '',
//     size: 'M',
//     category: 'Jackets',
//     condition: 'Like New',
//     estimatedValue: 50,
//     location: '1.2 km away',
//     description: '',
//     image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80',
//   });

//   const [previewImage, setPreviewImage] = useState(formData.image);

//   // Handle image file selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImage(reader.result);
//         setFormData({ ...formData, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onItemAdded(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-gray-100 pb-3">
//           <div>
//             <h2 className="text-xl font-extrabold text-gray-900">List New Apparel</h2>
//             <p className="text-xs text-gray-500">Upload item details for direct barter exchange.</p>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Form Body */}
//         <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
          
//           {/* File Upload Section */}
//           <div className="space-y-2">
//             <label className="block text-gray-700 flex items-center gap-1">
//               <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
//               Clothing Photo
//             </label>
//             <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl border border-dashed border-gray-300">
//               <img
//                 src={previewImage}
//                 alt="Preview"
//                 className="w-16 h-16 rounded-xl object-cover border border-gray-200"
//               />
//               <div className="flex-1">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   className="hidden"
//                   id="clothing-file-upload"
//                 />
//                 <label
//                   htmlFor="clothing-file-upload"
//                   className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
//                 >
//                   <Upload className="w-3.5 h-3.5" />
//                   Choose Photo
//                 </label>
//                 <p className="text-[10px] text-gray-400 mt-1">Supports JPG, PNG, WEBP</p>
//               </div>
//             </div>
//           </div>

//           {/* Title & Brand */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             <div>
//               <label className="block mb-1 text-gray-700">Apparel Title</label>
//               <input
//                 required
//                 type="text"
//                 placeholder="e.g. Vintage Denim Jacket"
//                 value={formData.title}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                 className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-gray-700">Brand Name</label>
//               <input
//                 required
//                 type="text"
//                 placeholder="e.g. Levi's, Zara, Nike"
//                 value={formData.brand}
//                 onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
//                 className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//             </div>
//           </div>

//           {/* Category, Condition, Size */}
//           <div className="grid grid-cols-3 gap-2">
//             <div>
//               <label className="block mb-1 text-gray-700">Category</label>
//               <select
//                 value={formData.category}
//                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                 className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               >
//                 <option value="Jackets">Jackets</option>
//                 <option value="Dresses">Dresses</option>
//                 <option value="Hoodies">Hoodies</option>
//                 <option value="Tops">Tops</option>
//                 <option value="Pants">Pants</option>
//                 <option value="Shoes">Shoes</option>
//               </select>
//             </div>

//             <div>
//               <label className="block mb-1 text-gray-700">Condition</label>
//               <select
//                 value={formData.condition}
//                 onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
//                 className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               >
//                 <option value="Like New">Like New</option>
//                 <option value="Good">Good</option>
//                 <option value="Fair">Fair</option>
//               </select>
//             </div>

//             <div>
//               <label className="block mb-1 text-gray-700">Size</label>
//               <input
//                 required
//                 type="text"
//                 placeholder="S, M, L, XL"
//                 value={formData.size}
//                 onChange={(e) => setFormData({ ...formData, size: e.target.value })}
//                 className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//             </div>
//           </div>

//           {/* Value & Location */}
//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <label className="block mb-1 text-gray-700 flex items-center gap-1">
//                 <Tag className="w-3 h-3 text-emerald-600" /> Est. Swap Value (₹)
//               </label>
//               <input
//                 type="number"
//                 value={formData.estimatedValue}
//                 onChange={(e) => setFormData({ ...formData, estimatedValue: Number(e.target.value) })}
//                 className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-1 text-gray-700 flex items-center gap-1">
//                 <MapPin className="w-3 h-3 text-emerald-600" /> Location / Area
//               </label>
//               <input
//                 type="text"
//                 placeholder="e.g. Downtown (1.5 km)"
//                 value={formData.location}
//                 onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                 className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//             </div>
//           </div>

//           {/* Item Description */}
//           <div>
//             <label className="block mb-1 text-gray-700 flex items-center gap-1">
//               <FileText className="w-3 h-3 text-emerald-600" /> Description
//             </label>
//             <textarea
//               rows="2"
//               placeholder="Describe wear condition, fabric material, fit details..."
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
//             />
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-2 pt-2 border-t border-gray-100">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-gray-700 transition"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md transition"
//             >
//               Publish Listing
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { X, Upload, Tag, MapPin, FileText, Image as ImageIcon } from 'lucide-react';

export default function AddItemModal({ onClose, onItemAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    size: 'M',
    category: 'Jackets',
    condition: 'Like New',
    estimatedValue: 50,
    location: '1.2 km away',
    description: '',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80',
  });

  const [previewImage, setPreviewImage] = useState(formData.image);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle image file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await onItemAdded(formData);
      onClose(); // Explicitly close modal after creation
    } catch (error) {
      console.error("Error creating listing:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">List New Apparel</h2>
            <p className="text-xs text-gray-500">Upload item details for direct barter exchange.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
          
          {/* File Upload Section */}
          <div className="space-y-2">
            <label className="block text-gray-700 flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
              Clothing Photo
            </label>
            <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl border border-dashed border-gray-300">
              <img
                src={previewImage}
                alt="Preview"
                className="w-16 h-16 rounded-xl object-cover border border-gray-200"
              />
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="clothing-file-upload"
                />
                <label
                  htmlFor="clothing-file-upload"
                  className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
                >
                  <Upload className="w-3.5 h-3.5" />
                  Choose Photo
                </label>
                <p className="text-[10px] text-gray-400 mt-1">Supports JPG, PNG, WEBP</p>
              </div>
            </div>
          </div>

          {/* Title & Brand */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-gray-700">Apparel Title</label>
              <input
                required
                type="text"
                placeholder="e.g. Vintage Denim Jacket"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Brand Name</label>
              <input
                required
                type="text"
                placeholder="e.g. Levi's, Zara, Nike"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Category, Condition, Size */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block mb-1 text-gray-700">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Jackets">Jackets</option>
                <option value="Dresses">Dresses</option>
                <option value="Hoodies">Hoodies</option>
                <option value="Tops">Tops</option>
                <option value="Pants">Pants</option>
                <option value="Shoes">Shoes</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Condition</label>
              <select
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Size</label>
              <input
                required
                type="text"
                placeholder="S, M, L, XL"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Value & Location */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-gray-700 flex items-center gap-1">
                <Tag className="w-3 h-3 text-emerald-600" /> Est. Swap Value (₹)
              </label>
              <input
                type="number"
                value={formData.estimatedValue}
                onChange={(e) => setFormData({ ...formData, estimatedValue: Number(e.target.value) })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600" /> Location / Area
              </label>
              <input
                type="text"
                placeholder="e.g. Downtown (1.5 km)"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Item Description */}
          <div>
            <label className="block mb-1 text-gray-700 flex items-center gap-1">
              <FileText className="w-3 h-3 text-emerald-600" /> Description
            </label>
            <textarea
              rows="2"
              placeholder="Describe wear condition, fabric material, fit details..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-gray-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md transition disabled:opacity-50"
            >
              {isSubmitting ? 'Publishing...' : 'Publish Listing'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}