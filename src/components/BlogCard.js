import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
      return (
            <div className="col-3">
                  <div className="blog-card">
                        <div className="card-image">
                              <img src="images/blog-1.jpg" className='img-fluid' alt="blog" />
                        </div>
                        <div className="blog-content">
                              <p className="date">April 26, 2023</p>
                              <h5 className='title'>A beautiful sunday morning renaisance</h5>
                              <p className='desc'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti asperiores sit? Odio quasi iusto sapiente esse nihil optio voluptas, voluptatibus unde eveniet odit alias provident facere atque quam temporibus.
                              </p>
                              <Link to="/" className='button' >
                                    Read More
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default BlogCard;