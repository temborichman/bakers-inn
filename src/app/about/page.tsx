"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useEffect } from "react"

// Import animate.css for fade-in and slide-in animations
import "animate.css"

const GoldButton = styled(Button)({
  backgroundColor: "#c9a55c",
  color: "white",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: "#b08d4a",
  },
  textTransform: "uppercase",
  fontWeight: "bold",
  borderRadius: "0",
  fontSize: "14px",
})

export default function AboutPage() {
  // Using useEffect for fade-in animation when the component is loaded
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => el.classList.add('animate__fadeIn'));
  }, []);

  return (
    <section className="bg-white max-w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-start fade-in">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d1a75]">About Baker&apos;s Inn</h2>
        </div>
        <div>
          <p className="text-gray-700 mb-8">
            It all started back in the eighties when Baker&apos;s Inn was just a small confectionery company that employed 40
            people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient, and accessible
            answer to hunger&apos;s call.
          </p>
          <GoldButton variant="contained" className="hover:scale-110 transition-transform duration-300">
            READ MORE
          </GoldButton>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="overflow-hidden group hover:scale-105 transition-transform duration-300">
            <Image
              src={`/images/ab (${num}).png`}
              alt={`Gallery Image ${num}`}
              width={300}
              height={300}
              className="w-full h-[300px] rounded object-cover transition-all duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Our Story */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center fade-in">
        <div>
          <h2 className="text-4xl font-bold text-[#2d1a75]">Our Story</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Baker&apos;s Inn started as a small confectionery with just 40 employees, baking 30,000 loaves a day. Over the years,
            we&apos;ve grown into a beloved brand, known for delicious breads, pastries, and cakes. Our commitment is to bring fresh
            and high-quality products to your table.
          </p>
        </div>
        <Image
          src="/images/donate .png"
          alt="Baker preparing bread"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full object-cover transition-all duration-300 transform hover:scale-105"
        />
      </div>

      {/* Our Values */}
      <div className="bg-gray-100 py-16 text-center fade-in">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-[#2d1a75]">Our Values</h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            At Baker&apos;s Inn, we believe in quality, freshness, and community. Every loaf, pastry, and cake we make is crafted with these values at heart.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[{ title: "Quality Ingredients", desc: "We source the finest ingredients to ensure exceptional taste and nutrition." },
              { title: "Freshness Guaranteed", desc: "Baked daily, our products are delivered fresh to your table." },
              { title: "Community First", desc: "We support local farmers and give back to the communities we serve." },
            ].map((value, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 duration-300">
                <h3 className="text-xl font-bold text-[#2d1a75]">{value.title}</h3>
                <p className="text-gray-600 mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Bakers */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 text-center fade-in">
        <h2 className="text-4xl font-bold text-[#2d1a75]">Meet Our Bakers</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Our team of expert bakers brings passion and skill to every recipe.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[{ name: "John Doe", role: "Head Baker", img: "/images/bk.jpeg" },
            { name: "Maria Smith", role: "Pastry Chef", img: "/images/bk (1).jpeg" },
            { name: "James Wilson", role: "Bread Specialist", img: "/images/bk (2).jpeg" },
          ].map((baker, index) => (
            <div key={index} className="text-center transform transition-transform hover:scale-105 duration-300">
              <Image src={baker.img} alt={baker.name} width={250} height={250} className="rounded-full mx-auto transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-bold mt-4">{baker.name}</h3>
              <p className="text-gray-600">{baker.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="bg-gray-100 py-16 text-center fade-in">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-[#2d1a75]">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {["The best bread I&apos;ve ever had! Always fresh and delicious. Highly recommended!", "I love their pastries! You can taste the quality in every bite.", "Baker&apos;s Inn has been my go-to bakery for years. The flavors are simply amazing!"].map((quote, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
                <p className="text-gray-600">&quot;{quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 px-6 bg-[#2d1a75] text-white fade-in">
        <h2 className="text-4xl font-bold">Visit Our Bakery</h2>
        <p className="text-lg mt-3 max-w-2xl mx-auto">Experience the aroma of freshly baked bread and the warmth of our hospitality.</p>
        <Link href="/contact">
          <button className="mt-6 bg-[#c9a55c] hover:bg-[#b08d4a] text-white px-8 py-3 text-lg font-bold uppercase rounded transform hover:scale-110 transition-transform duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  )
}
