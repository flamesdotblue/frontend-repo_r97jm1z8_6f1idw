import React from 'react';
import { Map, ShoppingBag, BarChart3, Users, Shield, LineChart } from 'lucide-react';

const useCases = [
  {
    title: 'Geographical Insights',
    icon: Map,
    desc: 'State and district-level trends to optimize regional strategies and partnerships.',
    chips: ['State', 'District', 'Heatmaps'],
  },
  {
    title: 'Payment Performance',
    icon: BarChart3,
    desc: 'Monitor success rates, latency, and volume splits across categories and time.',
    chips: ['P2M', 'P2P', 'Success Rate'],
  },
  {
    title: 'Customer Segmentation',
    icon: Users,
    desc: 'Behavioral cohorts by frequency, value, and recency to improve retention.',
    chips: ['RFM', 'Cohorts', 'Churn'],
  },
  {
    title: 'Fraud Detection',
    icon: Shield,
    desc: 'Spot anomalies and risky patterns using rules, thresholds, and heuristics.',
    chips: ['Velocity', 'Geo-risk', 'Blacklist'],
  },
  {
    title: 'Product Development',
    icon: ShoppingBag,
    desc: 'Identify opportunities to launch and refine offerings including insurance add-ons.',
    chips: ['Cross-sell', 'Add-ons', 'Conversion'],
  },
  {
    title: 'Trend Analysis',
    icon: LineChart,
    desc: 'Understand seasonality and momentum for smarter marketing and ops planning.',
    chips: ['Seasonality', 'YoY', 'MoM'],
  },
];

const UseCasesGrid = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">Business use cases</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Translate analytics into impact across growth, risk, operations, and product.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map(({ title, icon: Icon, desc, chips }) => (
            <div key={title} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span key={c} className="text-xs rounded-full border border-slate-200 dark:border-slate-700 px-2 py-1 text-slate-600 dark:text-slate-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesGrid;
