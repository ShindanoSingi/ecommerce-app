import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

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
                    <div className="container-xxl">
                         <div className="row align-items-center">
                              <div className="">
                                   <h2>
                                        <Link className='text-white'>Soft Dev</Link>
                                   </h2>
                              </div>
                              <div className="col-5">
                                   <div class="input-group mb-3">
                                        <input
                                             type="text"
                                             class="form-control py-2"
                                             placeholder="Search Product Here..."
                                             aria-label="Search Product Here..."
                                             aria-describedby="basic-addon2"
                                        />
                                        <span class="input-group-text p-3" id="basic-addon2" className="input-group-text">
                                             <BsSearch className='fs-6' />
                                        </span>
                                   </div>
                              </div>
                              <div className="">
                                   <div className="header-upper-links d-flex align-items-center justify-content-between">
                                   </div>
                                   <div>
                                        <Link>
                                             <img src="images/compare.svg" alt="compare" />
                                             <p>Compare <br />Products  </p>
                                        </Link>
                                   </div>
                                   <div>
                                        <Link>
                                             <img src="images/wishlist.svg" alt="wishlist" />
                                             <p>Favorite <br />Wishlist  </p>
                                        </Link>
                                   </div>
                                   <div>
                                        <Link>
                                             <img src="images/user.svg" alt="user" />
                                             <p>
                                                  Login <br />My Account
                                             </p>
                                        </Link>
                                   </div>
                                   <div>
                                        <Link>
                                             <img src="images/cart.svg" alt="cart" />
                                             <div className='d-flex flex-column'>
                                                  <span className='badge bg-white text-dark'>0</span>
                                             </div>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>

               </header>
          </>
     )
}

export default Header
