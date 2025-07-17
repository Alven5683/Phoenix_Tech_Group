import React from 'react';
import { motion } from 'framer-motion';

const SimpleScalable = () => {
  const steps = [
    {
      number: '01',
      title: 'Plan & Architect',
      description: 'Define your project’s technical foundation with scalable architecture and sprint roadmaps.',
      image: 'https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&w=800' // Team planning
    },
    {
      number: '02',
      title: 'Develop & Iterate',
      description: 'Agile sprints, clean code, and CI/CD pipelines using modern tech like React, Node.js, and Python.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800' // Developer at screen
    },
    {
      number: '03',
      title: 'Launch & Scale',
      description: 'We deploy your app on scalable cloud platforms like Vercel, GCP, or AWS with monitoring in place.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800' // Launch metaphor
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Simple & Scalable
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven three-step approach to launch high-performing software fast.
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="text-6xl font-bold text-gray-200 mb-4">{step.number}</div>
                <h3 className="text-3xl font-bold text-black mb-6">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 shadow-lg">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  {index === 2 && (
                    <div className="absolute -bottom-4 -right-4 bg-black rounded-3xl p-2 shadow-xl">
                      <div className="w-24 h-48 bg-white rounded-2xl p-1">
                        <div className="w-full h-full bg-gray-100 rounded-xl"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleScalable;
