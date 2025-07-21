// components/explore/ExplorePage.jsx
// import { useEffect, useState } from "react";
// import { getAllProperties } from "../context/property";
// import { Link } from "react-router-dom";

// export default function ExplorePage() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       setLoading(true);
//       const data = await getAllProperties();
//       setProperties(data);
//       setLoading(false);
//     };
//     fetchProperties();
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto mt-16 px-6">
//       <h2 className="text-3xl font-bold mb-6 text-indigo-700">Properti Tersedia</h2>

//       {loading ? (
//         <p className="text-gray-600">Memuat properti...</p>
//       ) : properties.length === 0 ? (
//         <p className="text-gray-600">Belum ada properti tersedia.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {properties.map((p, i) => (
//             <div key={i} className="bg-white rounded-lg shadow-md p-4">
//               <h3 className="text-xl font-semibold mb-1">Properti #{i + 1}</h3>
//               <p className="text-sm text-gray-500 mb-1">
//                 Pemilik: {p.owner.slice(0, 6)}...{p.owner.slice(-4)}
//               </p>
//               <p className="font-bold text-indigo-600 mb-1">
//                 {p.rentAmount} ETH / {Math.floor(p.rentDuration / 86400)} Hari
//               </p>
//               <p className="text-sm font-medium mb-2">
//                 {p.isRented ? (
//                   <span className="text-red-500">Sedang Disewa</span>
//                 ) : (
//                   <span className="text-green-600">Tersedia</span>
//                 )}
//               </p>
//               <Link
//                 to={`/rental/${p.id}`}
//                 className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded text-sm"
//               >
//                 Lihat Detail
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { getAllProperties } from "../context/property"; // ✅ perbaiki path kalau salah
// import { Link } from "react-router-dom";

// export default function ExplorePage() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       setLoading(true);
//       const data = await getAllProperties();
//       setProperties(data);
//       setLoading(false);
//     };
//     fetchProperties();
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto mt-16 px-6">
//       <h2 className="text-3xl font-bold mb-6 text-indigo-700">Properti Tersedia</h2>

//       {loading ? (
//         <p className="text-gray-600">Memuat properti...</p>
//       ) : properties.length === 0 ? (
//         <p className="text-gray-600">Belum ada properti tersedia.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {properties.map((p, i) => (
//             <div key={i} className="bg-white rounded-lg shadow-md p-4">
//               <h3 className="text-xl font-semibold text-indigo-700 mb-1">
//                 {p.name || `Properti #${i + 1}`}
//               </h3>
//               <p className="text-sm text-gray-500 italic mb-1">{p.location}</p>

//               <p className="text-sm text-gray-500 mb-1">
//                 Pemilik: {p.owner.slice(0, 6)}...{p.owner.slice(-4)}
//               </p>

//               <p className="font-bold text-indigo-600 mb-1">
//                 {p.rentAmount} ETH / {Math.floor(p.rentDuration / 86400)} Hari
//               </p>

//               <p className="text-sm font-medium mb-2">
//                 {p.isRented ? (
//                   <span className="text-red-500">Sedang Disewa</span>
//                 ) : (
//                   <span className="text-green-600">Tersedia</span>
//                 )}
//               </p>

//               <Link
//                 to={`/rental/${p.id}`}
//                 className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded text-sm"
//               >
//                 Lihat Detail
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { getAllProperties, initContract } from "../context/property";
// import { Link } from "react-router-dom";
// import UpdatePriceForm from "./propertyrental/UpdatePriceForm";

// export default function ExplorePage() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [account, setAccount] = useState("");

//   useEffect(() => {
//     const fetchProperties = async () => {
//       setLoading(true);

//       // Ambil semua properti
//       const data = await getAllProperties();
//       setProperties(data);

//       // Ambil signer dan alamat wallet user
//       const init = await initContract();
//       if (!init) return;
//       const { signer } = init;

//       if (signer && signer.getAddress) {
//         const userAddress = await signer.getAddress();
//         setAccount(userAddress);
//       }

//       setLoading(false);
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto mt-16 px-6">
//       <h2 className="text-3xl font-bold mb-6 text-indigo-700">Properti Tersedia</h2>

//       {loading ? (
//         <p className="text-gray-600">Memuat properti...</p>
//       ) : properties.length === 0 ? (
//         <p className="text-gray-600">Belum ada properti tersedia.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {properties.map((p, i) => (
//             <div key={i} className="bg-white rounded-lg shadow-md p-4">
//               <h3 className="text-xl font-semibold text-indigo-700 mb-1">
//                 {p.name || `Properti #${i + 1}`}
//               </h3>
//               <p className="text-sm text-gray-500 italic mb-1">{p.location}</p>

//               <p className="text-sm text-gray-500 mb-1">
//                 Pemilik: {p.owner.slice(0, 6)}...{p.owner.slice(-4)}
//               </p>

//               <p className="font-bold text-indigo-600 mb-1">
//                 {p.rentAmount} ETH / {Math.floor(p.rentDuration / 86400)} Hari
//               </p>

//               <p className="text-sm font-medium mb-2">
//                 {p.isRented ? (
//                   <span className="text-red-500">Sedang Disewa</span>
//                 ) : (
//                   <span className="text-green-600">Tersedia</span>
//                 )}
//               </p>

//               <Link
//                 to={`/rental/${p.id}`}
//                 className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded text-sm"
//               >
//                 Lihat Detail
//               </Link>

//               {/* ✅ Tampilkan form update harga jika wallet = pemilik */}
//               {account.toLowerCase() === p.owner.toLowerCase() && (
//                 <div className="mt-4">
//                   <UpdatePriceForm propertyId={p.id} />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


// update tampilan
// import { useEffect, useState } from "react";
// import { getAllProperties, initContract } from "../context/property";
// import { Link } from "react-router-dom";
// import UpdatePriceForm from "./propertyrental/UpdatePriceForm";

// export default function ExplorePage() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [account, setAccount] = useState("");

//   // 🆕 Angkat fungsi fetchProperties ke atas
//   const fetchProperties = async () => {
//     setLoading(true);

//     const data = await getAllProperties();
//     setProperties(data);

//     const init = await initContract();
//     if (!init) return;
//     const { signer } = init;

//     if (signer && signer.getAddress) {
//       const userAddress = await signer.getAddress();
//       setAccount(userAddress);
//     }

//     setLoading(false);
//   };

//   // Panggil saat komponen mount
//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto mt-20 px-6">
//       <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">
//         🏡 Explore Available Properties
//       </h2>

//       {loading ? (
//         <p className="text-gray-600 text-center">Memuat properti...</p>
//       ) : properties.length === 0 ? (
//         <p className="text-gray-500 text-center">Belum ada properti tersedia.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {properties.map((p, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 border border-gray-200 flex flex-col justify-between h-full"
//             >
//               <div>
//                 {/* Judul & Lokasi */}
//                 <div className="mb-4 border-b border-gray-100 pb-3">
//                   <h3 className="text-xl font-bold text-gray-800 mb-1">
//                     {p.name || `Properti #${i + 1}`}
//                   </h3>
//                   <p className="text-sm text-gray-500">{p.location}</p>
//                 </div>

//                 {/* Informasi Pemilik & Harga */}
//                 <div className="mb-4">
//                   <div className="flex justify-between items-center text-sm text-gray-600">
//                     <span className="font-medium">Pemilik:</span>
//                     <span className="ml-2 text-gray-800 font-mono">
//                       {p.owner.slice(0, 6)}...{p.owner.slice(-4)}
//                     </span>
//                   </div>

//                   <div className="mt-2">
//                     <span className="text-indigo-600 font-semibold text-base">
//                       {p.rentAmount} ETH
//                     </span>{" "}
//                     <span className="text-sm text-gray-500">
//                       / {Math.floor(p.rentDuration / 86400)} Hari
//                     </span>
//                   </div>

//                   {/* Status */}
//                   <div className="mt-2">
//                     {p.isRented ? (
//                       <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
//                         🚫 Sedang Disewa
//                       </span>
//                     ) : (
//                       <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
//                         ✅ Tersedia
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Tombol dan Form */}
//               <div className="mt-auto">
//                 {/* Tombol lihat detail */}
//                 <Link
//                   to={`/rental/${p.id}`}
//                   className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg text-sm transition-all"
//                 >
//                   Lihat Detail
//                 </Link>

//                 {/* Form update harga jika pemilik */}
//                 {account.toLowerCase() === p.owner.toLowerCase() && (
//                   <div className="mt-4 border-t border-gray-200 pt-4">
//                     <p className="text-sm font-medium text-gray-700 mb-2">
//                       Update Harga Sewa
//                     </p>
//                     <UpdatePriceForm
//                       propertyId={p.id}
//                       onUpdated={fetchProperties} // ✅ Trigger reload setelah update
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




// update tampilan 2 --> versi english
import { useEffect, useState } from "react";
import { getAllProperties, initContract } from "../context/property";
import { Link } from "react-router-dom";
import UpdatePriceForm from "./propertyrental/UpdatePriceForm";

export default function ExplorePage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState("");

  const fetchProperties = async () => {
    setLoading(true);

    const data = await getAllProperties();
    setProperties(data);

    const init = await initContract();
    if (!init) return;
    const { signer } = init;

    if (signer && signer.getAddress) {
      const userAddress = await signer.getAddress();
      setAccount(userAddress);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-20 px-6">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">
        🏡 Explore Available Properties
      </h2>

      {loading ? (
        <p className="text-gray-600 text-center">Loading properties...</p>
      ) : properties.length === 0 ? (
        <p className="text-gray-500 text-center">No properties available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 border border-gray-200 flex flex-col justify-between h-full"
            >
              <div>
                {/* Title & Location */}
                <div className="mb-4 border-b border-gray-100 pb-3">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {p.name || `Property #${i + 1}`}
                  </h3>
                  <p className="text-sm text-gray-500">{p.location}</p>
                </div>

                {/* Owner & Price Info */}
                <div className="mb-4">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span className="font-medium">Owner:</span>
                    <span className="ml-2 text-gray-800 font-mono">
                      {p.owner.slice(0, 6)}...{p.owner.slice(-4)}
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="text-indigo-600 font-semibold text-base">
                      {p.rentAmount} ETH
                    </span>{" "}
                    <span className="text-sm text-gray-500">
                      / {Math.floor(p.rentDuration / 86400)} days
                    </span>
                  </div>

                  {/* Rental Status */}
                  <div className="mt-2">
                    {p.isRented ? (
                      <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                        🚫 Rented
                      </span>
                    ) : (
                      <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
                        ✅ Available
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Buttons and Price Form */}
              <div className="mt-auto">
                <Link
                  to={`/rental/${p.id}`}
                  className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg text-sm transition-all"
                >
                  View Details
                </Link>

                {account.toLowerCase() === p.owner.toLowerCase() && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Update Rent Price
                    </p>
                    <UpdatePriceForm
                      propertyId={p.id}
                      onUpdated={fetchProperties}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
