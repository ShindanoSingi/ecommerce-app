import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div class="container-xxl">
          <div class="row">
            <div class="col-5">
              <div class="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <col-7>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span
                  class="input-group-text p-3"
                  id="basic-addon2"
                  className="input-group-text"
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </col-7>
          </div>
        </div>
      </footer>
      <footer className="py-3"></footer>
      <footer className="py-3">
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
