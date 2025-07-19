import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const links = [
    { name: 'Features', href: '#features' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/Phoenixtech5683' },
    { icon: Github, href: 'https://github.com/Alven5683' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/phoenix-tech-group-1/?viewAsMember=true' },
    { icon: Mail, href: 'phoenixtechgroup1998@gmail.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Zap className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold">ORBAI</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-8 mb-8">
            {links.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 Phoenix Tech Group. All rights reserved. Built with passion for the future of AI.
            </p>
            <p className="text-gray-400 mt-2">
              Phoenix Tech Group – Registered U.S. LLC, EIN: 39-2674952 
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
