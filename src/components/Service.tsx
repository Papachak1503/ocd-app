import React from "react";

export default function Service() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              Services
              <small>Subheading</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Services</li>
            </ol>
          </div>
          {/* Image Header */}
          <img
            className="img-fluid rounded mb-4"
            src="images/services-big.jpg"
            alt=""
          />
          {/* Services Section */}
          <div className="services-bar">
            <h1 className="my-4">Our Best Services </h1>
            {/* Services Section */}
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <h4 className="card-header">Garden Fence</h4>
                  <div className="card-img">
                    <img
                      className="img-fluid"
                      src="images/services-img-01.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <h4 className="card-header">Garden Watering</h4>
                  <div className="card-img">
                    <img
                      className="img-fluid"
                      src="images/services-img-02.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100">
                  <h4 className="card-header">Garden Supplies</h4>
                  <div className="card-img">
                    <img
                      className="img-fluid"
                      src="images/services-img-03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* Our Customers */}
          <div className="customers-box">
            <h2>Our Customers</h2>
            <div className="row">
              <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src="images/logo_01.png" alt="" />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src="images/logo_02.png" alt="" />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src="images/logo_03.png" alt="" />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src="images/logo_04.png" alt="" />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src="images/logo_05.png" alt="" />
              </div>
              <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src="images/logo_06.png" alt="" />
              </div>
            </div>
            {/* /.row */}
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
