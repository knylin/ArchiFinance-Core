
import React from 'react';
import { LayoutDashboard, Settings, PieChart, Landmark, Sun, Moon, Monitor } from 'lucide-react';
import { ViewState, ThemeMode } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (view: ViewState) => void;
  activeView: string;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate, activeView, currentTheme, onThemeChange }) => {
  return (
    <div className="flex h-screen font-sans print:h-auto print:block print:overflow-visible transition-colors duration-300 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-300">
      {/* Sidebar - Hidden on Print */}
      <aside className="w-16 md:w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col shrink-0 print:hidden transition-all duration-300 shadow-sm z-20">
        <div className="p-4 md:p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-lg text-zinc-800 dark:text-zinc-100 hidden md:block tracking-tight">ArchiFinance</span>
        </div>

        <nav className="flex-1 p-2 md:p-4 space-y-2">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
              activeView === 'dashboard'
                ? 'bg-teal-50 dark:bg-zinc-800 text-teal-600 dark:text-teal-400 font-semibold'
                : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400'
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="hidden md:block font-medium">儀表板</span>
          </button>
          
          <div className="pt-4 pb-2 px-3 hidden md:block text-xs font-semibold text-zinc-500 dark:text-zinc-600 uppercase tracking-wider">
            系統功能
          </div>

          <button 
            onClick={() => onNavigate('finance')}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
              activeView === 'finance'
                ? 'bg-teal-50 dark:bg-zinc-800 text-teal-600 dark:text-teal-400 font-semibold'
                : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400'
            }`}
          >
            <Landmark size={20} />
            <span className="hidden md:block font-medium">財務管理 (公基金)</span>
          </button>
          
          <button 
            onClick={() => onNavigate('reports')}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
              activeView === 'reports'
                ? 'bg-teal-50 dark:bg-zinc-800 text-teal-600 dark:text-teal-400 font-semibold'
                : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400'
            }`}
          >
            <PieChart size={20} />
            <span className="hidden md:block font-medium">財務報表</span>
          </button>
           <button 
             onClick={() => onNavigate('settings')}
             className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
              activeView === 'settings'
                ? 'bg-teal-50 dark:bg-zinc-800 text-teal-600 dark:text-teal-400 font-semibold'
                : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400'
            }`}
           >
            <Settings size={20} />
            <span className="hidden md:block font-medium">系統設定</span>
          </button>
        </nav>
        
        {/* Theme Switcher & Footer */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg mb-4 border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => onThemeChange('light')}
              className={`flex-1 flex items-center justify-center py-1.5 rounded-md transition-all ${
                currentTheme === 'light'
                  ? 'bg-white dark:bg-zinc-800 text-amber-500 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'
              }`}
              title="淺色模式"
            >
              <Sun size={16} />
            </button>
            <button
              onClick={() => onThemeChange('dark')}
              className={`flex-1 flex items-center justify-center py-1.5 rounded-md transition-all ${
                currentTheme === 'dark'
                  ? 'bg-white dark:bg-zinc-800 text-indigo-400 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'
              }`}
               title="深色模式"
            >
              <Moon size={16} />
            </button>
            <button
              onClick={() => onThemeChange('system')}
              className={`flex-1 flex items-center justify-center py-1.5 rounded-md transition-all ${
                currentTheme === 'system'
                  ? 'bg-white dark:bg-zinc-800 text-teal-500 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'
              }`}
               title="依系統設定"
            >
              <Monitor size={16} />
            </button>
          </div>
          
          <div className="text-xs text-zinc-400 dark:text-zinc-600 hidden md:block">
            v2.0.0 • 本地儲存
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden h-full relative print:h-auto print:overflow-visible print:block">
        {children}
      </main>
    </div>
  );
};