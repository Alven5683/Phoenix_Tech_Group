import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Policies = () => {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-white min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center pt-10 text-gray-900 mb-8">Policies</h1>

        {/* Privacy Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            At Phoenix Tech Group, your privacy is a top priority. We collect only essential information such as your name, email, and project details to provide services efficiently. This data is never sold or shared with third parties without your consent.
          </p>
          <p className="text-gray-700 mb-4">
            All communication and data exchange is protected using industry-standard encryption. You may request access, modification, or deletion of your data at any time by contacting us at <strong>support@phoenixtechgroup.com</strong>.
          </p>
          <p className="text-gray-700">
            We use cookies solely for analytics and user experience improvement. By using our website, you consent to our privacy practices.
          </p>
        </section>

        {/* Terms of Service */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
          <p className="text-gray-700 mb-4">
            By using our website or hiring us for services, you agree to the following:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>All work is performed based on mutually agreed-upon project scope and timelines.</li>
            <li>Client is responsible for providing accurate requirements and feedback.</li>
            <li>Intellectual property for completed work is transferred to the client upon full payment.</li>
            <li>We reserve the right to refuse projects that violate any law or our internal ethical standards.</li>
            <li>All communication will be done via official channels such as email or video calls.</li>
          </ul>
          <p className="text-gray-700">
            Violation of these terms may result in suspension or termination of services without refund.
          </p>
        </section>

        {/* Refund Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
          <p className="text-gray-700 mb-4">
            At Phoenix Tech Group, we strive for 100% client satisfaction. However, due to the nature of custom software and digital marketing services, we follow the below refund policy:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Project Cancellation:</strong> If canceled within 3 days of payment and before any work has begun, a full refund is applicable.</li>
            <li><strong>Partial Work:</strong> If partial work is delivered, a pro-rated refund may be considered based on completed milestones.</li>
            <li><strong>No Refund:</strong> No refund will be issued once the final project has been delivered and approved.</li>
            <li>All refund requests must be made in writing to <strong>support@phoenixtechgroup.com</strong> within 7 days of project cancellation.</li>
          </ul>
          <p className="text-gray-700">
            Refunds are processed within 5–7 business days after approval.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Policies;
