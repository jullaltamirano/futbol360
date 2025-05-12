import { RiWhatsappFill } from "react-icons/ri"

export const CtaButton = () => {
   return (
      <button
         className="inline-flex items-center justify-center rounded-md bg-gold-800 px-4 py-2 text-base font-medium text-black hover:bg-gold-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 transition-colors"
         onClick={() => window.open( "https://wa.link/nbogpa", "_blank" ) }
      >
         <RiWhatsappFill className="mr-2 h-5 w-5" />Contactar
      </button>
   )
}
