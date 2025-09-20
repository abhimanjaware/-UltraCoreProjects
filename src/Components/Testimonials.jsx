import React, { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Construction Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Ultra Core Projects delivered exceptional core cutting services for our commercial building project. Their precision and attention to detail were outstanding.",
      service: "Core Cutting Services"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Facility Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c113?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Our office AC installation was handled professionally. From consultation to final installation, their team was knowledgeable and efficient.",
      service: "AC Installation"
    },
    {
      id: 3,
      name: "Amit Patil",
      position: "Project Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Working with Ultra Core Projects has been excellent for our industrial facility. Their core drilling services are precise and they maintain high safety standards.",
      service: "Industrial Core Drilling"
    },
    {
      id: 4,
      name: "Sneha Desai",
      position: "Property Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Ultra Core Projects helped us with AC repair and maintenance. Their technicians are skilled, punctual, and provided cost-effective solutions.",
      service: "AC Repair & Maintenance"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div ref={sectionRef} className="text-center mb-16 opacity-0 translate-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from our valued clients across Pune
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            
            {/* Quote Icon */}
            <div className="text-center mb-6">
              <svg className="w-12 h-12 text-blue-200 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                <path d="M7.031 14c3.269 0 5.969 2.701 5.969 6s-2.7 6-5.969 6-5.969-2.701-5.969-6l0.281-0.75c0.431-2.969 2.062-5.594 4.188-7.375l0.7 0.719c-1.75 1.406-2.878 3.5-3.062 5.844 0.538-0.31 1.156-0.438 1.862-0.438zM24.031 14c3.269 0 5.969 2.701 5.969 6s-2.7 6-5.969 6-5.969-2.701-5.969-6l0.281-0.75c0.431-2.969 2.062-5.594 4.188-7.375l0.7 0.719c-1.75 1.406-2.878 3.5-3.062 5.844 0.538-0.31 1.156-0.438 1.862-0.438z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-8 font-medium">
              "{testimonials[currentTestimonial].text}"
            </p>

            {/* Client Info */}
            <div className="text-center">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-white shadow-md"
              />
              <h4 className="text-lg font-bold text-gray-800">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-blue-600 font-semibold mb-2">
                {testimonials[currentTestimonial].position}
              </p>
              
              {/* Rating */}
              <div className="flex justify-center mb-3">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              {/* Service Badge */}
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {testimonials[currentTestimonial].service}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            
            {/* Previous Button */}
            <button
              onClick={() => {
                setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
                setIsAutoPlaying(false);
              }}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                setIsAutoPlaying(false);
              }}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600 text-sm">Projects Done</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">5★</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}