import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What makes ORBAI different from other AI platforms?',
      answer: 'ORBAI combines powerful AI capabilities with intuitive no-code tools, making advanced AI accessible to everyone. Our platform offers custom AI models, real-time collaboration, and enterprise-grade security in one comprehensive solution.'
    },
    {
      question: 'How quickly can I deploy an AI solution?',
      answer: 'With ORBAI, you can deploy AI solutions in minutes, not months. Our pre-built templates and no-code builder allow you to create and launch AI-powered applications instantly.'
    },
    {
      question: 'Do I need technical expertise to use ORBAI?',
      answer: 'No technical expertise required! ORBAI is designed for everyone, from beginners to experts. Our intuitive interface and comprehensive documentation make it easy to get started.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 support through multiple channels including email, chat, and phone. Enterprise customers also get dedicated account managers and priority support.'
    },
    {
      question: 'Can I customize the AI models for my specific needs?',
      answer: 'Absolutely! ORBAI allows you to create custom AI models tailored to your specific use case, data, and requirements. Our platform provides the tools and flexibility you need.'
    },
    {
      question: 'Is my data secure with ORBAI?',
      answer: 'Yes, we take security seriously. ORBAI uses bank-grade encryption, complies with industry standards, and offers on-premise deployment options for enterprise customers.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about ORBAI and how it can help your business.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-600 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;