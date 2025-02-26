import React from "react";

export default function About() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              About
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
              <li className="breadcrumb-item active">About</li>
            </ol>
          </div>
          {/* About Content */}
          <div className="about-main">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-4"
                  src="images/about-img.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <h2>About Modern Business</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  voluptate nihil eum consectetur similique? Consectetur, quod,
                  incidunt, harum nisi dolores delectus reprehenderit voluptatem
                  perferendis dicta dolorem non blanditiis ex fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit
                  non velit ab ea pariatur sint quidem corporis eveniet. Odit,
                  temporibus reprehenderit dolorum!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti
                  eum ratione ex ea praesentium quibusdam? Aut, in eum facere
                  corrupti necessitatibus perspiciatis quis?
                </p>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* Team Members */}
          <div className="team-members-box">
            <h2>Our Team</h2>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card h-100 text-center">
                  <img
                    className="card-img-top"
                    src="images/team_01.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">Team Member</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                    </p>
                  </div>
                  <div className="card-footer">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 text-center">
                  <img
                    className="card-img-top"
                    src="images/team_02.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">Team Member</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                    </p>
                  </div>
                  <div className="card-footer">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 text-center">
                  <img
                    className="card-img-top"
                    src="images/team_03.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">Team Member</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                    </p>
                  </div>
                  <div className="card-footer">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
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
          {/* /.container */}
        </div>
      </>
    </div>
  );
}
