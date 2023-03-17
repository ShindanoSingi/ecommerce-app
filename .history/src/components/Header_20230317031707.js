import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
     return (
          <>
               <header className="header-top-strip py-3">
                    <div className="container-xxl">
                         <div className="row">
                              <div className="col-6">
                                   <p>Free Shipping Over $100 & Free Returns</p>
                              </div>
                              <div className="col-6">
                                   <p></p>
                              </div>
                         </div>
                    </div>
               </header>
          </>
     )
}

export default Header
