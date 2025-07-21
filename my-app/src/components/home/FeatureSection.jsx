// File: components/home/FeatureSection.jsx
// import featureImage from "../../assets/4.png";
// import { Link } from "react-router-dom";

// export default function FeatureSection() {
//   return (
//     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//       <div className="w-full">
//         <img
//           src={featureImage}
//           alt="Fitur Unggulan"
//           className="rounded-xl shadow-lg w-full object-cover"
//         />
//       </div>
//       <div className="text-center md:text-left">
//         <h2 className="text-4xl font-bold text-indigo-700 mb-6">Kenapa Pilih Kami?</h2>
//         <p className="text-gray-600 text-lg mb-6">
//           Kami bukan sekadar platform sewa properti. Kami membawa revolusi digital ke dunia properti.
//         </p>
//         <ul className="text-left mb-8 space-y-2">
//           <li className="flex items-start">
//             <span className="text-indigo-600 font-bold mr-2">🚀</span>
//             Proses verifikasi cepat dan mudah
//           </li>
//           <li className="flex items-start">
//             <span className="text-indigo-600 font-bold mr-2">🔒</span>
//             Sistem keamanan terdesentralisasi
//           </li>
//           <li className="flex items-start">
//             <span className="text-indigo-600 font-bold mr-2">🌍</span>
//             Akses global tanpa batas geografis
//           </li>
//         </ul>
//         <Link
//           to="/about"
//           className="inline-block bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg text-lg shadow transition"
//         >
//           Pelajari Lebih Lanjut
//         </Link>
//       </div>
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import { ShieldCheckIcon, GlobeAltIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import featureImage from "../../assets/feature.png";

export default function FeatureSection() {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img
            src={featureImage}
            alt="Highlight Features"
            // className="rounded-2xl shadow-lg w-full object-cover"
            className="w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">
            Why Choose PropertyRental?
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We're not just a rental platform — we're building a decentralized ecosystem for property transactions.
          </p>

          <ul className="space-y-4 mb-8 text-left">
            <li className="flex items-start">
              <CheckBadgeIcon className="w-6 h-6 text-green-500 mr-3 mt-1" />
              <span className="text-gray-700">
                Fast and easy onboarding & verification
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="w-6 h-6 text-blue-500 mr-3 mt-1" />
              <span className="text-gray-700">
                Decentralized security backed by blockchain
              </span>
            </li>
            <li className="flex items-start">
              <GlobeAltIcon className="w-6 h-6 text-purple-500 mr-3 mt-1" />
              <span className="text-gray-700">
                Global access with no geographical limits
              </span>
            </li>
          </ul>

          <Link
            to="/about"
            className="inline-block bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg text-lg shadow transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
