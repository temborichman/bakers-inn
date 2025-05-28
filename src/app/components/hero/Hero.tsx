'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-slate-100 flex items-center justify-center py-16 px-4">
      {/* Main container */}
      <div className="w-full max-w-screen-xl mx-auto relative">
        {/* Blue card */}
        <div className="bg-[#142064] rounded-xl shadow-xl p-6 md:p-10 lg:p-12 pb-16 text-white flex flex-col lg:flex-row justify-between">
          <div className="text-white flex flex-col gap-6 max-w-2xl relative z-10">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Bringing you the<br />{' '}
              <span className="underline decoration-[#C19A5B] decoration-3 underline-offset-4">
                best value
              </span>{' '}
              at the{' '}
              <span className="underline decoration-[#C19A5B] decoration-3 underline-offset-4">
                best prices
              </span>
              .
            </h1>

            <p className="text-lg font-light opacity-90 mt-4 md:text-xl">
              The freshest sandwiches you can make with Baker's inn soft white loaf.
            </p>

            <Link href="/products">
              <Button
                variant="contained"
                color="primary"
                className="mt-6 py-2 px-6"
                sx={{
                  backgroundColor: '#C19A5B',
                  '&:hover': {
                    backgroundColor: '#A88347',
                  },
                }}
              >
                Read More
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative flex items-center justify-end z-10 overflow-visible">
            <Image
              src="/images/hero.png"
              alt="Fresh bread"
              width={800}
              height={800}
              className="object-contain transform scale-[1.2] -mr-10 md:scale-100 md:mr-0"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/African Pattern 2.png')] bg-repeat opacity-15 pointer-events-none mix-blend-overlay z-0" />
    </section>
  )
}

export default Hero;
