// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 py-4 ">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-black">
        &copy; {new Date().getFullYear()} PropertyRental. All rights reserved.
      </div>
    </footer>
  );
}
