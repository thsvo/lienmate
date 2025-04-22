"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-[#0080FF] flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-[#0080FF] text-2xl font-semibold">LienMate</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-gray-700 font-medium">
            Features
          </Link>
          <Link href="#integrations" className="text-gray-700 font-medium">
            Integrations
          </Link>
          <Link href="#benefits" className="text-gray-700 font-medium">
            Benefits
          </Link>
          <Link href="#audience" className="text-gray-700 font-medium">
            Who It's For
          </Link>
          <Link href="#testimonials" className="text-gray-700 font-medium">
            Testimonials
          </Link>
        </div>

        <Button className="hidden md:block bg-[#0080FF] hover:bg-[#0066CC]">Join the Waitlist</Button>

        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}

export default Navigation