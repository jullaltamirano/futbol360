"use client"

import { LuMessageCircleMore } from "react-icons/lu"

export const WhatsappButton = () => {
  const openWhatsapp = () => {
    window.open( "https://wa.link/nbogpa", "_blank" )
  }

  return (
    <button
      onClick={openWhatsapp}
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 bg-gold-800 hover:bg-gold-600 hover:scale-105 shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out"
    >
      <LuMessageCircleMore className="h-6 w-6 text-black" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </button>
  )
}
