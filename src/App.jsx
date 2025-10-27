import React from 'react';
import HeroCover from './components/HeroCover';
import KpiHighlights from './components/KpiHighlights';
import UseCasesGrid from './components/UseCasesGrid';
import ApproachTimeline from './components/ApproachTimeline';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 border-b border-slate-200/60 dark:border-slate-800 bg-white/90 dark:bg-slate-950/80 backdrop-blur">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">
              <Rocket className="h-4 w-4" />
            </span>
            <span>PhonePe Transaction Insights</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="#insights" className="hover:text-indigo-600 dark:hover:text-indigo-400">Insights</a>
            <a href="#approach" className="hover:text-indigo-600 dark:hover:text-indigo-400">Approach</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Docs</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroCover />
        <KpiHighlights />
        <UseCasesGrid />
        <ApproachTimeline />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-8 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Transaction Insights • Finance/Payments Analytics</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Source Code</a>
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Presentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
