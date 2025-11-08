import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaCode, FaCloud, FaNetworkWired, FaCogs, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('web-development');

  const skillCategories = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Frontend, Backend, UX',
      icon: FaCode,
      details: {
        title: 'Web Development',
        description: 'Building full-stack web apps with modern tooling and a strong focus on accessibility and performance.',
        tags: ['Frontend', 'Backend', 'React', 'Next.js', 'TypeScript', 'RESTful APIs', 'Responsive Design'],
        paragraph: 'I blend product thinking with engineering to deliver robust, maintainable systems and delightful UX.'
      }
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'AWS, Containers, CI/CD',
      icon: FaCloud,
      details: {
        title: 'Cloud & DevOps',
        description: 'Deploying scalable applications with modern cloud infrastructure and automation.',
        tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring', 'Security'],
        paragraph: 'Expertise in cloud-native architecture and infrastructure as code for reliable deployments.'
      }
    },
    {
      id: 'networking',
      title: 'Networking',
      description: 'Routing, Firewalls, Security',
      icon: FaNetworkWired,
      details: {
        title: 'Networking',
        description: 'Designing secure network architectures and implementing robust security measures.',
        tags: ['TCP/IP', 'Firewalls', 'VPN', 'Load Balancing', 'Security', 'Monitoring'],
        paragraph: 'Strong foundation in network protocols and security best practices.'
      }
    },
    {
      id: 'programming',
      title: 'Programming',
      description: 'Python, JavaScript, C++',
      icon: FaCogs,
      details: {
        title: 'Programming',
        description: 'Versatile programming skills across multiple languages and paradigms.',
        tags: ['Python', 'JavaScript', 'C++', 'Java', 'Go', 'Algorithms', 'Data Structures'],
        paragraph: 'Passionate about clean code, algorithms, and solving complex problems efficiently.'
      }
    },
    {
      id: 'database',
      title: 'Database Management',
      description: 'SQL, NoSQL, ORMs',
      icon: FaDatabase,
      details: {
        title: 'Database Management',
        description: 'Designing efficient database schemas and optimizing query performance.',
        tags: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'NoSQL', 'ORM', 'Indexing'],
        paragraph: 'Experience with both relational and non-relational databases for optimal data management.'
      }
    }
  ];

  const selectedSkill = skillCategories.find(skill => skill.id === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-light-bg dark:bg-dark-bg">
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
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.id
                    ? 'ring-2 ring-light-primary dark:ring-dark-primary'
                    : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <FaChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    selectedCategory === category.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Selected Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-20"
          >
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
                {selectedSkill.details.title}
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {selectedSkill.details.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {selectedSkill.details.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedSkill.details.paragraph}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;