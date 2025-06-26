import React from 'react'
import { Link } from 'react-router-dom'
import bagsifyimg from './../../assets/Images/bagsifyimg.jpg'

function Stores() {
  return (
    <div>
      <ol className='section-banner py-3 position-relative'>
        <li className='position-relative'>
          <Link to='/'>Home</Link>
        </li>
        <li className='position-relative active'>
          <span className='ps-5'>Stores</span>
        </li>
      </ol>

      {/* store */}
      <div className='container store-wrap my-5 py-5'>
        <div className='row'>
          <div className='section-title mb-5 stores-title text-center'>
            <h2 className='fw-semibold fs-1'>Our Store</h2>
          </div>
        </div>

        <div className='row align-items-center g-5'>
          <div className='col-lg-6 mb-4 mb-lg-0'>
            <img src={bagsifyimg} alt='store' className='img-fluid' />
          </div>

          <div className='col-lg-6'>
            <h2 className='mb-4'>Ughelli Store</h2>
            <div className='row'>
              <div className='col-md-6 mb-4'>
                <h5 className='subtitle fw-semibold mb-4'>Address</h5>
                <p className='text-muted mb-0'>
                  Upper Agbahro Ughelli, Delta State.
                </p>
                {/* <a href='#' className='underline-link text-black'>
                  Get Direction
                </a> */}
              </div>

              <div className='col-md-6 mb-4'>
                <h5 className='subtitle fw-semibold mb-4'>Hour of Operation</h5>
                <div className='d-flex gap-5 text-muted'>
                  <span>Mon - Sat:</span>
                  <span>8am - 6pm</span>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 mb-4'>
                <h5 className='subtitle fw-semibold mb-4'>Contact</h5>
                <p className='text-muted mb-0'>
                  Mobile: <strong className='text dark'>090 3260 0312</strong>
                </p>
                <p className='text-muted'>Email: bagsify@gmail.com</p>
              </div>

              <div className='col-md-6 mb-4'>
                <h5 className='fw-semibold'>Social Media</h5>
                <div className='store-social-icons d-flex gap-3 mt-4'>
                  {/* <a
                    href='https://instagram.com/bagsify2023'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ri-instagram-line'
                  ></a>
                  <a
                    href='https://wa.me/2348153899586'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ri-whatsapp-line'
                  ></a>
                  <a
                    href='https://t.me/Bagsify'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ri-telegram-line'
                  ></a> */}
                  <i className='bi bi-instagram'></i>
                  <i className='bi bi-whatsapp'></i>
                  <i className='bi bi-telegram'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stores
