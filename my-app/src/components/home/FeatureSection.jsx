// File: components/home/FeatureSection.jsx
import featureImage from "../../assets/4.png";
import { Link } from "react-router-dom";

export default function FeatureSection() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="w-full">
        <img
          src={featureImage}
          alt="Fitur Unggulan"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6">Kenapa Pilih Kami?</h2>
        <p className="text-gray-600 text-lg mb-6">
          Kami bukan sekadar platform sewa properti. Kami membawa revolusi digital ke dunia properti.
        </p>
        <ul className="text-left mb-8 space-y-2">
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">🚀</span>
            Proses verifikasi cepat dan mudah
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">🔒</span>
            Sistem keamanan terdesentralisasi
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">🌍</span>
            Akses global tanpa batas geografis
          </li>
        </ul>
        <Link
          to="/about"
          className="inline-block bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg text-lg shadow transition"
        >
          Pelajari Lebih Lanjut
        </Link>
      </div>
    </div>
  );
}