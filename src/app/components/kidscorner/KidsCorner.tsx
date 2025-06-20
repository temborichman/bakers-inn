"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const PlayButton = styled(Button)({
  backgroundColor: "#ff5a5f",
  color: "white",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: "#e04347",
  },
  textTransform: "uppercase",
  fontWeight: "bold",
  borderRadius: "4px",
  fontSize: "14px",
})

export default function KidsCorner() {
  return (
    <div className="max-full bg-white mx-auto my-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative bg-[#142064] rounded-lg overflow-hidden">
        {/* Background pattern - subtle game icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('/placeholder.svg')] bg-repeat"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center relative">
          {/* Mario and characters */}
          <div className="md:w-1/2 relative z-10">
            <Image
              src="/images/mario.png"
              alt="Mario and friends"
              width={800}
              height={800}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-8 text-center md:text-left z-10">
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide"
              style={{
                textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              Kids Corner
            </h2>
            <p className="text-white mb-8 max-w-md mx-auto md:mx-0">
              Let your children join the fun. Explore a place with exciting games and the top winners stand a chance to
              win exciting monthly prizes!
            </p>
            <PlayButton variant="contained">
  <Link href="/kids-corner">PLAY GAMES</Link>
</PlayButton>

          </div>
        </div>
      </div>
    </div>
  )
}

