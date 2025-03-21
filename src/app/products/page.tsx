import Image from "next/image";

export default function ProductsPage() {
  return (
    <section className="py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-[#2d1a75] mb-10">Our Complete Product Range</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["ab (1).png", "ab (2).png", "scones.png", "donuts.png", "ab (3).png", "ab (4).png", "donuts.png", "salmon.png"].map((img, index) => (
          <div key={index} className="overflow-hidden shadow-lg rounded-lg">
            <Image src={`/images/${img}`} alt="Bakery item" width={300} height={300} className="w-full h-[300px] rounded object-cover" />
          </div>
        ))}
      </div>

      {/* Best Sellers */}
      <div className="mt-16 py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-[#2d1a75] mb-6">Best Sellers</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our most popular baked goods, loved by our customers for their rich flavors and fresh ingredients.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {["salmon.png", "factorybread.png", "shortbread.png"].map((img, index) => (
            <div key={index} className="overflow-hidden shadow-lg rounded-lg">
              <Image src={`/images/${img}`} alt="Best seller" width={300} height={300} className="w-full h-[250px] rounded object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Customer Favorites */}
      <div className="mt-16 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#2d1a75] mb-6">Customer Favorites</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of the most highly-rated treats by our customers. Which one will be your favorite?
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {["ab (2).png", "salmon.png", "shortbread.png"].map((img, index) => (
            <div key={index} className="overflow-hidden shadow-lg rounded-lg">
              <Image src={`/images/${img}`} alt="Customer favorite" width={300} height={300} className="w-full h-[250px] rounded object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16 py-16 bg-[#2d1a75] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Baker's Inn?</h2>
        <p className="max-w-2xl mx-auto text-lg">
          We bake with passion, ensuring quality, freshness, and great taste in every bite.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-white text-[#2d1a75] shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Quality Ingredients</h3>
            <p className="mt-2">We use only the best ingredients to create our delicious treats.</p>
          </div>
          <div className="p-6 bg-white text-[#2d1a75] shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Freshly Baked Daily</h3>
            <p className="mt-2">Our products are baked fresh every day to ensure premium quality.</p>
          </div>
          <div className="p-6 bg-white text-[#2d1a75] shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Customer Satisfaction</h3>
            <p className="mt-2">We prioritize customer happiness, providing the best bakery experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
