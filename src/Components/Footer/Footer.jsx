import React from 'react'

function Footer() {
  return (
    <div>
      <div className='footer mt-5 py-5'>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-8'>
              <div className='row'>
                <div className='col-md-4'>
                  <h3 className='mb-3'>Company</h3>
                  <ul className='list-unstyled'>
                    <li className='mb-2'>
                      <a href='#' className='text-decoration-none'>
                        - Contact Us
                      </a>
                    </li>
                    <li className='mb-2'>
                      <a href='#' className='text-decoration-none'>
                        - Terms & Conditions
                      </a>
                    </li>
                    <li className='mb-2'>
                      <a href='#' className='text-decoration-none'>
                        - Privacy Policy
                      </a>
                    </li>
                  </ul>
                  <p className='mb-0'>
                    <strong>+234 (0)90 3260 0312</strong>
                  </p>
                  <p>bagsify@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <h3 className='mb-3'>Links</h3>
              <ul className='list-unstyled'>
                <li className='mb-2'>
                  <a href='#' className='text-decoration-none'>
                    - Home
                  </a>
                </li>
                <li className='mb-2'>
                  <a href='#' className='text-decoration-none'>
                    - About Us
                  </a>
                </li>
                <li className='mb-2'>
                  <a href='#' className='text-decoration-none'>
                    - Store
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className='col-md-4'>
              <h3 className='mb-3'>Information</h3>
              <ul className='list-unstyled'>
                <li className='mb-2'>
                  <a href='#' className='text-decoration-none'>
                    - Contact Us
                  </a>
                </li>
                <li className='mb-2'>
                  <a href='#' className='text-decoration-none'>
                    - Terms & Conditions
                  </a>
                </li>
                <li className='mb-2'>
                  <a href='#' className='text-decoration-none'>
                    - Privacy Policy
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          <div className='footer-bottom mt-5'>
            <div className='row align-items-start'>
              <div className='col-lg-4'>
                <div className='footer-icon-text d-flex gap-3 justify-content-center justify-content-lg-end'>
                  <p>© Slay 2025 | powered by Bagsify</p>
                  <div className='footer-icons d-flex gap-2'>
                    {/* <i className='ri-instagram-line'></i>
                    <i class='ri-whatsapp-line'></i>
                    <i className='ri-telegram-line'></i> */}
                    <a
                      href='https://instagram.com/bagsify2023'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ri-instagram-line'
                    ></a>

                    {/* <a href='#' className='ri ri-whatsapp-line'></a> */}
                    <a
                      href='https://wa.me/2349032600312'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ri-whatsapp-line'
                    ></a>

                    {/* <a href='#' className='ri ri-telegram-line'></a> */}
                    <a
                      href='https://t.me/Bagsify'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ri-telegram-line'
                    ></a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='footer-logo text-center'>
                  <a href='#' className='navbar-brand mx-auto order-0'>
                    <h2 className='m-0 fw-bold' styl={{ letterSpacing: '2px' }}>
                      BAGSIFY
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
