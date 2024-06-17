import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="container-fluid bg-dark text-light py-5 wow fadeInUp"
        data-wow-delay="0.3s"
        style={{ marginTop: 15 }}
      >
        <div className="container pt-5">
          <div className="row g-5 pt-4">
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-light mb-2" to="/">
                  <i className="bi bi-arrow-right footer-text me-2" />
                  Home
                </Link>
                <Link className="text-light mb-2" to="/about">
                  <i className="bi bi-arrow-right footer-text me-2" />
                  About Us
                </Link>
                <Link className="text-light mb-2" to="/service">
                  <i className="bi bi-arrow-right footer-text me-2" />
                  Our Services
                </Link>
              
                <Link className="text-light" to="/contact">
                  <i className="bi bi-arrow-right footer-text me-2" />
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Popular Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-light mb-2" to="#">
                  <i className="bi bi-arrow-right footer-text me-2" />
                  Colorectal
                </Link>
                <Link className="text-light mb-2" to="#">
                  <i className="bi bi-arrow-right footer-text me-2" />
                 Pediatric
                </Link>
                <Link className="text-light mb-2" to="#">
                  <i className="bi bi-arrow-right footer-text me-2" />
                  Piles/Haemorrhoids
                </Link>
               
                <Link className="text-light" to="#">
                  <i className="bi bi-arrow-right footer-text me-2" />
                  Explore Disease
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2">
                <i className="bi bi-geo-alt footer-text me-2" /> Nepal,
                Bangladesh
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-open footer-text me-2" />
                info@example.com
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone footer-text me-2" />
                +12 345 67890
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="d-flex">
                <Link
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  to="#"
                >
                  <i className="fab fa-twitter fw-normal" />
                </Link>
                <Link
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  to="#"
                >
                  <i className="fab fa-facebook-f fw-normal" />
                </Link>
                <Link
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  to="#"
                >
                  <i className="fab fa-linkedin-in fw-normal" />
                </Link>
                <Link
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  to="#"
                >
                  <i className="fab fa-instagram fw-normal" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="container-fluid text-light py-4 "
        style={{ background: "#051225", marginBottom: "-24px" }}
      >
        <div className="container">
          <div className="row g-0 mb-md-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                ©{" "}
                <a className="text-white " to="#">
                  www.SNDB.com
                </a>
                &nbsp;&nbsp; All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by &nbsp;&nbsp;
                <Link className="text-white " to="https://www.technavata.com/">
                  NAVATA TECH
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
