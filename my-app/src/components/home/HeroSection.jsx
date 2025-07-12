// File: components/home/HeroSection.jsx
import { Link } from "react-router-dom";
import heroImage from "../../assets/4.png";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 leading-tight">
          Sewa Properti Blockchain
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Platform modern untuk menyewa properti dengan keamanan blockchain. Aman, cepat, dan transparan.
        </p>
        <ul className="text-left mb-8 space-y-2">
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">✔</span>
            Tanpa perantara & biaya tersembunyi
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">✔</span>
            Kontrak pintar yang transparan
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">✔</span>
            Transaksi instan dan aman
          </li>
        </ul>
        <Link
          to="/explore"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg shadow-md transition"
        >
          Mulai Jelajahi
        </Link>
      </div>
      <div className="w-full">
        <img
          src={heroImage}
          alt="Ilustrasi Sewa Properti"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>
    </div>
  );
}