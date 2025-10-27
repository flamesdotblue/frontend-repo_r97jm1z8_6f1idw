import React from 'react';
import { Users, ShieldCheck, PieChart, Zap } from 'lucide-react';

const kpis = [
  {
    title: 'Active Users',
    value: '85M+',
    change: '+4.2% MoM',
    icon: Users,
    desc: 'Monthly transacting users across regions',
  },
  {
    title: 'Fraud Detection',
    value: '99.3%',
    change: 'TPR',
    icon: ShieldCheck,
    desc: 'True positive rate for suspicious patterns',
  },
  {
    title: 'Txn Mix',
    value: '60/40',
    change: 'P2M / P2P',
    icon: PieChart,
    desc: 'Category distribution by volume',
  },
  {
    title: 'Query Speed',
    value: '1.2s',
    change: 'p95',
    icon: Zap,
    desc: 'Interactive dashboard response time',
  },
];

const KpiHighlights = () => {
  return (
    <section id="insights" className="bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">Key performance snapshots</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">High-level indicators that drive product, marketing, and risk decisions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div key={kpi.title} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 backdrop-blur p-5">
                <div className="flex items-center justify-between">
                  <div className="text-slate-500 dark:text-slate-400 text-sm">{kpi.title}</div>
                  <div className="rounded-md p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <div className="text-2xl font-semibold text-slate-900 dark:text-white">{kpi.value}</div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400">{kpi.change}</div>
                </div>
                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">{kpi.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KpiHighlights;
