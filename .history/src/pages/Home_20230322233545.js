import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <section class="home-wrapper-1 py-5">
        <div class="container-xxl">
          <div class="row">
            <div class="col-6">
              <div class="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div class="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>IPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div class="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div class="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      From $1699.00 <br /> or $64.62/mo
                    </p>
                  </div>
                </div>
                <div class="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div class="small-banner-content position-absolute">
                    <h4>15% Off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest band <br /> styles and colors
                    </p>
                  </div>
                </div>
                <div class="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div class="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $599 <br /> or $49.91/mo
                    </p>
                  </div>
                </div>
                <div class="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div class="small-banner-content position-absolute">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback & <br /> ultra-low distortion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="home-wrapper-2">
        <div class="container-xxl">
          <div class="row">
            <div class="col-12">
              <div class="services d-flex align-items-center justify-content-between">
                <div>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
