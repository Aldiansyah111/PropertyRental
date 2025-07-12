// wallet/wallet.js
import { ethers } from "ethers";

export const connectWallet = async () => {
  if (typeof window.ethereum === "undefined") {
    alert("MetaMask tidak tersedia");
    return null;
  }

  try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

    // Cek apakah accounts valid
    if (!accounts || !Array.isArray(accounts) || accounts.length === 0 || !accounts[0]) {
      alert("Tidak ada akun ditemukan di MetaMask");
      return null;
    }

    // Langsung return address tanpa normalisasi
    return accounts[0];
  } catch (err) {
    console.error("Gagal connect wallet:", err);
    return null;
  }
};

export const getWalletAddress = async () => {
  if (typeof window.ethereum === "undefined") return null;

  const accounts = await window.ethereum.request({ method: "eth_accounts" });

  if (!accounts || !Array.isArray(accounts) || accounts.length === 0 || !accounts[0]) {
    return null;
  }

  return accounts[0];
};

export const getChainId = async () => {
  if (!window.ethereum) return null;
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  return chainId;
};
