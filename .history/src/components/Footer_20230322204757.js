import React from "react"
import { Link } from "react-router-dom"
import { BsGithub, BsLinkedin, BsYoutube, BsInstagram } from "react-icons/bs"

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
              <div>
                <address className="text-white fs-6">
                  111 Rue Road, <br /> Huston, MD <br />
                  Zip Code: 12334
                </address>
                <a
                  href="Cel Phone: +1 (345) 567-2343"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +1 (345) 567-2343
                </a>
                <a
                  href="mailto:shuerdhsa234@gmail.com"
                  className="mt-4 d-block mb-2 text-white"
                >
                  shuerdhsa234@gmail.com
                </a>
                <div class="social_icons d-flex align-items-center gap-30">
                  <a href="">
                    <BsLinkedin className='text-white'/>
                  </a>
                  <a href="">
                    <BsInstagram className='text-white'/>
                  </a>
                  <a href="">
                    <BsGithub className='text-white'/>
                  </a>
                  <a href="">
                    <BsYoutube className='text-white'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div class="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
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
