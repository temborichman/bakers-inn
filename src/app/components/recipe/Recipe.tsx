"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Tab, Tabs } from "@mui/material"
import { styled } from "@mui/material/styles"
import { ArrowForward } from "@mui/icons-material"

// Custom styled MUI components
const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#c9a55c",
    height: "4px",
  },
})

const StyledTab = styled(Tab)({
  textTransform: "none",
  fontWeight: 700,
  fontSize: "18px",
  color: "#9e9e9e",
  "&.Mui-selected": {
    color: "#2d1a75",
  },
})

// Recipe data for different categories
const recipes = {
  kids: [
    {
      id: 1,
      title: "Shwarma Sandwich",
      prepTime: "20 min",
      serves: "6 people",
      image: "/images/ab (1).png",
    },
    {
      id: 2,
      title: "Shwarma Sandwich",
      prepTime: "30 min",
      serves: "4 people",
      image: "/images/ab (1).png",
    },
    {
      id: 3,
      title: "Shwarma Sandwich",
      prepTime: "25 min",
      serves: "8 people",
      image: "/images/ab (1).png",
    },
  ],
  vegans: [
    {
      id: 1,
      title: "Short Bread",
      prepTime: "15 min",
      serves: "2 people",
      image: "/images/shortbread.png",
    },
    {
      id: 2,
      title: "Short Bread",
      prepTime: "25 min",
      serves: "3 people",
      image: "/images/shortbread.png",
    },
    {
      id: 3,
      title: "Short Bread",
      prepTime: "10 min",
      serves: "1 person",
      image: "/images/shortbread.png",
    },
  ],
  family: [
    {
      id: 1,
      title: "Family Lasagna",
      prepTime: "50 min",
      serves: "6 people",
      image: "/images/salmon.png",
    },
    {
      id: 2,
      title: "Roast Chicken",
      prepTime: "1 hour",
      serves: "5 people",
      image: "/images/salmon.png",
    },
    {
      id: 3,
      title: "Apple Pie",
      prepTime: "45 min",
      serves: "6 people",
      image: "/images/salmon.png",
    },
  ],
}

export default function Recipe() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  // Determine which recipes to show based on selected tab
  const selectedRecipes = value === 0 ? recipes.kids : value === 1 ? recipes.vegans : recipes.family

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-[#2d1a75] text-center mb-12 animate__animated animate__fadeIn">
        Baker's Recipes
      </h2>

      <div className="mb-12">
        <StyledTabs value={value} onChange={handleChange} centered aria-label="recipe categories">
          <StyledTab label="For Kids" />
          <StyledTab label="For Vegans" />
          <StyledTab label="For Family" />
        </StyledTabs>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {selectedRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="relative group">
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#2d1a75] mb-4 transition-all duration-300 transform group-hover:translate-y-[-10px]">
                {recipe.title}
              </h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Prep Time:</span> {recipe.prepTime}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Serves:</span> {recipe.serves}
                  </p>
                </div>
                <button className="w-12 h-12 rounded-full bg-[#c9a55c] flex items-center justify-center text-white hover:bg-[#b08d4a] transition-colors transform hover:scale-110">
                  <ArrowForward />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
