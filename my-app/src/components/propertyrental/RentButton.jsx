import { useState, useEffect } from "react";
import {
  rentProperty,
  getPropertyById,
  isRentalActive,
} from "../../context/property";

export default function RentButton({ propertyId, onRefresh }) {
  const [rentPrice, setRentPrice] = useState("0");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fetchData = async () => {
    if (propertyId === undefined || propertyId === null) return;

    try {
      const property = await getPropertyById(propertyId);
      if (property) {
        setRentPrice(property.rentAmount || "0");
        const active = await isRentalActive(propertyId);
        setStatus(active);
        setError("");
      }
    } catch (err) {
      console.error("Gagal ambil data properti:", err);
      setError("Gagal ambil data properti.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [propertyId]);

  const handleRent = async () => {
    setLoading(true);
    try {
      const result = await rentProperty(propertyId);
      if (result.success) {
        await fetchData();
        if (onRefresh) onRefresh();
        setSuccessMessage("Sewa berhasil!");
        setError("");

        // Otomatis hilangkan pesan sukses setelah 3 detik
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setError("Transaksi gagal.");
      }
    } catch (err) {
      console.error("Gagal menyewa:", err);
      setError("Gagal menyewa properti.");
    }
    setLoading(false);
  };

  return (
    <div className="mt-6 space-y-2">
      {status ? (
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Properti sedang disewa
          </span>
        </div>
      ) : (
        <button
          onClick={handleRent}
          disabled={loading}
          className={`w-full px-6 py-2 rounded-md transition font-medium text-white ${loading
            ? "bg-indigo-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Memproses..." : `Sewa Sekarang (${rentPrice} ETH)`}
        </button>
      )}

      {/* ✅ Success Message */}
      {successMessage && (
        <p className="text-sm text-green-600 border border-green-200 rounded-md px-3 py-2 bg-green-50">
          {successMessage}
        </p>
      )}

      {/* ⚠️ Error Message */}
      {error && (
        <p className="text-sm text-red-500 border border-red-200 rounded-md px-3 py-2 bg-red-50">
          {error}
        </p>
      )}
    </div>
  );
}
