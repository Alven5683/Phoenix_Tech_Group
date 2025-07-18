import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Image, FileText, Video, Mic, Globe } from 'lucide-react';

const AIServices = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific needs and data'
    },
    {
      icon: Image,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for content automation'
    },
    {
      icon: FileText,
      title: 'Natural Language Processing',
      description: 'Understand and generate human-like text with precision'
    },
    {
      icon: Video,
      title: 'Video Intelligence',
      description: 'Automated video editing and content optimization'
    },
    {
      icon: Mic,
      title: 'Speech Recognition',
      description: 'Convert speech to text with industry-leading accuracy'
    },
    {
      icon: Globe,
      title: 'Translation Services',
      description: 'Real-time translation across 100+ languages'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <button className="bg-white shadow-md rounded-full px-4 py-1 text-sm font-semibold flex items-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21V3m13 18V7a2 2 0 00-2-2h-6" />
          </svg>
          AI Services
        </button>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions to transform your business operations and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServices;