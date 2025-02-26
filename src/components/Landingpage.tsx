import React from 'react'

export default function Landingpage() {
  return (
    <div>
        <header className="slider-main">
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner" role="listbox">
              {/* Slide One - Set the background image for this slide in the line below */}
              <div
                className="carousel-item active"
                style={{ backgroundImage: 'url("images/slider-01.jpg")' }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>Welcome to N &amp; LW Lawn Care</h3>
                  <p>A Great Theme For Garden Lawn Care</p>
                </div>
              </div>
              {/* Slide Two - Set the background image for this slide in the line below */}
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/slider-02.jpg")' }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>Beautiful Garden</h3>
                  <p>A Great Theme For Garden Lawn Care</p>
                </div>
              </div>
              {/* Slide Three - Set the background image for this slide in the line below */}
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/slider-03.jpg")' }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>Welcome to N &amp; LW Lawn Care</h3>
                  <p>A Great Theme For Garden Lawn Care</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>
        {/* Page Content */}
        <div className="container">
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
          {/* About Section */}
          <div className="about-main">
            <div className="row">
              <div className="col-lg-6">
                <h2>Welcome to N &amp; LW Lawn Care</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h5>Our smart approach</h5>
                <ul>
                  <li>Sed at tellus eu quam posuere mattis.</li>
                  <li>
                    Phasellus quis erat et enim laoreet posuere ac porttitor
                    ipsum.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Duis porttitor odio pellentesque mollis vulputate.</li>
                  <li>Quisque ac eros non ex hendrerit vehicula.</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis, omnis doloremque non cum id reprehenderit, quisquam
                  totam aspernatur tempora minima unde aliquid ea culpa sunt.
                  Reiciendis quia dolorum ducimus unde.
                </p>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded"
                  src="images/about-img.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* Portfolio Section */}
          <div className="portfolio-main">
            <h2>Our Portfolio</h2>
            <div className="row">
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <div className="card-img">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="images/portfolio-img-01.jpg"
                        alt=""
                      />
                      <div className="overlay">
                        <i className="fas fa-arrows-alt" />
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Lawn &amp; garden care</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <div className="card-img">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="images/portfolio-img-02.jpg"
                        alt=""
                      />
                      <div className="overlay">
                        <i className="fas fa-arrows-alt" />
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Lawn renovation</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <div className="card-img">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="images/portfolio-img-03.jpg"
                        alt=""
                      />
                      <div className="overlay">
                        <i className="fas fa-arrows-alt" />
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Tree planting</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <div className="card-img">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="images/portfolio-img-04.jpg"
                        alt=""
                      />
                      <div className="overlay">
                        <i className="fas fa-arrows-alt" />
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Water Baganig</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <div className="card-img">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="images/portfolio-img-05.jpg"
                        alt=""
                      />
                      <div className="overlay">
                        <i className="fas fa-arrows-alt" />
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Growing plants</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <div className="card-img">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="images/portfolio-img-01.jpg"
                        alt=""
                      />
                      <div className="overlay">
                        <i className="fas fa-arrows-alt" />
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Snow removal</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Get In Touch Now Section */}
          <div className="row mb-4">
            <div className="col-md-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, expedita, saepe, vero rerum deleniti beatae veniam
                harum neque nemo praesentium cum alias asperiores commodi.
              </p>
            </div>
            <div className="col-md-4">
              <a className="btn btn-lg btn-secondary btn-block" href="#">
                Get In Touch Now
              </a>
            </div>
          </div>
        </div>
        {/* /.container */}
    </div>
  )
}
