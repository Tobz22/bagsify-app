import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Checkout() {
  const [deliveryOption, setDeliveryOption] = useState('waybill')

  const [cartItems, setCartItems] = useState([])

  // Delivery form states
  const [state, setState] = useState('Delta')
  const [mobile, setMobile] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(savedCart)
  }, [])

  const handlePlaceOrder = () => {
    toast.success('Order Placed Successfully')
  }

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0
    return Number(priceStr.replace(/₦|,/g, '')) || 0
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceNumber = parsePrice(item.Price)
    return acc + priceNumber * (item.quantity || 1)
  }, 0)

  const buildWhatsappMessage = () => {
    let message = `Order Details:%0A`
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.ProductName} x ${
        item.quantity || 1
      } - ₦${parsePrice(item.Price) * (item.quantity || 1)}%0A`
    })

    message += `%0ATotal Amount: ₦${totalPrice.toLocaleString()}%0A%0A`
    // message += `Delivery Option: ${deliveryOption}%0A`

    if (deliveryOption === 'waybill') {
      message += `Delivery Details:%0A`
      message += `Location: ${state}%0A`
      message += `Mobile: ${mobile}%0A`
      message += `Name: ${firstName} ${lastName}%0A`
    } else {
      message += `Pickup from Store at Ughelli, Delta State%0A`
    }

    return message
  }

  // Your WhatsApp number (include country code, no + sign)
  const whatsappNumber = '2349161627359' // <-- replace with your WhatsApp number

  // WhatsApp URL with prefilled message
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${buildWhatsappMessage()}`

  return (
    <div>
      <div className='container my-5 pt-1'>
        <div className='row g-4 mt-5'>
          <div className='col-lg-7'>
            {/* <h5>Contact</h5> */}
            <h5 className='fw-semibold '>DELIVERY DETAILS</h5>
            <div>
              <div className='mb-3'>
                <div className='btn-group btn-from w-100' role='group'>
                  <input
                    type='radio'
                    className='btn-check'
                    name='deliveryOption'
                    id='waybill'
                    checked={deliveryOption === 'waybill'}
                    onChange={() => setDeliveryOption('waybill')}
                  />
                  <label className='btn btn-waybill' htmlFor='waybill'>
                    Waybill
                  </label>

                  <input
                    type='radio'
                    className='btn-check'
                    name='deliveryOption'
                    id='pickup'
                    checked={deliveryOption === 'pickup'}
                    onChange={() => setDeliveryOption('pickup')}
                  />
                  <label className='btn btn-pickup' htmlFor='pickup'>
                    Pickup in Store
                  </label>
                </div>
              </div>
              {deliveryOption === 'waybill' && (
                <div className='row mb-3'>
                  <div className='mb-3'>
                    <select
                      className='form-select'
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option>Delta</option>
                      <option>Abuja</option>
                      <option>Lagos</option>
                      <option>Anambra</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Mobile Number'
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className='col'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='First Name (optional)'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className='col'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Last Name (optional)'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {deliveryOption === 'pickup' && (
                <div className='container my-4'>
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <h6 className='fw-semibold mb-0'>Store Location</h6>
                  </div>

                  <div
                    className='alert alert-danger d-flex flex-column rounded-3'
                    role='alert'
                    style={{
                      color: '#7b1c1c',
                      backgroundColor: '#fef6f6',
                      border: '1px solid rgba(145, 137, 137 0.59)',
                    }}
                  >
                    <div className='d-flex align-items-center mb-1'>
                      <strong>Ughelli, Delta State</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='form-check mb-4'>
              <input
                type='checkbox'
                className='form-check-input'
                id='saveInfo'
              />
              <label htmlFor='saveInfo' className='form-check-label'>
                Save this Infomation for next time
              </label>
            </div>
            <h5 className='fw-semibold '>PAYMENT METHOD</h5>
            <div className='mb-3'>
              {/* WhatsApp Order Button */}
              <a
                href={whatsappURL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-success'
              >
                Send Order via WhatsApp
              </a>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='card border-0 shadow-sm rounded-4 p-4'>
              <h5 className='fw-bold mb-3'>
                <i className='ri-shopping-cart-2-line me-2 text-info'></i>
                Order Summary
              </h5>
              {cartItems.length === 0 ? (
                <p className='text-muted'>Your Cart is Empty!</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className='d-flex align-items-center mb-3 border-bottom pb-2'
                  >
                    <img
                      src={item.image}
                      className='rounded'
                      width='60'
                      height='60'
                      style={{ objectFit: 'cover', marginRight: '10px' }}
                      alt=''
                    />
                    <div className='flex-grow-1'>
                      <h6 className='mb-1'>{item.ProductName}</h6>
                      <small className='text-muted'>
                        Qty : {item.quantity}
                      </small>
                    </div>
                    <div className='fw-semi-bold'>
                      ₦
                      {(
                        parseFloat(
                          item.Price.replace('₦', '').replace(/,/g, '')
                        ) * item.quantity
                      ).toLocaleString()}
                    </div>
                  </div>
                ))
              )}
              <hr />
              {/* <div className='d-flex justify-content-between small mb-1'>
                  <span>Subtotal</span>
                  <span>₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className='d-flex justify-content-between small mb-1'>
                  <span>Waybill</span>
                  <span>Enter Address</span>
                </div> */}
              <div className='d-flex justify-content-between small mb-1'>
                <span className='fw-bold'>Total:</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <button
                      className='check-btn w-100 mt-3'
                      onClick={handlePlaceOrder}
                    >
                      <i className='ri-secure-payment-line me-2'></i> Place
                      Order
                    </button>
                    <Link
                      to='/cart'
                      className='check-btn d-flex justify-content-center align-items-center w-100 mt-2 text-decoration-none text-center'
                    >
                      <i className='ri-arrow-left-line me-2'></i>Back To Cart!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Checkout
