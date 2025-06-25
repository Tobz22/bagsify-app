import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)

  const updateCounts = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

    const totalCartItems = cart.reduce(
      (acc, item) => acc + (item.quantity || 1),
      0
    )
    setCartCount(totalCartItems)
    setWishlistCount(wishlist.length)
  }

  const [searchVisible, setSearchVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleSearch = () => setSearchVisible(!searchVisible)

  useEffect(() => {
    updateCounts()
    const handleCartUpdate = () => updateCounts()
    const handleWishlistUpdate = () => updateCounts()

    window.addEventListener('cartUpdated', handleCartUpdate)
    window.addEventListener('wishlistUpdated', handleWishlistUpdate)

    const onStorageChange = (e) => {
      if (e.key === 'cart' || e.key === 'wishlist') {
        updateCounts()
      }
    }
    window.addEventListener('storage', onStorageChange)

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate)
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate)
      window.removeEventListener('storage', onStorageChange)
    }
  }, [])

  return (
    <div>
      <div>
        {/* Navbar */}
        <div className='nav w-100 fixed-top bg-white shadow-sm'>
          {/* Navbar brand */}
          <div className='navbar navbar-expand-lg py-3 justify-content-between align-items-center w-100 nav-wrapper mobile-nav-top'>
            {/* Toggle Button */}
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            {/* Mobile Logo */}
            <Link
              to='/'
              className='navbar-brand mx-auto order-0 d-lg-none d-flex'
            >
              <h2 className='m-0 fw-bold' style={{ letterSpacing: '2px' }}>
                BAGSIFY
              </h2>
            </Link>
            {/* Mobile Icon */}
            <ul className='d-lg-none d-flex align-items-center gap-3 mobile-nav-icons'>
              <li className='nav-item'>
                {/* <a href='#'>
                  <i className='bi bi-search fs-5 text-dark'></i>
                </a> */}
                <a href='#' onClick={toggleSearch}>
                  <i className='bi bi-search icon-xs fs-5 text-dark'></i>
                </a>
                {searchVisible && (
                  <input
                    type='text'
                    className='form-control ms-2 mt-2'
                    placeholder='Search products...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '200px' }}
                  />
                )}
              </li>
              <li className='nav-item'>
                <a
                  href='#'
                  data-bs-toggle='modal'
                  data-bs-target='#signupModal'
                >
                  <i className='bi bi-person icon-xs fs-5 text-dark'></i>
                </a>
              </li>
              <Link to='/wishlist' className='nav-item position-relative'>
                <i className='bi bi-heart icon-xs fs-5 text-dark'></i>
                <span className='cart-count custom-rounded'>
                  {wishlistCount}
                </span>
              </Link>
              <Link to='/cart' className='nav-item position-relative'>
                <i className='bi bi-bag fs-5 icon-xs text-dark'></i>
                <span className=' cart-count custom-rounded'>{cartCount}</span>
              </Link>
            </ul>{' '}
            {/* Main Nav */}
            <div
              className='collapse navbar-collapse justify-content-between'
              id='navbarNav'
            >
              {/* leftnav link */}
              <ul className='navbar-nav nav-menu align-items-center gap-4'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-link'>
                    About Us
                  </Link>
                </li>
                {/* <li className='nav-item'>
                  <Link to='/shop' className='nav-link'>
                    Shop
                  </Link>
                </li> */}
                <li className='nav-item dropdown'>
                  <Link
                    to='#'
                    className='nav-link dropdown-toggle'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Shop
                  </Link>
                  <ul className='dropdown-menu custom-dropdown-bg'>
                    <li>
                      <Link to='/shop' className='dropdown-item fw-semibold'>
                        Bags
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/footwear'
                        className='dropdown-item fw-semibold'
                      >
                        Footwear
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link to='/stores' className='nav-link'>
                    Store
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contact' className='nav-link'>
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* center logo */}
              <Link to='/' className='navbar-brand d-none d-lg-flex'>
                <h2
                  className='mx-auto fw-bold'
                  style={{ letterSpacing: '2px' }}
                >
                  BAGSIFY
                </h2>
              </Link>

              {/* right icons */}
              <ul className='navbar-nav d-none d-lg-flex align-items-center gap-3 '>
                <li className='nav-item '>
                  {/* <a href='#'>
                    <i className='bi bi-search fs-5 text-dark'></i>
                  </a> */}
                  <a href='#' onClick={toggleSearch}>
                    <i className='bi bi-search fs-6 text-dark'></i>
                  </a>
                  {searchVisible && (
                    <input
                      type='text'
                      className='form-control ms-2 mt-2'
                      placeholder='Search products...'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{ width: '200px' }}
                    />
                  )}
                </li>
                <li className='nav-item'>
                  <a
                    href='#'
                    data-bs-toggle='modal'
                    data-bs-target='#signupModal'
                  >
                    <i className='bi bi-person fs-6 text-dark'></i>
                  </a>
                </li>
                <Link to='/wishlist' className='nav-item position-relative'>
                  <i className='bi bi-heart fs-6 text-dark'></i>
                  <span className=' cart-count custom-rounded'>
                    {wishlistCount}
                  </span>
                </Link>
                <Link to='/cart' className='nav-item position-relative'>
                  <i className='bi bi-bag fs-6 text-dark'></i>
                  <span className=' cart-count custom-rounded'>
                    {cartCount}
                  </span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* signup modal */}
        <div
          className='modal fade'
          id='signupModal'
          tabIndex='-1'
          aria-labelledby='signupModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content p-4'>
              <div className='modal-header border-0'>
                <h5 className='modal-title fw-bold' id='signupModalLabel'>
                  Sign Up
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                <form>
                  <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Your Name'
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Enter Email Address'
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Enter Password'
                      required
                    />
                  </div>
                  <p className='text-muted'>
                    By Signing up, you agree to our{' '}
                    <a href='#' className='text-success text-decoration-none'>
                      Terms
                    </a>{' '}
                    &{' '}
                    <a href='#' className='text-success text-decoration-none'>
                      Privacy Policy
                    </a>
                  </p>
                  <button type='button' className='btn btn-dark w-100'>
                    Sign Up
                  </button>
                </form>
                <div className='text-center mt-3'>
                  <p>
                    Already have an account?{' '}
                    <a href='#' className='text-success fw-bold'>
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
