import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import WhyChooseUs from '../components/WhyChooseUs';
import AllFeatures from '../components/AllFeatures';
import AIServices from '../components/AIServices';
import SimpleScalable from '../components/SimpleScalable';
import Results from '../components/Results';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Comparison from '../components/Comparison';
// import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <WhyChooseUs />
      <AllFeatures />
      <AIServices />
      <SimpleScalable />
      <Results />
      <Pricing />
      <Comparison />
      {/* <Team /> */}
      <Testimonials />
      <ContactUs />
      <FAQ />
      <Footer />
    </>
  );
};

export default HomePage;
