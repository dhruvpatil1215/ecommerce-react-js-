import React from 'react';

const FeaturedProduct = () => {
    return (
        <section className="featured">
            <h2 className="featured-title">Featured Product</h2>
            <div className="featured-wrapper">
                <button className="nav prev">‹</button>
                <div className="featured-grid">
                    <div className="product-card">
                        <div className="product-img">
                            <a href="product-details.html">
                                <img src="/assets/imgs/furniture/product/product1.png" alt="Product" />
                            </a>
                            <div className="product-overlay">
                                <span><i className="far fa-eye"></i></span>
                                <span><i className="fas fa-shopping-bag"></i></span>
                                <span><i className="far fa-heart"></i></span>
                            </div>
                        </div>
                        <a href="product-details.html" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h4>Brasslegged Armchair</h4>
                        </a>
                        <div className="stars">
                            <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                        </div>
                        <p className="price">USD 150.00</p>
                    </div>

                    <div className="product-card">
                        <span className="badge-sale">10% Off</span>
                        <div className="product-img">
                            <a href="product-details.html">
                                <img src="/assets/imgs/furniture/product/product2.png" alt="Product" />
                            </a>
                            <div className="product-overlay">
                                <span><i className="far fa-eye"></i></span>
                                <span><i className="fas fa-shopping-bag"></i></span>
                                <span><i className="far fa-heart"></i></span>
                            </div>
                        </div>
                        <a href="product-details.html" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h4>Leather Chair</h4>
                        </a>
                        <div className="stars">
                            <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                        </div>
                        <p className="price">USD 200.00</p>
                    </div>

                    <div className="product-card">
                        <div className="product-img">
                            <a href="product-details.html">
                                <img src="/assets/imgs/furniture/product/product3.png" alt="Product" />
                            </a>
                            <div className="product-overlay">
                                <span><i className="far fa-eye"></i></span>
                                <span><i className="fas fa-shopping-bag"></i></span>
                                <span><i className="far fa-heart"></i></span>
                            </div>
                        </div>
                        <a href="product-details.html" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h4>Chair Pillow</h4>
                        </a>
                        <div className="stars">
                            <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                        </div>
                        <p className="price">USD 49.00</p>
                    </div>

                    <div className="product-card">
                        <span className="badge-sale">10% Off</span>
                        <div className="product-img">
                            <a href="product-details.html">
                                <img src="/assets/imgs/furniture/product/product4.png" alt="Product" />
                            </a>
                            <div className="product-overlay">
                                <span><i className="far fa-eye"></i></span>
                                <span><i className="fas fa-shopping-bag"></i></span>
                                <span><i className="far fa-heart"></i></span>
                            </div>
                        </div>
                        <a href="product-details.html" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h4>Alexander Roll Arm Sofa</h4>
                        </a>
                        <div className="stars">
                            <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                        </div>
                        <p className="price">USD 150.00</p>
                    </div>
                </div>
                <button className="nav next">›</button>
            </div>
        </section>
    );
};

export default FeaturedProduct;
