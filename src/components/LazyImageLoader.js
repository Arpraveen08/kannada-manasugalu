import React, { useEffect, useRef, useState } from 'react';

const LazyImageLoader = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : ''}
      alt={alt}
      className={`lazy ${isVisible ? 'loaded' : ''}`}
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}
    />
  );
};

export default LazyImageLoader;
