import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterPopup from './NewsletterPopup';

const Footer = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  const quickLinks = [
    { name: 'home', href: '/', icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg> },
    { name: 'about', href: '#about-section', icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
    { name: 'events', href: '#events-section', icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> },
    { name: 'testimonies', href: '#testimonies-section', icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg> },
  ];

  const socialLinks = [
    { name: 'twitter', url: 'https://twitter.com/regener8s', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { name: 'medium', url: 'https://medium.com/@regenerates', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg> },
    { name: 'substack', url: 'https://regenerates.substack.com', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg> },
    { name: 'regenverse', url: '/regenverse', icon: <span className="text-xs font-bold">R</span>, isInternal: true },
  ];

  return (
    <footer className="relative py-10 bg-[#121212]/60 text-white backdrop-blur-lg overflow-hidden">
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] rounded-full filter blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h3 className="text-xl font-bold tracking-tight">regenerates</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Establishing God's Kingdom in web3. In all things, Jesus be glorified.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">quick links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#83B71B] transition-colors">
                    <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded">{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-3">connect</h4>
            <ul className="space-y-2">
              {socialLinks.map(social => (
                <li key={social.name}>
                  {social.isInternal ? (
                    <Link to={social.url} className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#83B71B] transition-colors">
                      <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full">{social.icon}</span>
                      {social.name}
                    </Link>
                  ) : (
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#83B71B] transition-colors">
                      <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full">{social.icon}</span>
                      {social.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-3">newsletter</h4>
            <p className="text-xs text-gray-400 mb-3">Stay updated on events and stories.</p>
            <button 
              onClick={() => setShowNewsletter(true)}
              className="bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              subscribe
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">&copy; 2026 regenerates. all rights reserved.</p>
        </div>
      </div>

      {showNewsletter && <NewsletterPopup onClose={() => setShowNewsletter(false)} />}
    </footer>
  );
};

export default Footer;
