import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-text">
                <span className="badge">NEW ARRIVAL...</span>
                <h1>Elevate <br />Your Home Aesthetics</h1>
                <p>
                    A furniture e-commerce company operates in the digital space,
                    offering a wide range of furniture products.
                </p>

                <div className="hero-buttons">
                    <a href="product-details.html"><button className="btn primary">BUY NOW</button></a>
                    <a href="product-details.html"><button className="btn outline">VIEW DETAILS</button></a>
                </div>
            </div>

            <div className="hero-image">
                <a href="product-details.html">
                    <img src="/assets/imgs/furniture/banner/chair1.png" alt="Chair" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
