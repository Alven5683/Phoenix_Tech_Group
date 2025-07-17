import { motion } from 'framer-motion';

const Quote = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed">
          "AI isn’t just the future — it’s the tool we use today to automate success, accelerate growth, and create digital experiences that convert."
        </blockquote>
        <div className="mt-8 text-gray-500 font-medium">
          — Phoenix Tech Group - Team
        </div>
      </div>
    </motion.section>
  );
};

export default Quote;