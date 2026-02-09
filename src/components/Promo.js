import React from 'react';

const Promo = () => {
    return (
        <section className="promo">
            <div className="promo-card bg-image" style={{ backgroundImage: "url('/assets/imgs/furniture/product/off-01.png')" }}>
                <div className="promo-text">
                    <span>GET 30% OFF</span>
                    <h2 className="text-capitalize">Wicker Hanging<br />Chairs</h2>
                    <a href="product-details.html">
                        <button>BUY NOW ›</button>
                    </a>
                </div>
            </div>

            <div className="promo-card bg-image" style={{ backgroundImage: "url('/assets/imgs/furniture/product/off-02.png')" }}>
                <div className="promo-text">
                    <span>GET 15% OFF</span>
                    <h2 className="text-capitalize">Brasslegged Armchair</h2>
                    <a href="product-details.html">
                        <button>BUY NOW</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Promo;
