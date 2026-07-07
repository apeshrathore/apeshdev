import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import blog1 from "../../images/blog-img-1.jpg";
import blog2 from "../../images/blog-img-2.jpg";
import blog3 from "../../images/blog-img-3.jpg";
import blog4 from "../../images/blog-img-4.jpg";
import blog5 from "../../images/blog-img-5.jpg";
import blog6 from "../../images/blog-img-6.jpg";
import blog7 from "../../images/blog-img-7.jpg";
import blog8 from "../../images/blog-img-8.jpg";
import blog9 from "../../images/blog-img-9.jpg";
import { Zoom } from "react-awesome-reveal";
import ScrollToTop from "../ScrollToTop";

const BlogCategory = () => {
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
            <ScrollToTop/>
            </>
            <>
              <div>
                {/* section */}
                <section className="mt-8">
                  {/* container */}
                  <div className="container">
                    {/* row */}
                    <div className="row">
                      <div className="col-12 mb-4">
                        {/* heading */}
                        <h1 className="fw-bold">Articles</h1>
                      </div>
                    </div>
                  </div>
                </section>
                {/* section */}
                <section className="mb-lg-14 mb-8">
                  {/* container */}
                  <div className="container">
                    {/* row */}
                    <div className="row">
                      {/* col */}
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            {/* img */}
                            <div className="img-zoom">
                              <img
                                src={blog1}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        <div className="mb-3">
                          <Link to="#!">स्वास्थ्य</Link>
                        </div>
                        {/* text */}
                        <div>
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                              1. हल्दी पाउडर के फायदे
                            </Link>
                          </h2>
                          <p>
                            हल्दी पाउडर के 10 अद्भुत फायदे और सही उपयोग
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>22 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">12min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* col */}
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            <div className="img-zoom">
                              {/* img */}
                              <img
                                src={blog2}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        <div className="mb-3">
                          <Link to="#!">स्मसाले</Link>
                        </div>
                        <div>
                          {/* text */}
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                              2. लाल मिर्च पाउडर
                            </Link>
                          </h2>
                          <p>
                            शुद्ध लाल मिर्च पाउडर की पहचान कैसे करें?
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>20 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">8min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* col */}
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            {/* img */}
                            <div className="img-zoom">
                              <img
                                src={blog3}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        <div className="mb-3">
                          <Link to="#!">किचन टिप्स</Link>
                        </div>
                        {/* text */}
                        <div>
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                              3. धनिया पाउडर
                            </Link>
                          </h2>
                          <p>
                            धनिया पाउडर खाने का स्वाद कैसे बढ़ाता है?
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>18 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">5min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* col */}
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            {/* img */}
                            <div className="img-zoom">
                              <img
                                src={blog4}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        <div className="mb-3">
                          <Link to="#!">रेसिपी</Link>
                        </div>
                        <div>
                          {/* text */}
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                              4. गरम मसाला
                            </Link>
                          </h2>
                          <p>
                            घर पर स्वादिष्ट गरम मसाला कैसे इस्तेमाल करें?
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>16 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">9min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* col */}
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            {/* img */}
                            <div className="img-zoom">
                              <img
                                src={blog5}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        <div className="mb-3">
                          <Link to="#!">रेसिपी</Link>
                        </div>
                        {/* text */}
                        <div>
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                              5. तंदूरी मसाला
                            </Link>
                          </h2>
                          <p>
                            तंदूरी मसाले से होटल जैसा स्वाद घर पर कैसे पाएँ?
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>12 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">12min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            {/* img */}
                            <div className="img-zoom">
                              <img
                                src={blog6}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        <div className="mb-3">
                          <Link to="#!">रेसिपी</Link>
                        </div>
                        <div>
                          {/* text */}
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                              6. पनीर मसाला{" "}
                            </Link>
                          </h2>
                          <p>
                            रेस्टोरेंट स्टाइल शाही पनीर बनाने की आसान विधि
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>14 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">6min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            {/* img */}
                            <div className="img-zoom">
                              <img
                                src={blog7}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        <div className="mb-3">
                          <Link to="#!">Cooking Tips</Link>
                        </div>
                        <div>
                          {/* text */}
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                              7. Kitchen King Masala
                            </Link>
                          </h2>
                          <p>
                            Kitchen King मसाला किन-किन सब्जियों में इस्तेमाल करें?
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>16 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">9min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            {/* img */}
                            <div className="img-zoom">
                              <img
                                src={blog8}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        <div className="mb-3">
                          <Link to="#!">Quality</Link>
                        </div>
                        <div>
                          {/* text */}
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                              8. शुद्ध मसालों की पहचान
                            </Link>
                          </h2>
                          <p>
                            असली और नकली मसालों की पहचान कैसे करें?
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>12 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">12min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            {/* img */}
                            <div className="img-zoom">
                              <img
                                src={blog9}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        <div className="mb-3">
                          <Link to="#!">Tips</Link>
                        </div>
                        <div>
                          {/* text */}
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                              9. मसालों को कैसे स्टोर करें?{" "}
                            </Link>
                          </h2>
                          <p>
                            मसालों की खुशबू लंबे समय तक बनाए रखने के आसान तरीके
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>14 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">6min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        {/* nav */}
                        <nav>
                          <ul className="pagination ">
                            <li className="page-item disabled">
                              <Link
                                className="page-link  mx-1 rounded-3 "
                                to="#"
                                aria-label="Previous"
                              >
                                <i className="fa fa-chevron-left" />
                              </Link>
                            </li>
                            <li className="page-item ">
                              <Link
                                className="page-link  mx-1 rounded-3 active"
                                to="#"
                              >
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link mx-1 rounded-3 text-body"
                                to="#"
                              >
                                2
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link mx-1 rounded-3 text-body"
                                to="#"
                              >
                                ...
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link mx-1 rounded-3 text-body"
                                to="#"
                              >
                                12
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link mx-1 rounded-3 text-body"
                                to="#"
                                aria-label="Next"
                              >
                                <i className="fa fa-chevron-right" />
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogCategory;
