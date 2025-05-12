import { useState } from 'react';
import { Map, Marker } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/lib/providers.cjs.js'

import type { Location } from '../../../interfaces/location.interface'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiMiniXMark } from 'react-icons/hi2';

interface Props {
   location: Location
}

export const LocationModal = ( props: Props ) => {
   const { location } = props
  
   const maptilerProvider = maptiler('IthQbGZNZfQYxuYSoKNH', 'streets')
   const [isOpen, setIsOpen] = useState(false)

   const openModal = (  ) => {
      setIsOpen( true )
   }

   const closeModal = () => {
      setIsOpen( false )
   }

   return (
      <>
         <div className="bg-white border border-zinc-100 rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={ openModal } >
            <div className="p-5">
               <div className="flex items-center">
                  <FaMapMarkerAlt className="h-5 w-5 mr-2 text-yellow-600" />
                  <h3 className="font-bold text-lg">{ location.name }</h3>
               </div>
               <p className="text-sm text-gray-500 mt-1">{ location.address }</p>
            </div>
            <div className="p-0" >
               <div className="bg-gray-100 h-[350px] flex items-center justify-center overflow-hidden">
                  <img src={ location.image } alt={ location.name } className="object-cover w-full h-full" />
               </div>
            </div>
            <div>
               <div className="w-full text-gray-700 font-medium py-3 px-4 rounded transition-colors text-center" >
                  Ver Mapa
               </div>

            </div>
         </div>

         {
            isOpen && (
               <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={ closeModal }>
                  <div className="bg-white rounded-lg max-w-[600px] w-full max-h-[90vh] overflow-auto">
                  <div className="p-4 border-b flex justify-between items-center" onClick={ (e) => e.stopPropagation() }>
                     <div>
                        <h3 className="font-bold text-lg">{ location.name }</h3>
                        <p className="text-sm text-gray-500">{ location.address }</p>
                     </div>
                     <button onClick={ closeModal } className="p-2 rounded-full hover:bg-gray-100" aria-label="Cerrar">
                        <HiMiniXMark />
                     </button>
                  </div>
                  <div className="p-4 text-center" onClick={ (e) => e.stopPropagation() }>
                     <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Map
                           provider={maptilerProvider}
                           dprs={[1, 2]}
                           height={300} 
                           defaultCenter={[ location.latitude, location.longitude ]} 
                           defaultZoom={17}>
                              <Marker width={40} anchor={[ location.latitude, location.longitude ]} />
                        </Map>
                     </div>
                     <a href={ location.googleMaps } target='_blank' className='text-blue-600 hover:underline'>Ver en Google Maps</a>
                  </div>
                  </div>
               </div>
            )
         }
      </>
   )
}
