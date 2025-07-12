// components/register/RegisterForm.jsx
export default function RegisterForm() {
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Register as Tenant</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
