import React from 'react'
import type { Plan } from '../../../interfaces/plan.interface'

interface Props {
   plan: Plan
}

export const RegisterButton = ( props: Props ) => {
   const { plan } = props
  
   const sendWhatsAppMessage = () => {

      let message = `*Hola Futbol360,*\n\nEstoy interesado en inscribirme en un plan:\n\n*Plan:* ${ plan.title }\n*Precio:* ${ plan.price }`
      
      const encodedMessage = encodeURIComponent( message );
      const whatsappURL = `https://wa.me/+51960888024?text=${ encodedMessage }`;
      window.open( whatsappURL, '_blank' );

   };
  
   return (
      <button onClick={ sendWhatsAppMessage } className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded transition-colors">
         Inscribirme
      </button>
   )
}
