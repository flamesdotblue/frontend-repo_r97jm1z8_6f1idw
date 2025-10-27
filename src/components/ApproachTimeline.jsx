import React from 'react';
import { Database, FileDown, Code2, LayoutDashboard } from 'lucide-react';

const steps = [
  {
    title: 'Data Extraction',
    icon: FileDown,
    desc: 'Clone datasets from GitHub including aggregated, map, and top-performer tables.',
    detail: 'Validated schemas and standardized naming for consistent ingestion.',
  },
  {
    title: 'SQL Database',
    icon: Database,
    desc: 'Create normalized tables in PostgreSQL/MySQL and load curated datasets.',
    detail: 'Indexes and partitions for high-volume queries and fast drill-downs.',
  },
  {
    title: 'Python Analysis',
    icon: Code2,
    desc: 'Use Pandas, Seaborn, and Matplotlib to explore trends and distributions.',
    detail: 'Reusable query layer to power charts and cohort analyses.',
  },
  {
    title: 'Streamlit Dashboard',
    icon: LayoutDashboard,
    desc: 'Interactive views for geography, performance, segmentation, and risk.',
    detail: 'Responsive controls with filters by time, category, and region.',
  },
];

const ApproachTimeline = () => {
  return (
    <section className="bg-white dark:bg-slate-950" id="approach">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">Approach overview</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">From raw datasets to actionable insights and an interactive dashboard.</p>
        </div>

        <ol className="relative border-l border-slate-200 dark:border-slate-800 ml-3">
          {steps.map(({ title, icon: Icon, desc, detail }) => (
            <li key={title} className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 transition-colors"
          >
            Launch Streamlit Dashboard
          </a>
          <span className="text-xs text-slate-500 dark:text-slate-400">Use the button once the Streamlit app is deployed.</span>
        </div>
      </div>
    </section>
  );
};

export default ApproachTimeline;
