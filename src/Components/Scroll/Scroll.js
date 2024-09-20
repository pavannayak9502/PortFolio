// src/components/ScrollToTop.js
import React, { useState, useEffect } from 'react';
import "../Scroll/Scroll.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) { // Show button after scrolling down 500px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop} title='Scroll Top'>
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
