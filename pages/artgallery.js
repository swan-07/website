
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
import firebase from "../Firebase/firebase.js";

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

  const columnCount = 3;
  const imageGroups = Array.from({ length: columnCount }, (_, i) =>
    images.slice(i * (images.length / columnCount), (i + 1) * (images.length / columnCount))
  );

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }
  return (
    // <div className="grid grid-cols-3 mx-5">
    //   {images.map((image, index) => (
    //     <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg my-4 mx-auto">
    //       <img className="w-full" src={image.src} alt={image.alt} />
    //       <div className="px-6 py-4">
    //         <div className="text-center font-bold text-xl mb-2">{image.title}</div>
    //         <p className="text-center text-gray-700 text-base">{image.description}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="m-8 grid grid-cols-3 gap-4">
      {imageGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="flex flex-col gap-4">
          {group.map((image, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={image.src} alt={image.alt} className="w-full" />
              <div className="px-6 py-4">
                <div className="text-center font-bold text-xl mb-2">{image.title}</div>
                <p className="text-center text-gray-700 text-base">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>


        // <div className="m-8 grid grid-cols-3 gap-4">
        //   <div className="flex flex-col gap-4">
        //     {images.slice(0, 3).map((image, index) => (
        //       <img key={index} src={image.src} alt={image.alt} />
        //     ))}
        //   </div>
        //   <div className="flex flex-col gap-4">
        //     {images.slice(3, 6).map((image, index) => (
        //       <img key={index} src={image.src} alt={image.alt} />
        //     ))}
        //   </div>
        //   <div className="flex flex-col gap-4">
        //     {images.slice(6, 9).map((image, index) => (
        //       <img key={index} src={image.src} alt={image.alt} />
        //     ))}
        //   </div>
        // </div>
  );
    };
export default ArtGallery;