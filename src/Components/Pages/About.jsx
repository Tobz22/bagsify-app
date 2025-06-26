import React, { useState } from 'react'

import bagsifyimg from './../../assets/Images/bagsifyimg.jpg'
import luxury from './../../assets/Images/luxury.jpg'
import hero from './../../assets/Images/hero.png'
import footwear6 from './../../assets/Images/footwear6.jpg'
import team from './../../assets/Images/team.jpg'

const About = () => {
  const [quote, setQuote] = useState(
    '"Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures the value of your money. "'
  )
  return (
    <div>
      {/* About header */}
      <section className='about-header-section d-flex align-items-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 text-center'>
              <p className='text-uppercase text-muted small mb-2 underline'>
                Introducing
              </p>
              <h1 className='fw-bold display-5 '>About The Brand</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Main About */}
      <section className='py-5'>
        {/* <div className='container text-center mb-5'>
          <img src={bagsifyimg} alt='' />
          <h2 className='fw-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            maxime.
          </h2>
          <p className='text-muted mx-auto' style={{ maxwidth: '600px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            tenetur eius aliquam sint excepturi officia atque et dignissimos
            quidem rem!
          </p>
        </div> */}
        {/* Image and Description */}
        <div className='container mb-5'>
          <div className='row align-items-center'>
            <div className='col-md-6 mb-4 mb-md-0 about-img1'>
              <img src={bagsifyimg} alt='' className='img-fluid rounded' />
            </div>
            <div className='col-md-6'>
              <h4 className='fw-bold mb-4'>About Us</h4>
              <p className='text-muted'>
                👜 At Bagsify, we believe that style should be accessible to
                every woman — whether she's chasing dreams, conquering meetings,
                or stepping out in confidence. We specialize in affordable and
                luxury bags and elegant female slippers, offering carefully
                curated collections that blend premium quality with modern
                style. From timeless classics to trend-setting designs, each
                piece is chosen to elevate your everyday look without
                compromising comfort or value. Founded with a passion for
                empowering women through fashion, Bagsify is more than a store —
                it's a lifestyle. Whether you're dressing up for a special event
                or looking for everyday essentials, our products are made to
                complement your unique personality and budget.
              </p>
            </div>
          </div>
        </div>
        {/* Mission and Product Image */}
        <div className='container'>
          <div className='row align-items-center flex-md-row-reverse'>
            <div className='col-md-6 mb-4 mb-md-0 about-img1'>
              <img src={bagsifyimg} alt='' className='img-fluid rounded' />
            </div>
            <div className='col-md-6'>
              <h4 className='fw-bold mb-4'>Our Mission</h4>
              <p className='text-muted'>
                At Bagsify, our mission is to empower women by providing
                stylish, high-quality handbags and slippers that blend elegance
                with affordability. We believe that every woman deserves to
                express her confidence and individuality through fashion. That's
                why we curate timeless pieces and trendy collections that
                elevate everyday looks, without compromising comfort or value.
                From luxurious bags to chic, comfortable slippers, we are
                committed to delivering products that inspire confidence,
                complete your outfit, and fit perfectly into your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Client Logos section */}
      <section className='container-fluid bg-light'>
        <div className='container py-5 text-center'>
          <div className='mx-auto' style={{ maxWidth: '800px' }}>
            <p className='fs-4 mb-4 fw-bold'>{quote}</p>
          </div>

          <div className='row justify-content-center align-items-center mt-5 gy-4'>
            <div
              className='col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img'
              onClick={() =>
                setQuote(
                  '"Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for your money."'
                )
              }
              style={{ cursor: 'pointer' }}
            >
              <img
                src={luxury}
                alt='Goodness'
                className='img-fluid'
                style={{ maxHeight: '60px', objectFit: 'contain' }}
              />
            </div>

            <div
              className='col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img'
              onClick={() =>
                setQuote(
                  '"Step into Style, "Bags & Slippers: Your Perfect Pair, "Sole Mates, "Walk This Way, and "Comfort & Style Combined. ."'
                )
              }
              style={{ cursor: 'pointer' }}
            >
              <img
                src={hero}
                alt='Grand Golden Gallery'
                className='img-fluid'
                style={{ maxHeight: '60px', objectFit: 'contain' }}
              />
            </div>

            <div
              className='col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img'
              onClick={() =>
                setQuote(
                  '"Luxurious and Affordable products. Highly recommend!"'
                )
              }
              style={{ cursor: 'pointer' }}
            >
              <img
                src={footwear6}
                alt='Luxury Quality'
                className='img-fluid'
                style={{ maxHeight: '60px', objectFit: 'contain' }}
              />
            </div>

            {/* <div
              className='col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img'
              onClick={() =>
                setQuote(
                  '"Luxurious and Affordable products. Highly recommend!"'
                )
              }
              style={{ cursor: 'pointer' }}
            >
              <img
                src={bagsifyimg}
                alt='Best Quality'
                className='img-fluid'
                style={{ maxHeight: '60px', objectFit: 'contain' }}
              />
            </div>

            <div
              className='col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img'
              onClick={() =>
                setQuote(
                  '"Luxurious and Affordable products. Highly recommend!"'
                )
              }
              style={{ cursor: 'pointer' }}
            >
              <img
                src={bagsifyimg}
                alt='Luxury Quality'
                className='img-fluid'
                style={{ maxHeight: '60px', objectFit: 'contain' }}
              />
            </div>

            <div
              className='col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img'
              onClick={() =>
                setQuote(
                  '"Luxurious and Affordable products. Highly recommend!"'
                )
              }
              style={{ cursor: 'pointer' }}
            >
              <img
                src={bagsifyimg}
                alt='Luxury Quality'
                className='img-fluid'
                style={{ maxHeight: '60px', objectFit: 'contain' }}
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='team-section'>
        <h2 className='team-title'>
          We pride ourselves on having a highly skilled team
        </h2>

        <div className='row justify-content-center'>
          <div className='team-member'>
            <div className='team-image-wrapper'>
              <img
                src={team}
                alt='Endy'
                className='team-image'
                // style={{ width: '300px', height: '300px' }}
              />
              <div className='team-social'>
                {/* <a href='#' className='ri ri-instagram-line'></a> */}
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
            <h3 className='team-name'>Endurance Dike</h3>
            <p className='team-role'>- Founder, CEO</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
