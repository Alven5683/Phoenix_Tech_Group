import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users } from 'lucide-react';

const Results = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI Increase',
      description: 'Our clients see significant returns on their AI investments'
    },
    {
      icon: Clock,
      value: '10x',
      label: 'Faster Delivery',
      description: 'Deploy AI solutions in days, not months'
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Active Users',
      description: 'Growing community of creators and businesses'
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Results That Speak
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the impact ORBAI has on businesses and creators worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-10 w-10 text-black" />
              </div>
              <div className="text-5xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-gray-800 mb-4">{stat.label}</div>
              <p className="text-gray-600 max-w-xs mx-auto">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;