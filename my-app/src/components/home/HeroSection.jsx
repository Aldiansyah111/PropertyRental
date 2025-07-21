// File: components/home/HeroSection.jsx
// import { Link } from "react-router-dom";
// import heroImage from "../../assets/4.png";

// export default function HeroSection() {
//   return (
//     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//       <div className="text-center md:text-left">
//         <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 leading-tight">
//           Sewa Properti Blockchain by ALDIANYSAH
//         </h1>
//         <p className="text-gray-600 text-lg mb-6">
//           Platform modern untuk menyewa properti dengan keamanan blockchain. Aman, cepat, dan transparan.
//         </p>
//         <ul className="text-left mb-8 space-y-2">
//           <li className="flex items-start">
//             <span className="text-indigo-600 font-bold mr-2">✔</span>
//             Tanpa perantara & biaya tersembunyi
//           </li>
//           <li className="flex items-start">
//             <span className="text-indigo-600 font-bold mr-2">✔</span>
//             Kontrak pintar yang transparan
//           </li>
//           <li className="flex items-start">
//             <span className="text-indigo-600 font-bold mr-2">✔</span>
//             Transaksi instan dan aman
//           </li>
//         </ul>
//         <Link
//           to="/explore"
//           className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg shadow-md transition"
//         >
//           Mulai Jelajahi
//         </Link>
//       </div>
//       <div className="w-full">
//         <img
//           src={heroImage}
//           alt="Ilustrasi Sewa Properti"
//           className="rounded-xl shadow-lg w-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }



// versi english
import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  BoltIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import heroImage from "../../assets/2.png";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-20 items-center">
        {/* Left Side Content */}
        <div className="space-y-8">
          <h1 className="text-5xl font-extrabold text-indigo-700 leading-tight">
            Rent Properties with Blockchain Technology
            <br />
            by <span className="text-indigo-900">ALDIANYSAH</span>
          </h1>

          <p className="text-gray-600 text-lg">
            A next-generation rental platform secured by blockchain.
            <br />
            Safe, fast, and fully transparent — no middlemen, just trust.
          </p>

          {/* Features / Benefits List */}
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 mr-2" />
              <span>No intermediaries or hidden fees</span>
            </li>
            <li className="flex items-start">
              <LockClosedIcon className="w-5 h-5 text-blue-500 mt-1 mr-2" />
              <span>Smart contracts for transparent agreements</span>
            </li>
            <li className="flex items-start">
              <BoltIcon className="w-5 h-5 text-yellow-500 mt-1 mr-2" />
              <span>Instant and secure crypto transactions</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-purple-500 mt-1 mr-2" />
              <span>Ownership stays with you — we just provide the system</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-indigo-500 mt-1 mr-2" />
              <span>Join as a partner and publish your own properties today</span>
            </li>
          </ul>

          {/* CTA Button */}
          <Link
            to="/explore"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg shadow-md transition"
          >
            🚀 Start Exploring
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="">
          <img
            src={heroImage}
            alt="Property Rental Illustration"
            className="w-full object-cover animate-bounce"
          />
        </div>
      </div>
    </div>
  );
}
