import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Gallery = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/gallery") {
      setShow(true);
    }
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const galleryImages = [
    { id: 1, src: "https://img.freepik.com/premium-photo/empty-customer-service-area-counter-top-computers-posters-office-supplies-reception-area-with-no-workers-patients-scheduling-appointments-brain-studies-displayed-laptop-screen_482257-54604.jpg?w=826", alt: "Gallery Image 1" },
    { id: 2, src: "https://img.freepik.com/free-photo/diverse-group-patients-waiting-attend-medical-appointment-sitting-busy-hospital-reception-desk-people-with-healthcare-insurance-having-examination-with-specialist-handheld-shot_482257-46276.jpg?t=st=1718709556~exp=1718713156~hmac=641940faa9e8a0def06e2178afa7f12a44e55c2d53c03f9bf1b20f38173eb6d3&w=900", alt: "Gallery Image 2" },
    { id: 3, src: "https://img.freepik.com/free-photo/medical-specialist-presenting-coronavirus-using-tablet-sitting-desk-medical-office_482257-8097.jpg?t=st=1718709591~exp=1718713191~hmac=b9d75c15b710069a8a3babd28eaa05faeb8ee1d6f3a5478793566f0852bfb2c5&w=826", alt: "Gallery Image 3" },
    { id: 4, src: "https://img.freepik.com/premium-photo/medical-clinic-lobby-covid-pandemic_482257-67459.jpg?w=826", alt: "Gallery Image 4" },
    { id: 5, src: "https://img.freepik.com/free-photo/middle-aged-woman-doctor-wearing-white-coat-black-protective-facial-mask-with-stethoscope-holding-x-ray-lungs-looking-with-interest-it-standing-isolated-orange-background_141793-21497.jpg?t=st=1718709626~exp=1718713226~hmac=e79e13d89ea24d4382a7813dcebf9cf6bfab711e20c6fceb874e90983df3c822&w=826", alt: "Gallery Image 5" },
    { id: 6, src: "https://img.freepik.com/premium-photo/empty-customer-service-area-counter-top-computers-posters-office-supplies-reception-area-with-no-workers-patients-scheduling-appointments-brain-studies-displayed-laptop-screen_482257-54604.jpg?w=826", alt: "Gallery Image 1" },
    { id: 7, src: "https://img.freepik.com/free-photo/diverse-group-patients-waiting-attend-medical-appointment-sitting-busy-hospital-reception-desk-people-with-healthcare-insurance-having-examination-with-specialist-handheld-shot_482257-46276.jpg?t=st=1718709556~exp=1718713156~hmac=641940faa9e8a0def06e2178afa7f12a44e55c2d53c03f9bf1b20f38173eb6d3&w=900", alt: "Gallery Image 2" },
    { id: 8, src: "https://img.freepik.com/free-photo/medical-specialist-presenting-coronavirus-using-tablet-sitting-desk-medical-office_482257-8097.jpg?t=st=1718709591~exp=1718713191~hmac=b9d75c15b710069a8a3babd28eaa05faeb8ee1d6f3a5478793566f0852bfb2c5&w=826", alt: "Gallery Image 3" },
    { id: 9, src: "https://img.freepik.com/premium-photo/medical-clinic-lobby-covid-pandemic_482257-67459.jpg?w=826", alt: "Gallery Image 4" },
    { id: 10, src: "https://img.freepik.com/free-photo/middle-aged-woman-doctor-wearing-white-coat-black-protective-facial-mask-with-stethoscope-holding-x-ray-lungs-looking-with-interest-it-standing-isolated-orange-background_141793-21497.jpg?t=st=1718709626~exp=1718713226~hmac=e79e13d89ea24d4382a7813dcebf9cf6bfab711e20c6fceb874e90983df3c822&w=826", alt: "Gallery Image 5" },
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | Society of Nepal Doctors of Bangladesh (SNDB)</title>
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
              <h1 className="display-3 text-white animated zoomIn">Photos</h1>
              <Link to="/" className="h4 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2" />
              <Link to="/gallery" className="h4 text-white">
                Gallery
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid  wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
        <div className="row g-4">
            {galleryImages.map((image) => (
              <div className="col-md-3 col-sm-6" key={image.id}>
                <img src={image.src} alt={image.alt} className="img-fluid rounded shadow-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
