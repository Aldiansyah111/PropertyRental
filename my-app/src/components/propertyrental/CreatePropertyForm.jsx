import { useState } from "react";
import { createProperty } from "../../context/property";

export default function CreatePropertyForm() {
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await createProperty(price, duration);

    if (result.success) {
      setMessage("✅ Properti berhasil dibuat!");
      setPrice("");
      setDuration("");
    } else {
      setMessage("❌ Gagal membuat properti");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-indigo-600">Buat Properti Baru</h2>

      <div>
        <label className="block text-sm font-medium">Harga Sewa (ETH)</label>
        <input
          type="number"
          step="0.001"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border px-3 py-2 rounded mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Durasi Sewa (hari)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full border px-3 py-2 rounded mt-1"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        {loading ? "Memproses..." : "Buat Properti"}
      </button>

      {message && <p className="mt-3 text-sm text-center">{message}</p>}
    </form>
  );
}
