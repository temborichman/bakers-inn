"use client"; // Only if using App Router

import Image from "next/image";
import { useRouter } from "next/navigation"; // If using App Router
// import { useRouter } from "next/router"; // If using Pages Router

const Products = () => {
  const router = useRouter();

  return (
    <section className="my-16 py-16 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-[#2d1a75] animate__animated animate__fadeIn">
        Our Product Range
      </h2>

      {/* Product Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["ab (1).png", "ab (2).png", "scones.png", "donuts.png"].map((img, index) => (
          <div key={index} className="overflow-hidden group relative transition-transform transform hover:scale-105">
            <Image
              src={`/images/${img}`}
              alt="Bakery product"
              width={300}
              height={300}
              className="w-full h-[300px] rounded object-cover transition-transform duration-300 ease-in-out group-hover:rotate-3"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => router.push("/products")}
          className="px-8 py-3 bg-[#b2904c] text-white font-bold rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105"
        >
          VIEW COMPLETE RANGE
        </button>
      </div>
    </section>
  );
};

export default Products;
