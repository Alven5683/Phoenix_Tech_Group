import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const AboutUsPage = () => {
  const services = [
    'Custom Website & Web App Development',
    'UI/UX Design & Landing Page Optimization',
    'Mobile App Development (iOS/Android)',
    'SEO, Content Structuring & Digital Growth Strategy',
  ];

  return (
    <>
      <Navbar />
      <main className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8 text-center">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 drop-shadow-md">
            About Us
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            We are a modern digital marketing and software agency helping businesses,
            startups, and online brands grow their presence and results. Our mission is
            to deliver fast, SEO-optimized, and conversion-driven solutions that make
            a real difference.
          </p>

          {/* Business Info */}
          <div className="text-md text-gray-700 font-semibold max-w-xl mx-auto mb-4">
            Phoenix Tech Group – Registered U.S. LLC <br />
            EIN: 39-2674952
          </div>

          <div className="text-sm text-gray-600 font-medium mb-10">
            Business Address: 913 Westport Dr, Dexter, MO 63841, United States
          </div>

          {/* Services */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.01] transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our core services include:</h2>
            <ul className="space-y-4 text-left">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span className="text-gray-800 text-base font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
