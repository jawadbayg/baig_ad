import React, { useState, useEffect, useRef } from 'react';
import './styles/gallery.css'; 

const Gallery = () => {
  
  const images = [
    { src: '/gallery/p1.jpg', alt: 'Image 1' },
    { src: '/gallery/p2.jpg', alt: 'Image 2' },
    { src: '/gallery/p3.jpg', alt: 'Image 3' },
    { src: '/gallery/p4.jpg', alt: 'Image 4' },
    { src: '/gallery/p5.jpg', alt: 'Image 5' },
    { src: '/gallery/p6.jpeg', alt: 'Image 6' },
    { src: '/gallery/p7.jpg', alt: 'Image 7' },
    { src: '/gallery/p8.jpg', alt: 'Image 8' },
    { src: '/gallery/p9.jpg', alt: 'Image 9' },
    { src: '/gallery/p10.jpg', alt: 'Image 10' },
    { src: '/gallery/p11.jpg', alt: 'Image 11' },
    { src: '/gallery/p12.jpg', alt: 'Image 12' },
    { src: '/gallery/p13.jpg', alt: 'Image 13' },
    { src: '/gallery/p14.jpg', alt: 'Image 14' },
    { src: '/gallery/p15.jpg', alt: 'Image 15' },
    { src: '/gallery/p16.jpg', alt: 'Image 16' },
    { src: '/gallery/p17.jpg', alt: 'Image 17' },
    { src: '/gallery/p18.jpg', alt: 'Image 18' },
    { src: '/gallery/p19.jpg', alt: 'Image 19' },
    { src: '/gallery/p20.jpg', alt: 'Image 20' },
    { src: '/gallery/p21.jpeg', alt: 'Image 21' },
    { src: '/gallery/p22.jpg', alt: 'Image 22' },
    { src: '/gallery/p23.jpeg', alt: 'Image 23' },
    { src: '/gallery/p24.jpeg', alt: 'Image 24' },
    { src: '/gallery/p25.jpeg', alt: 'Image 25' },
    { src: '/gallery/p26.jpeg', alt: 'Image 26' },
    { src: '/gallery/p27.jpeg', alt: 'Image 27' },
    { src: '/gallery/p28.jpeg', alt: 'Image 28' },
    { src: '/gallery/p29.jpeg', alt: 'Image 29' },
    { src: '/gallery/p30.jpeg', alt: 'Image 30' },
    { src: '/gallery/p31.jpeg', alt: 'Image 31' },
    { src: '/gallery/p32.jpeg', alt: 'Image 32' },
    { src: '/gallery/p33.jpeg', alt: 'Image 33' },
    { src: '/gallery/p34.jpeg', alt: 'Image 34' },
    { src: '/gallery/p35.jpeg', alt: 'Image 35' },
    { src: '/gallery/p36.jpeg', alt: 'Image 36' },
    { src: '/gallery/p37.jpeg', alt: 'Image 37' },
    { src: '/gallery/p38.jpeg', alt: 'Image 38' },
    { src: '/gallery/p39.jpeg', alt: 'Image 39' },
    { src: '/gallery/p40.jpeg', alt: 'Image 40' },
  ];

  const [visibleImages, setVisibleImages] = useState([]);
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleImages((prev) => [...prev, parseInt(index)]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item) => observer.observe(item));

    observerRef.current = observer;
    return () => observerRef.current.disconnect();
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="text-center my-4">Our Projects</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" data-index={index}>
            {visibleImages.includes(index) ? (
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image visible"
              />
            ) : (
              <div className="loader"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;