import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

const Teams = () => {
  const [show, setShow] = useState();

  useEffect(() => {
    if (window.location.pathname == "/doctors") {
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
        <title>Doctors </title>
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
                Our Expertise Doctors
              </h1>
              <Link to="/" className="h4 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-3" />
              <Link to="/teams" className="h4 text-white">
                Doctors
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
              <div className="section-title bg-light rounded h-100 p-5">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  Our SNDB Team
                </h5>
                <h1 className="display-6 mb-4">
                  Meet Our Certified &amp; Experienced Team
                </h1>
                <a
                  href="appointment.html"
                  className="btn btn-primary py-3 px-5"
                >
                  Appointment
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div
                  className="position-relative rounded-top "
                  style={{ zIndex: 1 }}
                >
                  <img
                    className="img-fluid rounded-top teamimg w-100"
                    src="img/Roshan sir.png"
                    alt
                  />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-twitter fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-facebook-f fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-linkedin-in fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-instagram fw-normal" />
                    </a>
                  </div>
                </div>
                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 className="mb-2">Dr. Roshan Shah</h4>
                  <p className="text-primary mb-0">Pediatric Surgeon</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div className="team-item">
                <div
                  className="position-relative rounded-top"
                  style={{ zIndex: 1 }}
                >
                  <img
                    className="img-fluid rounded-top teamimg w-100"
                    src="img/drRakesh.png"
                    alt
                  />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-twitter fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-facebook-f fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-linkedin-in fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-instagram fw-normal" />
                    </a>
                  </div>
                </div>
                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 className="mb-2">Dr. Rakesh </h4>
                  <p className="text-primary mb-0">Colorectal Surgeon</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div
                  className="position-relative rounded-top"
                  style={{ zIndex: 1 }}
                >
                  <img
                    className="img-fluid rounded-top teamimg w-100"
                    src="img/drBinay.png"
                    alt
                  />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-twitter fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-facebook-f fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-linkedin-in fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-instagram fw-normal" />
                    </a>
                  </div>
                </div>
                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 className="mb-2">Dr.Binay yadav</h4>
                  <p className="text-primary mb-0">Colorectal Surgeon</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div
                  className="position-relative rounded-top"
                  style={{ zIndex: 1 }}
                >
                  <img
                    className="img-fluid rounded-top teamimg w-100"
                    src="img/team-4.jpg"
                    alt
                  />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-twitter fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-facebook-f fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-linkedin-in fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-instagram fw-normal" />
                    </a>
                  </div>
                </div>
                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 className="mb-2">Dr. Prakash Lama</h4>
                  <p className="text-primary mb-0">Pulmonary Surgeon</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div className="team-item">
                <div
                  className="position-relative rounded-top"
                  style={{ zIndex: 1 }}
                >
                  <img
                    className="img-fluid rounded-top teamimg w-100"
                    src="img/team-5.jpg"
                    alt
                  />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-twitter fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-facebook-f fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-linkedin-in fw-normal" />
                    </a>
                    <a className="btn btn-primary btn-square m-1" href="#">
                      <i className="fab fa-instagram fw-normal" />
                    </a>
                  </div>
                </div>
                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 className="mb-2">Dr. Udit Jadav</h4>
                  <p className="text-primary mb-0">Cardiac Surgeon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
