import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <section class="home-wrapper-1 py-5">
        <div class="container-xxl">
          <div class="row">
            <div class="col-6">
              <div class="main-banner-content p-3">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div class="main-banner-content">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>IPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div class="col-6"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
