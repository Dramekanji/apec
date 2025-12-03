'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { statistics } from '@/lib/constants';

const CountUpAnimation: React.FC<{ value: string; inView: boolean }> = ({
  value,
  inView,
}) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, numericValue]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-[#278793] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">
            Ensemble, Nous Faisons la{' '}
            <span className="font-accent italic text-primary">
              Différence
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Notre impact reflète l&apos;engagement de milliers de personnes qui
            croient au changement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-4xl sm:text-5xl font-medium text-primary mb-3">
                <CountUpAnimation value={stat.value} inView={isInView} />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-sm text-gray-300 leading-relaxed">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
