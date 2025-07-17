import React from 'react';

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Development</h3>
            <p className="text-gray-600">
              Custom, responsive, and SEO-friendly websites using modern technologies like WordPress, Webflow, Shopify, or custom code (HTML/JS) tailored to your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Services</h3>
            <p className="text-gray-600">
              Comprehensive SEO solutions including on-page and off-page SEO, backlink building, technical SEO audits, local SEO, and Google Search optimization to increase your online visibility.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Marketing</h3>
            <p className="text-gray-600">
              Effective content marketing, social media campaigns, PPC (Google Ads & Meta Ads), email marketing, and brand strategy to boost your online growth and engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
