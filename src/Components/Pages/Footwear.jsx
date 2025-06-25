import React from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import footwear from '../../Footwear.json'

function Footwear() {
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = footwear.filter((item) =>
    item.productname.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const addToWishlist = (footwear) => {
    const existing = JSON.parse(localStorage.getItem('wishlist')) || []
    if (!existing.some((p) => p.id === footwear.id)) {
      const updated = [...existing, footwear]
      localStorage.setItem('wishlist', JSON.stringify(updated))
      window.dispatchEvent(new Event('wishlistUpdated'))
      toast.success(`${footwear.productname} added to Your wishlist`)
    } else {
      toast.info(`${footwear.productname} is already in your wishlist`)
    }
  }
  const addToCart = (footwear) => {
    const existing = JSON.parse(localStorage.getItem('cart')) || []
    const alreadyInCart = existing.find((p) => p.id === footwear.id)

    if (!alreadyInCart) {
      const updatedFootwear = { ...footwear, quantity: 1 }
      const updatedCart = [...existing, updatedFootwear]
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      window.dispatchEvent(new Event('cartUpdated'))
      toast.success(`${footwear.productname}added to Your cart!`)
    } else {
      toast.info(`${footwear.productname} is already in your cart!`)
    }
  }

  return (
    <div>
      <ol className='section-banner py-3 position-relative'>
        <li className='position-relative'>
          <Link to='/'>Home</Link>
        </li>
        <li className='position-relative active'>
          <span className='ps-5'>Footwears</span>
        </li>
      </ol>

      <div className='container'>
        <h1 className='text-center py-4 fw-semibold'>Footwears</h1>
        <div className='row footwear'>
          {footwear.map((footwear) => (
            <div className='col-lg-4 col-md-6 mb-0'>
              <div className='footwear-items text-center position-center'>
                <div className='footwear-image w-100 position-relative overflow-hidden'>
                  <img
                    src={footwear.image}
                    alt='footwear-image'
                    className='img-flid'
                    // style={{ width: '300px', height: '300px' }}
                  />
                </div>
                <div className='footwear-icons gap-3'>
                  <div
                    className='footwear-icon'
                    title='Add to Wishlist'
                    onClick={() => addToWishlist(footwear)}
                  >
                    <i className='bi bi-heart fs-5'></i>
                  </div>
                  <div
                    className='footwear-icon'
                    title='Add to Cart'
                    onClick={() => addToCart(footwear)}
                  >
                    <i className='bi bi-cart3 fs-5'></i>
                  </div>
                </div>
                <div className='footwear-content pt-3 w-100 position-relatve'>
                  <div className='footwear-title'>
                    {/* <div className='title'>
                    <span className='title'>{footwear.type}</span>
                  </div> */}
                    <h3>{footwear.productname}</h3>
                    <ul className='py-3 d-flex w-100 text-center justify-content-center gap-2'>
                      <li>
                        <span className='active position-relative ps-2 '>
                          {footwear.Price}{' '}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footwear
