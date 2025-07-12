import { useState } from "react";

const faqs = [
  {
    question: "Bagaimana cara kerja sistem blockchain di platform ini?",
    answer: "Setiap transaksi disimpan dalam kontrak pintar di blockchain untuk memastikan transparansi dan keamanan."
  },
  {
    question: "Apakah saya perlu menggunakan kripto untuk menyewa?",
    answer: "Tidak, kami menyediakan gateway pembayaran fiat dan kripto sesuai kebutuhan pengguna."
  },
  {
    question: "Apakah platform ini gratis digunakan?",
    answer: "Ya, pengguna dapat menjelajahi dan mencari properti tanpa biaya. Biaya hanya dikenakan saat transaksi."
  },
  {
    question: "Bagaimana keamanan data pengguna dijamin?",
    answer: "Semua data dienkripsi dan disimpan secara terdesentralisasi untuk meminimalisir risiko kebocoran data."
  },
  {
    question: "Apakah saya bisa membatalkan penyewaan setelah transaksi?",
    answer: "Tergantung pada kebijakan masing-masing pemilik properti yang telah disetujui dalam kontrak pintar."
  },
  {
    question: "Bagaimana proses verifikasi properti dilakukan?",
    answer: "Kami memiliki tim verifikasi dan juga dukungan sistem rating dari pengguna untuk menjaga kualitas listing."
  },
  {
    question: "Apa saja metode pembayaran yang tersedia?",
    answer: "Kami menerima transfer bank, e-wallet, dan kripto utama seperti USDT, ETH, dan BTC."
  },
  {
    question: "Bisakah saya menyewakan properti saya di platform ini?",
    answer: "Tentu! Anda bisa mendaftar sebagai pemilik dan mulai menyewakan setelah proses verifikasi selesai."
  },
  {
    question: "Apakah layanan tersedia secara internasional?",
    answer: "Saat ini kami berfokus di Asia Tenggara, namun ekspansi global sedang dalam rencana."
  },
  {
    question: "Bagaimana jika terjadi perselisihan antara penyewa dan pemilik?",
    answer: "Kami menyediakan sistem penyelesaian sengketa berbasis smart contract dan juga tim mediasi."
  },
  {
    question: "Apakah saya bisa menyimpan properti favorit?",
    answer: "Ya, pengguna bisa menyimpan listing favorit untuk diakses kembali nanti dengan akun terdaftar."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-20">
      <h2 className="text-4xl font-bold text-indigo-700 mb-10 text-center">Pertanyaan Umum</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-indigo-700 font-medium">{faq.question}</span>
              <span className="text-xl text-indigo-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
