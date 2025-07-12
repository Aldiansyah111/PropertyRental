import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import PropertyStatus from "../components/propertyrental/PropertyStatus";
import RemainingTime from "../components/propertyrental/RemainingTime";
import RentButton from "../components/propertyrental/RentButton";
import ResetButton from "../components/propertyrental/ResetButton";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"; // 🟢 Import icon

export default function PropertyRental() {
  const { id } = useParams();
  const propertyId = parseInt(id);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const navigate = useNavigate(); // 🟢 digunakan untuk navigate

  const triggerRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  if (isNaN(propertyId)) {
    return (
      <div className="text-center mt-20 text-red-600 font-semibold">
        ID properti tidak valid.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
      {/* 🟢 Tombol Kembali */}
      <button
        onClick={() => navigate("/explore")}
        className="mb-4 flex items-center text-indigo-600 hover:text-indigo-800 transition"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1 cursor-pointer" />
      </button>

      <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600">
        Sewa Properti
      </h2>

      <PropertyStatus propertyId={propertyId} refresh={refreshTrigger} />
      <RemainingTime propertyId={propertyId} refresh={refreshTrigger} />
      <RentButton propertyId={propertyId} onRefresh={triggerRefresh} />
      <ResetButton propertyId={propertyId} onRefresh={triggerRefresh} />

    </div>
  );
}
