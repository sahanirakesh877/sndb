import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  const [show, setShow] = useState();

  useEffect(() => {
    if (window.location.pathname == "/about") {
      setShow(true);
    }
  });

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Helmet>
        <title>About </title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />
      </Helmet>
      {show && (
        <div className="container-fluid bg-primary py-5 hero-header mb-5">
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">About Us</h1>
              <Link to="/" className="h4 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/about" className="h4 text-white">
                About
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  About Us
                </h5>
                <h1 className="display-5 mb-0">
                  The World's Best Doctors Available For You That You Can Trust
                </h1>
              </div>
              <h4 className="text-body fst-italic mb-4">
                Providing Exceptional Medical Care and Expertise
              </h4>
              <p className="mb-4">
                Welcome to [SNDB], where excellence in medical care meets
                compassionate service. Our association is dedicated to advancing
                the field of healthcare and ensuring the well-being of our
                community. With a team of highly skilled doctors and medical
                professionals, we strive to provide exceptional care tailored to
                each patient's needs.
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3" />
                    Award Winning
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3" />
                    Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3" />
                    24/7 Opened
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3" />
                    Fair Prices
                  </h5>
                </div>
              </div>
              <a
                href="appointment.html"
                className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                data-wow-delay="0.6s"
              >
                Make Appointment
              </a>
            </div>
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/aboutimgDoctor.png"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
