// import { useState } from "react";
// import { createProperty } from "../../context/property";

// export default function CreatePropertyForm() {
//   const [price, setPrice] = useState("");
//   const [duration, setDuration] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const result = await createProperty(price, duration);

//     if (result.success) {
//       setMessage("✅ Properti berhasil dibuat!");
//       setPrice("");
//       setDuration("");
//     } else {
//       setMessage("❌ Gagal membuat properti");
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
//       <h2 className="text-xl font-bold text-indigo-600">Buat Properti Baru</h2>

//       <div>
//         <label className="block text-sm font-medium">Harga Sewa (ETH)</label>
//         <input
//           type="number"
//           step="0.001"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full border px-3 py-2 rounded mt-1"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium">Durasi Sewa (hari)</label>
//         <input
//           type="number"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//           className="w-full border px-3 py-2 rounded mt-1"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
//       >
//         {loading ? "Memproses..." : "Buat Properti"}
//       </button>

//       {message && <p className="mt-3 text-sm text-center">{message}</p>}
//     </form>
//   );
// }


// import { useState } from "react";
// import { createProperty } from "../../context/property";

// export default function CreatePropertyForm() {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [price, setPrice] = useState("");
//   const [duration, setDuration] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const result = await createProperty(name, location, price, duration);

//     if (result.success) {
//       setMessage("✅ Properti berhasil dibuat!");
//       setName("");
//       setLocation("");
//       setPrice("");
//       setDuration("");
//     } else {
//       setMessage("❌ Gagal membuat properti");
//     }

//     setLoading(false);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4 bg-white p-6 rounded shadow max-w-md mx-auto"
//     >
//       <h2 className="text-xl font-bold text-indigo-600 text-center">Buat Properti Baru</h2>

//       <div>
//         <label className="block text-sm font-medium">Nama Properti</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border px-3 py-2 rounded mt-1"
//           placeholder="Contoh: Apartemen Sudirman"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium">Alamat / Lokasi</label>
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="w-full border px-3 py-2 rounded mt-1"
//           placeholder="Contoh: Jl. Sudirman No. 88, Jakarta"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium">Harga Sewa (ETH)</label>
//         <input
//           type="number"
//           step="0.001"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full border px-3 py-2 rounded mt-1"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium">Durasi Sewa (hari)</label>
//         <input
//           type="number"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//           className="w-full border px-3 py-2 rounded mt-1"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
//       >
//         {loading ? "Memproses..." : "Buat Properti"}
//       </button>

//       {message && <p className="mt-3 text-sm text-center">{message}</p>}
//     </form>
//   );
// }





// UPDAATE TAMPILAN
// import { useState } from "react";
// import { createProperty } from "../../context/property";
// import { useNavigate } from "react-router-dom";
// import { ArrowRightIcon } from "@heroicons/react/24/solid"; // ⬅️ pastikan sudah install heroicons

// export default function CreatePropertyForm() {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [price, setPrice] = useState("");
//   const [duration, setDuration] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [success, setSuccess] = useState(false); // ⬅️ state untuk tombol Explore
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const result = await createProperty(name, location, price, duration);

//     if (result.success) {
//       alert("✅ Properti berhasil dibuat!");
//       setName("");
//       setLocation("");
//       setPrice("");
//       setDuration("");
//       setSuccess(true); // ⬅️ munculkan tombol Explore
//     } else {
//       alert("❌ Gagal membuat properti");
//     }

//     setLoading(false);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-8 rounded-2xl shadow-md max-w-lg mx-auto space-y-6 border border-gray-100"
//     >
//       <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
//         🏗️ Buat Properti Baru
//       </h2>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Nama Properti
//         </label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           placeholder="Contoh: Apartemen Sudirman"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Alamat / Lokasi
//         </label>
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           placeholder="Contoh: Jl. Sudirman No. 88, Jakarta"
//           required
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Harga Sewa (ETH)
//           </label>
//           <input
//             type="number"
//             step="0.001"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Durasi Sewa (hari)
//           </label>
//           <input
//             type="number"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all cursor-pointer"
//       >
//         {loading ? "Memproses..." : "Buat Properti"}
//       </button>

//       {message && (
//         <p
//           className={`text-sm text-center ${
//             message.startsWith("✅") ? "text-green-600" : "text-red-500"
//           }`}
//         >
//           {message}
//         </p>
//       )}

//       {/* Tombol ke Explore */}
//       {success && (
//         <button
//           onClick={() => navigate("/explore")}
//           type="button"
//           className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-lg mt-2 transition-all cursor-pointer"
//         >
//           Lihat Properti <ArrowRightIcon className="w-4 h-4 ml-2" />
//         </button>
//       )}
//     </form>
//   );
// }




// UPDAATE TAMPILAN 2
import { useState } from "react";
import { createProperty } from "../../context/property";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function CreatePropertyForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await createProperty(name, location, price, duration);

    if (result.success) {
      alert("✅ Property created successfully!");
      setName("");
      setLocation("");
      setPrice("");
      setDuration("");
      setSuccess(true);
    } else {
      alert("❌ Failed to create property.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-md max-w-lg mx-auto space-y-6 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
        🏗️ Create New Property
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Property Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. Sudirman Apartment"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address / Location
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. Jl. Sudirman No. 88, Jakarta"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rent Price (ETH)
          </label>
          <input
            type="number"
            step="0.001"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration (days)
          </label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all cursor-pointer"
      >
        {loading ? "Submitting..." : "Create Property"}
      </button>

      {message && (
        <p
          className={`text-sm text-center ${
            message.startsWith("✅") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}

      {success && (
        <button
          onClick={() => navigate("/explore")}
          type="button"
          className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-lg mt-2 transition-all cursor-pointer"
        >
          View Properties <ArrowRightIcon className="w-4 h-4 ml-2" />
        </button>
      )}
    </form>
  );
}
