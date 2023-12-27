
//   useEffect(() => {
//     const fetchData = async () => {
//       const db = firebase.firestore();
//       const data = await db.collection("images").get();
//       setImages(data.docs.map(doc => doc.data()));
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Or a loading spinner
//   }
//   console.log(images)
//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {images.map((image, index) => (
//         <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
//           <img className="w-full" src={image.src} alt={image.alt} />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{image.title}</div>
//             <p className="text-gray-700 text-base">{image.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ArtGallery;

import React, { useState, useEffect, useCallback } from "react";
import firebase from "pages/Firebase/firebase.js";

export const ArtGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Images").get();
      const imageData = data.docs.map((doc) => doc.data());
      setImages(imageData);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }
  return (
    <div className="grid grid-cols-3 mx-5">
      {images.map((image, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg my-4 mx-auto">
          <img className="w-full" src={image.src} alt={image.alt} />
          <div className="px-6 py-4">
            <div className="text-center font-bold text-xl mb-2">{image.title}</div>
            <p className="text-center text-gray-700 text-base">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
    };
export default ArtGallery;