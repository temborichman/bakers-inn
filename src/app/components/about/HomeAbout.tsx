"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { motion } from "framer-motion"

const GoldButton = styled(Button)({
  backgroundColor: "#c9a55c",
  color: "white",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: "#b08d4a",
    transform: "scale(1.1)",  // Scale on hover for the button
  },
  textTransform: "uppercase",
  fontWeight: "bold",
  borderRadius: "0",
  fontSize: "14px",
  transition: "transform 0.3s ease-in-out", // Smooth scaling transition
})

export default function HomeAbout() {
  return (
    <section className="bg-white max-w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}  // Scale text slightly on hover
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d1a75]">About Baker&apos;s Inn</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}  // Scale text slightly on hover
        >
          <p className="text-gray-700 mb-8">
            It all started back in the eighties when Baker&apos;s Inn was just a small confectionery company that employed 40
            people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient, and accessible
            answer to hunger&apos;s call.
          </p>
          <Link href="/about" passHref>
            <GoldButton variant="contained" sx={{ borderRadius: '5px' }}>READ MORE</GoldButton>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}  // Scale image on hover
        >
          <Image
            src="/images/ab (1).png"
            alt="Sandwich with fries"
            width={300}
            height={300}
            className="w-full h-[300px] rounded object-cover transition-transform duration-300"
          />
        </motion.div>
        
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}  // Scale image on hover
        >
          <Image
            src="/images/ab (2).png"
            alt="Meat pies"
            width={300}
            height={300}
            className="w-full h-[300px] rounded object-cover transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}  // Scale image on hover
        >
          <Image
            src="/images/ab (3).png"
            alt="Donut and coffee"
            width={300}
            height={300}
            className="w-full h-[300px] rounded object-cover transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}  // Scale image on hover
        >
          <Image
            src="/images/ab (4).png"
            alt="Sliced bread"
            width={300}
            height={300}
            className="w-full h-[300px] rounded object-cover transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  )
}
