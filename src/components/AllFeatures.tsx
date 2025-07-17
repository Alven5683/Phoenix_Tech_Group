import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Settings2, Search, Server, Globe2 } from 'lucide-react';

const AllFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate SEO-friendly articles, product descriptions, and landing pages in seconds.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Code2,
      title: 'Modern Web Development',
      description: 'We build blazing-fast websites using Next.js, Tailwind CSS, and headless CMS technologies.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Search,
      title: 'Advanced SEO Automation',
      description: 'On-page audits, backlink tracking, keyword clustering — all automated with real-time data.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Server,
      title: 'Scalable Hosting & Deployment',
      description: 'Deployed on Vercel, Cloudflare, or GCP for top performance and reliability.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Settings2,
      title: 'Automation Workflows',
      description: 'Connect tools like Zapier, Make, or custom scripts to automate daily marketing operations.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Globe2,
      title: 'Global Reach Campaigns',
      description: 'Multi-language SEO, region-specific link building, and global content strategies.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Everything You Need. All in One Stack.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From AI content to SEO automation and web development — scale your digital presence with powerful tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-6 w-6 text-black mr-3" />
                  <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;
