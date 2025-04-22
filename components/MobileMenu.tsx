"use client"

import React, { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="bg-white h-full w-4/5 max-w-sm p-5 shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#0080FF] flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-[#0080FF] text-2xl font-semibold">LienMate</span>
          </div>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-6">
          <Link href="#features" className="text-gray-700 font-medium text-lg" onClick={onClose}>
            Features
          </Link>
          <Link href="#integrations" className="text-gray-700 font-medium text-lg" onClick={onClose}>
            Integrations
          </Link>
          <Link href="#benefits" className="text-gray-700 font-medium text-lg" onClick={onClose}>
            Benefits
          </Link>
          <Link href="#audience" className="text-gray-700 font-medium text-lg" onClick={onClose}>
            Who It's For
          </Link>
          <Link href="#testimonials" className="text-gray-700 font-medium text-lg" onClick={onClose}>
            Testimonials
          </Link>
          
          <Button className="bg-[#0080FF] hover:bg-[#0066CC] w-full mt-4" onClick={onClose}>
            Join the Waitlist
          </Button>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu