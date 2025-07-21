// export default function AboutSection() {
//   return (
//     <div className="max-w-4xl mx-auto text-center">
//       <h2 className="text-4xl font-bold text-indigo-700 mb-6">Tentang Kami</h2>

//       <p className="text-gray-600 text-lg mb-4">
//         PropertyRental adalah platform modern yang memadukan teknologi blockchain dengan layanan sewa properti
//         untuk menciptakan sistem yang transparan, cepat, dan aman.
//       </p>

//       <p className="text-gray-600 text-lg mb-4">
//         Kami hadir untuk menghilangkan hambatan dalam transaksi properti tradisional seperti birokrasi, perantara,
//         dan risiko manipulasi data.
//       </p>

//       <div className="text-left mt-8">
//         <h3 className="text-2xl font-semibold text-indigo-600 mb-4">🎯 Visi Kami</h3>
//         <p className="text-gray-600 mb-6">
//           Menjadi pionir dalam digitalisasi sewa properti yang memberdayakan semua pihak dengan sistem terdesentralisasi.
//         </p>

//         <h3 className="text-2xl font-semibold text-indigo-600 mb-4">✅ Misi Kami</h3>
//         <ul className="space-y-3">
//           <li className="flex items-start">
//             <span className="text-indigo-600 mr-2">✔</span>
//             <span className="text-gray-600">Menyediakan platform sewa properti yang aman dan efisien</span>
//           </li>
//           <li className="flex items-start">
//             <span className="text-indigo-600 mr-2">✔</span>
//             <span className="text-gray-600">Menggunakan teknologi blockchain untuk kontrak pintar</span>
//           </li>
//           <li className="flex items-start">
//             <span className="text-indigo-600 mr-2">✔</span>
//             <span className="text-gray-600">Mendukung akses properti tanpa batas geografis</span>
//           </li>
//           <li className="flex items-start">
//             <span className="text-indigo-600 mr-2">✔</span>
//             <span className="text-gray-600">Membangun kepercayaan antara pemilik & penyewa</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }



import {
  ShieldCheckIcon,
  GlobeAltIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">
          About PropertyRental
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          We combine blockchain technology with the rental market to build a secure, transparent, and decentralized platform for property transactions.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Who We Are */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-4">
            <LightBulbIcon className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-semibold text-indigo-700">Who We Are</h3>
          </div>
          <p className="text-gray-600">
            PropertyRental is a decentralized property rental platform that offers efficiency, transparency, and safety — powered by smart contracts and Web3.
          </p>
        </div>

        {/* Why We Exist */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheckIcon className="w-6 h-6 text-green-500" />
            <h3 className="text-xl font-semibold text-indigo-700">Why We Exist</h3>
          </div>
          <p className="text-gray-600">
            We eliminate the traditional rental barriers like middlemen, bureaucracy, and contract manipulation by empowering both owners and renters directly.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-4">
            <GlobeAltIcon className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-semibold text-indigo-700">Our Vision</h3>
          </div>
          <p className="text-gray-600">
            To become the pioneer of decentralized property rentals — creating a future where real estate is borderless, accessible, and user-driven.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-4">
            <UserGroupIcon className="w-6 h-6 text-purple-500" />
            <h3 className="text-xl font-semibold text-indigo-700">Our Mission</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Provide secure and efficient property rental experiences</li>
            <li>Utilize smart contracts for automated trust</li>
            <li>Break geographical limits in property access</li>
            <li>Empower landlords and tenants equally</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

