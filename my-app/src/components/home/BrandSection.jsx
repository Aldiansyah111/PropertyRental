import brand1 from "../../assets/brands/brand.png";

export default function BrandSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-12">
          Dipercaya oleh Brand Ternama
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={brand1}
                alt={`Brand ${i + 1}`}
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
