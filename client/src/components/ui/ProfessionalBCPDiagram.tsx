import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalBCPDiagram: React.FC = () => {
  return (
    <motion.div 
      className="w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Professional BCP Diagram Container */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-xl shadow-2xl border border-slate-200/50 overflow-hidden">
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-green-600/10"></div>
        </div>
        
        {/* Main BCP Image */}
        <div className="relative p-4 md:p-8">
          <motion.img
            src="/attached_assets/BCP_1755252446625.PNG"
            alt="Business Continuity Planning - Time Is Precious When An Event Occurs (ISO 22301)"
            className="w-full h-auto rounded-lg shadow-lg border border-slate-100"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
              mixBlendMode: 'multiply'
            }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          {/* Professional overlay enhancement */}
          <div className="absolute inset-4 md:inset-8 rounded-lg bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none"></div>
        </div>
        
        {/* Professional footer with enhanced styling */}
        <motion.div
          className="relative px-4 md:px-8 pb-4 md:pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="text-center space-y-2 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-slate-100">
            <p className="text-sm md:text-base font-semibold text-slate-700">
              Professional Business Continuity Framework
            </p>
            <p className="text-xs md:text-sm text-slate-600">
              Comprehensive illustration demonstrating effective business continuity planning for gradual disruption scenarios
            </p>
            <div className="flex items-center justify-center space-x-4 text-xs text-slate-500">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">ISO 22301 Compliant</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">IIA Standards</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded font-medium">PROG Internal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfessionalBCPDiagram;