import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
     return (
          <>
               <header className="header-top-strip py-3">
                    <div className="container-xxl">
                         <div className="row bg-body-secondary">
                              <div className="col-6">
                                   <p>Free Shipping Over $100 & Free Returns</p>
                              </div>
                              <div className="col-6">
                                   <p className="text-e">Hotline:
                                        <a href="tel:+1 (207) 7133345">+1 (207) 7133345</a>
                                   </p>
                              </div>
                         </div>
                    </div>
               </header>
          </>
     )
}

export default Header
