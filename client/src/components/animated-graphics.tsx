// Animated SVG Graphics Components for Professional Cybersecurity Theme

// Animated Person Working on Laptop (Hero Section)
export const AnimatedPersonLaptop = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 800 600" className="w-full h-auto rounded-2xl shadow-2xl">
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#01411c" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="800" height="600" fill="url(#bgGradient)" />
      
      {/* Desk */}
      <rect x="50" y="450" width="700" height="20" fill="#8b5cf6" rx="10" />
      
      {/* Laptop Base */}
      <rect x="300" y="350" width="200" height="120" fill="#374151" rx="8" />
      
      {/* Laptop Screen */}
      <rect x="320" y="250" width="160" height="110" fill="#1f2937" rx="5" />
      <rect x="330" y="260" width="140" height="90" fill="url(#screenGradient)" rx="3" />
      
      {/* Screen Content - Animated Code Lines */}
      <g className="animate-pulse">
        <rect x="340" y="275" width="120" height="3" fill="#10b981" opacity="0.8">
          <animate attributeName="width" values="120;80;120" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="340" y="285" width="100" height="3" fill="#34d399" opacity="0.6">
          <animate attributeName="width" values="100;120;100" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="340" y="295" width="90" height="3" fill="#6ee7b7" opacity="0.7">
          <animate attributeName="width" values="90;110;90" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="340" y="305" width="110" height="3" fill="#a7f3d0" opacity="0.5">
          <animate attributeName="width" values="110;70;110" dur="3.5s" repeatCount="indefinite" />
        </rect>
      </g>
      
      {/* Person Silhouette */}
      <g transform="translate(150, 180)">
        {/* Head */}
        <circle cx="50" cy="50" r="30" fill="#475569" />
        
        {/* Body */}
        <rect x="30" y="80" width="40" height="60" fill="#64748b" rx="5" />
        
        {/* Arms */}
        <rect x="10" y="90" width="20" height="40" fill="#64748b" rx="3">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 20 110; 5 20 110; 0 20 110" 
            dur="4s" 
            repeatCount="indefinite" 
          />
        </rect>
        <rect x="70" y="90" width="20" height="40" fill="#64748b" rx="3">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 80 110; -5 80 110; 0 80 110" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </rect>
        
        {/* Hands */}
        <circle cx="20" cy="135" r="5" fill="#475569">
          <animate attributeName="cy" values="135; 130; 135" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="135" r="5" fill="#475569">
          <animate attributeName="cy" values="135; 132; 135" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Floating Security Icons */}
      <g opacity="0.3">
        <circle cx="100" cy="100" r="15" fill="#01411c">
          <animate attributeName="cy" values="100; 90; 100" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3; 0.6; 0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="100" y="105" textAnchor="middle" fill="white" fontSize="12">🔒</text>
        
        <circle cx="650" cy="150" r="20" fill="#065f46">
          <animate attributeName="cy" values="150; 140; 150" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3; 0.7; 0.3" dur="4s" repeatCount="indefinite" />
        </circle>
        <text x="650" y="157" textAnchor="middle" fill="white" fontSize="16">🛡️</text>
        
        <circle cx="700" cy="250" r="12" fill="#047857">
          <animate attributeName="cy" values="250; 245; 250" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3; 0.5; 0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="700" y="255" textAnchor="middle" fill="white" fontSize="10">🔐</text>
      </g>
    </svg>
  </div>
);

// Animated Analytics Graph
export const AnimatedAnalyticsGraph = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 400 300" className="w-full h-auto rounded-2xl shadow-2xl">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#01411c" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
        <linearGradient id="chartBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="url(#chartBg)" />
      
      {/* Chart Area */}
      <rect x="50" y="50" width="300" height="200" fill="white" stroke="#e5e7eb" strokeWidth="1" rx="8" />
      
      {/* Grid Lines */}
      <g stroke="#f3f4f6" strokeWidth="1">
        <line x1="50" y1="90" x2="350" y2="90" />
        <line x1="50" y1="130" x2="350" y2="130" />
        <line x1="50" y1="170" x2="350" y2="170" />
        <line x1="50" y1="210" x2="350" y2="210" />
        
        <line x1="100" y1="50" x2="100" y2="250" />
        <line x1="150" y1="50" x2="150" y2="250" />
        <line x1="200" y1="50" x2="200" y2="250" />
        <line x1="250" y1="50" x2="250" y2="250" />
        <line x1="300" y1="50" x2="300" y2="250" />
      </g>
      
      {/* Animated Bars */}
      <g fill="url(#chartGradient)">
        <rect x="80" y="180" width="20" height="70" rx="2">
          <animate attributeName="height" values="70; 90; 70" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y" values="180; 160; 180" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="130" y="140" width="20" height="110" rx="2">
          <animate attributeName="height" values="110; 130; 110" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y" values="140; 120; 140" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="180" y="100" width="20" height="150" rx="2">
          <animate attributeName="height" values="150; 170; 150" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="100; 80; 100" dur="3.5s" repeatCount="indefinite" />
        </rect>
        <rect x="230" y="120" width="20" height="130" rx="2">
          <animate attributeName="height" values="130; 150; 130" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="y" values="120; 100; 120" dur="2.8s" repeatCount="indefinite" />
        </rect>
        <rect x="280" y="90" width="20" height="160" rx="2">
          <animate attributeName="height" values="160; 180; 160" dur="4.2s" repeatCount="indefinite" />
          <animate attributeName="y" values="90; 70; 90" dur="4.2s" repeatCount="indefinite" />
        </rect>
      </g>
      
      {/* Animated Line Chart */}
      <polyline 
        fill="none" 
        stroke="#dc2626" 
        strokeWidth="3" 
        points="75,200 125,160 175,120 225,140 275,100 325,110"
      >
        <animate 
          attributeName="points" 
          values="75,200 125,160 175,120 225,140 275,100 325,110;
                  75,190 125,150 175,110 225,130 275,90 325,100;
                  75,200 125,160 175,120 225,140 275,100 325,110" 
          dur="5s" 
          repeatCount="indefinite" 
        />
      </polyline>
      
      {/* Animated Data Points */}
      <g fill="#dc2626">
        <circle cx="75" cy="200" r="4">
          <animate attributeName="cy" values="200; 190; 200" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="125" cy="160" r="4">
          <animate attributeName="cy" values="160; 150; 160" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="175" cy="120" r="4">
          <animate attributeName="cy" values="120; 110; 120" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="225" cy="140" r="4">
          <animate attributeName="cy" values="140; 130; 140" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="275" cy="100" r="4">
          <animate attributeName="cy" values="100; 90; 100" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="325" cy="110" r="4">
          <animate attributeName="cy" values="110; 100; 110" dur="5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Title */}
      <text x="200" y="30" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="bold">Security Analytics</text>
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