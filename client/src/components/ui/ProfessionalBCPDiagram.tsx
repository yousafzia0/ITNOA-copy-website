import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProfessionalBCPDiagram: React.FC = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow-lg border border-slate-200">
      <div className="p-3 md:p-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-4 md:mb-8"
        >
          <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-2">
            Time Is Precious When An Event Occurs
          </h3>
          <div className="text-xs md:text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded inline-block">
            ISO 22301
          </div>
        </motion.div>

        {/* Main Chart Container */}
        <div className="relative h-80 md:h-96 mx-1 md:mx-2">
          
          {/* Y-Axis Labels */}
          <div className="absolute left-1 md:left-2 top-8 md:top-12 -rotate-90 origin-center">
            <span className="text-xs font-medium text-slate-700 whitespace-nowrap">
              Capacity of operations
            </span>
          </div>
          
          <div className="absolute left-1 md:left-2 bottom-12 md:bottom-16 -rotate-90 origin-center">
            <div className="text-xs font-bold text-blue-600 whitespace-nowrap">
              <div>Event Time</div>
              <div>Progression</div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="ml-8 md:ml-12 mr-2 md:mr-4 h-full relative">
          
            {/* Main Timeline - Horizontal line */}
            <motion.div 
              className="absolute w-full h-0.5 bg-slate-400 top-16 md:top-20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Vertical Timeline Markers */}
            {[
              { label: "Warning", position: 15, color: "#F59E0B" },
              { label: "Incident", position: 25, color: "#DC2626" },
              { label: "Recovery time objective", position: 48, color: "#F59E0B" },
              { label: "Shortened disruption", position: 68, color: "#10B981" }
            ].map((event, index) => (
              <motion.div
                key={event.label}
                className="absolute"
                style={{ left: `${event.position}%`, top: '4rem' }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ 
                  opacity: animationStep >= index ? 1 : 0.3,
                  scaleY: animationStep >= index ? 1 : 0.5
                }}
                transition={{ duration: 0.6, delay: index * 0.4 + 1 }}
              >
                {/* Vertical marker line */}
                <div 
                  className="w-0.5 h-8 md:h-12 -translate-y-4 md:-translate-y-6 mx-auto"
                  style={{ backgroundColor: event.color }}
                />
                
                {/* Label box */}
                <motion.div
                  className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs font-medium text-white shadow-sm text-center"
                  style={{ 
                    backgroundColor: event.color,
                    fontSize: '10px',
                    minWidth: event.label.length > 15 ? '70px' : '50px',
                    maxWidth: '75px'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: animationStep >= index ? 1 : 0 }}
                  transition={{ delay: index * 0.4 + 1.2 }}
                >
                  {event.label}
                </motion.div>
              </motion.div>
            ))}

            {/* Recovery Curves using SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* WITH business continuity curve - Green solid */}
              <motion.path
                d="M 15% 16% L 25% 25% Q 48% 30% 68% 22% L 85% 15%"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: animationStep >= 4 ? 1 : 0 }}
                transition={{ duration: 2, delay: 3 }}
              />
              
              {/* WITHOUT business continuity curve - Red dashed */}
              <motion.path
                d="M 15% 16% L 25% 40% Q 48% 55% 75% 45% L 90% 40%"
                stroke="#DC2626"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: animationStep >= 5 ? 1 : 0 }}
                transition={{ duration: 2, delay: 4 }}
              />
            </svg>

            {/* Key Information Boxes - Mobile Optimized */}
            <motion.div
              className="absolute bg-green-50 border border-green-200 p-1 md:p-2 rounded shadow-sm"
              style={{ 
                left: '1%', 
                top: '3%',
                fontSize: '9px',
                maxWidth: '80px'
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: animationStep >= 6 ? 1 : 0, x: 0 }}
              transition={{ delay: 4.5 }}
            >
              <div className="text-green-800 font-medium">Resumption of activities at</div>
              <div className="text-green-800 font-medium">acceptable capacity within</div>
              <div className="text-green-800 font-medium">acceptable timeframe</div>
            </motion.div>

            <motion.div
              className="absolute bg-green-100 border border-green-300 p-1 md:p-2 rounded shadow-sm"
              style={{ 
                left: '58%', 
                top: '3%',
                fontSize: '9px',
                maxWidth: '70px'
              }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: animationStep >= 6 ? 1 : 0, x: 0 }}
              transition={{ delay: 5 }}
            >
              <div className="text-green-700 font-medium">Work recovery time</div>
              <div className="text-green-700 font-medium">to normal operations</div>
            </motion.div>

            <motion.div
              className="absolute bg-yellow-100 border-l-2 md:border-l-4 border-yellow-500 p-1 md:p-2 rounded shadow-sm"
              style={{ 
                left: '18%', 
                top: '30%',
                fontSize: '9px'
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: animationStep >= 7 ? 1 : 0, 
                scale: animationStep >= 7 ? 1 : 0.5 
              }}
              transition={{ delay: 5.5 }}
            >
              <div className="text-yellow-800 font-semibold">Controlled response</div>
            </motion.div>

            <motion.div
              className="absolute bg-slate-100 border-l-2 md:border-l-4 border-slate-600 p-1 md:p-2 rounded shadow-sm"
              style={{ 
                left: '32%', 
                top: '45%', 
                maxWidth: '85px',
                fontSize: '9px'
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: animationStep >= 7 ? 1 : 0, 
                scale: animationStep >= 7 ? 1 : 0.5 
              }}
              transition={{ delay: 6 }}
            >
              <div className="text-slate-800 font-semibold">Mitigating,</div>
              <div className="text-slate-800 font-semibold">responding to</div>
              <div className="text-slate-800 font-semibold">and managing</div>
              <div className="text-slate-800 font-semibold">impacts</div>
            </motion.div>

            <motion.div
              className="absolute bg-red-100 border-l-2 md:border-l-4 border-red-500 p-1 md:p-2 rounded shadow-sm"
              style={{ 
                left: '68%', 
                top: '55%',
                fontSize: '9px'
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: animationStep >= 7 ? 1 : 0, 
                scale: animationStep >= 7 ? 1 : 0.5 
              }}
              transition={{ delay: 6.5 }}
            >
              <div className="text-red-800 font-semibold">Minimum</div>
              <div className="text-red-800 font-semibold">acceptable</div>
              <div className="text-red-800 font-semibold">capacity</div>
            </motion.div>

            <motion.div
              className="absolute bg-red-50 border border-red-300 p-1 md:p-2 rounded shadow-sm"
              style={{ 
                left: '70%', 
                top: '65%', 
                maxWidth: '70px',
                fontSize: '9px'
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: animationStep >= 7 ? 1 : 0, 
                scale: animationStep >= 7 ? 1 : 0.5 
              }}
              transition={{ delay: 7 }}
            >
              <div className="text-red-700 font-medium">Time at</div>
              <div className="text-red-700 font-medium">which impacts</div>
              <div className="text-red-700 font-medium">become</div>
              <div className="text-red-700 font-medium">unacceptable</div>
            </motion.div>

            {/* Legend Boxes - Mobile Optimized */}
            <motion.div
              className="absolute bottom-4 md:bottom-6 right-2 md:right-4 space-y-1 md:space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7.5 }}
            >
              <div className="flex items-center space-x-2 bg-green-100 px-2 py-1 rounded text-xs font-medium border border-green-300 shadow-sm">
                <div className="w-4 md:w-6 h-0.5 md:h-1 bg-green-500 rounded"></div>
                <span className="text-green-800 text-xs">WITH business continuity</span>
              </div>
              <div className="flex items-center space-x-2 bg-red-100 px-2 py-1 rounded text-xs font-medium border border-red-300 shadow-sm">
                <div className="w-4 md:w-6 h-0.5 md:h-1 bg-red-500 rounded" style={{ 
                  backgroundImage: 'repeating-linear-gradient(to right, #DC2626 0, #DC2626 2px, transparent 2px, transparent 4px)' 
                }}></div>
                <span className="text-red-800 text-xs">WITHOUT business continuity</span>
              </div>
            </motion.div>

            {/* Arrows - Mobile Optimized */}
            <motion.div
              className="absolute"
              style={{ 
                left: '60%', 
                top: '12%' 
              }}
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ 
                opacity: animationStep >= 6 ? 1 : 0, 
                scale: 1, 
                rotate: 45 
              }}
              transition={{ delay: 5.5 }}
            >
              <div className="w-0 h-0 border-l-3 border-r-3 border-b-4 border-l-transparent border-r-transparent border-b-green-500"></div>
            </motion.div>

            <motion.div
              className="absolute"
              style={{ 
                left: '75%', 
                top: '35%' 
              }}
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ 
                opacity: animationStep >= 6 ? 1 : 0, 
                scale: 1, 
                rotate: 45 
              }}
              transition={{ delay: 6 }}
            >
              <div className="w-0 h-0 border-l-3 border-r-3 border-b-4 border-l-transparent border-r-transparent border-b-red-500"></div>
            </motion.div>

            {/* Time axis */}
            <motion.div 
              className="absolute bottom-2 md:bottom-4 right-4 md:right-8 flex items-center text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 8 }}
            >
              <span className="text-xs md:text-sm font-medium mr-1 md:mr-2">Time</span>
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
            </motion.div>
          </div>
        </div>

        {/* Footer - Mobile Optimized */}
        <motion.div
          className="text-center mt-4 md:mt-8 space-y-1 md:space-y-2 pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8.5 }}
        >
          <p className="text-xs md:text-sm font-semibold text-slate-700">
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