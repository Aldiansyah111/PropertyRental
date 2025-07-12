// components/home/HomePage.jsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center py-20 px-6">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700">Welcome to PropertyRental</h1>
      <p className="text-gray-600 text-lg mb-8">
        Sewa properti berbasis blockchain. Aman, cepat, transparan.
      </p>

      <Link
        to="/explore"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-lg transition"
      >
        Mulai Jelajahi
      </Link>
    </div>
  );
}
