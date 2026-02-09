import React from 'react';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-card blue">
                <h3>Exclusive offers for you</h3>
                <p>Get weekly deals, valuable health information and more.</p>
                <a href="/signup" className="cta-btn">SIGN UP →</a>
            </div>

            <div className="cta-card green">
                <h3>Join Our Community</h3>
                <p>Get weekly deals, valuable health information and more.</p>
                <a href="/join" className="cta-btn">JOIN FREE NOW →</a>
            </div>

            <div className="cta-card pink">
                <h3>Get our FREE app Now!</h3>
                <p>Get weekly deals, valuable health information and more.</p>
                <div className="store-buttons">
                    <img src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-play-app-icon-vector-png-image_12256664.png" alt="Google Play" />
                    <img src="/assets/imgs/furniture/about/image.png" alt="App Store" />
                </div>
            </div>
        </section>
    );
};

export default CTA;
