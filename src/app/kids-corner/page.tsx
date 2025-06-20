"use client"

import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import Link from "next/link"
import Image from "next/image"

const GameButton = styled(Button)({
  backgroundColor: "#ff5a5f",
  color: "white",
  padding: "10px 20px",
  marginTop: "10px",
  "&:hover": {
    backgroundColor: "#e04347",
  },
  textTransform: "uppercase",
  fontWeight: "bold",
  borderRadius: "4px",
  fontSize: "14px",
})

export default function Games() {
  const games = [
    {
      title: "Super Mario Bros",
      description: "Join Mario and his friends in this fun adventure!",
      image: "/images/smario.jpg",
      link: "https://supermario-game.com/",
    },
    {
      title: "Puzzle Adventure",
      description: "Solve puzzles and explore magical worlds!",
      image: "/images/puz.jpg",
      link: "https://www.jigsawexplorer.com/",
    },
    {
      title: "Animal Quest",
      description: "Embark on a journey with cute animals!",
      image: "/images/animal.jpg",
      link: "https://www.playdosgames.com/online/animal-quest/",
    },
  ]

  return (
    <div className="max-w-screen-lg mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-[#352483]">Fun Games for Kids</h2>

      <p className="text-lg text-center mb-8">Explore these exciting, free games! Play and have fun while learning.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div key={index} className="text-center p-6 bg-[#f9f9f9] rounded-lg shadow-lg">
            <Image src={game.image} alt={game.title} width={300} height={200} className="rounded-md mx-auto" />
            <h3 className="font-bold text-xl mt-4 mb-2">{game.title}</h3>
            <p className="text-gray-600">{game.description}</p>
            <Link href={game.link} target="_blank">
              <GameButton variant="contained">Play Now</GameButton>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/kids-corner">
          <Button variant="outlined" className="text-[#352483] border-[#352483] hover:bg-[#352483] hover:text-white">
            Back to Kids Corner
          </Button>
        </Link>
      </div>
    </div>
  )
}
