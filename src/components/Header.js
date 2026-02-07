import React from 'react';

const Header = () => {
    return (
        <>
            <div className="top-bar">
                <span>📞 +380961381876</span>
                <span>TAKE CARE OF YOUR Health 25% OFF USE CODE <b>DOFIX03</b></span>
            </div>

            <header className="navbar">
                <div className="logo"><img src="/assets/imgs/furniture/logo/logo.svg" alt="logo" /></div>

                <nav className="menu">
                    <div className="dropdown">
                        <a href="#" className="drop-btn" tabIndex="0">Home</a>
                        <div className="dropdown-menu">
                            <a href="#">Pharmacy Store</a>
                            <a href="#">Furniture Store</a>
                            <a href="#">Grocery Store</a>
                        </div>
                    </div>

                    <a href="#">About</a>
                    <a href="#">Shop</a>
                    <a href="#">Pages</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </nav>

                <div className="nav-icons">
                    🔍 ❤️ 🛒 <span className="hamburger" id="openSidebar">☰</span>
                </div>
            </header>
        </>
    );
};

export default Header;
