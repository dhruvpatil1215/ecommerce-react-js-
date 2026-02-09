import React, { useState } from 'react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-left">
                    <span className="phone-number">
                        <i className="fas fa-phone-alt"></i> +380961381876
                    </span>
                </div>
                <div className="top-bar-center">
                    <span>TAKE CARE OF YOUR Health 25% OFF USE CODE <b>"DOFIX03"</b></span>
                </div>
                <div className="top-bar-right">
                    <div className="top-dropdown">
                        <span>English <i className="fas fa-chevron-down"></i></span>
                    </div>
                    <div className="top-dropdown">
                        <span>USD <i className="fas fa-chevron-down"></i></span>
                    </div>
                    <div className="top-dropdown">
                        <span>Setting <i className="fas fa-chevron-down"></i></span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className="navbar">
                <div className="logo">
                    <img src="/assets/imgs/furniture/logo/logo.svg" alt="ADDINA" />
                </div>

                {/* Desktop Menu */}
                <nav className={`menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <div className="menu-close-btn" onClick={toggleMobileMenu}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="dropdown">
                        <a href="/" className="drop-btn" tabIndex="0">Home</a>
                        <div className="dropdown-menu">
                            <a href="/">Pharmacy Store</a>
                            <a href="/">Furniture Store</a>
                            <a href="/">Grocery Store</a>
                        </div>
                    </div>
                    <a href="/">About</a>
                    <div className="dropdown">
                        <a href="/" className="drop-btn" tabIndex="0">Shop</a>
                        <div className="dropdown-menu">
                            <a href="/">All Products</a>
                            <a href="/">New Arrivals</a>
                            <a href="/">Best Sellers</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a href="/" className="drop-btn" tabIndex="0">Pages</a>
                        <div className="dropdown-menu">
                            <a href="/">About Us</a>
                            <a href="/">FAQs</a>
                            <a href="/">Contact</a>
                        </div>
                    </div>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
                </nav>

                {/* Search & Icons */}
                <div className="nav-right">
                    <div className={`search-box ${searchOpen ? 'active' : ''}`}>
                        <input type="text" placeholder="Search..." />
                        <button className="search-btn" onClick={toggleSearch}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="nav-icons">
                        <span className="icon-btn wishlist-btn">
                            <i className="far fa-heart"></i>
                            <span className="badge-count">0</span>
                        </span>
                        <span className="icon-btn cart-btn">
                            <i className="fas fa-shopping-bag"></i>
                            <span className="badge-count">0</span>
                        </span>
                        <span className="hamburger" onClick={toggleMobileMenu}>
                            <i className="fas fa-bars"></i>
                        </span>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
            ></div>
        </>
    );
};

export default Header;

