// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { connectWallet, getWalletAddress } from "../wallet/wallet";

// export default function Navbar() {
//   const [wallet, setWallet] = useState(null);

//   useEffect(() => {
//     const loadWallet = async () => {
//       const addr = await getWalletAddress();
//       if (addr) setWallet(addr);
//     };

//     loadWallet();

//     const handleAccountsChanged = (accounts) => {
//       setWallet(accounts.length ? accounts[0] : null);
//     };

//     if (window.ethereum) {
//       window.ethereum.on("accountsChanged", handleAccountsChanged);
//     }

//     return () => {
//       if (window.ethereum?.removeListener) {
//         window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
//       }
//     };
//   }, []);

//   const handleConnect = async () => {
//     const addr = await connectWallet();
//     if (addr) setWallet(addr);
//   };

//   const handleDisconnect = () => {
//     setWallet(null); // Hanya hapus dari local state
//   };

//   const shortAddress = (addr) => {
//     return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Brand */}
//         <Link to="/" className="text-2xl font-bold text-indigo-600">
//           PropertyRental
//         </Link>

//         {/* Nav Links */}
//         <div className="space-x-6 hidden md:flex">
//           <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
//             Home
//           </Link>
//           <Link to="/explore" className="text-gray-700 hover:text-indigo-600 transition">
//             Explore
//           </Link>
//           <Link to="/create" className="text-gray-700 hover:text-indigo-600 transition">
//             Tambah Properti
//           </Link>
//         </div>

//         {/* Wallet / Auth */}
//         <div className="flex items-center space-x-3">
//           {wallet ? (
//             <>
//               <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-300">
//                 {shortAddress(wallet)}
//               </span>
//               <button
//                 onClick={handleDisconnect}
//                 className="text-sm px-4 py-2 rounded-full font-medium text-red-600 hover:text-red-800 border border-red-300 bg-red-50"
//               >
//                 Disconnect
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="text-sm text-gray-700 hover:text-indigo-600 font-medium"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="text-sm text-gray-700 hover:text-indigo-600 font-medium"
//               >
//                 Register
//               </Link>
//               <button
//                 onClick={handleConnect}
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium"
//               >
//                 Connect Wallet
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }







// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { connectWallet, getWalletAddress } from "../wallet/wallet";

// export default function Navbar() {
//   const [wallet, setWallet] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Cek apakah user sudah login
//     const loginStatus = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(loginStatus === "true");

//     const loadWallet = async () => {
//       const addr = await getWalletAddress();
//       if (addr) setWallet(addr);
//     };

//     loadWallet();

//     const handleAccountsChanged = (accounts) => {
//       setWallet(accounts.length ? accounts[0] : null);
//     };

//     if (window.ethereum) {
//       window.ethereum.on("accountsChanged", handleAccountsChanged);
//     }

//     return () => {
//       if (window.ethereum?.removeListener) {
//         window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
//       }
//     };
//   }, []);

//   const handleConnect = async () => {
//     const addr = await connectWallet();
//     if (addr) setWallet(addr);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//     setWallet(null);
//     navigate("/login");
//   };

//   const shortAddress = (addr) => {
//     return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Brand */}
//         <Link to="/" className="text-2xl font-bold text-indigo-600">
//           PropertyRental
//         </Link>

//         {/* Nav Links */}
//         <div className="space-x-6 hidden md:flex">
//           <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
//             Home
//           </Link>
//           {isLoggedIn && (
//             <>
//               <Link to="/explore" className="text-gray-700 hover:text-indigo-600 transition">
//                 Explore
//               </Link>
//               <Link to="/create" className="text-gray-700 hover:text-indigo-600 transition">
//                 Tambah Properti
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Wallet / Auth */}
//         <div className="flex items-center space-x-3">
//           {isLoggedIn ? (
//             <>
//               {wallet ? (
//                 <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-300">
//                   {shortAddress(wallet)}
//                 </span>
//               ) : (
//                 <button
//                   onClick={handleConnect}
//                   className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium"
//                 >
//                   Connect Wallet
//                 </button>
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="text-sm px-4 py-2 rounded-full font-medium text-red-600 hover:text-red-800 border border-red-300 bg-red-50"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="text-sm text-gray-700 hover:text-indigo-600 font-medium"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="text-sm text-gray-700 hover:text-indigo-600 font-medium"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }




// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { connectWallet, getWalletAddress } from "../wallet/wallet";

// export default function Navbar() {
//   const [wallet, setWallet] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Cek status login
//     const loginStatus = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(loginStatus === "true");

//     const loadWallet = async () => {
//       const addr = await getWalletAddress();
//       if (addr) setWallet(addr);
//     };

//     loadWallet();

//     const handleAccountsChanged = (accounts) => {
//       setWallet(accounts.length ? accounts[0] : null);
//     };

//     if (window.ethereum) {
//       window.ethereum.on("accountsChanged", handleAccountsChanged);
//     }

//     return () => {
//       if (window.ethereum?.removeListener) {
//         window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
//       }
//     };
//   }, []);

//   const handleConnect = async () => {
//     const addr = await connectWallet();
//     if (addr) setWallet(addr);
//   };

//   const handleDisconnectWallet = () => {
//     setWallet(null); // Hanya hapus wallet dari state, tidak logout user
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//     setWallet(null);
//     navigate("/login");
//   };

//   const shortAddress = (addr) => {
//     return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Brand */}
//         <Link to="/" className="text-2xl font-bold text-indigo-600">
//           PropertyRental
//         </Link>

//         {/* Nav Links */}
//         <div className="space-x-6 hidden md:flex">
//           <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
//             Home
//           </Link>
//           {isLoggedIn && (
//             <>
//               <Link to="/explore" className="text-gray-700 hover:text-indigo-600 transition">
//                 Explore
//               </Link>
//               <Link to="/create" className="text-gray-700 hover:text-indigo-600 transition">
//                 Tambah Properti
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Wallet / Auth */}
//         <div className="flex items-center space-x-3">
//           {isLoggedIn ? (
//             <>
//               {wallet ? (
//                 <>
//                   <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-300">
//                     {shortAddress(wallet)}
//                   </span>
//                   <button
//                     onClick={handleDisconnectWallet}
//                     className="text-sm px-3 py-1 rounded-full font-medium text-yellow-700 hover:text-yellow-900 border border-yellow-300 bg-yellow-50 cursor-pointer"
//                   >
//                     Disconnect Wallet
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   onClick={handleConnect}
//                   className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
//                 >
//                   Connect Wallet
//                 </button>
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="text-sm px-3 py-1 rounded-full font-medium text-red-600 hover:text-red-800 border border-red-300 bg-red-50 cursor-pointer"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="text-sm text-gray-700 hover:text-indigo-600 font-medium"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="text-sm text-gray-700 hover:text-indigo-600 font-medium"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }




// update styling
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connectWallet, getWalletAddress } from "../wallet/wallet";

export default function Navbar() {
  const [wallet, setWallet] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");

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

  const handleDisconnectWallet = () => {
    setWallet(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setWallet(null);
    navigate("/login");
  };

  const shortAddress = (addr) => {
    return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";
  };

  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-white">
        ALProperty
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-white hover:text-gray-100 transition">
            Home
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/explore" className="text-white hover:text-gray-100 transition">
                Explore
              </Link>
              <Link to="/create" className="text-white hover:text-gray-100 transition">
                Add Property
              </Link>
            </>
          )}
        </div>

        {/* Wallet & Auth Buttons */}
        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <>
              {wallet ? (
                <>
                  <span className="bg-white text-blue-800 px-4 py-1 rounded-full text-sm font-medium border border-white">
                    {shortAddress(wallet)}
                  </span>
                  <button
                    onClick={handleDisconnectWallet}
                    className="text-sm px-3 py-1 rounded-full font-medium text-blue-600 bg-white hover:bg-gray-100 transition cursor-pointer"
                  >
                    Disconnect
                  </button>
                </>
              ) : (
                <button
                  onClick={handleConnect}
                  className="bg-white hover:bg-gray-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                >
                  Connect Wallet
                </button>
              )}
              <button
                onClick={handleLogout}
                className="text-sm px-3 py-1 rounded-full font-medium text-red-100 border border-red-200 hover:bg-red-700 transition cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-white hover:text-gray-100 font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm text-white hover:text-gray-100 font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}


