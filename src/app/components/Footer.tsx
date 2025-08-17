import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer className="bg-gray-900 text-white py-4 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h2 className="text-lg font-semibold">Stay Connected</h2>
        <p className="text-sm">Follow us on social media for the latest updates.</p>
        <div className="flex mt-2 space-x-4">
          <a
            href="https://facebook.com/yourcompany"
            aria-label="Follow us on Facebook"
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/yourcompany"
            aria-label="Follow us on Twitter"
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/yourcompany"
            aria-label="Follow us on Instagram"
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com/company/yourcompany"
            aria-label="Follow us on LinkedIn"
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="text-sm">
        <p>&copy; {currentYear} Your Company. All rights reserved by Areeba Irfan.</p>
      </div>
    </footer>
  );
};

export default Footer;
