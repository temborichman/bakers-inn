'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
}

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-slate-100 flex items-center justify-center py-16 px-4">
      {/* Main container */}
      <div className="w-full max-w-screen-xl mx-auto relative">
        {/* Blue card */}
        <motion.div
          className="bg-[#142064] rounded-xl shadow-xl p-6 md:p-10 lg:p-12 pb-16 text-white flex flex-col lg:flex-row justify-between hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Golden Brown Pattern Overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            aria-hidden="true"
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="40" fill="%23C19A5B" fill-opacity="0.13"/><rect x="250" y="100" width="90" height="90" rx="30" fill="%23C19A5B" fill-opacity="0.09"/><ellipse cx="320" cy="320" rx="50" ry="30" fill="%23C19A5B" fill-opacity="0.11"/><polygon points="120,300 180,350 60,370" fill="%23C19A5B" fill-opacity="0.10"/></svg>')`,
              backgroundRepeat: 'repeat',
              backgroundSize: '300px 300px',
              opacity: 0.7,
              mixBlendMode: 'lighten',
            }}
          />
          <div className="text-white flex flex-col gap-6 max-w-2xl relative z-10">
            <motion.h1
              className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Bringing you the<br />{' '}
              <span className="underline decoration-[#C19A5B] decoration-3 underline-offset-4">
                best value
              </span>{' '}
              at the{' '}
              <span className="underline decoration-[#C19A5B] decoration-3 underline-offset-4">
                best prices
              </span>
              .
            </motion.h1>

            <motion.p
              className="text-lg font-light opacity-90 mt-4 md:text-xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              The freshest sandwiches you can make with Baker&apos;s inn soft white loaf.
            </motion.p>

            <Link href="/products">
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
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
              </motion.div>
            </Link>
          </div>

          {/* Image */}
          <motion.div
            className="relative flex items-center justify-end z-10 overflow-visible"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/images/hero.png"
              alt="Fresh bread"
              width={800}
              height={800}
              className="object-contain transform scale-[1.2] -mr-10 md:scale-100 md:mr-0"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/African Pattern 2.png')] bg-repeat opacity-15 pointer-events-none mix-blend-overlay z-0" />
    </section>
  )
}

export default Hero;
