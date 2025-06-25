import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsapp = () => {
  const whatsappNumber = '2349032600312' // your WhatsApp number (no +)
  const message =
    "Hi i'm reaching out from your website, i want to place an Order."

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={whatsappURL}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Contact us on WhatsApp'
      title='Chat on WhatsApp'
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        zIndex: 1000,
        cursor: 'pointer',
        textDecoration: 'none',
        animation: 'bounce 2.5s infinite',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#1ebe57'
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.35)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#25D366'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)'
      }}
    >
      <FaWhatsapp size={30} />
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </a>
  )
}

export default FloatingWhatsapp
