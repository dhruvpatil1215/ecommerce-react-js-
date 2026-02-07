import React from 'react';

const RecentBlog = () => {
    return (
        <section className="recent-blog">
            <span className="blog-tag">READ BLOG</span>
            <h2>Recent Blog</h2>
            <div className="blog-grid">
                <div className="blog-card">
                    <div className="blog-content">
                        <span className="blog-cat">Chair Design</span>
                        <p className="blog-meta">By Alex Manie &nbsp;&nbsp; 07 jan, 2024</p>
                        <h3>Arrangement That's Nearly Perfect.</h3>
                        <a href="#" className="blog-arrow">›</a>
                    </div>
                    <div className="blog-img">
                        <img src="/assets/imgs/furniture/blog/blog-image1.jpg" alt="Blog" />
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-content">
                        <span className="blog-cat">Sofa Design</span>
                        <p className="blog-meta">By Alex Manie &nbsp;&nbsp; 07 jan, 2024</p>
                        <h3>Eworkstation Arrangement That's</h3>
                        <a href="#" className="blog-arrow">›</a>
                    </div>
                    <div className="blog-img">
                        <img src="/assets/imgs/furniture/blog/blog-image2.jpg" alt="Blog" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentBlog;
