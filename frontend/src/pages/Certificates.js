import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaMedal, FaCertificate, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import certificate images
import grade11Marksheet from '../assets/Grade_11_marksheet.jpg';
import khwopaImage from '../assets/khwopa.jpg';
import slcImage from '../assets/SLC.jpg';
import sosCertificate from '../assets/SOS_Certificate.jpg';
import leoParticipation from '../assets/Leo_fire_participation.png';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('education');
  const [selectedItem, setSelectedItem] = useState(0); // Index of selected item within category
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const certificateCategories = {
    education: {
      title: 'Education',
      icon: FaGraduationCap,
      items: [
        {
          title: 'SLC',
          institution: 'SOS Hermann Gmeiner School',
          year: '2019',
          description: 'School Leaving Certificate with distinction',
          certificates: [
            { id: 1, title: 'SLC Certificate', image: slcImage, description: 'School Leaving Certificate with distinction' },
            { id: 2, title: 'SOS Certificate', image: sosCertificate, description: 'SOS Hermann Gmeiner School Certificate' }
          ]
        },
        {
          title: '+2',
          institution: 'Khwopa Secondary School',
          year: '2021',
          description: 'Higher Secondary Education in Science',
          certificates: [
            { id: 3, title: 'Grade 11 Marksheet', image: grade11Marksheet, description: 'Grade 11 Academic Marksheet' },
            { id: 4, title: 'Khwopa Certificate', image: khwopaImage, description: 'Khwopa Secondary School Certificate' }
          ]
        }
      ]
    },
    sports: {
      title: 'Sports',
      icon: FaTrophy,
      items: [
        {
          title: 'Cricket Tournament',
          institution: 'Inter-School Championship',
          year: '2019',
          description: 'Captain of winning team',
          certificates: [
            { id: 5, title: 'Cricket Championship', image: '/api/placeholder/400/300', description: 'Inter-School Cricket Championship Winner' },
            { id: 6, title: 'Best Captain Award', image: '/api/placeholder/400/300', description: 'Award for exceptional leadership' }
          ]
        },
        {
          title: 'Athletics',
          institution: 'District Level',
          year: '2018',
          description: '100m Sprint - 2nd Place',
          certificates: [
            { id: 7, title: 'Athletics Medal', image: '/api/placeholder/400/300', description: 'District Level Athletics - 2nd Place' },
            { id: 8, title: 'Sprint Achievement', image: '/api/placeholder/400/300', description: '100m Sprint Achievement Certificate' }
          ]
        }
      ]
    },
    participation: {
      title: 'Participations',
      icon: FaMedal,
      items: [
        {
          title: 'Leo Nepal',
          institution: 'Leo Club of Shreekhandapur, Kavre',
          year: '2023',
          description: 'Active participation in community service',
          certificates: [
            { id: 9, title: 'Leo Fire Participation', image: leoParticipation, description: 'Participation in Leo Club Fire Safety Program' }
          ]
        },
        {
          title: 'Hackathon',
          institution: 'KU Engineering',
          year: '2022',
          description: '1st Place - AI/ML Project',
          certificates: [
            { id: 11, title: 'Hackathon Winner', image: '/api/placeholder/400/300', description: '1st Place in KU Engineering Hackathon' },
            { id: 12, title: 'AI/ML Innovation', image: '/api/placeholder/400/300', description: 'Innovation Award for AI/ML Project' }
          ]
        }
      ]
    }
  };

  // Get current certificates based on selected category and item
  const getCurrentCertificates = () => {
    const category = certificateCategories[selectedCategory];
    if (!category || !category.items.length) return [];
    
    return category.items[selectedItem]?.certificates || [];
  };

  const currentCertificates = getCurrentCertificates();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % currentCertificates.length);
  }, [currentCertificates.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + currentCertificates.length) % currentCertificates.length);
  }, [currentCertificates.length]);

  // Reset slide and item when category changes
  React.useEffect(() => {
    setCurrentSlide(0);
    setSelectedItem(0);
  }, [selectedCategory]);

  // Reset slide when item changes
  React.useEffect(() => {
    setCurrentSlide(0);
  }, [selectedItem]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (currentCertificates.length === 0) return;
      
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentCertificates.length, nextSlide, prevSlide]);

  return (
    <section id="certificates" className="min-h-screen bg-light-bg dark:bg-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My educational journey and accomplishments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {Object.entries(certificateCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === key
                      ? 'bg-light-primary dark:bg-dark-primary text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-light-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.title}
                </motion.button>
              ))}
            </div>

            {/* Selected Category Content */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-2xl flex items-center justify-center">
                  {React.createElement(certificateCategories[selectedCategory].icon, {
                    className: "w-6 h-6 text-white"
                  })}
                </div>
                <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">
                  {certificateCategories[selectedCategory].title}
                </h3>
              </div>

              <div className="space-y-4">
                {certificateCategories[selectedCategory].items.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedItem(index)}
                    className={`w-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left border-l-4 ${
                      selectedItem === index
                        ? 'bg-light-primary/10 dark:bg-dark-primary/10 border-light-primary dark:border-dark-primary'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:border-light-primary/50 dark:hover:border-dark-primary/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className={`text-xl font-bold ${
                        selectedItem === index
                          ? 'text-light-primary dark:text-dark-primary'
                          : 'text-light-text dark:text-dark-text'
                      }`}>
                        {item.title}
                      </h4>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        selectedItem === index
                          ? 'text-white bg-light-primary dark:bg-dark-primary'
                          : 'text-light-primary dark:text-dark-primary bg-light-primary/10 dark:bg-dark-primary/10'
                      }`}>
                        {item.year}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {item.description}
                    </p>
                    {item.certificates && (
                      <div className="flex items-center gap-2 text-sm text-light-primary dark:text-dark-primary">
                        <FaCertificate className="w-4 h-4" />
                        <span>{item.certificates.length} certificate{item.certificates.length !== 1 ? 's' : ''}</span>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Certificate Images Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <FaCertificate className="w-16 h-16 text-light-primary dark:text-dark-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Certificate Gallery
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {certificateCategories[selectedCategory].items[selectedItem]?.title} - {certificateCategories[selectedCategory].title}
                </p>
                {currentCertificates.length > 0 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {currentCertificates.length} certificate{currentCertificates.length !== 1 ? 's' : ''} available
                  </p>
                )}
              </div>

              {/* Carousel Container */}
              <div className="relative">
                {currentCertificates.length > 0 ? (
                  <>
                    {/* Certificate Display */}
                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, x: 300 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -300 }}
                          transition={{ duration: 0.5 }}
                          className="aspect-[4/3] flex items-center justify-center"
                        >
                          <div className="w-full h-full p-4">
                            <motion.div 
                              className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setIsImageZoomed(true)}
                            >
                              <img 
                                src={currentCertificates[currentSlide]?.image} 
                                alt={currentCertificates[currentSlide]?.title}
                                className="w-full h-full object-contain"
                              />
                            </motion.div>
                            <div className="mt-4 text-center">
                              <h4 className="text-lg font-bold text-light-text dark:text-dark-text mb-1">
                                {currentCertificates[currentSlide]?.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {currentCertificates[currentSlide]?.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    {currentCertificates.length > 1 && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={prevSlide}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-light-primary dark:text-dark-primary hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary transition-all duration-300"
                        >
                          <FaChevronLeft className="w-5 h-5" />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={nextSlide}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-light-primary dark:text-dark-primary hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary transition-all duration-300"
                        >
                          <FaChevronRight className="w-5 h-5" />
                        </motion.button>
                      </>
                    )}

                    {/* Slide Indicators */}
                    {currentCertificates.length > 1 && (
                      <div className="flex justify-center mt-6 space-x-2">
                        {currentCertificates.map((_, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentSlide
                                ? 'bg-light-primary dark:bg-dark-primary'
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Certificate Counter */}
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {currentSlide + 1} of {currentCertificates.length} certificates
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-500">
                    <div className="text-center">
                      <FaCertificate className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        No certificates available
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Select a category to view certificates
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentCertificates[currentSlide]?.image} 
                alt={currentCertificates[currentSlide]?.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <div className="absolute top-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsImageZoomed(false)}
                  className="w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                >
                  ×
                </motion.button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-1">
                  {currentCertificates[currentSlide]?.title}
                </h3>
                <p className="text-sm opacity-90">
                  {currentCertificates[currentSlide]?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
