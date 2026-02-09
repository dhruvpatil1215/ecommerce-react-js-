import React, { useState } from 'react';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQty = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQty = () => {
        setQuantity(quantity + 1);
    };

    return (
        <section className="product-details">
            {/* Page Header / Breadcrumb Section */}
            <div className="product-details-header">
                <div className="container">
                    <h1>Product Details</h1>
                    <nav className="breadcrumb">
                        <a href="/">Home</a> <span>•</span> <span>Product Details</span>
                    </nav>
                </div>
            </div>

            <div className="container">
                <div className="product-details-content">
                    {/* Left: Product Images */}
                    <div className="product-images">
                        <div className="thumbnail-list">
                            <div className="thumb-item active">
                                <img src="https://i.ibb.co/LzfNq3H/sofa-1.png" alt="thumbnail" />
                            </div>
                            <div className="thumb-item">
                                <img src="https://i.ibb.co/LzfNq3H/sofa-1.png" alt="thumbnail" />
                            </div>
                            <div className="thumb-item">
                                <img src="https://i.ibb.co/LzfNq3H/sofa-1.png" alt="thumbnail" />
                            </div>
                        </div>
                        <div className="main-image">
                            <img src="https://i.ibb.co/LzfNq3H/sofa-1.png" alt="Alexander Roll Arm Sofa" />
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="product-info">
                        <span className="category-tag">CONSTRUCTION</span>
                        <div className="rating-row">
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <span className="reviews-count">10 Reviews</span>
                        </div>
                        <h2 className="product-title">Alexander Roll Arm Sofa</h2>
                        <div className="price-row">
                            <span className="old-price">$30.35</span>
                            <span className="current-price">$19.25</span>
                        </div>
                        <p className="product-description">
                            Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It
                            is a completely modern design and you feel comfortable to put on
                            this hijab. Buy it at the best price.
                        </p>

                        <div className="cart-actions">
                            <div className="quantity-selector">
                                <button onClick={decreaseQty}>-</button>
                                <input type="text" value={quantity} readOnly />
                                <button onClick={increaseQty}>+</button>
                            </div>
                            <button className="add-to-cart-btn">
                                ADD TO CART <i className="fas fa-shopping-basket"></i>
                            </button>
                            <button className="wishlist-btn">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
