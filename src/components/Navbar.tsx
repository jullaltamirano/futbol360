"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center space-x-2">
          <img src="/images/logo_horizontal.png" height={ 80 } width={ 150 } />
        </a>
        <nav className="hidden md:flex items-center space-x-6 ml-auto">
          <a href="/" className="text-sm font-medium hover:text-yellow-600 transition-colors">Inicio</a>
          <a href="/nosotros" className="text-sm font-medium hover:text-yellow-600 transition-colors">Nosotros</a>
          <a href="/contacto" className="text-sm font-medium hover:text-yellow-600 transition-colors">Contacto</a>
          <a href="https://www.tiktok.com/@futbol36077" target="_blank" className="text-sm font-medium hover:text-yellow-600 transition-colors" title="Tiktok"><FaTiktok /></a>
          <a href="https://www.instagram.com/futbol360peru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-sm font-medium hover:text-yellow-600 transition-colors" title="Instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/futbol360-/" target="_blank" className="text-sm font-medium hover:text-yellow-600 transition-colors" title="LinkedIn"><FaLinkedin /></a>
        </nav>
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {
        isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="container flex h-16 items-center justify-between px-4">
              <a href="/" className="flex items-center space-x-2">
                <img src="/images/logo_horizontal.png" height={ 80 } width={ 150 } />
              </a>
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
                aria-label="Cerrar menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="container grid gap-6 px-4 py-6">
              <a href="/" className="text-lg font-medium hover:text-yellow-600 transition-colors" onClick={toggleMenu}>
                Inicio
              </a>
              <a
                href="/nosotros"
                className="text-lg font-medium hover:text-yellow-600 transition-colors"
                onClick={toggleMenu}
              >
                Nosotros
              </a>
              <a
                href="/contacto"
                className="text-lg font-medium hover:text-yellow-600 transition-colors"
                onClick={toggleMenu}
              >
                Contacto
              </a>
              <div className="flex space-x-2">
                <a href="https://www.tiktok.com/@futbol36077" target="_blank" className="text-lg font-medium hover:text-yellow-600 transition-colors" title="Tiktok"><FaTiktok /></a>
                <a href="https://www.instagram.com/futbol360peru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-lg font-medium hover:text-yellow-600 transition-colors" title="Instagram"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/futbol360-/" target="_blank" className="text-lg font-medium hover:text-yellow-600 transition-colors" title="LinkedIn"><FaLinkedin /></a>
              </div>
            </nav>
          </div>
        )
      }
    </header>
  )
}
