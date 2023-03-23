import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div class="container-xxl">
          <div class="row align-items-center">
            <div class="col-5">
              <div class="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div class="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-8" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div class="container-xxl">
          <div class="row">
            <div class="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div></div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div></div>
            </div>
            <div class="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div></div>
            </div>
            <div class="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div class="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by SoftDev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
