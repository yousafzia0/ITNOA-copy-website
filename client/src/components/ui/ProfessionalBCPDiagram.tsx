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
      <div className="p-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-2">
            Time Is Precious When An Event Occurs
          </h3>
          <div className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded inline-block">
            ISO 22301
          </div>
        </motion.div>

        {/* Main Chart Container */}
        <div className="relative h-96 mx-2">
          
          {/* Y-Axis Labels */}
          <div className="absolute left-2 top-12 -rotate-90 origin-center">
            <span className="text-xs font-medium text-slate-700 whitespace-nowrap">
              Capacity of operations
            </span>
          </div>
          
          <div className="absolute left-2 bottom-16 -rotate-90 origin-center">
            <div className="text-xs font-bold text-blue-600 whitespace-nowrap">
              <div>Event Time</div>
              <div>Progression</div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="ml-12 mr-4 h-full relative">
          
            {/* Main Timeline - Horizontal line */}
            <motion.div 
              className="absolute w-full h-0.5 bg-slate-400 top-20"
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
                style={{ left: `${event.position}%`, top: '5rem' }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ 
                  opacity: animationStep >= index ? 1 : 0.3,
                  scaleY: animationStep >= index ? 1 : 0.5
                }}
                transition={{ duration: 0.6, delay: index * 0.4 + 1 }}
              >
                {/* Vertical marker line */}
                <div 
                  className="w-0.5 h-12 -translate-y-6 mx-auto"
                  style={{ backgroundColor: event.color }}
                />
                
                {/* Label box */}
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-medium text-white shadow-sm text-center"
                  style={{ 
                    backgroundColor: event.color,
                    minWidth: event.label.length > 15 ? '80px' : '60px'
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
                d="M 15% 20% L 25% 30% Q 48% 35% 68% 25% L 85% 18%"
                stroke="#10B981"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: animationStep >= 4 ? 1 : 0 }}
                transition={{ duration: 2, delay: 3 }}
              />
              
              {/* WITHOUT business continuity curve - Red dashed */}
              <motion.path
                d="M 15% 20% L 25% 45% Q 48% 60% 75% 50% L 90% 45%"
                stroke="#DC2626"
                strokeWidth="3"
                strokeDasharray="6,6"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: animationStep >= 5 ? 1 : 0 }}
                transition={{ duration: 2, delay: 4 }}
              />
            </svg>

            {/* Key Information Boxes */}
            <motion.div
              className="absolute bg-green-50 border border-green-200 p-2 rounded-lg text-xs font-medium text-green-800 shadow-sm"
              style={{ left: '2%', top: '5%' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: animationStep >= 6 ? 1 : 0, x: 0 }}
              transition={{ delay: 4.5 }}
            >
              <div>Resumption of activities at</div>
              <div>acceptable capacity within</div>
              <div>acceptable timeframe</div>
            </motion.div>

            <motion.div
              className="absolute bg-green-100 border border-green-300 p-2 rounded-lg text-xs font-medium text-green-700 shadow-sm"
              style={{ left: '58%', top: '5%' }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: animationStep >= 6 ? 1 : 0, x: 0 }}
              transition={{ delay: 5 }}
            >
              <div>Work recovery time</div>
              <div>to normal operations</div>
            </motion.div>

            <motion.div
              className="absolute bg-yellow-100 border-l-4 border-yellow-500 p-2 rounded text-xs font-semibold text-yellow-800 shadow-sm"
              style={{ left: '18%', top: '35%' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: animationStep >= 7 ? 1 : 0, 
                scale: animationStep >= 7 ? 1 : 0.5 
              }}
              transition={{ delay: 5.5 }}
            >
              Controlled response
            </motion.div>

            <motion.div
              className="absolute bg-slate-100 border-l-4 border-slate-600 p-2 rounded text-xs font-semibold text-slate-800 shadow-sm"
              style={{ left: '32%', top: '50%', maxWidth: '120px' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: animationStep >= 7 ? 1 : 0, 
                scale: animationStep >= 7 ? 1 : 0.5 
              }}
              transition={{ delay: 6 }}
            >
              <div>Mitigating,</div>
              <div>responding to</div>
              <div>and managing</div>
              <div>impacts</div>
            </motion.div>

            <motion.div
              className="absolute bg-red-100 border-l-4 border-red-500 p-2 rounded text-xs font-semibold text-red-800 shadow-sm"
              style={{ left: '70%', top: '60%' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: animationStep >= 7 ? 1 : 0, 
                scale: animationStep >= 7 ? 1 : 0.5 
              }}
              transition={{ delay: 6.5 }}
            >
              <div>Minimum</div>
              <div>acceptable</div>
              <div>capacity</div>
            </motion.div>

            <motion.div
              className="absolute bg-red-50 border border-red-300 p-2 rounded text-xs font-medium text-red-700 shadow-sm"
              style={{ left: '72%', top: '70%', maxWidth: '100px' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: animationStep >= 7 ? 1 : 0, 
                scale: animationStep >= 7 ? 1 : 0.5 
              }}
              transition={{ delay: 7 }}
            >
              <div>Time at</div>
              <div>which impacts</div>
              <div>become</div>
              <div>unacceptable</div>
            </motion.div>

            {/* Legend Boxes */}
            <motion.div
              className="absolute bottom-6 right-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7.5 }}
            >
              <div className="flex items-center space-x-3 bg-green-100 px-3 py-2 rounded-lg text-xs font-medium border border-green-300 shadow-sm">
                <div className="w-6 h-1 bg-green-500 rounded"></div>
                <span className="text-green-800">WITH business continuity</span>
              </div>
              <div className="flex items-center space-x-3 bg-red-100 px-3 py-2 rounded-lg text-xs font-medium border border-red-300 shadow-sm">
                <div className="w-6 h-1 bg-red-500 rounded" style={{ 
                  backgroundImage: 'repeating-linear-gradient(to right, #DC2626 0, #DC2626 3px, transparent 3px, transparent 6px)' 
                }}></div>
                <span className="text-red-800">WITHOUT business continuity</span>
              </div>
            </motion.div>

            {/* Arrows */}
            <motion.div
              className="absolute"
              style={{ left: '60%', top: '16%' }}
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ 
                opacity: animationStep >= 6 ? 1 : 0, 
                scale: 1, 
                rotate: 45 
              }}
              transition={{ delay: 5.5 }}
            >
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-green-500"></div>
            </motion.div>

            <motion.div
              className="absolute"
              style={{ left: '75%', top: '40%' }}
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ 
                opacity: animationStep >= 6 ? 1 : 0, 
                scale: 1, 
                rotate: 45 
              }}
              transition={{ delay: 6 }}
            >
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-red-500"></div>
            </motion.div>

            {/* Time axis */}
            <motion.div 
              className="absolute bottom-4 right-8 flex items-center text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 8 }}
            >
              <span className="text-sm font-medium mr-2">Time</span>
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-8 space-y-2 pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8.5 }}
        >
          <p className="text-sm font-semibold text-slate-700">
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