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

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

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

  const handleDisconnect = () => {
    setWallet(null); // Hanya hapus dari local state
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

        {/* Wallet / Auth */}
        <div className="flex items-center space-x-3">
          {wallet ? (
            <>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-300">
                {shortAddress(wallet)}
              </span>
              <button
                onClick={handleDisconnect}
                className="text-sm px-4 py-2 rounded-full font-medium text-red-600 hover:text-red-800 border border-red-300 bg-red-50"
              >
                Disconnect
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-gray-700 hover:text-indigo-600 font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm text-gray-700 hover:text-indigo-600 font-medium"
              >
                Register
              </Link>
              <button
                onClick={handleConnect}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                Connect Wallet
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
