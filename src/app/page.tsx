import Image from "next/image";
import Hero from "./components/hero/Hero";
import HomeAbout from "./components/about/HomeAbout";
import Products from "./components/products/Products";
import FactoryTour from "./components/factorytour/Factorytour";
import Request from "./components/request/Request";
import KidsCorner from "./components/kidscorner/KidsCorner";
import Recipe from "./components/recipe/Recipe";
import Promotions from "./components/promotions/Promotions";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout /> 
      <Products />
      <FactoryTour />
      <Request />
      <KidsCorner />
      <Recipe />
      <Promotions />
    </div>
  );
}
