export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-indigo-700 mb-6">Tentang Kami</h2>

      <p className="text-gray-600 text-lg mb-4">
        PropertyRental adalah platform modern yang memadukan teknologi blockchain dengan layanan sewa properti
        untuk menciptakan sistem yang transparan, cepat, dan aman.
      </p>

      <p className="text-gray-600 text-lg mb-4">
        Kami hadir untuk menghilangkan hambatan dalam transaksi properti tradisional seperti birokrasi, perantara,
        dan risiko manipulasi data.
      </p>

      <div className="text-left mt-8">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">🎯 Visi Kami</h3>
        <p className="text-gray-600 mb-6">
          Menjadi pionir dalam digitalisasi sewa properti yang memberdayakan semua pihak dengan sistem terdesentralisasi.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">✅ Misi Kami</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✔</span>
            <span className="text-gray-600">Menyediakan platform sewa properti yang aman dan efisien</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✔</span>
            <span className="text-gray-600">Menggunakan teknologi blockchain untuk kontrak pintar</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✔</span>
            <span className="text-gray-600">Mendukung akses properti tanpa batas geografis</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✔</span>
            <span className="text-gray-600">Membangun kepercayaan antara pemilik & penyewa</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
