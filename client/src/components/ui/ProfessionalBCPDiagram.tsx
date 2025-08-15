import React from 'react';

const ProfessionalBCPDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-xl shadow-xl border border-slate-200/40 p-6 md:p-8">
        <img
          src="/attached_assets/BCP_1755253039715.PNG"
          alt="Business Continuity Planning Diagram - Time Is Precious When An Event Occurs"
          className="w-full h-auto rounded-lg shadow-lg"
          style={{
            filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.08))',
            backgroundColor: 'white'
          }}
        />
      </div>
    </div>
  );
};

export default ProfessionalBCPDiagram;