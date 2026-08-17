import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { REGENCON } from '../data/regencon';

// Live countdown to the event date.
const getTimeLeft = (target) => {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const RegenCon = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(REGENCON.date));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(REGENCON.date)), 1000);
    return () => clearInterval(id);
  }, []);

  const countdownItems = timeLeft
    ? [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ]
    : [];

  return (
    <section
      id="regencon-section"
      className="relative overflow-hidden bg-black px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-24"
    >
      {/* Glow accents */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand/15 rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-brand-lime/10 rounded-full filter blur-[130px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-brand opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-brand">
            Upcoming Event
          </span>
        </div>

        <div className="relative rounded-3xl border border-brand/25 bg-gradient-to-br from-[#101a05] via-[#0d0d0d] to-[#0d0d0d] overflow-hidden shadow-2xl shadow-brand/10">
          {/* Textured green banner strip */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-brand-lime to-brand" />

          <div className="grid lg:grid-cols-5 gap-8 p-6 sm:p-8 lg:p-12">
            {/* Left: title + details */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[0.95] tracking-tight">
                <span className="text-brand-lime">Regen</span>
                <span className="text-brand-mint">Con</span>
                <span className="block text-brand-mint mt-1">Abuja</span>
              </h2>

              <p className="mt-4 text-lg sm:text-xl font-semibold text-brand-mint/90">
                {REGENCON.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-brand-mint">
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {REGENCON.dateLabel}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-brand-mint">
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {REGENCON.city}
                </span>
              </div>

              <p className="mt-6 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                Our flagship gathering — where Tech, Faith and the people shaping Web3 meet.
                A day of teaching, connection and building for believers doing excellent work onchain.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={REGENCON.registration.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-lime px-7 py-3.5 text-black font-bold text-sm sm:text-base shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:scale-[1.03] transition-all"
                >
                  Register on Luma
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href={REGENCON.tweetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-brand-mint font-semibold text-sm sm:text-base hover:border-brand hover:text-brand transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  See Full Details
                </a>
              </div>

              <p className="mt-5 text-xs text-gray-500">
                Registration window: {REGENCON.registration.windowLabel} · Enquiries: {REGENCON.enquiries.phone}
              </p>
            </div>

            {/* Right: countdown */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
                  {timeLeft ? 'Counting down to RegenCon' : 'RegenCon is here'}
                </p>

                {timeLeft ? (
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {countdownItems.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 py-3 text-center"
                      >
                        <p className="text-2xl sm:text-3xl font-extrabold text-brand-mint tabular-nums">
                          {String(item.value).padStart(2, '0')}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-2xl font-bold text-brand py-4">
                    Happening now in Abuja 🎉
                  </p>
                )}

                <a
                  href={REGENCON.registration.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block text-center rounded-full bg-brand-mint/95 px-5 py-2.5 text-sm font-bold text-black hover:bg-white transition-colors"
                >
                  Save My Spot →
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RegenCon;
