"use client"

import { useState } from "react"
import axios from "axios"

import type React from "react"

import { validateNumber } from "../../../utilities/formValidator.utility"

export const ContactForm = () => {
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>( false )
  const [ formSubmitted, setFormSubmitted ] = useState<boolean>( false )
  const [ form, setForm ] = useState<{ name: string; email: string; phone: string; message: string }>({
    name: "",
    email: "",
    phone: "",
    message: ""
  })


  // Método para controlar el cambio de los inputs
  const handleInputChange = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = event.target

    if ( name === 'phone' && !validateNumber( value ) ) return

    setForm({
      ...form,
      [ name ]: value
    })
  }

  // Método para manejar el envío del formulario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const htmlContent = `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
                margin: 0;
              }
              .container {
                max-width: 600px;
                background-color: #ffffff;
                padding: 30px;
                margin: 0 auto;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
              }
              h2 {
                color: #333333;
                margin-top: 0;
              }
              .info {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #555555;
              }
              .value {
                color: #000000;
              }
              .footer {
                text-align: center;
                font-size: 12px;
                color: #999999;
                margin-top: 30px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>Nuevo mensaje desde el formulario de contacto</h2>
              <div class="info"><span class="label">Nombre:</span> <span class="value">${form.name}</span></div>
              <div class="info"><span class="label">Email:</span> <span class="value">${form.email}</span></div>
              <div class="info"><span class="label">Teléfono:</span> <span class="value">${form.phone}</span></div>
              <div class="info"><span class="label">Mensaje:</span><br/><div class="value">${form.message.replace(/\n/g, '<br/>')}</div></div>
              <div class="footer">Este correo fue enviado automáticamente desde Futbol360.</div>
            </div>
          </body>
        </html>
        `;
      const body = {
         sender: {
            name: 'Futbol360 - Contact Form',
            email: 'jullaltamiranop@gmail.com',
         },
         to: [
            {
               email: 'jullaltamiranop@gmail.com',
               name: 'Futbol360',
            },
         ],
         subject: 'Nuevo Contacto - Futbol360',
         htmlContent: htmlContent,
      };

      try {
          setIsSubmitting( true )
          const { data } = await axios.post('https://api.brevo.com/v3/smtp/email', body, {
             headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'api-key': import.meta.env.PUBLIC_BREVO_API_KEY,
             },
          });

          console.log(data)
          setIsSubmitting( false )
          setFormSubmitted( true )
          setForm({
            name: "",
            email: "",
            phone: "",
            message: ""
          });

          setTimeout(() => setFormSubmitted( false ) , 4000)
      } catch (error) {
         console.log(error);
         setIsSubmitting( false )
      }
  }

  return (
    <>
      <form onSubmit={ handleSubmit } className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            value={ form.name }
            onChange={ handleInputChange }
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-800 focus:border-transparent"
            autoComplete='off'
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={ form.email }
            onChange={ handleInputChange }
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-800 focus:border-transparent"
            autoComplete='off'
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            value={ form.phone }
            onChange={ handleInputChange }
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-800 focus:border-transparent"
            autoComplete='off'
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={ form.message }
            onChange={ handleInputChange }
            required
            placeholder="¿En qué podemos ayudarte?"
            className="min-h-[120px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-800 focus:border-transparent"
            autoComplete='off'
          />
        </div>
        <button
          type="submit"
          disabled={ isSubmitting }
          className="w-full bg-gold-800 hover:bg-gold-600 text-black font-medium py-2 px-4 rounded transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          { isSubmitting ? "Enviando..." : "Enviar mensaje" }
        </button>
      </form>

      {/* Toast notification */}
      <div
        id="toast"
        className={`fixed bottom-4 left-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg ${ formSubmitted ? "" : "hidden" }`}
      >
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-5 w-5"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Formulario enviado. Nos pondremos en contacto contigo pronto.</span>
        </div>
      </div>
    </>
  )
}
