import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(savedCart)
  }, [])

  const updateQuantity = (id, type) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        if (type === 'increase') {
          return { ...item, quantity: item.quantity + 1 }
        } else if (type === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item
    })
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id)
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
    window.dispatchEvent(new Event('cartUpdated'))
    toast.error('Item Removed From Cart!')
  }

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0
    return Number(priceStr.replace(/₦|,/g, '')) || 0
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceNumber = parsePrice(item.Price)
    return acc + priceNumber * (item.quantity || 1)
  }, 0)

  return (
    <div>
      <ol className='section-banner py-3 position-relative'>
        <li className='position-relative'>
          <Link to='/'>Home</Link>
        </li>
        <li className='position-relative active'>
          <a href='#' className='ps-5'>
            Cart
          </a>
        </li>
      </ol>

      <div className='container my-5'>
        <div className='text-center mb-4 fw-bold'>❤️ Your Cart</div>
        {cartItems.length === 0 ? (
          <div className='text-center'>
            <p className='lead'>Your Cart is Empty!</p>
            <Link to='/shop' className='cart-btn'>
              back To Shop
            </Link>
          </div>
        ) : (
          <div className='row g-4'>
            <div className='col-lg-8'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className='card shadow-sm border-0 rounded-4 mb-3 p-3'
                >
                  <div className='row align-items-center'>
                    <div className='col-3'>
                      <img
                        src={item.image}
                        className='img-fluid rounded-3'
                        alt=''
                      />
                    </div>
                    <div className='col-9 d-flex flex-column  flex-md-row justify-content-between align-items-center'>
                      <div className='text-start w-100'>
                        <h5 className='mb-2'>{item.ProductName}</h5>
                        <p className='text-muted mb-1'>Price{item.Price}</p>
                        <p className='text-muted mb-0'>
                          Total ₦
                          {new Intl.NumberFormat('en-NG', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(
                            parseFloat(item.Price.replace(/₦|,/g, '')) *
                              item.quantity
                          )}
                        </p>
                      </div>
                      <div className='d-flex align-items-center gap-3 mt-3 mt-md-0'>
                        <button
                          className='cart-btn btn-sm'
                          onClick={() => updateQuantity(item.id, 'decrease')}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className='cart-btn btn-sm'
                          onClick={() => updateQuantity(item.id, 'increase')}
                        >
                          +
                        </button>
                        <button
                          className='cart-btn btn-sm'
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='col-lg-4'>
              <div className='card border-0 shadow-sm rounded-4 p-4'>
                <h4 className='fw-bold'>Cart Summary</h4>
                <hr />
                <div className='d-flex justify-content-between mb-2'>
                  <span>Total Items</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                  <span>Total Price</span>
                  <span className='fw-bold'>
                    ₦
                    {totalPrice.toLocaleString('en-NG', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <Link
                  to='/checkout'
                  className='cart-btn d-flex justify-content-center align-items-center w-100 mt-2 text-decoration-none text-center'
                >
                  Proceed To CheckOut
                </Link>
              </div>
            </div>
          </div>
        )}
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </div>
    </div>
  )
}

export default Cart
