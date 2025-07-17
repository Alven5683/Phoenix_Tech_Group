import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold mb-6">Ready to Grow Your Business?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Contact us today for a free consultation or request a quote to see how our digital marketing agency can help you increase traffic, rank on Google, and boost your brand online.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
