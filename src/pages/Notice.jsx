import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import members from "../Data/Doctordata";


const Notice = () => {
  const [show, setShow] = useState();

  useEffect(() => {
    if (window.location.pathname == "/blog") {
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
        <title>About | Society of Nepal Doctors of Bangladesh (SNDB)</title>

        <meta
          name="description"
          content="Learn more about the Society of Nepal Doctors of Bangladesh (SNDB), our mission, and the exceptional medical care we provide."
        />

        <meta
          name="keywords"
          content="SNDB, Nepal Doctors, Bangladesh Doctors, Medical Care, Healthcare"
        />
      </Helmet>

      {show && (
        <div className="container-fluid bg-primary py-5 hero-header mb-5">
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">Board Members</h1>
              <Link to="/" className="h4 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/Notice" className="h4 text-white">
                About
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            {members &&
              members.map((member) => {
                return (
                  <div
                    className="col-lg-3 wow slideInUp"
                    data-wow-delay="0.3s"
                    key={member.id}
                  >
                    <div className="team-item   shadow">
                      <div className="d-flex justify-content-center">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="rounded-circle border shadow-sm"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="team-text position-relative  bg-primary text-center rounded-bottom px-4 py-2 mt-3">
                        <h6 className="mb-2 fw-bold  text-white">
                          {member.name}
                        </h6>
                        <p className="mb-0 text-light">{member.position}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
