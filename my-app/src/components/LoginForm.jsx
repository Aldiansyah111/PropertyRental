// components/login/LoginForm.jsx
export default function LoginForm() {
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Wallet Address</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            placeholder="Auto Connect via MetaMask"
            disabled
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
        >
          Connect Wallet
        </button>
      </form>
    </div>
  );
}
