import { BrowserProvider, Contract, formatEther, parseEther } from "ethers";
import contractJson from "./PropertyRental.json";

const contractAbi = contractJson.abi;
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

let provider, signer, contract;

// ✅ Inisialisasi kontrak
export const initContract = async () => {
  if (typeof window.ethereum === "undefined") {
    alert("MetaMask belum terpasang");
    return null;
  }

  provider = new BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  contract = new Contract(contractAddress, contractAbi, signer);

  return contract;
};

// ✅ Buat properti baru
export const createProperty = async (priceEth, durationInDays) => {
  try {
    const contract = await initContract();
    if (!contract) throw new Error("Contract tidak tersedia");

    const priceInWei = parseEther(priceEth.toString());
    const tx = await contract.createProperty(priceInWei, durationInDays);
    await tx.wait();
    return { success: true };
  } catch (err) {
    console.error("Gagal membuat properti:", err);
    return { success: false, error: err };
  }
};

// ✅ Ambil total properti
export const getPropertyCount = async () => {
  try {
    const contract = await initContract();
    if (!contract) throw new Error("Contract tidak tersedia");

    const count = await contract.propertyCount();
    return Number(count);
  } catch (err) {
    console.error("Gagal ambil jumlah properti:", err);
    return 0;
  }
};

// ✅ Ambil properti by ID
export const getPropertyById = async (id) => {
  try {
    const contract = await initContract();
    if (!contract) throw new Error("Contract tidak tersedia");

    const data = await contract.getProperty(id); // pakai getProperty
    return {
      id,
      owner: data[0],
      tenant: data[1],
      rentAmount: formatEther(data[2]),
      rentDuration: Number(data[3]),
      rentStart: Number(data[4]),
      isRented: data[5],
    };
  } catch (err) {
    console.error("Gagal ambil properti:", err);
    return null;
  }
};

// ✅ Ambil semua properti
export const getAllProperties = async () => {
  try {
    const count = await getPropertyCount();
    const results = await Promise.all(
      Array.from({ length: count }).map((_, i) => getPropertyById(i))
    );
    return results;
  } catch (err) {
    console.error("Gagal ambil semua properti:", err);
    return [];
  }
};

// ✅ Sewa properti
export const rentProperty = async (id) => {
  try {
    const contract = await initContract();
    if (!contract) throw new Error("Contract tidak tersedia");

    const property = await contract.properties(id);
    const tx = await contract.rentProperty(id, {
      value: property.rentAmount,
    });
    await tx.wait();
    return { success: true };
  } catch (err) {
    console.error("Gagal menyewa properti:", err);
    return { success: false, error: err };
  }
};

// ✅ Reset properti
export const resetRental = async (id) => {
  try {
    const contract = await initContract();
    if (!contract) throw new Error("Contract tidak tersedia");

    const tx = await contract.resetRental(id);
    await tx.wait();
    return { success: true };
  } catch (err) {
    console.error("Gagal reset sewa:", err);
    return { success: false, error: err };
  }
};

// ✅ Cek status sewa
export const isRentalActive = async (id) => {
  try {
    const contract = await initContract();
    if (!contract) throw new Error("Kontrak tidak tersedia");

    const result = await contract.isRentalActive(id);
    return result;
  } catch (err) {
    console.error("Gagal cek status sewa:", err);
    return false;
  }
};


// ✅ Sisa waktu sewa
export const getRemainingTime = async (id) => {
  try {
    const contract = await initContract();
    if (!contract) throw new Error("Contract tidak tersedia");

    const result = await contract.getRemainingTime(id);
    return Number(result);
  } catch (err) {
    console.error("Gagal ambil waktu sisa:", err);
    return 0;
  }
};

// ✅ Ambil penyewa properti
export const getTenant = async (id) => {
  try {
    const contract = await initContract();
    if (!contract) throw new Error("Contract tidak tersedia");

    const data = await contract.properties(id);
    return data.tenant;
  } catch (err) {
    console.error("Gagal ambil tenant:", err);
    return null;
  }
};
