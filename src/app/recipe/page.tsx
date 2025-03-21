"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom Styled Button
const GoldButton = styled(Button)({
  backgroundColor: "#c9a55c",
  color: "white",
  padding: "12px 40px",
  "&:hover": {
    backgroundColor: "#b08d4a",
  },
  textTransform: "uppercase",
  fontWeight: "bold",
  borderRadius: "8px",
  fontSize: "16px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
});

export default function RecipePage() {
  return (
    <section className="bg-white max-w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#2d1a75] mb-4">Welcome to Our Recipe Collection</h2>
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          Explore a variety of delicious recipes that are perfect for every occasion. From kid-friendly meals to healthy vegan options and hearty family favorites, we’ve got something for everyone.
        </p>
      </div>

      {/* Featured Image Section */}
      <div className="text-center mb-16">
        <Image
          src="/images/salmon.png"
          alt="Recipe Collection"
          width={800}
          height={500}
          className="rounded-lg shadow-xl mx-auto object-cover transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* Recipe Categories */}
      <div className="mb-12 text-center">
        <h3 className="text-3xl font-bold text-[#2d1a75] mb-8">Browse by Category</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <Image
              src="/images/scones.png"
              alt="Kids Recipes"
              width={450}
              height={350}
              className="rounded-lg shadow-lg object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-60 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span>Kids Recipes</span>
            </div>
          </div>
          <div className="relative group">
            <Image
              src="/images/instafeed2.png"
              alt="Vegan Recipes"
              width={450}
              height={350}
              className="rounded-lg shadow-lg object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-60 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span>Vegan Recipes</span>
            </div>
          </div>
          <div className="relative group">
            <Image
              src="/images/donuts.png"
              alt="Family Favorites"
              width={450}
              height={350}
              className="rounded-lg shadow-lg object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-60 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span>Family Favorites</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <GoldButton variant="contained">See All Categories</GoldButton>
        </div>
      </div>

      {/* Featured Recipe Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-[#2d1a75] mb-8">Featured Recipe</h3>
        <div className="flex justify-center items-center gap-16">
          <Image
            src="/images/shortbread.png"
            alt="Featured Recipe"
            width={350}
            height={250}
            className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          />
          <div className="max-w-md text-left">
            <h4 className="text-2xl font-semibold text-[#2d1a75] mb-4">Chocolate Cake</h4>
            <p className="text-lg text-gray-700 mb-6">
              Indulge in our rich and decadent chocolate cake, made with the finest ingredients and topped with a creamy, velvety frosting.
            </p>
            <GoldButton variant="contained">Get Recipe</GoldButton>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#2d1a75] mb-4">What Our Customers Say</h3>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Hear from our satisfied customers who’ve enjoyed our recipes and brought them to their own tables!
          </p>
        </div>
        <div className="flex justify-center gap-16">
          <div className="bg-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <p className="text-lg text-gray-600 mb-4">
              "These recipes have transformed our family dinners. Easy to follow, delicious, and loved by everyone!"
            </p>
            <p className="text-xl font-bold text-[#2d1a75]">Sarah T.</p>
            <p className="text-gray-500">Home Cook</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <p className="text-lg text-gray-600 mb-4">
              "As a vegan, it's hard to find great tasting recipes, but these vegan options are fantastic!"
            </p>
            <p className="text-xl font-bold text-[#2d1a75]">John D.</p>
            <p className="text-gray-500">Vegan Enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  );
}
