import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterPopup from './NewsletterPopup';

const Footer = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '/', isInternal: true, icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg> },
    { name: 'About', href: '#about-section', icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
    { name: 'RegenCon', href: '#regencon-section', icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> },
    { name: 'Resources', href: '/resources', icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>, isInternal: true },
    { name: 'Testimonies', href: '/testimonies', icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>, isInternal: true },
  ];

  const socialLinks = [
    { name: 'X (Twitter)', url: 'https://x.com/regener8s', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { name: 'Instagram', url: 'https://www.instagram.com/theregener8s', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.19-.22-.55-.47-.94-.88-1.35-.41-.41-.8-.66-1.35-.88-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.76-.07zM12 6.87A5.13 5.13 0 1 0 12 17.13 5.13 5.13 0 0 0 12 6.87zm0 8.46A3.33 3.33 0 1 1 12 8.67a3.33 3.33 0 0 1 0 6.66zm5.34-8.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg> },
    { name: 'TikTok', url: 'https://www.tiktok.com/@regener8s', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.1v12.3a2.6 2.6 0 0 1-2.6 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.4-2.48V9.5a5.72 5.72 0 0 0-.8-.06A5.72 5.72 0 0 0 4.13 15a5.72 5.72 0 0 0 11.44.2V9.01a7.3 7.3 0 0 0 4.27 1.37V7.28a4.28 4.28 0 0 1-3.24-1.46z"/></svg> },
    { name: 'YouTube', url: 'https://www.youtube.com/@theregener8s', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.39.52A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.89.52 9.39.52 9.39.52s7.5 0 9.39-.52a3 3 0 0 0 2.11-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z"/></svg> },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1DQi7ru5nW/', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg> },
    { name: 'Medium', url: 'https://medium.com/@regener8s', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg> },
    { name: 'Substack', url: 'https://substack.com/@theregener8s', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg> },
    { name: 'Regenverse', url: '/regenverse', icon: <span className="text-xs font-bold">R</span>, isInternal: true },
  ];

  return (
    <footer className="relative py-10 bg-[#121212]/60 text-white backdrop-blur-lg overflow-hidden">
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] rounded-full filter blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h3 className="text-xl font-bold tracking-tight">Regenerates</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Wealth manifold in God's fold.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  {link.isInternal ? (
                    <Link to={link.href} className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#83B71B] transition-colors">
                      <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded">{link.icon}</span>
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#83B71B] transition-colors">
                      <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded">{link.icon}</span>
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
              {socialLinks.map(social => (
                <li key={social.name}>
                  {social.isInternal ? (
                    <Link to={social.url} className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#83B71B] transition-colors">
                      <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full shrink-0">{social.icon}</span>
                      {social.name}
                    </Link>
                  ) : (
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#83B71B] transition-colors">
                      <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full shrink-0">{social.icon}</span>
                      {social.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-3">Stay updated on events and stories.</p>
            <button
              onClick={() => setShowNewsletter(true)}
              className="bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">&copy; 2026 Regenerates. All rights reserved.</p>
        </div>
      </div>

      {showNewsletter && <NewsletterPopup onClose={() => setShowNewsletter(false)} />}
    </footer>
  );
};

export default Footer;
