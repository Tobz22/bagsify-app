import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
// import 'swiper/css/navigation'

//Data
import Products from './../../Product.json'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import subBanner1 from './../../assets/Images/subBanner1.jpg'
import subBanner2 from './../../assets/Images/subBanner2.jpg'

import serviceImg1 from './../../assets/Images/serviceImg1.svg'
import serviceImg2 from './../../assets/Images/serviceImg2.svg'
import serviceImg3 from './../../assets/Images/serviceImg3.svg'
import serviceImg4 from './../../assets/Images/serviceImg4.svg'

import OnlineStore from './../../assets/OnlineStore.png'
import BannerImage from './../../assets/Images/BannerImage.jpg'

import footwear5 from './../../assets/Images/footwear5.jpg'
import footwear7 from './../../assets/Images/footwear7.jpg'

import socialimg from './../../assets/Images/socialimg.webp'
import socialimg2 from './../../assets/Images/socialimg2.webp'
import socialimg3 from './../../assets/Images/socialimg3.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Index() {
  const [filterSortOption, setFilterSortOption] = useState('all')

  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animate only once
    })
  }, [])

  const addToWishlist = (product) => {
    const existing = JSON.parse(localStorage.getItem('wishlist')) || []
    if (!existing.some((p) => p.id === product.id)) {
      const updated = [...existing, product]
      localStorage.setItem('wishlist', JSON.stringify(updated))
      window.dispatchEvent(new Event('wishlistUpdated'))
      toast.success(`${product.ProductName} added to Your wishlist`)
    } else {
      toast.info(`${product.ProductName} is already in your wishlist`)
    }
  }
  const addToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem('cart')) || []
    const alreadyInCart = existing.find((p) => p.id === product.id)

    if (!alreadyInCart) {
      const updatedProduct = { ...product, quantity: 1 }
      const updatedCart = [...existing, updatedProduct]
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      window.dispatchEvent(new Event('cartUpdated'))
      toast.success(`${product.ProductName}added to Your cart!`)
    } else {
      toast.info(`${product.ProductName} is already in your cart!`)
    }
  }

  return (
    <div>
      {/* Hero */}
      <div className='hero'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          effect='fade'
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className='hero-wrap hero-wrap1'>
              <div className='hero-content'>
                <h5>- DESIGNED FOR STYLE -</h5>
                <h1> Bags Beyond Basic </h1>
                <p className='my-3'>
                  Shop the latest trends and classic bags just for you
                </p>
                <Link href='/shop' className='btn hero-btn mt-3'>
                  Shop Now!
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='hero-wrap hero-wrap2'>
              <div className='hero-content'>
                <h5>- NEW COLLECTIONS -</h5>
                <h1>
                  Step into Style <br /> Carry your Dreams
                </h1>
                <p className='my-3'>
                  Shop the latest trends and classic slippers just for you
                </p>
                <Link href='/footwear' className='btn hero-btn mt-3'>
                  Shop Now!
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='hero-wrap hero-wrap3'>
              <div className='hero-content'>
                <h5>- TIMELESS TRENDY -</h5>
                <h1>Bags that Speak Your Style</h1>
                <p className='my-3'>
                  Shop the latest trends of bags and classic Slippers just for
                  you
                </p>
                <Link href='/shop' className='btn hero-btn mt-3'>
                  Shop Now!
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Products */}
      <div className='product-container py-5 my-5'>
        <div className='container position-relative'>
          <div className='row'>
            <div className='section-title mb-5 product-title text-center'>
              <h2 className='fw-semi-bold fs-1'>Our Luxury Craftmanship</h2>
              <p className='text-muted'>Bags as Dynamic as You Are!</p>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: '.product-swiper-next',
              prevEl: '.product-swiper-prev',
            }}
            breakpoints={{
              1399: { slidesPerView: 4, spaceBetween: 20 },
              1199: { slidesPerView: 3, spaceBetween: 18 },
              991: { slidesPerView: 2, spaceBetween: 15 },
              767: { slidesPerView: 1.5, spaceBetween: 10 },
              0: { slidesPerView: 1, spaceBetween: 8 },
            }}
            className='mt-4 swiper position-relative'
          >
            {Products.filter(
              (product) => product.id >= 8 && product.id <= 12
            ).map((product) => (
              <SwiperSlide key={product.id}>
                <div className='product-item text-center position-relative'>
                  <div className='product-image w-100 position-relative overflow-hidden'>
                    <img
                      src={product.image}
                      className='img-fluid'
                      width={400}
                      height={400}
                      alt={product.ProductName}
                    />
                    {/* <img
                      src={product.secondImage}
                      className='img-fluid'
                      width={300}
                      height={50}
                      alt={product.ProductName}
                    /> */}
                    <div className='product-icons gap-3'>
                      <div
                        className='product-icon'
                        title='Add to Wishlist'
                        onClick={() => addToWishlist(product)}
                      >
                        <i className='bi bi-heart fs-5'></i>
                      </div>
                      <div
                        className='product-icon'
                        title='Add to Cart'
                        onClick={() => addToCart(product)}
                      >
                        <i className='bi bi-cart3 fs-5'></i>
                      </div>
                    </div>
                    <span
                      className={`tag badge text-white ${
                        product.tag === 'New' ? 'bg-danger' : 'bg-success'
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className='text-decoration-none text-black'
                  >
                    <div className='product-content pt-3'>
                      <span className='price text-decoration-none'>
                        {product.Price}
                      </span>
                      <h3 className='title pt-1'>{product.ProductName}</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Banner */}
      {/* <div className='banner pt-3 pb-0 mb-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 banner-card overflow-hidden position-relative'>
              <img
                src={subBanner1}
                alt=''
                className='img-fluid rounded banner-img'
              />
              <div className='banner-content position-absolute'>
                <h3>NEW COLLECTION</h3>
                <button className='btn banner-btn mt-2'>EXPLORE MORE</button>
              </div>
            </div>

            <div className='col-lg-6 banner-card overflow-hidden position-relative mt-lg-0 mt-0'>
              <img
                src={subBanner2}
                alt=''
                className='img-fluid rounded banner-img'
              />
              <div className='banner-content banner-content2 position-absolute'>
                <h1>10% off Everything</h1>
                <p>
                  Luxury bags ranging from <br />
                  different colors and quality.
                </p>
                <button className='btn banner-btn mt-2'>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Service */}
      <div
        className='text-center service mt-2 mt-md-4 mt-lg-5 pt-0'
        data-aos='fade-up'
      >
        <div className='container'>
          <h1 className='mb-5 fw-semibold'>ATTENTION!!</h1>
          <div className='row text-center'>
            <div
              className='col-lg-3 col-sm-6 mb-4'
              data-aos='fade-up'
              data-aos-delay='0'
              data-aos-duration='800'
              data-aos-offset='120'
            >
              <img
                src={serviceImg1}
                alt=''
                className='img-fluid'
                style={{ width: '100px', height: 'auto' }}
              />
              <h4 className='mt-3 mb-1'>Returns</h4>
              <p className='text-muted fs-6 fw-semibold'>No exchange Policy.</p>
            </div>

            <div
              className='col-lg-3 col-sm-6 mb-4'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='800'
              data-aos-offset='120'
            >
              <img
                src={serviceImg2}
                alt=''
                className='img-fluid'
                style={{ width: '100px', height: 'auto' }}
              />
              <h4 className='mt-3 mb-1'>Online Support</h4>
              <p className='text-muted fs-6 fw-semibold'>
                24 hours a day, 7 days a week
              </p>
            </div>

            <div
              className='col-lg-3 col-sm-6 mb-4'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='800'
              data-aos-offset='120'
            >
              <img
                src={serviceImg3}
                alt=''
                className='img-fluid'
                style={{ width: '100px', height: 'auto' }}
              />
              <h4 className='mt-3 mb-1'>Payment</h4>
              <p className='text-muted fs-6 fw-semibold'>
                Payments before delivery.
              </p>
            </div>

            <div
              className='col-lg-3 col-sm-6 mb-4'
              data-aos='fade-up'
              data-aos-delay='300'
              data-aos-duration='800'
              data-aos-offset='120'
            >
              <img
                src={serviceImg4}
                alt=''
                className='img-fluid'
                style={{ width: '100px', height: 'auto' }}
              />
              <h4 className='mt-3 mb-1'>Delivery</h4>
              <p className='text-muted fs-6 fw-semibold'>
                Extra Charges for delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seen in */}
      {/* <div className='text-center my-5 seen-in'>
        <div className='container'>
          <h1 className='mb-5 fw-semibold'>As seen in</h1>
          <div className='row pt-3 justify-content-center'>
            <div className='col-md-4 mb-4 seen-card'>
              <img
                src={OnlineStore}
                alt=''
                className='img-fluid round-img'
                style={{ width: '100px', height: '100px' }}
              />
              <p className='text-dark fs-5 mt-2 fw-semibold'>
                "Also the Customer Service is Phenomenal. I would Purchase
                again."
              </p>
            </div>
            <div className='col-md-4 mb-4 seen-card'>
              <img
                src={OnlineStore}
                alt=''
                className='img-fluid round-img'
                style={{ width: '100px', height: '100px' }}
              />
              <p className='text-dark fs-5 mt-2 fw-semibold'>
                "Great product line and Very attentive staff to deal with."
              </p>
            </div>
            <div className='col-md-4 mb-4 seen-card'>
              <img
                src={OnlineStore}
                alt=''
                className='img-fluid round-img'
                style={{ width: '100px', height: '100px' }}
              />
              <p className='text-dark fs-5 mt-2 fw-semibold'>
                "Are you looking for affordable price? Look no further."
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* favourite luxury */}
      <div className='favourite-luxury py-5 my-5'>
        <div className='container'>
          <div className='row'>
            <div className='section-title mb-5 favourite-luxury-title text-center'>
              <h2 className='fw-semibold fs-1'>Luxury at its peak</h2>
              <p>For Affordabilty and Luxury? Think Bagsify</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='favourite-luxury-banner mb-lg-0 mb-5 position-relative'>
                <img src={BannerImage} alt='' className='img-fluid' />
                <div className='favourite-luxury-banner-title'>
                  <h3 className='fs-2'>Shop Now</h3>
                  <p className='fs-6'>Get your desired Bags for less</p>
                  <button
                    className='btn btn-default'
                    onClick={() => (window.location.href = '/shop')}
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='row'>
                {Products.filter(
                  (product) => product.id >= 1 && product.id <= 6
                ).map((product) => (
                  <div className='col-md-4 mb-0'>
                    <SwiperSlide key={product.id}>
                      <div className='product-item text-center position-relative'>
                        <div className='product-image w-100 position-relative overflow-hidden'>
                          <img
                            src={product.image}
                            className='img-fluid'
                            width={300}
                            height={50}
                            alt={product.ProductName}
                          />
                          {/* <img
                      src={product.secondImage}
                      className='img-fluid'
                      width={300}
                      height={50}
                      alt={product.ProductName}
                    /> */}
                          <div className='product-icons gap-3'>
                            <div
                              className='product-icon'
                              title='Add to Wishlist'
                              onClick={() => addToWishlist(product)}
                            >
                              <i className='bi bi-heart fs-5'></i>
                            </div>
                            <div
                              className='product-icon'
                              title='Add to Cart'
                              onClick={() => addToCart(product)}
                            >
                              <i className='bi bi-cart3 fs-5'></i>
                            </div>
                          </div>
                          <span
                            className={`tag badge text-white ${
                              product.tag === 'New' ? 'bg-danger' : 'bg-success'
                            }`}
                          >
                            {product.tag}
                          </span>
                        </div>
                        <Link
                          to={`/product/${product.id}`}
                          className='text-decoration-none text-black'
                        >
                          <div className='product-content pt-3'>
                            <span className='price text-decoration-none'>
                              {product.Price}
                            </span>
                            <h3 className='title pt-1'>
                              {product.ProductName}
                            </h3>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover */}
      <div className='discover container py-5'>
        <div className='section-title mb-5 favourite-luxury-title text-center'>
          <h2 className='fw-semibold'>More to Discover</h2>
          <p className='text-center'>
            "Walk on clouds": Evokes a feeling of weightlessness and comfort.
          </p>
        </div>
        <div className='row g-5'>
          <div className='col-md-6 discover-card text-center'>
            <div className='discover-img section-image rounded'>
              <img src={footwear5} alt='' className='img-fluid rounded' />
            </div>
            <div className='discover-info mt-3'>
              <div>Footwear Collection</div>
              <button className='btn mt-2'>
                <Link
                  to='/footwear'
                  className='d-btn mt-2 d-inline-flex align-items-center'
                >
                  Shop Now <i className='bi bi-arrow-right ms-2'></i>
                </Link>
              </button>
            </div>
          </div>
          <div className='col-md-6 discover-card text-center'>
            <div className='discover-img section-image rounded'>
              <img src={footwear7} alt='' className='img-fluid rounded' />
            </div>
            <div className='discover-info mt-3'>
              <div>Footwear Collection</div>
              <button className='btn mt-2'>
                <Link
                  to='/footwear'
                  className='d-btn mt-2 d-inline-flex align-items-center'
                >
                  Shop Now <i className='bi bi-arrow-right ms-2'></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* social image */}
      {/* <div className='social-image-container py-5 px-5 mx-auto'>
        <div className='row g-4'>
          <div className='col-lg-2 col-md-4'>
            <div className='social-wrapper positio-relative overflow-hidden'>
              <img src={socialimg} alt='' className='img-fluid' />
              <i className='bi bi-instagram'></i>
            </div>
          </div>
          <div className='col-lg-2 col-md-4'>
            <div className='social-wrapper positio-relative overflow-hidden'>
              <img src={socialimg2} alt='' className='img-fluid' />
              <i className='bi bi-whatsapp'></i>
            </div>
          </div>
          <div className='col-lg-2 col-md-4'>
            <div className='social-wrapper positio-relative overflow-hidden'>
              <img src={socialimg3} alt='' className='img-fluid' />
              <i className='bi bi-telegram'></i>
            </div>
          </div>
        </div>
      </div> */}

      {/* Seen in */}
      <div className='text-center my-5 seen-in'>
        <div className='container'>
          <h1 className='mb-5 fw-semibold'>As seen in</h1>
          <div className='row pt-3 justify-content-center'>
            <div className='col-md-4 mb-4 seen-card'>
              <img
                src={OnlineStore}
                alt=''
                className='img-fluid round-img'
                style={{ width: '100px', height: '100px' }}
              />
              <p className='text-dark fs-5 mt-2 fw-semibold'>
                "Also the Customer Service is Phenomenal. I would Purchase
                again."
              </p>
            </div>
            <div className='col-md-4 mb-4 seen-card'>
              <img
                src={OnlineStore}
                alt=''
                className='img-fluid round-img'
                style={{ width: '100px', height: '100px' }}
              />
              <p className='text-dark fs-5 mt-2 fw-semibold'>
                "Great product line and Very attentive staff to deal with."
              </p>
            </div>
            <div className='col-md-4 mb-4 seen-card'>
              <img
                src={OnlineStore}
                alt=''
                className='img-fluid round-img'
                style={{ width: '100px', height: '100px' }}
              />
              <p className='text-dark fs-5 mt-2 fw-semibold'>
                "Are you looking for affordable price? Look no further."
              </p>
            </div>
          </div>
        </div>
      </div>

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
      />
    </div>
  )
}

export default Index
