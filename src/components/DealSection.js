import React from 'react';

const DealSection = () => {
    return (
        <section className="deal-section">
            <div className="deal-wrapper">
                <div className="deal-card left" style={{ backgroundImage: "url('/assets/imgs/furniture/ad/ad-discount.png')" }}>
                    <div className="deal-content">
                        <span>HOT DEAL FURNITURE</span>
                        <h2>Furniture Limit Offer</h2>
                        <h1>30% Off</h1>
                        <a href="/product-details.html">BUY NOW ›</a>
                    </div>
                </div>

                <div className="deal-card right" style={{ backgroundImage: "url('/assets/imgs/furniture/ad/ad-timer.png')" }}>
                    <div className="deal-content">
                        <span>HOT DEAL FURNITURE</span>
                        <h2>Deals Of The Week</h2>
                        <div className="deal-timer">
                            <div><h3 id="days">00</h3><p>DAYS</p></div>
                            <div><h3 id="hours">00</h3><p>HRS</p></div>
                            <div><h3 id="mins">00</h3><p>MINS</p></div>
                            <div><h3 id="secs">00</h3><p>SECS</p></div>
                        </div>
                        <a href="/product-details.html">BUY NOW ›</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealSection;
