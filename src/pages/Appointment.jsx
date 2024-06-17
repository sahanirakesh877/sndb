import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

const Appointment = () => {
  const [show, setShow] = useState();

  useEffect(() => {
    if (window.location.pathname == "/appointment") {
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
        <title>Appointment </title>
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
                Make Appointment
              </h1>
              <Link to="/" className="h4 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/appointment" className="h4 text-white">
                Appointment
              </Link>
            </div>
          </div>
        </div>
      )}

      <div
        className="container-fluid bg-primary bg-appointment my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="display-5 text-white mb-4">
                  We Are Certified Pediatric Surgeons and Colorectal Specialists
                  You Can Trust
                </h1>
                <p className="text-white mb-0">
                  Welcome to our practice specializing in pediatric surgery and
                  colorectal care. Our team of certified surgeons and
                  specialists is dedicated to providing compassionate and expert
                  care to children and adults alike. With a focus on pediatric
                  surgery and colorectal health, we offer comprehensive
                  treatment options tailored to each patient's unique needs.
                  From minimally invasive procedures to complex surgeries, we
                  are committed to delivering the highest standard of care with
                  empathy and expertise. Trust us to guide you through your
                  healthcare journey and help you achieve optimal health and
                  wellness.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <h1 className="text-white mb-4">Make Appointment</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: 55 }}
                      >
                        <option selected>Select A Service</option>
                        <option value={1}>Service 1</option>
                        <option value={2}>Service 2</option>
                        <option value={3}>Service 3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: 55 }}
                      >
                        <option selected>Select Doctor</option>
                        <option value={1}>Doctor 1</option>
                        <option value={2}>Doctor 2</option>
                        <option value={3}>Doctor 3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="date"
                        id="date1"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-light border-0 datetimepicker-input"
                          placeholder="Appointment Date"
                          data-target="#date1"
                          data-toggle="datetimepicker"
                          style={{ height: 55 }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="time"
                        id="time1"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-light border-0 datetimepicker-input"
                          placeholder="Appointment Time"
                          data-target="#time1"
                          data-toggle="datetimepicker"
                          style={{ height: 55 }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark w-100 py-3" type="submit">
                        Make Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
