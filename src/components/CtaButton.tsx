import { RiWhatsappFill } from "react-icons/ri"

export const CtaButton = () => {
   return (
      <button
         className="inline-flex items-center justify-center rounded-md bg-gold-800 px-4 py-3 text-xl font-bold text-black hover:bg-gold-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 transition-colors"
         onClick={() => window.open( "https://wa.link/nbogpa", "_blank" ) }
      >
         <RiWhatsappFill className="mr-2 h-6 w-6" />AGENDA TU CLASE DE PRUEBA
      </button>
   )
}
