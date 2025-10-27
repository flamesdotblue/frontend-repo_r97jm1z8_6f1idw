import React from 'react';
import Spline from '@splinetool/react-spline';
import { CreditCard, Shield, BarChart3 } from 'lucide-react';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/60 to-slate-950"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
              <CreditCard className="h-4 w-4" />
              <span className="text-xs tracking-wide">Fintech • PhonePe Transaction Insights</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Data-driven insights on transactions, users, and insurance to power smarter decisions
            </h1>
            <p className="mt-4 text-slate-200/90 text-base sm:text-lg">
              An interactive analytics experience combining SQL, Python, and Streamlit to reveal geographical trends, engagement patterns, and product opportunities across India.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#insights"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 transition-colors"
              >
                <BarChart3 className="h-4 w-4" /> Explore Insights
              </a>
              <a
                href="#security"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors"
              >
                <Shield className="h-4 w-4" /> Fraud & Risk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
