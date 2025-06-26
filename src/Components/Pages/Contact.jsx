import React from 'react'

function Contact() {
  return (
    <div>
      <section className='contact-section mt-5'>
        <div className='container'>
          <h2 className='section-title'>Keep In Touch With Us</h2>
          <p className='section-subtitle'>
            Be the first to know about new arrivals and exclusive offers.
          </p>
        </div>

        <div className='row contact-boxes'>
          {/* Address */}
          <div className='contact-col'>
            <div className='contact-box bg-transparent border-0'>
              <i className='ri-map-pin-line icon'></i>
              <h5>Address</h5>
              <p>Upper Agbahro Ughelli, Delta State.</p>
            </div>
          </div>

          {/* Contact */}
          <div className='contact-col'>
            <div className='contact-box bg-transparent border-0'>
              <i className='ri-phone-line icon'>
                <h5>Contact</h5>
                <p>
                  <strong>Mobile:</strong>+234 90 3260 0312
                </p>
                <p>
                  <strong>Email:</strong>bagsify@gmail.com
                </p>
              </i>
            </div>
          </div>

          {/* Hours */}
          <div className='contact-col'>
            <div className='contact-box bg-transparent border-0'>
              <i className='ri-time-line icon'>
                <h5>Hours of Operation</h5>
                <p>
                  <strong>Mon - Sat:</strong> 8am - 6pm
                </p>
              </i>
            </div>
          </div>
        </div>
      </section>

      <div className='contact-page'>
        {/* Map Section */}
        <div className='map-section container'>
          <iframe
            title='Our Location'
            className='map rounded'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127087.66447823278!2d5.91771946090993!3d5.494074561689841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041bdd6545ee875%3A0xf19fb03458c7d51c!2sUghelli%20333105%2C%20Delta!5e0!3m2!1sen!2sng!4v1750829477971!5m2!1sen!2sng'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
