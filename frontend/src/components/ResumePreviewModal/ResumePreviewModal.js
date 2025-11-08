import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './ResumePreviewModal.css';
import { FaPlus, FaMinus, FaDownload } from 'react-icons/fa';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const ResumePreviewModal = ({ isOpen, onClose }) => {
  // const [numPages, setNumPages] = useState(null); // Commented out as unused
  // const [pageNumber, setPageNumber] = useState(1); // Commented out as unused
  const [scale, setScale] = useState(1.0);
  const [viewport, setViewport] = useState({ width: 0, height: 0, type: 'desktop' });

  // Responsive viewport detection
  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let type = 'desktop';
      
      if (width < 640) {
        type = 'mobile';
      } else if (width < 1024) {
        type = 'tablet';
      } else if (width < 1280) {
        type = 'desktop';
      } else {
        type = 'large';
      }
      
      setViewport({ width, height, type });
      
      // Auto-adjust scale based on viewport
      if (type === 'mobile' && scale > 1.2) {
        setScale(0.8);
      } else if (type === 'tablet' && scale > 1.5) {
        setScale(1.0);
      }
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, [scale]);

  // Log viewport changes for debugging
  useEffect(() => {
    console.log(`Viewport updated: ${viewport.type} (${viewport.width}x${viewport.height})`);
  }, [viewport]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    // setNumPages(numPages); // Commented out as unused
    console.log(`PDF loaded with ${numPages} pages`);
  };

  const onDocumentLoadError = (error) => {
    console.error('Error loading PDF:', error);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sumesh_Shrestha_Resume.pdf';
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 transition-all duration-300 ease-in-out">
      <div className="bg-white dark:bg-dark-bg rounded-2xl shadow-2xl w-full h-full max-h-[95vh] flex flex-col transition-all duration-300 ease-in-out
                     max-w-full sm:max-w-[95vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl
                     min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 gap-3 sm:gap-4 transition-all duration-300">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-light-text dark:text-dark-text transition-all duration-300">Resume Preview</h2>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap transition-all duration-300">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 sm:gap-2 transition-all duration-300">
              <button onClick={() => setScale(scale - 0.1)} disabled={scale <= 0.5} className="p-1.5 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 transition-all duration-200 transform hover:scale-105 active:scale-95">
                <FaMinus className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <span className="text-xs sm:text-sm font-semibold w-8 sm:w-12 text-center transition-all duration-300">{Math.round(scale * 100)}%</span>
              <button onClick={() => setScale(scale + 0.1)} disabled={scale >= 2.0} className="p-1.5 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 transition-all duration-200 transform hover:scale-105 active:scale-95">
                <FaPlus className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            
            
            
            {/* Download Button */}
            <button onClick={handleDownload} className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105 active:scale-95">
              <FaDownload className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Download</span>
            </button>
            {/* Close Button */}
            <button onClick={onClose} className="text-lg sm:text-xl md:text-2xl p-1.5 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 active:scale-95">&times;</button>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-grow overflow-auto p-2 sm:p-3 md:p-4 lg:p-6 transition-all duration-300 ease-in-out">
          <div className="pdf-viewer-container w-full h-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] transition-all duration-300 ease-in-out">
            <Document
              file="/resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-4">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-light-primary dark:border-dark-primary mx-auto mb-4"></div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Loading PDF...</p>
                  </div>
                </div>
              }
              error={
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-4 text-red-500">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm sm:text-base font-semibold">Failed to load PDF</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">Please check the console for details</p>
                  </div>
                </div>
              }
              className="pdf-document transition-all duration-300"
            >
              <Page 
                pageNumber={1} 
                scale={scale} 
                className="pdf-page transition-all duration-300 shadow-lg"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewModal;
