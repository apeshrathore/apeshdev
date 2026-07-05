import slider1 from "../images/slide-1.jpg";
import abouticon from "../images/about-icons-1.svg";
import slider2 from "../images/slider-2.jpg";
import adbanner1 from "../images/ad-banner-1.jpg";
import adbanner2 from "../images/ad-banner-2.jpg";
import adbanner3 from "../images/ad-banner-3.jpg";
import attaricedal from "../images/atta-rice-dal.png";
import petcare from "../images/pet-care.png";
import cleaningessentials from "../images/cleaning-essentials.png";
import babycare from "../images/baby-care.png";
import chickenmeatfish from "../images/chicken-meat-fish.png";
import colddrinksjuices from "../images/cold-drinks-juices.png";
import teacoffeedrinks from "../images/tea-coffee-drinks.png";
import instantfood from "../images/instant-food.png";
import bakerybiscuits from "../images/bakery-biscuits.png";
import snackmunchies from "../images/snack-munchies.png";
import fruitsvegetables from "../images/fruits-vegetables.png";
import dairybreadeggs from "../images/dairy-bread-eggs.png";
import grocerybanner from "../images/grocery-banner.png";
import grocerybanner2 from "../images/grocery-banner-2.jpg";
import map from "../images/map.png";
import iphone from "../images/iphone-2.png";
import googleplay from "../images/googleplay-btn.svg";
import appstore from "../images/appstore-btn.svg";
import bannerdeal from "../images/banner-deal1.jpg";
import product11 from "../images/product-img-11.jpg";
import product12 from "../images/product-img-12.jpg";
import product13 from "../images/product-img-13.jpg";
import clock from "../images/clock.svg";
import gift from "../images/gift.svg";
import package1 from "../images/package.svg";
import refresh from "../images/refresh-cw.svg";
import product1 from "../images/category-baby-care.jpg";
import product2 from "../images/category-atta-rice-dal.jpg";
import product3 from "../images/category-bakery-biscuits.jpg";
import product4 from "../images/category-chicken-meat-fish.jpg";
import product5 from "../images/category-cleaning-essentials.jpg";
import product6 from "../images/category-dairy-bread-eggs.jpg";
import product7 from "../images/category-instant-food.jpg";
import product8 from "../images/category-pet-care.jpg";
import product9 from "../images/category-snack-munchies.jpg";
import product10 from "../images/category-tea-coffee-drinks.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProductItem from "../ProductList/ProductItem";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Slide, Zoom } from "react-awesome-reveal";
import { useEffect } from "react";
// import { PulseLoader } from 'react-spinners';
import { MagnifyingGlass } from "react-loader-spinner";
import FAQ from "./FooterElements/Faq";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div>
        {loaderStatus ? (
          <div className="loader-container">
            {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperclassName="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#0aad0a"
            />
          </div>
        ) : (
          <>
            <>
              <div className="scroll-to-top">
                <button
                  onClick={scrollToTop}
                  className={`scroll-to-top-button Rs {i0sVisible ? "show" : ""}`}
                >
                  ↑
                </button>
              </div>
              <section className="hero-section">
                <div className="container mt-8">
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div
                          style={{
                            // background: `url(Rs {s  lider1}) no-repeat`,
                            // backgroundSize: "cover",
                            // borderRadius: ".5rem",
                            // backgroundPosition: "center",
                            background: `url(${slider1}) no-repeat`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: ".5rem",
                          }}
                        >
                          <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                            <span className="badge text-bg-warning">
                              Where Purity Meets Perfection.
                            </span>
                            <h2 className="text-dark display-6 fw-bold mt-4">
                              JYOTI REVOLUTION <br /> FOOD INDUSTRY
                            </h2>
                            <p className="lead" style={{ color: "red" }}>
                              हर चुटकी में शुद्धता, हर घर में स्वाद.
                            </p>
                            <p className="lead">आज ही हमसे संपर्क करें।<br />
                              Add: Mandideep, Dist - Riasen ( M.P.) <br />
                              +91 7869427139 <br />
                              Email:jyotirevolutionfoodindustry@gmail.com</p>
                            {/* <Link to="#!" className="btn btn-dark mt-3">
                              Shop Now{" "}
                              <i className="feather-icon icon-arrow-right ms-1" />
                            </Link> */}
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div
                          style={{
                            // background: `url(Rs {s0lider2}) no-repeat`,
                            // backgroundSize: "cover",
                            // borderRadius: ".5rem",
                            // backgroundPosition: "center",
                            background: `url(${slider1}) no-repeat`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: ".5rem",
                          }}
                        >
                          <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                            <span className="badge text-bg-warning">
                              Delivering Quality, Preserving Tradition.
                            </span>
                            <h2 className="text-dark display-5 fw-bold mt-4">
                              Pure Spices • Pure Taste • Pure Trust<br />{" "}
                              <span className="text-primary"></span>
                            </h2>
                            <p className="lead">
                              🎉 थोक खरीद पर आकर्षक छूट उपलब्ध!
                              जितनी अधिक मात्रा, उतना अधिक लाभ। <br /> <br /> 
                              FSSAI प्रमाणित, गुणवत्ता में विश्वास. <br />
                              Lic No. 21425030000922 <br />
                              

                            </p>
                            {/* <Link to="#!" className="btn btn-white mt-3">
                              Shop Now{" "}
                              <i className="feather-icon icon-arrow-right ms-1" />
                            </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="carousel-control-prev"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      
                      <span className="visually-hidden">Previous</span>
                    </Link>
                    <Link
                      className="carousel-control-next"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="next"
                    >
                      {/* <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      /> */}
                      <span
                        className="carousel-control-next-icon"
                        style={{ filter: "brightness(0)" }}
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </Link>
                  </div>
                </div>
              </section>
            </>
            {/* yaha ki lines mere 2nd whatsapp pr milengi  */}
            <>
              {/* section */}
              <section className="mt-8">
                <div className="container">
                  {/* row */}
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 fade-in-left">
                      <Slide direction="left">
                        <div className=" banner mb-3">
                          {/* Banner Content */}
                          <div className="position-relative">
                            {/* Banner Image */}
                            <img
                              src={adbanner1}
                              alt="ad-banner"
                              className="img-fluid rounded-3 w-100"
                            />
                            <div className="banner-text">
                              <h3 className="mb-0 fw-bold">
                                थोक खरीद पर <br /> आकर्षक छूट🎉
                                {" "}
                              </h3>
                              <div className="mt-4 mb-5 fs-5">
                                <p className="mb-0">अधिक मात्रा में खरीदें और विशेष <br/> व्यापारिक छूट का लाभ उठाएँ।</p>
                                <span>
                                  {/* Code:{" "} */}
                                  <span className="fw-bold text-dark">
                                    {/* 👉 अभी संपर्क करें */}
                                  </span>
                                </span>
                              </div>
                              <Link to="/contact" className="btn btn-dark">
                                👉अभी संपर्क करें
                              </Link>
                            </div>
                            {/* Banner Content */}
                          </div>
                        </div>
                      </Slide>
                    </div>

                    <div className="col-lg-4 col-md-6  col-12 slide-in-top">
                      <Zoom>
                        <div className="banner mb-3 ">
                          {/* Banner Content */}
                          <div className="position-relative">
                            {/* Banner Image */}
                            <img
                              src={adbanner2}
                              alt="ad-banner-2"
                              className="img-fluid rounded-3 w-100"
                            />
                            <div className="banner-text">
                              {/* Banner Content */}
                              <h3 className=" fw-bold mb-2">
                                शुद्ध मसाले, <br />बेहतरीन स्वाद🌿<br />
                                {" "}
                              </h3>
                              <p className="fs-5">
                                हर पैक में गुणवत्ता,<br /> ताज़गी और भरोसे का वादा।<br />
                                
                              </p>
                              <Link to="/shop" className="btn btn-dark mt-2">
                                👉उत्पाद देखें
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-lg-4 col-12 fade-in-left ">
                      <Slide direction="right">
                        <div className="banner mb-3">
                          <div className="banner-img">
                            {/* Banner Image */}
                            <img
                              src={adbanner3}
                              alt="ad-banner-3"
                              className="img-fluid rounded-3 w-100"
                            />
                            {/* Banner Content */}
                            <div className="banner-text">
                              <h3 className="fs-2 fw-bold lh-1 mb-2">
                                हर रसोई की <br />पहली पसंद
                                <br />
                                {/* eat ice cream{" "} */}
                              </h3>
                              <p className="fs-5">
                                ज्योति रिवोल्यूशन के मसालों <br />से हर निवाला बने यादगार।
                                <br />
                                {/* summer today */}
                              </p>
                              <Link to="/AboutUs" className="btn btn-dark">
                                👉अधिक जानें
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              </section>
              {/* section */}
            </>
            <>
              {/* section category */}
              <section className="my-lg-14 my-8">
                <div className="container ">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-6">
                        {/* heading    */}
                        <div className="section-head text-center mt-8">
                          <h3
                            className="h3style"
                            data-title="Shop Popular Categories"
                          >
                            Shop Popular Masaale
                          </h3>
                          <div className="wt-separator bg-primarys"></div>
                          <div className="wt-separator2 bg-primarys"></div>
                          {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={dairybreadeggs}
                                alt="dairy-bread-eggs"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  कश्मीरी लाल मिर्च
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={fruitsvegetables}
                                alt="fruits-vegetables"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            <div className="mt-4">
                              {/* text */}
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  हल्दी पाउडर
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={snackmunchies}
                                alt="snack-munchies"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  लाल मिर्च पाउडर
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={bakerybiscuits}
                                alt="bakery-biscuits"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  धनिया पाउडर
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={instantfood}
                                alt="instant-food"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  जीरा पाउडर
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={teacoffeedrinks}
                                alt="tea-coffee-drinks"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  साबुत जीरा
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={colddrinksjuices}
                                alt="cold-drinks-juices"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  काली मिर्च
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={chickenmeatfish}
                                alt="chicken-meat-fish"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  गरम मसाला
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        {/* text */}
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={babycare}
                                alt="baby-care"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  छोले मसाला
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={cleaningessentials}
                                alt="cleaning-essentials"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* img */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  चिकन टिक्का मसाला
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={petcare}
                                alt="pet-care"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  बटर चिकन मसाला 
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={attaricedal}
                                alt="atta-rice-dal"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  सब्ज़ी मसाला
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* section */}
            </>
            <>
              <section>
                <div className="container ">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-3 mb-lg-0  fade-in-left">
                      <Slide direction="left">
                        <div>
                          <div
                            className="py-10 px-8 rounded-3"
                            style={{
                              background: `url(${grocerybanner}) no-repeat`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div>
                              <h3 className="fw-bold mb-1">
                                👑 प्रीमियम मसाला रेंज
                              </h3>
                              <p className="mb-4">
                                शाही गरम मसाला • मीट मसाला • चिकन मसाला <span className="fw-bold"></span>{" "}
                                
                              </p>
                              <Link to="/shop" className="btn btn-dark">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                    <div className="col-12 col-lg-6 fade-in-left ">
                      <Slide direction="right">
                        <div>
                          <div
                            className="py-10 px-8 rounded-3"
                            style={{
                              background: `url(${grocerybanner2}) no-repeat`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div>
                              <h3 className="fw-bold mb-1">
                                ✨ स्पेशल मसाला कलेक्शन
                              </h3>
                              <p className="mb-4">
                                बिरयानी मसाला • पनीर मसाला • चाट मसाला<span className="fw-bold"></span>{" "}
                                
                              </p>
                              <Link to="/shop" className="btn btn-dark">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <>
              <ProductItem />
            </>
            <>
              {/* cta section */}
              <section>
                <div
                  className="container"
                  style={{
                    background: `url(Rs {m0ap})no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  {/* <hr className="my-lg-14 my-8"> */}
                  {/* row */}
                  
                  {/* <hr className="my-lg-14 my-8"> */}
                </div>
              </section>
            </>
            <>
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 mb-6">
                      <div className="section-head text-center mt-8">
                        <h3 className="h3style" data-title="Daily Best Sells">
                          Daily Offline Best Sells
                        </h3>
                        <div className="wt-separator bg-primarys"></div>
                        <div className="wt-separator2 bg-primarys"></div>
                        {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-md-3 fade-in-left">
                      <div
                        className="pt-8 px-8 rounded-3"
                        style={{
                          background: `url(${bannerdeal}) no-repeat`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: 400,
                        }}
                      >
                        <div>
                          <h3 className="fw-bold text-white">
                            100% शुद्ध भारतीय मसाले
                          </h3>
                          <p className="text-white">
                            ज्योति रिवोल्यूशन फूड इंडस्ट्री के भरोसेमंद मसाले।
                          </p>
                          <Link to="/shop" className="btn btn-primary">
                            👉अभी देखें{" "}
                            <i className="feather-icon icon-arrow-right ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 ">
                      <div className="image-itemss">
                        <Slider {...settings1}>
                          <div className="images swiper-slide px-4 ">
                            <div className="col ">
                              <div className="card card-product">
                                <div className="card-body">
                                  <div className="text-center  position-relative ">
                                    {" "}
                                    <Link to="#!">
                                      <img
                                        src={product11}
                                        alt="Grocery Ecommerce Template"
                                        className="mb-3 img-fluid"
                                      />
                                    </Link>
                                    <div className="card-product-action">
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickViewModal"
                                      >
                                        <i
                                          className="bi bi-eye"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Quick View"
                                        />
                                      </Link>
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Wishlist"
                                      >
                                        <i className="bi bi-heart" />
                                      </Link>
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                      >
                                        <i className="bi bi-arrow-left-right" />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="text-small mb-1">
                                    <Link
                                      to="#!"
                                      className="text-decoration-none text-muted"
                                    >
                                      <small>पिसे हुए मसाले🌶️</small>
                                    </Link>
                                  </div>
                                  <h2 className="fs-6">
                                    <Link
                                      to="#!"
                                      className="text-inherit text-decoration-none"
                                    >
                                      लाल मिर्च पाउडर (प्रीमियम)
                                    </Link>
                                  </h2>
                                  <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                      <span className="text-dark">Rs 199</span>{" "}
                                      <span className="text-decoration-line-through text-muted">
                                        Rs 249
                                      </span>
                                    </div>
                                    <div>
                                      <small className="text-warning">
                                        {" "}
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                      </small>
                                      <span>
                                        <small>4.5</small>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-grid mt-2">
                                    <Link to="#!" className="btn btn-primary ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-plus"
                                      >
                                        <line x1={12} y1={5} x2={12} y2={19} />
                                        <line x1={5} y1={12} x2={19} y2={12} />
                                      </svg>{" "}
                                      कार्ट में जोड़ें🛒{" "}
                                    </Link>
                                  </div>
                                  <div className="d-flex justify-content-start text-center mt-3">
                                    <div
                                      className="deals-countdown w-100"
                                      data-countdown="2022/11/11 00:00:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="images swiper-slide px-4">
                            <div className="col">
                              <div className="card card-product">
                                <div className="card-body">
                                  <div className="text-center  position-relative ">
                                    {" "}
                                    <Link to="#!">
                                      <img
                                        src={product12}
                                        alt="Grocery Ecommerce Template"
                                        className="mb-3 img-fluid"
                                      />
                                    </Link>
                                    <div className="card-product-action">
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickViewModal"
                                      >
                                        <i
                                          className="bi bi-eye"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Quick View"
                                        />
                                      </Link>
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Wishlist"
                                      >
                                        <i className="bi bi-heart" />
                                      </Link>
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                      >
                                        <i className="bi bi-arrow-left-right" />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="text-small mb-1">
                                    <Link
                                      to="#!"
                                      className="text-decoration-none text-muted"
                                    >
                                      <small>पिसे हुए मसाले🌶️</small>
                                    </Link>
                                  </div>
                                  <h2 className="fs-6">
                                    <Link
                                      to="#!"
                                      className="text-inherit text-decoration-none"
                                    >
                                      हल्दी पाउडर (प्रीमियम)
                                    </Link>
                                  </h2>
                                  <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                      <span className="text-dark">Rs 90</span>{" "}
                                      <span className="text-decoration-line-through text-muted">
                                        Rs 110
                                      </span>
                                    </div>
                                    <div>
                                      <small className="text-warning">
                                        {" "}
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                      </small>
                                      <span>
                                        <small>4.5</small>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-grid mt-2">
                                    <Link to="#!" className="btn btn-primary ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-plus"
                                      >
                                        <line x1={12} y1={5} x2={12} y2={19} />
                                        <line x1={5} y1={12} x2={19} y2={12} />
                                      </svg>{" "}
                                      कार्ट में जोड़ें🛒{" "}
                                    </Link>
                                  </div>
                                  <div className="d-flex justify-content-start text-center mt-3">
                                    <div
                                      className="deals-countdown w-100"
                                      data-countdown="2022/11/11 00:00:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="images swiper-slide px-4">
                            <div className="col">
                              <div className="card card-product">
                                <div className="card-body">
                                  <div className="text-center  position-relative ">
                                    {" "}
                                    <Link to="#!">
                                      <img
                                        src={product13}
                                        alt="Grocery Ecommerce Template"
                                        className="mb-3 img-fluid"
                                      />
                                    </Link>
                                    <div className="card-product-action">
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickViewModal"
                                      >
                                        <i
                                          className="bi bi-eye"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Quick View"
                                        />
                                      </Link>
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Wishlist"
                                      >
                                        <i className="bi bi-heart" />
                                      </Link>
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                      >
                                        <i className="bi bi-arrow-left-right" />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="text-small mb-1">
                                    <Link
                                      to="#!"
                                      className="text-decoration-none text-muted"
                                    >
                                      <small>पिसे हुए मसाले🌶️</small>
                                    </Link>
                                  </div>
                                  <h2 className="fs-6">
                                    <Link
                                      to="#!"
                                      className="text-inherit text-decoration-none"
                                    >
                                      धनिया पाउडर (प्रीमियम)
                                    </Link>
                                  </h2>
                                  <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                      <span className="text-dark">Rs 95</span>{" "}
                                      <span className="text-decoration-line-through text-muted">
                                        Rs 120
                                      </span>
                                    </div>
                                    <div>
                                      <small className="text-warning">
                                        {" "}
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                      </small>
                                      <span>
                                        <small>4.5</small>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-grid mt-2">
                                    <Link to="#!" className="btn btn-primary ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-plus"
                                      >
                                        <line x1={12} y1={5} x2={12} y2={19} />
                                        <line x1={5} y1={12} x2={19} y2={12} />
                                      </svg>{" "}
                                      कार्ट में जोड़ें🛒{" "}
                                    </Link>
                                  </div>
                                  <div className="d-flex justify-content-start text-center mt-3">
                                    <div
                                      className="deals-countdown w-100"
                                      data-countdown="2022/11/11 00:00:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="images swiper-slide px-4">
                            <div className="col">
                              <div className="card card-product">
                                <div className="card-body">
                                  <div className="text-center  position-relative ">
                                    {" "}
                                    <Link to="#!">
                                      <img
                                        src={product13}
                                        alt="Grocery Ecommerce Template"
                                        className="mb-3 img-fluid"
                                      />
                                    </Link>
                                    <div className="card-product-action">
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickViewModal"
                                      >
                                        <i
                                          className="bi bi-eye"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Quick View"
                                        />
                                      </Link>
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Wishlist"
                                      >
                                        <i className="bi bi-heart" />
                                      </Link>
                                      <Link
                                        to="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                      >
                                        <i className="bi bi-arrow-left-right" />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="text-small mb-1">
                                    <Link
                                      to="#!"
                                      className="text-decoration-none text-muted"
                                    >
                                      <small>पिसे हुए मसाले🌶️</small>
                                    </Link>
                                  </div>
                                  <h2 className="fs-6">
                                    <Link
                                      to="#!"
                                      className="text-inherit text-decoration-none"
                                    >
                                      गरम मसाला (प्रीमियम)
                                    </Link>
                                  </h2>
                                  <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                      <span className="text-dark">Rs 130</span>{" "}
                                      <span className="text-decoration-line-through text-muted">
                                        Rs 180
                                      </span>
                                    </div>
                                    <div>
                                      <small className="text-warning">
                                        {" "}
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                      </small>
                                      <span>
                                        <small>4.5</small>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-grid mt-2">
                                    <Link to="#!" className="btn btn-primary ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-plus"
                                      >
                                        <line x1={12} y1={5} x2={12} y2={19} />
                                        <line x1={5} y1={12} x2={19} y2={12} />
                                      </svg>{" "}
                                      🛒 कार्ट में जोड़ें{" "}
                                    </Link>
                                  </div>
                                  <div className="d-flex justify-content-start text-center mt-3">
                                    <div
                                      className="deals-countdown w-100"
                                      data-countdown="2022/11/11 00:00:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <>
              <section className="my-lg-14 my-8">
                <div className="container" style={{ marginTop: 50 }}>
                  <div
                    className="row justify-content-center  g-4"
                    style={{ textAlign: "center" }}
                  >
                    <div className="col-md-3 col-sm-6 fade-zoom ">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={refresh} alt="refresh" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">प्राकृतिक खुशबू🌿</h3>
                              <p>
                                हर पैक में ताज़गी और प्राकृतिक सुगंध। 
                              
                                {/* <Link to="#!">policy</Link>. */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={package1} alt="package" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">आधुनिक निर्माण प्रक्रिया🏭</h3>
                              <p>
                                स्वच्छ और आधुनिक तकनीक से तैयार मसाले। 
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={gift} alt="gift" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">
                                सुरक्षित पैकेजिंग📦
                              </h3>
                              <p>
                                अपने स्थानीय सुपरमार्केट की तुलना में सस्ती कीमतें,
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={clock} alt="clock" />
                              </div>
                            </div>
                            <div className="icon-content">
                              {/* <h4 className="wt-tilte">Reports</h4> */}
                              <h3 className="h5 mb-3">🤝थोक ऑर्डर उपलब्ध</h3>
                              <p>
                                डीलर, वितरक और रिटेलर्स के लिए विशेष सुविधाएँ।
                                {/* <p> stores near you.</p> */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <>
            <FAQ/>
            </>
            <>
              <div className="container">
                {/* code on whatsap 9. 55 */}
              </div>
            </>

            
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
