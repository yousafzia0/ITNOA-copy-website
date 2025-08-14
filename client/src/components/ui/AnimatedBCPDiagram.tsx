import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Activity, Shield, Clock, ArrowRight, ArrowDown, CheckCircle, XCircle, TrendingUp, Play, Pause, RotateCcw } from 'lucide-react';

const AnimatedBCPDiagram: React.FC = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setAnimationStep((prev) => (prev + 1) % 8);
      }, 2500);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying]);

  const timelinePoints = [
    { label: "Warning", color: "#FFA500", icon: AlertTriangle, x: 15 },
    { label: "Incident", color: "#DC2626", icon: XCircle, x: 25 },
    { label: "Recovery time objective", color: "#F59E0B", icon: Clock, x: 45 },
    { label: "Shortened disruption", color: "#10B981", icon: TrendingUp, x: 55 },
    { label: "Work recovery time", color: "#059669", icon: CheckCircle, x: 80 }
  ];

  const phases = [
    { 
      name: "Controlled response", 
      color: "#FFA500", 
      y: 60, 
      width: 15,
      description: "Immediate response actions"
    },
    { 
      name: "Mitigating, responding to and managing impacts", 
      color: "#DC2626", 
      y: 45, 
      width: 25,
      description: "Active incident management"
    },
    { 
      name: "Minimum acceptable capacity", 
      color: "#EF4444", 
      y: 75, 
      width: 35,
      description: "Essential operations maintained"
    }
  ];

  return (
    <div 
      className="relative w-full h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Title and ISO Reference */}
      <motion.div 
        className="absolute top-6 left-6 right-6 text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Time Is Precious When An Event Occurs
        </h2>
        <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-lg">
          <Shield className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-green-800 font-semibold">ISO 22301</span>
        </div>
      </motion.div>

      {/* Main Timeline Container */}
      <div className="absolute top-24 left-8 right-8 bottom-16">
        
        {/* Capacity Line */}
        <motion.div
          className="absolute left-0 top-20 w-full h-px bg-slate-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-4">
          <motion.div 
            className="text-sm font-medium text-slate-600 -rotate-90 origin-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Capacity of operations
          </motion.div>
          <motion.div 
            className="text-sm font-medium text-slate-600 -rotate-90 origin-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Event Time Progression
          </motion.div>
        </div>

        {/* Main Chart Area */}
        <div className="ml-16 mr-8 h-full relative">
          
          {/* Timeline Points */}
          {timelinePoints.map((point, index) => (
            <motion.div
              key={point.label}
              className="absolute"
              style={{ left: `${point.x}%`, top: '50%' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: animationStep >= index ? 1 : 0.3,
                scale: animationStep >= index ? 1 : 0.8,
                y: animationStep === index ? -10 : 0
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Vertical Line */}
              <div 
                className="w-1 h-32 -translate-y-16 mx-auto mb-2"
                style={{ backgroundColor: point.color }}
              />
              
              {/* Icon */}
              <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center -translate-x-6 -translate-y-6 shadow-lg"
                style={{ backgroundColor: point.color }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <point.icon className="h-6 w-6 text-white" />
              </motion.div>
              
              {/* Label */}
              <motion.div
                className="absolute top-8 -translate-x-1/2 text-center min-w-max"
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="text-xs font-semibold px-3 py-1 rounded-lg text-white shadow-md"
                  style={{ backgroundColor: point.color }}
                >
                  {point.label}
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Recovery Curve - WITH business continuity */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <motion.path
              d="M 15% 50% Q 30% 75% 55% 55% T 85% 40%"
              stroke="#10B981"
              strokeWidth="3"
              fill="none"
              strokeDasharray="0"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </motion.svg>

          {/* Recovery Curve - WITHOUT business continuity */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <motion.path
              d="M 15% 50% Q 35% 85% 70% 75% T 90% 65%"
              stroke="#DC2626"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2 }}
            />
          </motion.svg>

          {/* Legend - WITH/WITHOUT business continuity */}
          <motion.div
            className="absolute bottom-8 right-4 space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
          >
            <div className="flex items-center space-x-2 bg-white/90 px-3 py-2 rounded-lg shadow-md">
              <div className="w-6 h-0.5 bg-green-500"></div>
              <span className="text-xs font-medium text-green-800">WITH business continuity</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 px-3 py-2 rounded-lg shadow-md">
              <div className="w-6 h-0.5 bg-red-500 border-dashed border-t-2 border-red-500"></div>
              <span className="text-xs font-medium text-red-800">WITHOUT business continuity</span>
            </div>
          </motion.div>

          {/* Key Phases Annotations */}
          {phases.map((phase, index) => (
            <motion.div
              key={phase.name}
              className="absolute"
              style={{ 
                left: `${25 + index * 15}%`, 
                top: `${phase.y}%` 
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: animationStep >= index + 3 ? 1 : 0.3,
                scale: animationStep >= index + 3 ? 1 : 0.9
              }}
              transition={{ delay: (index + 3) * 0.4 }}
            >
              <motion.div
                className="bg-white/95 rounded-lg p-3 shadow-lg border-l-4 max-w-xs"
                style={{ borderLeftColor: phase.color }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-xs font-bold mb-1" style={{ color: phase.color }}>
                  {phase.name}
                </div>
                <div className="text-xs text-slate-600">
                  {phase.description}
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Time Axis Label */}
          <motion.div
            className="absolute bottom-4 right-8 text-sm font-medium text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Time
            <ArrowRight className="inline h-4 w-4 ml-1" />
          </motion.div>

              {/* Interactive Controls */}
          <motion.div
            className="absolute top-4 right-4 flex space-x-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
          >
            <motion.button
              className={`px-4 py-2 rounded-lg shadow-lg text-sm font-medium transition-all ${
                isPlaying ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAnimationStep(0)}
            >
              Reset
            </motion.button>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            className="absolute top-16 right-4 bg-white/95 p-3 rounded-lg shadow-lg border"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Analysis Progress</span>
            </div>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                style={{ width: `${(animationStep / 7) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Step {animationStep + 1} of 8
            </div>
          </motion.div>

          {/* Enterprise Badge */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-bold">Enterprise Grade</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* Bottom Description */}
      <motion.div
        className="absolute bottom-4 left-8 right-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        <p className="text-sm text-slate-600 font-medium">
          Illustration Of Business Continuity Being Effective For Gradual Disruption
        </p>
        <p className="text-xs text-slate-500 mt-1">
          (e.g. datacenter disaster)
        </p>
        <div className="text-xs text-slate-400 mt-1 font-mono">
          PROG Internal
        </div>
      </motion.div>

      {/* Floating Particles Effect */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0.6, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default AnimatedBCPDiagram;