import { useEffect, useState } from "react";
import { getRemainingTime } from "../../context/property";

export default function RemainingTime({ propertyId }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (propertyId === undefined || propertyId === null) return;

    const update = async () => {
      try {
        const time = await getRemainingTime(propertyId);
        setTimeLeft(time);
      } catch (err) {
        console.error("Gagal ambil sisa waktu:", err);
        setTimeLeft(0);
      }
    };

    update();
    const interval = setInterval(update, 5000);

    return () => clearInterval(interval);
  }, [propertyId]);

  const format = (sec) => {
    if (sec === 0) return "Tidak ada";
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h} jam ${m} menit ${s} detik`;
  };

  return (
    <div className="mt-4 text-sm text-gray-700 border rounded-md p-4 bg-gray-50">
      <div className="flex items-center gap-2">
        <span className="font-medium">Sisa Waktu Sewa:</span>
        {timeLeft === null ? (
          <span className="text-gray-400">Loading...</span>
        ) : (
          <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full font-semibold">
            {format(timeLeft)}
          </span>
        )}
      </div>
    </div>
  );
}
