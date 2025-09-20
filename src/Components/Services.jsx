import React, { useRef, useEffect, useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef(null);

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
    if (titleRef.current) observer.observe(titleRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Core Cutting Services",
      icon: "🔨",
      description: "Professional core cutting and drilling services providing high precision solutions for residential, commercial, and industrial projects.",
      features: [
        "Concrete Cutting Services",
        "Core Cutting Services", 
        "Core Drilling",
        "Slab Holes",
        "Beam Holes",
        "Column Holes"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AC Services",
      icon: "❄️",
      description: "Complete AC solutions including installation, repair, maintenance, and advanced services with modern equipment and skilled professionals.",
      features: [
        "AC Installation",
        "AC Repair and Services", 
        "AC Uninstallation",
        "AC Piping",
        "AC Gas Charging",
        "AC AMC Services",
        "Chiller Maintenance"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Industrial Services",
      icon: "⚙️",
      description: "Specialized industrial solutions including fire line holes, exhaust systems, and material testing with advanced machinery.",
      features: [
        "Fire Line Holes",
        "Exhaust Fan Holes",
        "Chimney Holes", 
        "Plumbing Holes",
        "Industrial Company Projects",
        "Material Testing Holes"
      ],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const features = [
    {
      title: "High Precision Cutting",
      icon: "🎯",
      description: "Advanced techniques for accurate and clean cuts"
    },
    {
      title: "Dust-Free & Noise Control",
      icon: "🔇",
      description: "Environmentally conscious operations"
    },
    {
      title: "Experienced Technicians",
      icon: "👷",
      description: "Skilled professionals with years of expertise"
    },
    {
      title: "Fast & Reliable Service",
      icon: "⚡",
      description: "Quick turnaround times without compromising quality"
    },
    {
      title: "Customized Solutions",
      icon: "⚙️",
      description: "Tailored services to meet specific project needs"
    },
    {
      title: "Affordable Pricing",
      icon: "💰",
      description: "Competitive rates with transparent pricing"
    }
  ];

  return (
    <section id="services" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-48 h-48 bg-blue-100/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 opacity-0 translate-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Professional engineering solutions with modern equipment, skilled professionals, and a commitment to safety
          </p>
        </div>

        {/* Main Services Grid */}
        <div ref={servicesRef} className="mb-20 opacity-0 translate-y-10">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  activeService === index ? 'ring-2 ring-blue-500 bg-white/90 shadow-2xl' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Service Detail Image */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-3xl font-bold text-gray-800 mb-4">
                  {services[activeService].title}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {services[activeService].description}
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  Get Quote
                </button>
              </div>
              <div className="relative">
                <img 
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="opacity-0 translate-y-10" ref={sectionRef}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-blue-600">Our Services</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver results that are fast, reliable, and affordable with our commitment to safety and precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h5 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h5>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Service Coverage</h4>
            <p className="text-gray-600 text-lg mb-6">
              <strong>Location:</strong> All Over Pune
            </p>
            <p className="text-gray-700">
              We provide our services across Pune and surrounding areas with quick response times and professional service delivery.
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: slide-up 0.8s ease-out forwards;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}