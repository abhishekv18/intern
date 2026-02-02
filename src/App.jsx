
import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, ShoppingBag, DollarSign, Play, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const salesData = [
    { day: 2, value: 3200 },
    { day: 4, value: 3800 },
    { day: 6, value: 3500 },
    { day: 8, value: 4200 },
    { day: 10, value: 3900 },
    { day: 12, value: 4500 },
    { day: 14, value: 4100 },
    { day: 16, value: 4800 },
    { day: 18, value: 4400 },
    { day: 20, value: 5100 },
    { day: 22, value: 4700 },
    { day: 24, value: 5300 },
    { day: 26, value: 4900 },
    { day: 28, value: 5500 },
    { day: 30, value: 5200 }
  ];

  const MiniChart = ({ data, color = "#6366f1" }) => {
    const max = Math.max(...data.map(d => d.value));
    const min = Math.min(...data.map(d => d.value));
    const range = max - min;

    return (
      <svg className="w-full h-16" viewBox="0 0 300 60" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d={data.map((point, i) => {
            const x = (i / (data.length - 1)) * 300;
            const y = 60 - ((point.value - min) / range) * 50;
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
          }).join(' ')}
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="drop-shadow-lg"
        />
        <path
          d={`
            ${data.map((point, i) => {
              const x = (i / (data.length - 1)) * 300;
              const y = 60 - ((point.value - min) / range) * 50;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            L 300 60 L 0 60 Z
          `}
          fill={`url(#gradient-${color})`}
        />
      </svg>
    );
  };

  const LargeChart = ({ data }) => {
    const max = Math.max(...data.map(d => d.value));
    const min = Math.min(...data.map(d => d.value));
    const range = max - min;

    return (
      <div className="relative h-64 w-full">
        <svg className="w-full h-full" viewBox="0 0 960 240" preserveAspectRatio="none">
          <defs>
            <linearGradient id="largeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
            </linearGradient>
          </defs>
  
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="0"
              y1={i * 60}
              x2="960"
              y2={i * 60}
              stroke="#4B5563"
              strokeWidth="0.5"
              opacity="0.4"
              strokeDasharray="4 4"
            />
          ))}
         
          <path
            d={`
              ${data.map((point, i) => {
                const x = (i / (data.length - 1)) * 960;
                const y = 240 - ((point.value - min) / range) * 180 - 30;
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
              }).join(' ')}
              L 960 240 L 0 240 Z
            `}
            fill="url(#largeGradient)"
          />
          
         
          <path
            d={data.map((point, i) => {
              const x = (i / (data.length - 1)) * 960;
              const y = 240 - ((point.value - min) / range) * 180 - 30;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke="#6366f1"
            strokeWidth="3"
            className="drop-shadow-xl"
          />
        </svg>
        
     
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-gray-400">
          {[2, 6, 10, 14, 18, 22, 26, 30].map(day => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#151517] text-gray-100 font-sans overflow-x-hidden">
    
      {/* Subtle background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #374151 1px, transparent 1px),
                           linear-gradient(to bottom, #374151 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Subtle gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"
        />
      </div>

    
      
 <nav className="relative z-50 ">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Untitled UI
                </span>
              </div>

         
              <div className="hidden md:flex items-center gap-6">
                <button className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </button>
                <button className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </button>
                <button className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
                  Resources
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </button>
                <button className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
                  FAQs
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </button>
                <button className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
                  About us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </button>
              </div>
            </div>

        
            <div className="hidden md:flex items-center gap-4">
              <button className="px-5 py-2.5 text-gray-300 hover:text-white transition-colors duration-200">
                Dashboard
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transform">
                Get started
              </button>
            </div>

          
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
              <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200">
                Products
              </button>
              <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200">
                Pricing
              </button>
              <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200">
                Resources
              </button>
              <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200">
                FAQs
              </button>
              <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200">
                About us
              </button>
              <div className="pt-4 space-y-2">
                <button className="block w-full px-5 py-2.5 text-gray-300 hover:text-white transition-colors duration-200 border border-gray-800 rounded-lg">
                  Dashboard
                </button>
                <button className="block w-full px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg font-medium">
                  Get started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    

    
         <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
             {/* Announcement badge */}
             <div 
               className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r border border-gray-800/80 rounded-full mb-6 backdrop-blur-sm group cursor-pointer hover:border-indigo-500/50 transition-all duration-300 animate-fadeIn"
               style={{ animationDelay: '0.2s' }}
             >
               <span className="w-2 h-2 bg-emerald-500 rounded-full" />
               <span className="text-sm text-gray-300">We just raised a $2m seed round</span>
               <span className="text-indigo-400 text-sm group-hover:translate-x-1 transition-transform duration-200">
                 Read →
               </span>
             </div>
     
             {/* Main headline */}
             <h1 
               className="text-5xl md:text-6xl lg:text-[72px] font-bold mb-6 leading-tight"
               style={{ 
                 animationDelay: '0.4s',
                 fontFamily: '"Space Grotesk", "Helvetica Neue", sans-serif'
               }}
             >
               <span className="text-white block">
                 Effortless digital stores
               </span>
               <span className="text-white block">
                 for skilled creators
               </span>
             </h1>
     
             {/* Subtitle */}
             <p 
               className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed animate-fadeIn mx-auto"
               style={{ animationDelay: '0.6s' }}
             >
               A complete online selling platform with simple store setup, robust marketing tools, 
               and expert support at your fingertips.
             </p>
     
             {/* CTA Buttons */}
             <div 
               className="flex flex-wrap gap-4 animate-fadeIn justify-center"
               style={{ animationDelay: '0.8s' }}
             >
               <button className="group px-6 py-3.5 bg-gray-900/80 hover:bg-gray-900 border border-gray-800 hover:border-gray-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105 transform text-base">
                 <Play size={18} className="group-hover:scale-110 transition-transform duration-200" />
                 How it works
               </button>
               <button className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-medium transition-all duration-200 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transform text-base">
                 Start free trial
               </button>
             </div>
           </section>

    
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div 
          className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 border border-gray-800/80 rounded-2xl p-8 backdrop-blur-md shadow-2xl animate-fadeIn"
          style={{ 
            animationDelay: '1s',
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
      
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-gray-800/80">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Welcome back, Isabella</h2>
                <p className="text-sm text-gray-400">31 January 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <button className="px-4 py-2 bg-gray-900/80 hover:bg-gray-900 border border-gray-800 rounded-lg transition-colors duration-200 text-gray-300">
                12 months
              </button>
              <button className="px-4 py-2 bg-gray-900/80 hover:bg-gray-900 border border-gray-800 rounded-lg transition-colors duration-200 text-gray-300">
                30 days
              </button>
              <button className="px-4 py-2 bg-indigo-600/30 border border-indigo-500/50 text-indigo-300 rounded-lg font-medium">
                7 days
              </button>
              <button className="px-4 py-2 bg-gray-900/80 hover:bg-gray-900 border border-gray-800 rounded-lg transition-colors duration-200 text-gray-300">
                24 hours
              </button>
            </div>
          </div>

          {/* Date range text */}
          <div className="text-sm text-gray-400 mb-6">
            1 Jan 2025 – 31 Jan 2025
          </div>

    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
            <div className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800/80 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Sales</span>
                <DollarSign className="text-emerald-500" size={20} />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-white mb-2">$4,870.44</div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="text-emerald-500" size={16} />
                  <span className="text-emerald-500 font-medium">4.4%</span>
                  <span className="text-gray-500">vs. last month</span>
                </div>
              </div>
              <MiniChart data={salesData} color="#6366f1" />
            </div>

         
            <div className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800/80 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Orders</span>
                <ShoppingBag className="text-indigo-500" size={20} />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-white mb-2">46</div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="text-emerald-500" size={16} />
                  <span className="text-emerald-500 font-medium">1.8%</span>
                  <span className="text-gray-500">vs. last month</span>
                </div>
              </div>
              <MiniChart data={salesData.map(d => ({ ...d, value: d.value / 100 }))} color="#a855f7" />
            </div>

         
            <div className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800/80 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Average order value</span>
                <BarChart3 className="text-purple-500" size={20} />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-white mb-2">$97.38</div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="text-emerald-500" size={16} />
                  <span className="text-emerald-500 font-medium">2.5%</span>
                  <span className="text-gray-500">vs. last month</span>
                </div>
              </div>
              <MiniChart data={salesData.map(d => ({ ...d, value: d.value / 50 }))} color="#10b981" />
            </div>
          </div>

       
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-800/80 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Sales</h3>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-white">$4,870.44</span>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="text-emerald-500" size={16} />
                    <span className="text-emerald-500 font-medium">4.4%</span>
                    <span className="text-gray-500">vs. last month</span>
                  </div>
                </div>
              </div>
            </div>
            <LargeChart data={salesData} />
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;