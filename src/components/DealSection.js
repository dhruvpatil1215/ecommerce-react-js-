import React, { useState, useEffect } from 'react';

const DealSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        mins: '00',
        secs: '00'
    });

    useEffect(() => {
        // Target date: 7 days from now for demonstration
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days < 10 ? `0${days}` : days,
                hours: hours < 10 ? `0${hours}` : hours,
                mins: minutes < 10 ? `0${minutes}` : minutes,
                secs: seconds < 10 ? `0${seconds}` : seconds
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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
                            <div><h3>{timeLeft.days}</h3><p>DAYS</p></div>
                            <div><h3>{timeLeft.hours}</h3><p>HRS</p></div>
                            <div><h3>{timeLeft.mins}</h3><p>MINS</p></div>
                            <div><h3>{timeLeft.secs}</h3><p>SECS</p></div>
                        </div>
                        <a href="/product-details.html">BUY NOW ›</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealSection;
