import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Clock, TrendingUp, ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';

const ProfessionalBCPDiagram: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 5);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
      {/* Header Section */}
      <div className="px-4 md:px-8 pt-6 pb-4 bg-gradient-to-r from-slate-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-lg md:text-2xl font-bold text-slate-800 mb-3">
            Time Is Precious When An Event Occurs
          </h2>
          <div className="inline-block bg-green-100 px-4 py-2 rounded-lg">
            <span className="text-green-800 font-semibold text-sm">ISO 22301</span>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 z-30 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className={`p-2 rounded-lg text-white text-xs font-medium ${
            isPlaying ? 'bg-red-500' : 'bg-green-500'
          }`}
        >
          {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPhase(0)}
          className="p-2 bg-blue-500 text-white rounded-lg text-xs"
        >
          <RotateCcw className="h-3 w-3" />
        </motion.button>
      </div>

      {/* Main Diagram */}
      <div className="p-4 md:p-8 relative">
        <div className="relative h-[400px] md:h-[500px]">
          
          {/* Y-axis Labels */}
          <div className="absolute left-0 top-1/4 -rotate-90 origin-center">
            <div className="text-xs md:text-sm font-medium text-slate-600 whitespace-nowrap text-center">
              Capacity of operations
            </div>
          </div>
          
          <div className="absolute left-0 bottom-20 -rotate-90 origin-center">
            <div className="text-xs md:text-sm font-bold text-blue-600 whitespace-nowrap text-center">
              Event Time Progression
            </div>
          </div>

          {/* Chart Area */}
          <div className="ml-8 md:ml-12 mr-4 h-full relative">
            
            {/* Grid Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <defs>
                <pattern id="chartGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#chartGrid)" />
            </svg>

            {/* Capacity Line */}
            <motion.div 
              className="absolute w-full h-px bg-slate-400 top-1/2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Timeline Events */}
            {[
              { label: "Warning", position: 15, color: "#F59E0B", icon: AlertTriangle },
              { label: "Incident", position: 28, color: "#DC2626", icon: AlertTriangle },
              { label: "Recovery time objective", position: 48, color: "#F59E0B", icon: Clock },
              { label: "Shortened disruption", position: 68, color: "#10B981", icon: TrendingUp }
            ].map((event, index) => (
              <motion.div
                key={event.label}
                className="absolute"
                style={{ left: `${event.position}%`, top: '50%' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: currentPhase >= index ? 1 : 0.3,
                  scale: currentPhase >= index ? 1 : 0.8,
                  y: currentPhase === index ? -5 : 0
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Vertical line */}
                <div 
                  className="w-0.5 md:w-1 h-20 -translate-y-10 mx-auto"
                  style={{ backgroundColor: event.color }}
                />
                
                {/* Event dot */}
                <motion.div
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{ backgroundColor: event.color }}
                  whileHover={{ scale: 1.2 }}
                >
                  <event.icon className="h-1.5 w-1.5 md:h-2 md:w-2 text-white" />
                </motion.div>
                
                {/* Label */}
                <motion.div
                  className="absolute top-4 -translate-x-1/2 text-center min-w-max"
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="text-xs font-medium px-2 py-1 rounded text-white shadow-md max-w-[80px] md:max-w-none"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Recovery Curves */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* WITH business continuity curve */}
              <motion.path
                d="M 15% 50% Q 35% 65% 68% 45% T 85% 35%"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                strokeDasharray="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              
              {/* WITHOUT business continuity curve */}
              <motion.path
                d="M 15% 50% Q 40% 85% 75% 75% T 90% 70%"
                stroke="#DC2626"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4,4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
            </svg>

            {/* Key Phases Boxes */}
            <motion.div
              className="absolute bg-yellow-100 border-l-4 border-yellow-500 p-2 rounded shadow-md max-w-[100px] md:max-w-none"
              style={{ left: '18%', top: '30%' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: currentPhase >= 1 ? 1 : 0, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="text-xs font-semibold text-yellow-800">
                Controlled response
              </div>
            </motion.div>

            <motion.div
              className="absolute bg-slate-100 border-l-4 border-slate-600 p-2 rounded shadow-md max-w-[120px] md:max-w-none"
              style={{ left: '35%', top: '65%' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: currentPhase >= 2 ? 1 : 0, scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="text-xs font-semibold text-slate-800">
                <div>Mitigating,</div>
                <div>responding to</div>
                <div>and managing</div>
                <div>impacts</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bg-red-100 border-l-4 border-red-500 p-2 rounded shadow-md max-w-[100px] md:max-w-none"
              style={{ left: '75%', top: '75%' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: currentPhase >= 3 ? 1 : 0, scale: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="text-xs font-semibold text-red-800">
                <div>Minimum</div>
                <div>acceptable</div>
                <div>capacity</div>
              </div>
            </motion.div>

            {/* Green Arrows */}
            <motion.div
              className="absolute"
              style={{ left: '58%', top: '20%' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5 }}
            >
              <div className="bg-green-200 p-2 rounded shadow-md">
                <div className="text-xs font-medium text-green-800 text-center mb-1">
                  <div>Work recovery time</div>
                  <div>to normal operations</div>
                </div>
                <div className="text-green-600 text-center">
                  <TrendingUp className="h-4 w-4 mx-auto" />
                </div>
              </div>
            </motion.div>

            {/* Legend */}
            <motion.div
              className="absolute bottom-4 right-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              <div className="flex items-center space-x-2 bg-white/90 px-3 py-1 rounded shadow">
                <div className="w-4 h-0.5 bg-green-500"></div>
                <span className="text-xs font-medium text-green-800">WITH business continuity</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 px-3 py-1 rounded shadow">
                <div className="w-4 h-0.5 bg-red-500 border-dashed border-t border-red-500"></div>
                <span className="text-xs font-medium text-red-800">WITHOUT business continuity</span>
              </div>
            </motion.div>

            {/* Time Axis */}
            <div className="absolute bottom-2 right-8 flex items-center">
              <span className="text-xs font-medium text-slate-600 mr-1">Time</span>
              <ArrowRight className="h-3 w-3 text-slate-600" />
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <motion.div
          className="text-center mt-6 space-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
        >
          <p className="text-sm font-medium text-slate-700">
            Illustration Of Business Continuity Being Effective For Gradual Disruption
          </p>
          <p className="text-xs text-slate-500">(e.g. datacenter disaster)</p>
          <p className="text-xs text-slate-400 font-mono">PROG Internal</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalBCPDiagram;