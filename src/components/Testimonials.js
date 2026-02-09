import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/assets/imgs/furniture/testimonial/bg.jpg')" }}>
            <span className="testi-tag">TESTIMONIALS</span>
            <h2>Client Feedback</h2>
            <div className="testi-wrapper">
                <div className="testi-card">
                    <div className="stars">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
                    </div>
                    <h4>Jerome Bell</h4>
                    <small>Web Designer</small>
                    <p>Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.</p>
                    <span className="quote">”</span>
                </div>

                <div className="testi-card">
                    <div className="stars">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
                    </div>
                    <h4>Annette Black</h4>
                    <small>Dog Trainer</small>
                    <p>Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.</p>
                    <span className="quote">”</span>
                </div>

                <div className="testi-card">
                    <div className="stars">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
                    </div>
                    <h4>Ralph Edwards</h4>
                    <small>UI/UX Designer</small>
                    <p>Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.</p>
                    <span className="quote">”</span>
                </div>
            </div>
            <div className="testi-nav">
                <button>←</button>
                <button>→</button>
            </div>
        </section>
    );
};

export default Testimonials;
