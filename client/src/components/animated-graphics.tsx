// Professional Animated Graphics for Cybersecurity Website

// Executive Digital Security Dashboard (Hero Section)
export const AnimatedCyberSecurityDashboard = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 800 600" className="w-full h-auto rounded-2xl shadow-2xl bg-gradient-to-br from-slate-50 to-slate-100">
      <defs>
        <linearGradient id="dashboardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#01411c" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
        <filter id="professionalGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="threatGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" opacity="0.8" />
          <stop offset="100%" stopColor="#dc2626" opacity="0.4" />
        </radialGradient>
      </defs>
      
      {/* Background */}
      <rect width="800" height="600" fill="url(#dashboardBg)" />
      
      {/* Main Dashboard Screen */}
      <rect x="100" y="80" width="600" height="400" fill="#1e293b" rx="12" stroke="#334155" strokeWidth="2" />
      <rect x="110" y="90" width="580" height="380" fill="#0f172a" rx="8" />
      
      {/* Dashboard Header */}
      <rect x="120" y="100" width="560" height="40" fill="#01411c" rx="4" />
      <text x="400" y="125" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Security Operations Center</text>
      
      {/* Threat Detection Panel */}
      <g>
        <rect x="130" y="160" width="180" height="120" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="6" />
        <text x="220" y="180" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">Threat Detection</text>
        
        {/* Animated Threat Indicators */}
        <circle cx="160" cy="200" r="8" fill="#10b981">
          <animate attributeName="opacity" values="0.3; 1; 0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="180" y="205" fill="#10b981" fontSize="10">Secured: 247</text>
        
        <circle cx="160" cy="220" r="8" fill="#f59e0b">
          <animate attributeName="opacity" values="0.5; 1; 0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="180" y="225" fill="#f59e0b" fontSize="10">Monitoring: 15</text>
        
        <circle cx="160" cy="240" r="8" fill="#ef4444">
          <animate attributeName="opacity" values="0.7; 1; 0.7" dur="1s" repeatCount="indefinite" />
        </circle>
        <text x="180" y="245" fill="#ef4444" fontSize="10">Threats: 3</text>
      </g>
      
      {/* Network Activity Graph */}
      <g>
        <rect x="330" y="160" width="200" height="120" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="6" />
        <text x="430" y="180" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">Network Activity</text>
        
        {/* Animated Network Lines */}
        <polyline 
          fill="none" 
          stroke="#01411c" 
          strokeWidth="2" 
          points="340,250 360,230 380,240 400,220 420,235 440,225 460,240 480,220 500,230 520,245"
        >
          <animate 
            attributeName="points" 
            values="340,250 360,230 380,240 400,220 420,235 440,225 460,240 480,220 500,230 520,245;
                    340,245 360,225 380,235 400,215 420,230 440,220 460,235 480,215 500,225 520,240;
                    340,250 360,230 380,240 400,220 420,235 440,225 460,240 480,220 500,230 520,245" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </polyline>
      </g>
      
      {/* System Status */}
      <g>
        <rect x="550" y="160" width="140" height="120" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="6" />
        <text x="620" y="180" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">System Status</text>
        
        {/* Status Indicators */}
        <rect x="560" y="190" width="120" height="8" fill="#374151" rx="4" />
        <rect x="560" y="190" width="90" height="8" fill="#10b981" rx="4">
          <animate attributeName="width" values="90; 100; 90" dur="4s" repeatCount="indefinite" />
        </rect>
        <text x="620" y="210" textAnchor="middle" fill="#94a3b8" fontSize="9">CPU: 78%</text>
        
        <rect x="560" y="220" width="120" height="8" fill="#374151" rx="4" />
        <rect x="560" y="220" width="70" height="8" fill="#06b6d4" rx="4">
          <animate attributeName="width" values="70; 85; 70" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="620" y="240" textAnchor="middle" fill="#94a3b8" fontSize="9">Memory: 62%</text>
        
        <rect x="560" y="250" width="120" height="8" fill="#374151" rx="4" />
        <rect x="560" y="250" width="50" height="8" fill="#8b5cf6" rx="4">
          <animate attributeName="width" values="50; 65; 50" dur="5s" repeatCount="indefinite" />
        </rect>
        <text x="620" y="270" textAnchor="middle" fill="#94a3b8" fontSize="9">Network: 45%</text>
      </g>
      
      {/* Security Analytics */}
      <g>
        <rect x="130" y="300" width="400" height="150" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="6" />
        <text x="330" y="320" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">Real-time Security Analytics</text>
        
        {/* Animated Bar Chart */}
        <rect x="150" y="380" width="25" height="50" fill="#10b981" opacity="0.8">
          <animate attributeName="height" values="50; 70; 50" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y" values="380; 360; 380" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="185" y="370" width="25" height="60" fill="#06b6d4" opacity="0.8">
          <animate attributeName="height" values="60; 80; 60" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y" values="370; 350; 370" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="220" y="360" width="25" height="70" fill="#8b5cf6" opacity="0.8">
          <animate attributeName="height" values="70; 90; 70" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="360; 340; 360" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="255" y="375" width="25" height="55" fill="#f59e0b" opacity="0.8">
          <animate attributeName="height" values="55; 75; 55" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="375; 355; 375" dur="3.5s" repeatCount="indefinite" />
        </rect>
      </g>
      
      {/* Floating Security Elements */}
      <g opacity="0.4">
        <circle cx="650" cy="120" r="12" fill="#01411c">
          <animate attributeName="cy" values="120; 110; 120" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4; 0.8; 0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="80" cy="300" r="8" fill="#065f46">
          <animate attributeName="cy" values="300; 290; 300" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4; 0.7; 0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="720" cy="400" r="10" fill="#047857">
          <animate attributeName="cy" values="400; 390; 400" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4; 0.6; 0.4" dur="5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </div>
);

// Professional Business Intelligence Dashboard
export const AnimatedBusinessIntelligence = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 500 400" className="w-full h-auto rounded-2xl shadow-2xl bg-gradient-to-br from-slate-50 to-slate-100">
      <defs>
        <linearGradient id="biGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#01411c" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
        <linearGradient id="biBackground" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <filter id="biShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1"/>
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="500" height="400" fill="url(#biBackground)" />
      
      {/* Main Dashboard Panel */}
      <rect x="30" y="40" width="440" height="320" fill="white" stroke="#e2e8f0" strokeWidth="1" rx="12" filter="url(#biShadow)" />
      
      {/* Header */}
      <rect x="40" y="50" width="420" height="40" fill="#01411c" rx="8" />
      <text x="250" y="75" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Business Continuity Analytics</text>
      
      {/* KPI Cards */}
      <g>
        <rect x="50" y="110" width="90" height="60" fill="#f8fafc" stroke="#e2e8f0" rx="6" />
        <text x="95" y="130" textAnchor="middle" fill="#64748b" fontSize="10">Recovery Time</text>
        <text x="95" y="150" textAnchor="middle" fill="#01411c" fontSize="20" fontWeight="bold">
          <animate attributeName="opacity" values="1; 0.7; 1" dur="3s" repeatCount="indefinite" />2.3h
        </text>
        
        <rect x="150" y="110" width="90" height="60" fill="#f8fafc" stroke="#e2e8f0" rx="6" />
        <text x="195" y="130" textAnchor="middle" fill="#64748b" fontSize="10">Uptime</text>
        <text x="195" y="150" textAnchor="middle" fill="#10b981" fontSize="20" fontWeight="bold">
          <animate attributeName="opacity" values="1; 0.7; 1" dur="2s" repeatCount="indefinite" />99.9%
        </text>
        
        <rect x="250" y="110" width="90" height="60" fill="#f8fafc" stroke="#e2e8f0" rx="6" />
        <text x="295" y="130" textAnchor="middle" fill="#64748b" fontSize="10">Risk Score</text>
        <text x="295" y="150" textAnchor="middle" fill="#f59e0b" fontSize="20" fontWeight="bold">
          <animate attributeName="opacity" values="1; 0.7; 1" dur="4s" repeatCount="indefinite" />Low
        </text>
        
        <rect x="350" y="110" width="90" height="60" fill="#f8fafc" stroke="#e2e8f0" rx="6" />
        <text x="395" y="130" textAnchor="middle" fill="#64748b" fontSize="10">Incidents</text>
        <text x="395" y="150" textAnchor="middle" fill="#ef4444" fontSize="20" fontWeight="bold">
          <animate attributeName="opacity" values="1; 0.7; 1" dur="2.5s" repeatCount="indefinite" />0
        </text>
      </g>
      
      {/* Performance Chart */}
      <g>
        <rect x="50" y="190" width="190" height="140" fill="#f8fafc" stroke="#e2e8f0" rx="6" />
        <text x="145" y="210" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">System Performance</text>
        
        {/* Animated Performance Bars */}
        <rect x="70" y="280" width="20" height="40" fill="url(#biGradient)">
          <animate attributeName="height" values="40; 60; 40" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y" values="280; 260; 280" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="100" y="270" width="20" height="50" fill="url(#biGradient)">
          <animate attributeName="height" values="50; 70; 50" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y" values="270; 250; 270" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="130" y="260" width="20" height="60" fill="url(#biGradient)">
          <animate attributeName="height" values="60; 80; 60" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="260; 240; 260" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="160" y="275" width="20" height="45" fill="url(#biGradient)">
          <animate attributeName="height" values="45; 65; 45" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="275; 255; 275" dur="3.5s" repeatCount="indefinite" />
        </rect>
        <rect x="190" y="265" width="20" height="55" fill="url(#biGradient)">
          <animate attributeName="height" values="55; 75; 55" dur="4.2s" repeatCount="indefinite" />
          <animate attributeName="y" values="265; 245; 265" dur="4.2s" repeatCount="indefinite" />
        </rect>
      </g>
      
      {/* Trend Analysis */}
      <g>
        <rect x="260" y="190" width="190" height="140" fill="#f8fafc" stroke="#e2e8f0" rx="6" />
        <text x="355" y="210" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Security Trends</text>
        
        {/* Animated Trend Line */}
        <polyline 
          fill="none" 
          stroke="#01411c" 
          strokeWidth="3" 
          points="280,300 300,280 320,290 340,270 360,275 380,260 400,265 420,250"
        >
          <animate 
            attributeName="points" 
            values="280,300 300,280 320,290 340,270 360,275 380,260 400,265 420,250;
                    280,295 300,275 320,285 340,265 360,270 380,255 400,260 420,245;
                    280,300 300,280 320,290 340,270 360,275 380,260 400,265 420,250" 
            dur="6s" 
            repeatCount="indefinite" 
          />
        </polyline>
        
        {/* Data Points */}
        <circle cx="280" cy="300" r="3" fill="#01411c">
          <animate attributeName="cy" values="300; 295; 300" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="270" r="3" fill="#01411c">
          <animate attributeName="cy" values="270; 265; 270" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="265" r="3" fill="#01411c">
          <animate attributeName="cy" values="265; 260; 265" dur="6s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </div>
);

// Animated Security Shield Network
export const AnimatedSecurityNetwork = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 500 400" className="w-full h-auto rounded-2xl shadow-2xl">
      <defs>
        <linearGradient id="networkBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0fdf4" />
          <stop offset="100%" stopColor="#dcfce7" />
        </linearGradient>
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
        <filter id="pulse">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="500" height="400" fill="url(#networkBg)" />
      
      {/* Connection Lines */}
      <g stroke="#01411c" strokeWidth="2" opacity="0.6">
        <line x1="250" y1="200" x2="150" y2="100">
          <animate attributeName="stroke-opacity" values="0.6; 1; 0.6" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="250" y1="200" x2="350" y2="100">
          <animate attributeName="stroke-opacity" values="0.6; 1; 0.6" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="250" y1="200" x2="100" y2="300">
          <animate attributeName="stroke-opacity" values="0.6; 1; 0.6" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="250" y1="200" x2="400" y2="300">
          <animate attributeName="stroke-opacity" values="0.6; 1; 0.6" dur="3.5s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="100" x2="350" y2="100">
          <animate attributeName="stroke-opacity" values="0.6; 1; 0.6" dur="5s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="300" x2="400" y2="300">
          <animate attributeName="stroke-opacity" values="0.6; 1; 0.6" dur="4.5s" repeatCount="indefinite" />
        </line>
      </g>
      
      {/* Central Shield */}
      <g transform="translate(250, 200)">
        <path d="M-20,-30 L0,-40 L20,-30 L20,10 Q20,20 0,30 Q-20,20 -20,10 Z" fill="#01411c" filter="url(#pulse)">
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1; 1.1; 1" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </path>
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="20">🛡️</text>
      </g>
      
      {/* Security Nodes */}
      <g fill="url(#nodeGradient)">
        <circle cx="150" cy="100" r="20" filter="url(#pulse)">
          <animate attributeName="r" values="20; 25; 20" dur="4s" repeatCount="indefinite" />
        </circle>
        <text x="150" y="107" textAnchor="middle" fill="white" fontSize="12">🔒</text>
        
        <circle cx="350" cy="100" r="20" filter="url(#pulse)">
          <animate attributeName="r" values="20; 25; 20" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="350" y="107" textAnchor="middle" fill="white" fontSize="12">🔐</text>
        
        <circle cx="100" cy="300" r="20" filter="url(#pulse)">
          <animate attributeName="r" values="20; 25; 20" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <text x="100" y="307" textAnchor="middle" fill="white" fontSize="12">🔑</text>
        
        <circle cx="400" cy="300" r="20" filter="url(#pulse)">
          <animate attributeName="r" values="20; 25; 20" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <text x="400" y="307" textAnchor="middle" fill="white" fontSize="12">🛠️</text>
      </g>
      
      {/* Floating Security Particles */}
      <g opacity="0.4">
        <circle cx="80" cy="80" r="3" fill="#10b981">
          <animate attributeName="cy" values="80; 60; 80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4; 0.8; 0.4" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="420" cy="120" r="4" fill="#059669">
          <animate attributeName="cy" values="120; 100; 120" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4; 0.7; 0.4" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="250" r="2" fill="#047857">
          <animate attributeName="cy" values="250; 240; 250" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4; 0.6; 0.4" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </div>
);

// Animated Server Monitoring
export const AnimatedServerMonitoring = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 600 400" className="w-full h-auto rounded-2xl shadow-2xl">
      <defs>
        <linearGradient id="serverBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fafafa" />
          <stop offset="100%" stopColor="#f4f4f5" />
        </linearGradient>
        <linearGradient id="serverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="600" height="400" fill="url(#serverBg)" />
      
      {/* Server Rack */}
      <g transform="translate(100, 50)">
        {/* Server Unit 1 */}
        <rect x="0" y="0" width="180" height="60" fill="url(#serverGradient)" rx="4" />
        <rect x="10" y="10" width="15" height="8" fill="#10b981" rx="2">
          <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="30" y="10" width="15" height="8" fill="#10b981" rx="2">
          <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="50" y="10" width="15" height="8" fill="#f59e0b" rx="2">
          <animate attributeName="opacity" values="0.7; 1; 0.7" dur="3s" repeatCount="indefinite" />
        </rect>
        
        {/* Server Unit 2 */}
        <rect x="0" y="80" width="180" height="60" fill="url(#serverGradient)" rx="4" />
        <rect x="10" y="90" width="15" height="8" fill="#10b981" rx="2">
          <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="30" y="90" width="15" height="8" fill="#10b981" rx="2">
          <animate attributeName="opacity" values="0.5; 1; 0.5" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <rect x="50" y="90" width="15" height="8" fill="#10b981" rx="2">
          <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2.8s" repeatCount="indefinite" />
        </rect>
        
        {/* Server Unit 3 */}
        <rect x="0" y="160" width="180" height="60" fill="url(#serverGradient)" rx="4" />
        <rect x="10" y="170" width="15" height="8" fill="#ef4444" rx="2">
          <animate attributeName="opacity" values="0.8; 1; 0.8" dur="1.5s" repeatCount="indefinite" />
        </rect>
        <rect x="30" y="170" width="15" height="8" fill="#10b981" rx="2">
          <animate attributeName="opacity" values="0.5; 1; 0.5" dur="3.2s" repeatCount="indefinite" />
        </rect>
        <rect x="50" y="170" width="15" height="8" fill="#10b981" rx="2">
          <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2.6s" repeatCount="indefinite" />
        </rect>
      </g>
      
      {/* Monitoring Dashboard */}
      <g transform="translate(320, 80)">
        <rect x="0" y="0" width="250" height="180" fill="white" stroke="#e5e7eb" strokeWidth="2" rx="8" />
        
        {/* CPU Usage Bar */}
        <text x="20" y="30" fill="#374151" fontSize="12" fontWeight="bold">CPU Usage</text>
        <rect x="20" y="40" width="200" height="12" fill="#f3f4f6" rx="6" />
        <rect x="20" y="40" width="120" height="12" fill="#01411c" rx="6">
          <animate attributeName="width" values="120; 160; 120" dur="4s" repeatCount="indefinite" />
        </rect>
        
        {/* Memory Usage Bar */}
        <text x="20" y="75" fill="#374151" fontSize="12" fontWeight="bold">Memory</text>
        <rect x="20" y="85" width="200" height="12" fill="#f3f4f6" rx="6" />
        <rect x="20" y="85" width="80" height="12" fill="#059669" rx="6">
          <animate attributeName="width" values="80; 100; 80" dur="3s" repeatCount="indefinite" />
        </rect>
        
        {/* Network Usage Bar */}
        <text x="20" y="120" fill="#374151" fontSize="12" fontWeight="bold">Network</text>
        <rect x="20" y="130" width="200" height="12" fill="#f3f4f6" rx="6" />
        <rect x="20" y="130" width="60" height="12" fill="#0891b2" rx="6">
          <animate attributeName="width" values="60; 140; 60" dur="5s" repeatCount="indefinite" />
        </rect>
        
        {/* Status Indicators */}
        <circle cx="200" cy="160" r="6" fill="#10b981">
          <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="180" y="165" fill="#374151" fontSize="10">Online</text>
      </g>
      
      {/* Data Flow Animation */}
      <g stroke="#01411c" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M280 120 Q300 100 320 120">
          <animate attributeName="stroke-dasharray" values="0,100; 20,100; 0,100" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M280 160 Q300 140 320 160">
          <animate attributeName="stroke-dasharray" values="0,100; 20,100; 0,100" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M280 200 Q300 180 320 200">
          <animate attributeName="stroke-dasharray" values="0,100; 20,100; 0,100" dur="3s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  </div>
);

// Animated Cloud Security
export const AnimatedCloudSecurity = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 500 350" className="w-full h-auto rounded-2xl shadow-2xl">
      <defs>
        <linearGradient id="cloudBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#b3e5fc" />
        </linearGradient>
        <radialGradient id="cloudGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </radialGradient>
        <filter id="cloudShadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="500" height="350" fill="url(#cloudBg)" />
      
      {/* Main Cloud */}
      <g transform="translate(250, 180)" filter="url(#cloudShadow)">
        <ellipse cx="-30" cy="0" rx="40" ry="30" fill="url(#cloudGradient)">
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1; 1.05; 1" 
            dur="4s" 
            repeatCount="indefinite" 
          />
        </ellipse>
        <ellipse cx="0" cy="-10" rx="50" ry="40" fill="url(#cloudGradient)">
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1; 1.03; 1" 
            dur="3.5s" 
            repeatCount="indefinite" 
          />
        </ellipse>
        <ellipse cx="30" cy="0" rx="35" ry="25" fill="url(#cloudGradient)">
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1; 1.06; 1" 
            dur="4.5s" 
            repeatCount="indefinite" 
          />
        </ellipse>
        
        {/* Shield in cloud */}
        <path d="M-5,-20 L0,-25 L5,-20 L5,0 Q5,5 0,10 Q-5,5 -5,0 Z" fill="#01411c">
          <animate attributeName="opacity" values="0.8; 1; 0.8" dur="3s" repeatCount="indefinite" />
        </path>
        <text x="0" y="-5" textAnchor="middle" fill="white" fontSize="8">🔒</text>
      </g>
      
      {/* Secondary Clouds */}
      <g opacity="0.7">
        <ellipse cx="100" cy="100" rx="30" ry="20" fill="url(#cloudGradient)">
          <animate attributeName="cx" values="100; 120; 100" dur="8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="400" cy="120" rx="35" ry="25" fill="url(#cloudGradient)">
          <animate attributeName="cx" values="400; 380; 400" dur="7s" repeatCount="indefinite" />
        </ellipse>
      </g>
      
      {/* Security Connections */}
      <g stroke="#01411c" strokeWidth="2" fill="none">
        <path d="M150 250 Q200 230 250 250">
          <animate 
            attributeName="stroke-dasharray" 
            values="0,100; 30,100; 0,100" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </path>
        <path d="M350 250 Q300 230 250 250">
          <animate 
            attributeName="stroke-dasharray" 
            values="0,100; 30,100; 0,100" 
            dur="3.5s" 
            repeatCount="indefinite" 
          />
        </path>
      </g>
      
      {/* Connected Devices */}
      <g fill="#374151">
        <rect x="120" y="260" width="60" height="40" rx="5">
          <animate attributeName="opacity" values="0.8; 1; 0.8" dur="4s" repeatCount="indefinite" />
        </rect>
        <text x="150" y="283" textAnchor="middle" fill="white" fontSize="12">💻</text>
        
        <rect x="320" y="260" width="60" height="40" rx="5">
          <animate attributeName="opacity" values="0.8; 1; 0.8" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="350" y="283" textAnchor="middle" fill="white" fontSize="12">📱</text>
      </g>
      
      {/* Security Particles */}
      <g opacity="0.6">
        <circle cx="80" cy="80" r="3" fill="#10b981">
          <animate attributeName="cy" values="80; 60; 80" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="420" cy="90" r="2" fill="#0891b2">
          <animate attributeName="cy" values="90; 70; 90" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="200" r="2.5" fill="#059669">
          <animate attributeName="cy" values="200; 180; 200" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </div>
);