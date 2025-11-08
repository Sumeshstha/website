import React from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../../utils/scrollUtils';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaShieldAlt, FaGamepad, FaDumbbell, FaBook, FaCompass, FaCertificate, FaArrowRight } from 'react-icons/fa';
import aboutImage from '../../assets/barahsing_1.png';

const About = () => {


  const skills = [
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'TypeScript', icon: null },
    { name: 'Next.js', icon: null },
    { name: 'REST APIs', icon: null },
    { name: 'AWS', icon: FaAws },
    { name: 'Docker', icon: FaDocker },
    { name: 'Security Tools', icon: FaShieldAlt },
  ];

  const hobbies = [
    {
      icon: FaGamepad,
      title: 'Cricket',
      description: 'Weekend league player and tactics nerd.'
    },
    {
      icon: FaDumbbell,
      title: 'Gym',
      description: 'Strength training and consistency.'
    },
    {
      icon: FaBook,
      title: 'Journaling',
      description: 'Daily notes to reflect and iterate.'
    },
    {
      icon: FaCompass,
      title: 'Stoicism',
      description: 'Practical philosophy for calm focus.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Passionate about technology and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Background Decoration */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 rounded-3xl transform rotate-3"
            />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-br from-pink-500 via-green-500 to-blue-500 rounded-3xl transform -rotate-3"
            />

            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative z-10 w-96 h-96 lg:w-[28rem] lg:h-[28rem]"
            >
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src={aboutImage} 
                    alt="Sumesh Shrestha - About" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Engineer by training, builder by heart. I enjoy designing systems, exploring cloud, 
              and turning ideas into polished products. Computer Engineering undergraduate at Kathmandu University 
              with strong interest in AI, machine learning, web development, and cloud technologies.
            </motion.p>

            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                What I Do
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {skill.icon && <skill.icon className="w-4 h-4" />}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Beyond Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                Beyond Code
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-light-primary dark:bg-dark-primary rounded-lg flex items-center justify-center">
                        <hobby.icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-light-text dark:text-dark-text">
                        {hobby.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {hobby.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certificates Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                Certificates & Achievements
              </h3>
              <Link to="/certificates">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-light-primary dark:border-dark-primary group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-2xl flex items-center justify-center">
                        <FaCertificate className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-light-text dark:text-dark-text">
                          View My Certificates
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Education, Sports, and Participation certificates
                        </p>
                      </div>
                    </div>
                    <FaArrowRight className="w-5 h-5 text-light-primary dark:text-dark-primary group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>
              </Link>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-light-primary dark:bg-dark-primary text-white rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;