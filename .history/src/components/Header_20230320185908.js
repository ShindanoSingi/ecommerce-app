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
                              <div className="col-2">
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
                              <div className="col-5">
                                   <div className="header-upper-links d-flex align-items-center justify-content-between">
                                        <div>
                                             <Link className='d-flex align-items-center gap-10 text-white'>
                                                  <img src="/images/compare.svg" alt="compare" />
                                                  <p className='mb-0'>Compare <br /> Product </p>
                                             </Link>
                                        </div>
                                        <div>
                                             <Link className='d-flex align-items-center gap-10 text-white'>
                                                  <img src="/images/wishlist.svg" alt="wishlist" />
                                                  <p className='mb-0'>Favorite <br /> Wishlist </p>
                                             </Link>
                                        </div>
                                        <div>
                                             <Link className='d-flex align-items-center gap-10 text-white'>
                                                  <img src="/images/user.svg" alt="user" />
                                                  <p className='mb-0'>Log in <br /> My Account </p>
                                             </Link>
                                        </div>
                                        <div>
                                             <Link className='d-flex align-items-center gap-10 text-white'>
                                                  <img src="/images/cart.svg" alt="cart" />
                                                  <div className='d-flex flex-column gap-10'>
                                                       <span className="badge bg-white text-dark">0</span>
                                                       <p className='mb-0'>$ 500</p>
                                                  </div>
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

               </header>
               <header className="header-bottom py-3">
                    <div className="container-xxl">
                         <div className="row">
                              <div className="col-12">
                                   <div className="menu-bottom d-flex align-items-center gap-30">
                                        <div>
                                             <div class="dropdown">
                                                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                       Show Categories
                                                  </button>
                                                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                       <li><a class="dropdown-item" href="#">Action</a></li>
                                                       <li><a class="dropdown-item" href="#">Another action</a></li>
                                                       <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                  </ul>
                                             </div>
                                        </div>
                                        <div className="menu-links">
                                             <div className="d-flex align-items-center gap-15">
                                                  <NavLink to='/'>Home</NavLink>
                                                  <NavLink to='/'>Our Store</NavLink>
                                                  <NavLink to='/'>Blogs</NavLink>
                                                  <NavLink to='/contact'>Contact</NavLink>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>
          </>
     )
}

export default Header
