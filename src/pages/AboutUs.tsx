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
            Phoenix Creative Group – Registered U.S. LLC <br />
            EIN: 39-3674390
          </div>

          <div className="text-sm text-gray-600 font-medium mb-10">
            Business Address: 215 Sundrop Ct, Eureka. MO 63025, United States
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

          {/* Personal Details */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.01] transition duration-300 mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="flex flex-row items-center justify-between space-x-8">
              <div className="flex-1 space-y-2 text-left">
                <p className="text-gray-800 text-base font-medium"><strong>Name:</strong> Akshay Sankhat</p>
                <p className="text-gray-800 text-base font-medium"><strong>Email:</strong> akshaysankhat@gmail.com</p>
                <p className="text-gray-800 text-base font-medium"><strong>Phone:</strong> 9016244785</p>
                <p className="text-gray-800 text-base font-medium"><strong>Address:</strong> H 302 Laxmivilla 2, New Naroda, Ahmedabad, 382340</p>
              </div>
              <img
                src="https://scontent.famd21-2.fna.fbcdn.net/v/t1.6435-9/70026148_2310429465885111_6015257996202868736_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Q1z28H60RvEQ7kNvwG6ntCW&_nc_oc=AdlS-7rDfo8LoBzMkpF_U3_DYS6T240syqU6orGWkjF1jZQOnOTZfDfVOXW30-5d11IjH821N0kP8Wv28n2LNQyW&_nc_zt=23&_nc_ht=scontent.famd21-2.fna&_nc_gid=xTf9scpi6gjN7du5P9JgdA&oh=00_Afggzjbt_SM7pA1sQVakI6g4_PNsNy_OTkFTx1pIDS8eNg&oe=69364640"
                alt="Profile Picture"
                className="w-32 h-32 rounded-full object-cover shadow-lg flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
