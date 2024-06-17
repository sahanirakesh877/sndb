import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

const Service = () => {
  const [show, setShow] = useState();

  useEffect(() => {
    if (window.location.pathname == "/service") {
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
        <title>Service</title>
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
              <h1 className="display-3 text-white animated zoomIn">
               Services
              </h1>
              <Link to="/" className="h4 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-3" />
              <Link to="/service" className="h4 text-white">
               Service
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5 mb-5">
            <div
              className="col-lg-5 wow zoomIn"
              data-wow-delay="0.3s"
              style={{ minHeight: 400 }}
            >
              <div className="h-100 rounded ">
                <img
                  className=" w-100 h-100"
                  src="https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-78049.jpg?t=st=1711871987~exp=1711875587~hmac=ec99fb562d6b59602b96b33bb5d14d39de4c2eb0935344b25f449698d59ca21c&w=826"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title mb-5">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  Our Services
                </h5>
                <h1 className="display-5 mb-0">
                  We Offer The Best Quality Medical Services
                </h1>
              </div>
              <div className="row g-5">
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/premium-photo/hospital-doctor-is-with-youngster-generative-ai_722401-8072.jpg?w=900"
                      alt
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Pediatric Surgeon</h5>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.9s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-photo/portrait-male-surgeon-operation-theater-looking-camera-doctor-scrubs-medical-mask-modern-hospital-operating-theater_657921-1051.jpg?t=st=1711871308~exp=1711874908~hmac=622b7b0ee87b716b34c946a876e484033dcf51f70595ec9c1d972046b016bcda&w=826"
                      alt
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Colorectal Surgeon</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-7">
              <div className="row g-5">
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/premium-photo/photo-vet-surgeon-performing-spayneuter_1056572-6015.jpg?w=900"
                      alt
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Haemorhoids Surgeon</h5>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-photo/side-view-doctor-looking-radiography_23-2149844589.jpg?t=st=1711871243~exp=1711874843~hmac=cb76d8891fc755b3c43efe2d9c6163913560c2f31d7eaf84c7490607e3bf5fc7&w=826"
                      alt
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Pulmonary Disease</h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 service-item wow zoomIn"
              data-wow-delay="0.9s"
            >
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                <h3 className="text-white mb-3">Make Appointment</h3>
                <p className="text-white mb-3">
                  Book Your Time and Get Treatment On Time
                </p>
                <h2 className="text-white mb-0">+12 345 6789</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
