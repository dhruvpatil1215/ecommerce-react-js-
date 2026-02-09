import React from 'react';

const Features = () => {
    return (
        <section className="features">
            <div className="feature">
                <i className="fa-solid fa-truck"></i>
                <h4>Free Delivery</h4>
                <p>Free shipping on all order</p>
            </div>

            <div className="feature">
                <i className="fa-solid fa-wallet"></i>
                <h4>Money Return</h4>
                <p>Back guarantee under 7 day</p>
            </div>

            <div className="feature">
                <i className="fa-solid fa-headset"></i>
                <h4>Online Support 24/7</h4>
                <p>Support online 24 hours a day</p>
            </div>

            <div className="feature">
                <i className="fa-solid fa-shield"></i>
                <h4>Reliable</h4>
                <p>Trusted by 1000+ brands</p>
            </div>
        </section>
    );
};

export default Features;
