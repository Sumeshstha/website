import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../assets/profile-pic 2.png';
import ResumePreviewModal from '../ResumePreviewModal/ResumePreviewModal';
import { scrollToSection } from '../../utils/scrollUtils';

const Hero = () => {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };



  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/sumeshshrestha', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/sumeshshrestha', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sumeshshrestha@example.com', label: 'Email' },
  ];

  return (
    <>
      <section id="home" className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text leading-tight">
                  Hi, I'm{' '}
                  <span className="text-light-primary dark:text-dark-primary">
                    Sumesh Shrestha
                  </span>
                  <br />
                  <span className="text-4xl lg:text-5xl">Creative Technologist</span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              >
                Computer Engineering Undergraduate at Kathmandu University | Tech Enthusiast | Problem Solver
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              >
                Building delightful, performant web experiences with modern tech. I craft interfaces, 
                automate workflows, and ship ideas fast.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-light-primary dark:bg-dark-primary text-white rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  View Projects
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text rounded-2xl font-semibold text-lg hover:bg-light-text hover:text-light-bg dark:hover:bg-dark-text dark:hover:text-dark-bg transition-all duration-300"
                >
                  Contact Me
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openPreviewModal} // Open the preview modal
                  className="px-8 py-4 bg-transparent border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary rounded-2xl font-semibold text-lg hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-white transition-all duration-300"
                >
                  Download CV
                </motion.button>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex gap-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-light-text dark:text-dark-text hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Background Decoration */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl transform rotate-3"
              />
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl transform -rotate-3"
              />

              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
                className="relative z-10 w-80 h-80 lg:w-96 lg:h-96"
              >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Sumesh Shrestha - Profile" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-10 right-10 w-12 h-12 bg-pink-400 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ResumePreviewModal 
        isOpen={isPreviewModalOpen} 
        onClose={closePreviewModal} 
      />
    </>
  );
};

export default Hero;