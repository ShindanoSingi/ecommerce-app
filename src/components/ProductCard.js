import React from 'react'
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
    return (
        <div className='col-3'>
            <div className='product-card'>
                <div className="product-image">
                    <img src="images/watch.jpg" alt="product_image" />
                </div>
                <div className="product-details">
                    <h6 className='brand'>Havels</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        // onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <p className="price">$100.00</p>

                </div>

            </div>
        </div>
    )
}

export default ProductCard