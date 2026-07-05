import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import member1 from "../../images/05.jpg";
import member2 from '../../images/06.jpg'
import member3 from "../../images/07.jpg";
import { Slide } from "react-awesome-reveal";

const Testimonials = () => {
  const [carouselOptions] = useState({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 30555500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  useEffect(() => {
    // Update carousel options if needed
    // setCarouselOptions(prevOptions => ({
    //   ...prevOptions,
    //   // Update options here
    // }));
  }, []);

  return (
    <div className="container">
      <div id="testimonials" className="testimonials-one ptb-50">
        <div className="overlay"></div>

        <div className="row" style={{padding:'20px'}}>
          <div className="col-md-6" style={{padding:'30px'}}>
            <div className="info-whydiff">
              <div className="section-title-left pt-80">
                <Slide direction="down" delay={0.3}>
                <h3 className="party">
                  हमारे ग्राहकों की राय
                  {/* <br /> */}
                  {/* देखिए, हमारे ग्राहक क्या कहते हैं! */}
                </h3>
                </Slide>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{padding:'20px'}}>
            <OwlCarousel
              className="owl-carousel testimonial-one owl-theme owl-loaded owl-drag"
              {...carouselOptions}
            >
              {/* Testimonial items */}
              <div className="testmonail-item">
                {/* <div class="owl-item"> */}
                <div className="testmonail-box">
                  <div className="client-img">
                    <img src={member1} alt="Client" />
                    <div className="quote-icon">
                      <i className="fa fa-quote-left fa-2x" />
                    </div>
                  </div>
                  <div className="inner-test">
                    <p className="text">
                      "मैं पिछले एक साल से ज्योति रिवोल्यूशन के मसाले इस्तेमाल कर रहा हूँ। 
                      मसालों की खुशबू, शुद्धता और स्वाद वास्तव में बेहतरीन है। 
                      हर पैक में गुणवत्ता साफ़ दिखाई देती है।!"
                    </p>
                  </div>
                  <div className="author-details mt-3">
                    <h6>Shivdyal Singh</h6>
                    <span>Our Customer </span>
                  </div>
                </div>
                {/* </div> */}
              </div>

              <div className="testmonail-item">
                {/* <div class="owl-item"> */}
                <div className="testmonail-box">
                  <div className="client-img">
                    <img src={member2} alt="Client" />
                    <div className="quote-icon">
                      <i className="fa fa-quote-left fa-2x" />
                    </div>
                  </div>
                  <div className="inner-test">
                    <p className="text">
                      "हमारी किराना दुकान पर ग्राहकों की पहली पसंद यही मसाले हैं। 
                      उचित कीमत, बेहतरीन पैकेजिंग ने हमारे व्यापार को आसान बना दिया है।"
                    </p>
                  </div>
                  <div className="author-details mt-3">
                    <h6>Jagdish</h6>
                    <span>Our Customer</span>
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div className="testmonail-item">
                {/* <div class="owl-item"> */}
                <div className="testmonail-box">
                  <div className="client-img">
                    <img src={member3} alt="Client" />
                    <div className="quote-icon">
                      <i className="fa fa-quote-left fa-2x" />
                    </div>
                  </div>
                  <div className="inner-test">
                    <p className="text">
                      "हमने अपने रेस्टोरेंट में ज्योति रिवोल्यूशन के मसालों का उपयोग शुरू किया 
                      और स्वाद में स्पष्ट अंतर महसूस हुआ। गुणवत्ता और फ्लेवर दोनों शानदार हैं।"
                    </p>
                  </div>
                  <div className="author-details mt-3">
                    <h6>Savan khedekar</h6>
                    <span>Our Customer </span>
                  </div>
                </div>
                {/* </div> */}
              </div>
              {/*  */}

              {/* Add more testimonial items here */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
