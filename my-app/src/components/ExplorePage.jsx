// components/explore/ExplorePage.jsx
import { useEffect, useState } from "react";
import { getAllProperties } from "../context/property";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      const data = await getAllProperties();
      setProperties(data);
      setLoading(false);
    };
    fetchProperties();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-16 px-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Properti Tersedia</h2>

      {loading ? (
        <p className="text-gray-600">Memuat properti...</p>
      ) : properties.length === 0 ? (
        <p className="text-gray-600">Belum ada properti tersedia.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-1">Properti #{i + 1}</h3>
              <p className="text-sm text-gray-500 mb-1">
                Pemilik: {p.owner.slice(0, 6)}...{p.owner.slice(-4)}
              </p>
              <p className="font-bold text-indigo-600 mb-1">
                {p.rentAmount} ETH / {Math.floor(p.rentDuration / 86400)} Hari
              </p>
              <p className="text-sm font-medium mb-2">
                {p.isRented ? (
                  <span className="text-red-500">Sedang Disewa</span>
                ) : (
                  <span className="text-green-600">Tersedia</span>
                )}
              </p>
              <Link
                to={`/rental/${p.id}`}
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded text-sm"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
