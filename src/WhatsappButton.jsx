import React, { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';

const WhatsappButton = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    const bounce = gsap.timeline({ repeat: -1, yoyo: true, ease: 'power1.inOut' });
    bounce.to(btnRef.current, {
      y: -10,
      duration: 0.6,
    });
    return () => bounce.kill(); // clean up on unmount
  }, []);

  return (
    <a
      href="https://wa.me/919112822015?text=Hello%20UltraCore%20Projects,%20I%20am%20interested%20in%20your%20services%20(Core%20Cutting%20/%20AC%20/%20Industrial%20Solutions).%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-3 right-2 md:bottom-6 md:right-4.5 z-50"
    >
      <div
        ref={btnRef}
        className="w-20 h-20 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition duration-300 ease-in-out"
      >
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
};

export default WhatsappButton;
