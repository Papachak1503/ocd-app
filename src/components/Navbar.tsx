import React from "react";
import Script from "next/script";

export default function Navbar() {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>
          N &amp; LW Lawn Care - Landscaping Bootstrap4 HTML5 Responsive
          Template{" "}
        </title>
        {/* Bootstrap core CSS */}
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Fontawesome CSS */}
        <link href="css/all.css" rel="stylesheet" />
        {/* Custom styles for this template */}
        <link href="css/style.css" rel="stylesheet" />
        {/* Navigation */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light top-nav fixed-top">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fas fa-bars" />
            </button>
            <div className="navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link " href="/">
                    หน้าหลัก
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    เกี่ยวกับ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/service">
                    บริการ
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownPortfolio"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    เทคโนโลยีดิจิทัล
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownPortfolio"
                  >
                    <a className="dropdown-item" href="/blogpost1">
                      แนวคิดการเปลี่ยนแปลงและการพัฒนาองค์การภาครัฐ
                    </a>
                    <a className="dropdown-item" href="/blogpost2">
                      กระบวนการวินิจฉัยระบบองค์การภาครัฐ
                    </a>
                    <a className="dropdown-item" href="/Bloghome2">
                      การวินิจจระบบด้วย PMQA
                    </a>
                    <a className="dropdown-item" href="/portfolio1">
                      การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล
                    </a>
                    <a className="dropdown-item" href="portfolio-4-col.html">
                      การแทรกแซงและการจัดกิจกรรมพัฒนาองค์การภาครัฐ
                    </a>
                    <a className="dropdown-item" href="portfolio-item.html">
                      การประเมินและปรับปรุงองค์การภาครัฐ
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownBlog"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    เทคโนโลยี AI
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <a className="dropdown-item" href="/ai">
                      AI ตรวจวินิจฉัยโรคมะเร็งปอด
                    </a>
                    <a className="dropdown-item" href="blog-home-2.html">
                      Blog Home 2
                    </a>
                    <a className="dropdown-item" href="blog-post.html">
                      Blog Post
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownBlog"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    การเรียนรู้ตลอดชีวิต
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <a className="dropdown-item" href="faq.html">
                      FAQ
                    </a>
                    <a className="dropdown-item" href="404.html">
                      404
                    </a>
                    <a className="dropdown-item" href="pricing.html">
                      Pricing Table
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    ติดต่อ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Bootstrap core JavaScript */}
        <Script src="vendor/jquery/jquery.min.js"></Script>
        <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      </>
    </div>
  );
}
