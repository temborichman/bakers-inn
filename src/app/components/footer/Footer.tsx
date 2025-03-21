"use client"

import Image from "next/image"
import Link from "next/link"
import { Twitter, Facebook, LinkedIn, Phone, Email } from "@mui/icons-material"

export default function Footer() {
  return (
    <footer className="bg-[#2d1a75] text-white">
      {/* Top logo section */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center justify-center">
          <div className="w-1/3 h-px bg-gray-400"></div>
          <div className="px-4">
            <Image
              src="/images/flogo.png"
              alt="Baker's Inn Logo"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
          <div className="w-1/3 h-px bg-gray-400"></div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Instagram Feed */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Instagram Feed</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="overflow-hidden">
                <Image
                  src="/images/HOTBUN.png"
                  alt="Instagram post 1"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/images/instafeed1.png"
                  alt="Instagram post 2"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/images/instafeed2.png"
                  alt="Instagram post 3"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="text-white hover:text-[#c9a55c] transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="text-white hover:text-[#c9a55c] transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <LinkedIn className="text-white hover:text-[#c9a55c] transition-colors" />
              </Link>
            </div>
          </div>

          {/* Our Location */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <address className="not-italic">
              <p>1 Shepperton Road,</p>
              <p>Graniteside,</p>
              <p>Harare,</p>
              <p>Zimbabwe.</p>
            </address>
          </div>

          {/* Get In Touch With Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch With Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="text-[#c9a55c] mr-2" fontSize="small" />
                <span>08080151</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#c9a55c] mr-2" fontSize="small" />
                <span>08080152</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#c9a55c] mr-2" fontSize="small" />
                <span>+263 242 751 481</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#c9a55c] mr-2" fontSize="small" />
                <span>+263 242 710 334</span>
              </div>
              <div className="flex items-center">
                <Email className="text-[#c9a55c] mr-2" fontSize="small" />
                <span>marketing@bakersinzim.com</span>
              </div>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Sitemap</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#c9a55c] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#c9a55c] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-[#c9a55c] transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/recipes" className="hover:text-[#c9a55c] transition-colors">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="/kids-corner" className="hover:text-[#c9a55c] transition-colors">
                    Kids Corner
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="mr-2">Subsidiary of</span>
              <Image src="/images/ins.png" alt="Parent Company Logo" width={120} height={40} />
            </div>
            <div>
              <p>
                Copyright © 2022 Bakers Inn. All rights reserved. Site by{" "}
                <a href="#" className="text-[#c9a55c] hover:underline">
                  NoWalls Pan Africa
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

