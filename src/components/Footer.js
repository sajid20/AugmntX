import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-12">
      <div className="container">
        <div className="row pb-7" style={{ borderBottom: "3px solid gray" }}>
          <div className="col-lg-4 pb-5">
            <img src="augmntxlogo.png" style={{ width: "75%" }} alt="" />
          </div>
          <div className="col-lg-2 pb-5" style={{ color: "lightgray" }}>
            <div className="fw-bold footer-title text-light"> Information </div>
            <div className="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                About Us
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Corporate Information
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Press
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Careers
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Blog
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Contact Us
              </a>
            </div>
            {/* ... (rest of your code) ... */}
          </div>
          <div className="col-lg-2 pb-5" style={{ color: "lightgray" }}>
            <div className="fw-bold footer-title text-light"> AugmntX </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                View Profiles
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Discover
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                On Demand
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Talent
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Pricing
              </a>
            </div>
          </div>
          <div className="col-lg-2 pb-5" style={{ color: "lightgray" }}>
            <div className="fw-bold footer-title text-light"> Vendor </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Apply as Vendor
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Vendor Login
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Post Job
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Remote Jobs
              </a>
            </div>
            <div class="mt-2">
              <a href="#" style={{ color: "lightgray" }}>
                Resources
              </a>
            </div>
          </div>
          {/* ... (rest of your code) ... */}
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-lg-6" id="footer-one">
          <span>{`© 2022 - ${new Date().getFullYear()}`}</span>{" "}
          <span
            style={{
              color: "white",
              fontSize: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            AugmntX
          </span>
          -<span className="px-2">Labor Omnia Vincit</span>⚡ by{" "}
          <a
            href="https://superlabs.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            SuperLabs
          </a>
        </div>
        <div className="col-lg-6" id="footer-second">
          <span className="px-3 second-items">
            <a
              style={{ color: "lightgray" }}
              href="https://www.augmntx.com/terms-and-conditions"
            >
              Terms of Use
            </a>
          </span>{" "}
          <span className="px-3 second-items">
            <a
              style={{ color: "lightgray" }}
              href="https://www.augmntx.com/privacy-policy"
            >
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
