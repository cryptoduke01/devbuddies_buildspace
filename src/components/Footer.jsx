import React, { useState } from 'react';
import NewsletterPopup from './NewsletterPopup';

const Footer = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <footer className="relative py-12 bg-[#121212]/60 text-white backdrop-blur-lg overflow-hidden">
      {/* Floating gradient circles */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              regenerates
            </h3>
            <p className="text-sm text-gray-400">revitalizing communities, empowering positive change.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">quick links</h4>
            <ul className="space-y-2">
              {['home', 'events', 'leaders', 'about'].map(link => (
                <li key={link}>
                  <a href={`#${link}`} className="text-sm transition-all hover:text-[#83B71B] hover:underline hover:underline-offset-4">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">connect</h4>
            <ul className="space-y-2">
              {['twitter', 'linkedin', 'youtube', 'discord'].map(platform => (
                <li key={platform}>
                  <a href={`#${platform}`} className="text-sm transition-all hover:text-[#83B71B] hover:underline hover:underline-offset-4">
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">newsletter</h4>
            <p className="text-sm text-gray-400 mb-2">join our journey. stay updated on events and stories.</p>
            <button 
              onClick={() => setShowNewsletter(true)}
              className="bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black px-4 py-2 rounded-full hover:from-[#6b9e16] hover:to-[#b8b92e] transition-all duration-300"
            >
              subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 regenerates. all rights reserved.</p>
        </div>
      </div>

      {/* Newsletter Popup */}
      {showNewsletter && <NewsletterPopup onClose={() => setShowNewsletter(false)} />}
    </footer>
  );
};

export default Footer;
