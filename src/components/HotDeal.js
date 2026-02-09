import React from 'react';

const HotDeal = () => {
    return (
        <section className="hotdeal">
            <div className="hotdeal-inner">
                <div className="hotdeal-left">
                    <div className="deal-box">
                        <span>HOT DEAL FURNITURE</span>
                        <h2>Live Furniture<br />Your Love</h2>
                        <a href="product-details.html" className="deal-btn">BUY NOW ›</a>
                    </div>
                </div>

                <div className="hotdeal-right">
                    <div className="room-img">
                        <img src="/assets/imgs/furniture/rating/bg-image.png" alt="Room" />
                        <div className="hotspot" style={{ top: '65%', left: '45%' }}>
                            <div className="hotspot-content">
                                <h4>Dining Table</h4>
                                <div className="stars">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                                </div>
                                <p>USD 190.00</p>
                            </div>
                        </div>

                        <div className="hotspot" style={{ top: '35%', left: '75%' }}>
                            <div className="hotspot-content">
                                <h4>Fabric Sofa</h4>
                                <div className="stars">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
                                </div>
                                <p>USD 480.00</p>
                            </div>
                        </div>

                        <div className="hotspot" style={{ top: '60%', left: '70%' }}>
                            <div className="hotspot-content">
                                <h4>Decor Lamp</h4>
                                <div className="stars">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                                </div>
                                <p>USD 95.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotDeal;
