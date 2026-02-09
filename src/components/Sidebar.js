import React from 'react';

const Sidebar = () => {
    return (
        <>
            <div className="overlay" id="overlay"></div>

            <div className="sidebar" id="sidebar">
                <div className="sidebar-header">
                    <h2>ADDINA</h2>
                    <button className="close-btn" id="closeSidebar">✕</button>
                </div>

                <div className="sidebar-search">
                    <p>What are you searching for?</p>
                    <input type="text" placeholder="Search..." />
                </div>

                <div className="sidebar-contact">
                    <h3>Contact Info</h3>
                    <p>📍 12/A, Mirnada City Tower, NYC</p>
                    <p>📞 +088889797697</p>
                    <p>✉ support@mail.com</p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
