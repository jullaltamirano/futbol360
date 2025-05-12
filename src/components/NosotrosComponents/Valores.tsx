import React from 'react'

import { BiTargetLock } from "react-icons/bi";
import { IoIosFitness } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

const values = [
   {
      title: "Propósito",
      description: "Buscamos la excelencia en todo lo que hacemos, desde la calidad de nuestros entrenamientos hasta la atenci&oacute;n personalizada.",
      icon: <BiTargetLock />,
   },
   {
      title: "Disciplina",
      description: "Promovemos hábitos saludables y un estilo de vida activo para mejorar la calidad de vida de nuestros miembros.",
      icon: <IoIosFitness />,
   },
   {
      title: "Pasión",
      description: "Creamos un ambiente inclusivo donde todos se sienten parte de una comunidad unida por la pasi&oacute;n por el fútbol.",
      icon: <FaHeart />,
   },
   {
      title: "Competitividad",
      description: "Incorporamos constantemente nuevas metodologías y tecnologías para optimizar el rendimiento deportivo.",
      icon: <FaRunning />,
   },
   {
      title: "Trabajo en Equipo",
      description: "Fomentamos el respeto mutuo, la deportividad y el juego limpio en todas nuestras actividades.",
      icon: <RiTeamFill />,
   },
];

export const Valores = () => {
   return (
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
         {values.map((value, index) => (
         <div
            key={index}
            className={`bg-white rounded-lg shadow p-6 text-center 
               ${ +index === 3 ? "lg:col-span-2 lg:col-start-2" : " lg:col-span-2"}
            `}
         >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-6 mx-auto">
               <div className='text-3xl'>{value.icon}</div>
            </div>
            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
            {/* <p className="text-gray-500">{value.description}</p> */}
         </div>
         ))}
      </div>
   )
}
