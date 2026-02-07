import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-col">
                    <h2 className="footer-logo">ADDINA</h2>
                    <p>
                        It helps designers plan out where the content will sit,
                        the content to be written and approved.
                    </p>
                    <div className="socials">
                        <span><i className="fab fa-facebook-f"></i></span>
                        <span><i className="fab fa-twitter"></i></span>
                        <span><i className="fab fa-linkedin-in"></i></span>
                        <span><i className="fab fa-instagram"></i></span>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <a href="#">Log In</a>
                    <a href="#">Wishlist</a>
                    <a href="#">Return Policy</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Shopping FAQs</a>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Pages</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact us</a>
                </div>

                <div className="footer-col contact">
                    <h4>Contact</h4>
                    <p>4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
                    <p><strong>711-2880 Nulla St.</strong></p>
                    <p><strong>+964 742 44 763</strong><br />
                        Mon – Sat: 9 AM – 5 PM
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© All Copyright 2024 by Addina</p>
                <div className="payments">
                    <img src="/assets/imgs/payoneer.png" alt="Payoneer" />
                    <img src="/assets/imgs/mastercard.png" alt="Mastercard" />
                    <img src="/assets/imgs/paypal.png" alt="Paypal" />
                </div>
                <p>Terms & Condition | Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;
