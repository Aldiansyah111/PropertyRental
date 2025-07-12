import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connectWallet, getWalletAddress } from "../wallet/wallet";

export default function Navbar() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const loadWallet = async () => {
      const addr = await getWalletAddress();
      if (addr) setWallet(addr);
    };

    loadWallet();

    const handleAccountsChanged = (accounts) => {
      setWallet(accounts.length ? accounts[0] : null);
    };

    // Pasang listener
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    // Bersihkan listener saat unmount
    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      }
    };
  }, []);

  const handleConnect = async () => {
    const addr = await connectWallet();
    if (addr) setWallet(addr);
  };

  const shortAddress = (addr) => {
    return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          PropertyRental
        </Link>

        {/* Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/explore" className="text-gray-700 hover:text-indigo-600 transition">
            Explore
          </Link>
          <Link to="/create" className="text-gray-700 hover:text-indigo-600 transition">
            Tambah Properti
          </Link>
        </div>

        {/* Wallet */}
        <div>
          {wallet ? (
            <button
              className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-300"
              disabled
            >
              {shortAddress(wallet)}
            </button>
          ) : (
            <button
              onClick={handleConnect}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
