import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
     return (
          <>
               <header className="header-top-strip py-3">
                    <div className="container-xxl">
                         <div className="row">
                              <div className="col-6">
                                   <p className="text-end text-white mb-0">
                                        Free Shipping Over $100 & Free Returns
                                   </p>
                              </div>
                              <div className="col-6">
                                   <p className="text-end text-white mb-0">Hotline:
                                        <a href="tel:+1 (207) 7133345">+1 (207) 7133345</a>
                                   </p>
                              </div>
                         </div>
                    </div>
               </header>
               <header className="header-upper py-3">
                    <div className="container-">
                         <div className="row">
                              <div className="col-2">
                                   <h2>
                                        <Link className='text-white'>Ndanos Store</Link>
                                   </h2>
                              </div>
                              <div className="col-5">dsdsds</div>
                              <div className="col-5">sdsdsdsds</div>
                         </div>
                    </div>

               </header>
          </>
     )
}

export default Header
