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
      <div className="relative bg-gradient-to-br from-slate-50/80 via-white to-blue-50/20 rounded-xl shadow-xl border border-slate-200/30 overflow-hidden backdrop-blur-sm">
        
        {/* Main BCP Image */}
        <div className="relative p-6 md:p-8">
          <motion.img
            src="/attached_assets/BCP_1755253039715.PNG"
            alt="Business Continuity Planning - Time Is Precious When An Event Occurs (ISO 22301)"
            className="w-full h-auto rounded-lg shadow-lg"
            style={{
              filter: 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.1))',
              backgroundColor: 'rgba(255, 255, 255, 0.9)'
            }}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalBCPDiagram;