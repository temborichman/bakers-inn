"use client"

import { useState } from "react"
import Image from "next/image"
import { TextField, Button } from "@mui/material"
import { styled } from "@mui/material/styles"

// Custom styled MUI components
const SubmitButton = styled(Button)({
  backgroundColor: "#2d1a75",
  color: "white",
  padding: "12px 30px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#231458",
  },
  textTransform: "uppercase",
  fontWeight: "bold",
  width: "100%",
  fontSize: "16px",
})

const EmailInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "rgba(0, 0, 0, 0.1)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2d1a75",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#666",
  },
})

export default function Promotions() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Submitted email:", email)
  }

  return (
    <div className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div
        className="rounded-lg relative"
        style={{
          backgroundColor: "#c9a55c",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23d4b978' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%23c9a55c'/%3E%3Crect width='100%25' height='100%25' fill='url(%23smallGrid)'/%3E%3C/svg%3E\")",
        }}
      >
        <div className="flex flex-col md:flex-row items-center p-6 md:p-8 relative">
          {/* Left side - Text and form */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Get Notified About Promotions We Offer
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="flex-grow">
                <EmailInput
                  placeholder="your email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    style: { borderRadius: "4px" },
                  }}
                />
              </div>
              <div className="sm:w-32">
                <SubmitButton type="submit" variant="contained">
                  Submit
                </SubmitButton>
              </div>
            </form>
          </div>

          {/* Right side - Product images */}
          <div className="md:w-1/2 flex justify-center relative">
            {/* Bread image with top overlap */}
            <div className="relative w-full flex justify-center z-10">
              <div className="absolute top-[-170px] left-0 right-0 w-full flex justify-center z-20">
                <div className="w-2/3 md:w-3/4 lg:w-4/5">
                  <Image
                    src="/images/bottomb.png"
                    alt="Premium Soft White"
                    width={400} // Adjusted width
                    height={500} // Adjusted height
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
