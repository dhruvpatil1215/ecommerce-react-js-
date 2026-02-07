import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Promo from './components/Promo';
import Sidebar from './components/Sidebar';
import FeaturedProduct from './components/FeaturedProduct';
import HotDeal from './components/HotDeal';
import TrendyCollection from './components/TrendyCollection';
import DealSection from './components/DealSection';
import Testimonials from './components/Testimonials';
import BestSellers from './components/BestSellers';
import RecentBlog from './components/RecentBlog';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Promo />
      <Sidebar />
      <FeaturedProduct />
      <HotDeal />
      <TrendyCollection />
      <DealSection />
      <Testimonials />
      <BestSellers />
      <RecentBlog />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
