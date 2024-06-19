import React from "react";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Save the Date for SSN SaarCon",
      content:
        "Join us for SSN SaarCon, an exciting event you won't want to miss!",
      img: "https://img.freepik.com/free-vector/flat-design-medical-facebook-post_23-2149164623.jpg?t=st=1718698101~exp=1718701701~hmac=cde1885109615d995763ba62eeb99f4710974c870bb12883ed772e4e2319bc24&w=826",
    },
    {
        title: "Committe Meeting",
        content:
          "Discover the latest advancements in gastroenterology investigations.",
        img: "https://img.freepik.com/premium-vector/doctor-social-media-banner-design_148452-296.jpg?w=740",
      },
    {
      title: "COVID-19 and surgical procedures",
      content: "Learn how COVID-19 has impacted surgical procedures globally.",
      img: "https://img.freepik.com/free-psd/water-charity-landing-page-design-template_23-2149117463.jpg?t=st=1718698116~exp=1718701716~hmac=195c69e5f569a2f7d1d2976f75710a829d5ede69de3ec42aedc1b41db77286ac&w=900",
    },
    {
      title: "Gastroenterology investigation",
      content:
        "Discover the latest advancements in gastroenterology investigations.",
      img: "https://img.freepik.com/premium-vector/doctor-social-media-banner-design_148452-296.jpg?w=740",
    },
    {
      title: "Colorectal and Pediatric",
      content:
        "Insights into colorectal and pediatric healthcare advancements.",
      img: "https://img.freepik.com/premium-psd/medical-healthcare-banner-social-media-instagram-post-template_368797-696.jpg?w=740",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="section-title mb-4">
        <h5 className="position-relative d-inline-block text-primary text-uppercase">
          Message and Blogs
        </h5>
      </div>
      <div className="row">
        {/* left section start */}
        <div className="col-md-7 ">
          <div className="mb-4 bg-primary">
            <h4 className="text-center text-white  bg-danger py-2">Message From Board Member</h4>
            <div className="d-flex  justify-content-center">
              <img
                src="/img/drRakesh.png"
                alt="Board Member"
                className=" border mb-3 shadow "
                style={{ width: "120px", height: "120px" }}
              />
            </div>
            <p className="text-white px-4 py-3">Welcome to the Society of Nepal Doctors in Bangladesh. Our goal is to foster collaboration and professional growth among our members, ensuring we provide the highest standard of care to our communities.</p>
          </div>

          <div className="bg-primary">
            <h4 className="text-center text-white  bg-danger py-2">Message From Chairman</h4>
            <div className="d-flex  justify-content-center">
              <img
                src="/img/doctor1.jpeg"
                alt="Board Member"
                className=" border mb-3 shadow "
                style={{ width: "120px", height: "120px" }}
              />
            </div>
            <p className="text-white px-4 py-3">As the chairman, I am committed to guiding our society towards new horizons. Together, we will strive to advance medical practices and support the professional development of our esteemed members.</p>
          </div>
        </div>

        {/* right section start */}

        <div className="col-md-5">
          <div className="section-title mb-2">
            <h5 className="position-relative d-inline-block text-primary text-uppercase">
              News and Events
            </h5>
          </div>
          {blogPosts.map((post, index) => (
            <div className="card mb-2 border-0" key={index}>
              <div className="card-body  d-flex p-md-1 align-items-start  border-0  ">
                <div className="cardimg">
                  <img src={post.img} alt="" className="" />
                </div>
                <div className="ms-2 pt-1">
                  <h6 className="card-title">{post.title}</h6>
                  <p className="card-text">{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
