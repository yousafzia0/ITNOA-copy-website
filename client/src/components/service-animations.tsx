// Service-Specific Animated Graphics for Professional Cybersecurity Services

// Advanced IT Audit System Monitor
export const AnimatedITAuditMonitor = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 600 400" className="w-full h-auto rounded-2xl shadow-2xl bg-gradient-to-br from-slate-50 to-slate-100">
      <defs>
        <linearGradient id="auditGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#01411c" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
        <filter id="auditGlow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      <rect width="600" height="400" fill="#f8fafc" />
      
      {/* Main Audit Console */}
      <rect x="50" y="60" width="500" height="280" fill="#1e293b" rx="12" stroke="#334155" strokeWidth="2" />
      <rect x="60" y="70" width="480" height="260" fill="#0f172a" rx="8" />
      
      {/* Console Header */}
      <rect x="70" y="80" width="460" height="30" fill="#01411c" rx="4" />
      <text x="300" y="100" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">IT Systems Audit Console</text>
      
      {/* System Health Indicators */}
      <g>
        <rect x="80" y="130" width="140" height="80" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4" />
        <text x="150" y="150" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">Database Systems</text>
        
        <circle cx="100" cy="170" r="6" fill="#10b981">
          <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="115" y="175" fill="#94a3b8" fontSize="9">Oracle: OK</text>
        
        <circle cx="100" cy="190" r="6" fill="#f59e0b">
          <animate attributeName="opacity" values="0.6; 1; 0.6" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="115" y="195" fill="#94a3b8" fontSize="9">SQL Server: Warning</text>
      </g>
      
      {/* Network Security Status */}
      <g>
        <rect x="240" y="130" width="140" height="80" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4" />
        <text x="310" y="150" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">Network Security</text>
        
        <rect x="250" y="165" width="120" height="6" fill="#374151" rx="3" />
        <rect x="250" y="165" width="85" height="6" fill="#10b981" rx="3">
          <animate attributeName="width" values="85; 95; 85" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="310" y="185" textAnchor="middle" fill="#94a3b8" fontSize="9">Firewall: 89%</text>
      </g>
      
      {/* Compliance Metrics */}
      <g>
        <rect x="400" y="130" width="120" height="80" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4" />
        <text x="460" y="150" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">Compliance</text>
        
        <circle cx="430" cy="175" r="15" fill="none" stroke="#374151" strokeWidth="3" />
        <circle cx="430" cy="175" r="15" fill="none" stroke="#10b981" strokeWidth="3" 
                strokeDasharray="75" strokeDashoffset="0">
          <animate attributeName="stroke-dashoffset" values="75; 20; 75" dur="6s" repeatCount="indefinite" />
        </circle>
        <text x="460" y="180" fill="#94a3b8" fontSize="10">SOX: 78%</text>
      </g>
      
      {/* Audit Log Stream */}
      <g>
        <rect x="80" y="230" width="440" height="80" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4" />
        <text x="300" y="250" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">Real-time Audit Log</text>
        
        <g fill="#94a3b8" fontSize="8">
          <text x="90" y="270" opacity="1">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" repeatCount="indefinite" begin="0s" />
            [11:05:12] Database access audit completed - 247 records processed
          </text>
          <text x="90" y="285" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" repeatCount="indefinite" begin="1s" />
            [11:05:15] Network security scan initiated - 0 vulnerabilities detected
          </text>
          <text x="90" y="300" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" repeatCount="indefinite" begin="2s" />
            [11:05:18] Compliance check: SOX controls verified successfully
          </text>
        </g>
      </g>
    </svg>
  </div>
);

// Network Security Infrastructure  
export const AnimatedNetworkSecurity = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 600 400" className="w-full h-auto rounded-2xl shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
      <defs>
        <linearGradient id="networkSecGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#01411c" />
        </linearGradient>
        <filter id="networkSecGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <rect width="600" height="400" fill="#f0fdfa" />
      
      {/* Central Security Hub */}
      <g transform="translate(300, 200)">
        <circle cx="0" cy="0" r="40" fill="#01411c" stroke="#10b981" strokeWidth="3" filter="url(#networkSecGlow)">
          <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="20s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="8" textAnchor="middle" fill="white" fontSize="16">🛡️</text>
        <text x="0" y="60" textAnchor="middle" fill="#01411c" fontSize="12" fontWeight="bold">Security Hub</text>
      </g>
      
      {/* Network Nodes */}
      <g fill="url(#networkSecGradient)">
        <circle cx="150" cy="100" r="25" filter="url(#networkSecGlow)">
          <animate attributeName="r" values="25; 28; 25" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="150" y="108" textAnchor="middle" fill="white" fontSize="14">🖥️</text>
        <text x="150" y="135" textAnchor="middle" fill="#01411c" fontSize="10">Workstation</text>
        
        <circle cx="450" cy="100" r="25" filter="url(#networkSecGlow)">
          <animate attributeName="r" values="25; 28; 25" dur="4s" repeatCount="indefinite" />
        </circle>
        <text x="450" y="108" textAnchor="middle" fill="white" fontSize="14">📱</text>
        <text x="450" y="135" textAnchor="middle" fill="#01411c" fontSize="10">Mobile</text>
        
        <circle cx="150" cy="300" r="25" filter="url(#networkSecGlow)">
          <animate attributeName="r" values="25; 28; 25" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="150" y="308" textAnchor="middle" fill="white" fontSize="14">🖨️</text>
        <text x="150" y="335" textAnchor="middle" fill="#01411c" fontSize="10">Printer</text>
        
        <circle cx="450" cy="300" r="25" filter="url(#networkSecGlow)">
          <animate attributeName="r" values="25; 28; 25" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <text x="450" y="308" textAnchor="middle" fill="white" fontSize="14">🌐</text>
        <text x="450" y="335" textAnchor="middle" fill="#01411c" fontSize="10">Internet</text>
      </g>
      
      {/* Secure Connection Lines */}
      <g stroke="#01411c" strokeWidth="3" fill="none">
        <line x1="175" y1="120" x2="275" y2="180">
          <animate attributeName="stroke-opacity" values="0.5; 1; 0.5" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="425" y1="120" x2="325" y2="180">
          <animate attributeName="stroke-opacity" values="0.5; 1; 0.5" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="175" y1="280" x2="275" y2="220">
          <animate attributeName="stroke-opacity" values="0.5; 1; 0.5" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="425" y1="280" x2="325" y2="220">
          <animate attributeName="stroke-opacity" values="0.5; 1; 0.5" dur="4s" repeatCount="indefinite" />
        </line>
      </g>
      
      {/* Security Scanning Animation */}
      <g>
        <circle cx="300" cy="200" r="60" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.6">
          <animate attributeName="r" values="60; 80; 60" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6; 0.2; 0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="200" r="80" fill="none" stroke="#065f46" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="80; 100; 80" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4; 0.1; 0.4" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </div>
);

// Penetration Testing Simulation
export const AnimatedPenetrationTesting = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 600 400" className="w-full h-auto rounded-2xl shadow-2xl bg-gradient-to-br from-red-50 to-orange-50">
      <defs>
        <linearGradient id="pentestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#01411c" />
        </linearGradient>
        <radialGradient id="scanPulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" opacity="0.8" />
          <stop offset="100%" stopColor="#dc2626" opacity="0.2" />
        </radialGradient>
      </defs>
      
      <rect width="600" height="400" fill="#fef2f2" />
      
      {/* Target System */}
      <g transform="translate(450, 200)">
        <rect x="-50" y="-40" width="100" height="80" fill="#1e293b" rx="8" stroke="#ef4444" strokeWidth="2">
          <animate attributeName="stroke-width" values="2; 4; 2" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="0" y="8" textAnchor="middle" fill="white" fontSize="16">🎯</text>
        <text x="0" y="60" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">Target System</text>
      </g>
      
      {/* Penetration Testing Console */}
      <g transform="translate(150, 200)">
        <rect x="-70" y="-60" width="140" height="120" fill="#0f172a" rx="8" stroke="#10b981" strokeWidth="2" />
        <rect x="-60" y="-50" width="120" height="100" fill="#1e293b" rx="4" />
        
        {/* Console Screen */}
        <rect x="-55" y="-45" width="110" height="70" fill="#000000" rx="2" />
        <g fill="#10b981" fontSize="6" fontFamily="monospace">
          <text x="-50" y="-35">$ nmap -sS target_system</text>
          <text x="-50" y="-25" opacity="1">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" repeatCount="indefinite" begin="0s" />
            Port 22/tcp open ssh
          </text>
          <text x="-50" y="-15" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" repeatCount="indefinite" begin="1s" />
            Port 80/tcp open http
          </text>
          <text x="-50" y="-5" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="4s" repeatCount="indefinite" begin="2s" />
            Vulnerability found!
          </text>
        </g>
        <text x="0" y="80" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">Pen Test Console</text>
      </g>
      
      {/* Scanning Animation */}
      <g>
        <line x1="220" y1="200" x2="400" y2="200" stroke="#ef4444" strokeWidth="3" opacity="0.8">
          <animate attributeName="stroke-dasharray" values="0,180; 40,180; 0,180" dur="2s" repeatCount="indefinite" />
        </line>
        <circle cx="310" cy="200" r="20" fill="url(#scanPulse)">
          <animate attributeName="r" values="20; 40; 20" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8; 0.2; 0.8" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Vulnerability Discovery */}
      <g>
        <circle cx="380" cy="150" r="8" fill="#ef4444">
          <animate attributeName="r" values="8; 12; 8" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6; 1; 0.6" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="380" y="135" textAnchor="middle" fill="#ef4444" fontSize="8">CVE-2023-001</text>
        
        <circle cx="420" cy="250" r="6" fill="#f59e0b">
          <animate attributeName="r" values="6; 10; 6" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6; 1; 0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="420" y="270" textAnchor="middle" fill="#f59e0b" fontSize="8">Weak Auth</text>
      </g>
      
      {/* Network Traffic Analysis */}
      <g stroke="#64748b" strokeWidth="1" fill="none" opacity="0.6">
        <path d="M100 100 Q200 80 300 120 T500 100">
          <animate attributeName="stroke-dasharray" values="0,300; 50,300; 0,300" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M100 300 Q200 320 300 280 T500 300">
          <animate attributeName="stroke-dasharray" values="0,300; 50,300; 0,300" dur="3s" repeatCount="indefinite" />
        </path>
      </g>
      
      {/* Security Analysis Results */}
      <g transform="translate(50, 50)">
        <rect x="0" y="0" width="120" height="80" fill="white" stroke="#e5e7eb" rx="4" opacity="0.9" />
        <text x="60" y="20" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="bold">Scan Results</text>
        <text x="10" y="35" fill="#ef4444" fontSize="8">🔴 Critical: 2</text>
        <text x="10" y="50" fill="#f59e0b" fontSize="8">🟡 Medium: 5</text>
        <text x="10" y="65" fill="#10b981" fontSize="8">🟢 Low: 12</text>
      </g>
    </svg>
  </div>
);

// GRC Consulting - Governance, Risk & Compliance Dashboard
export const AnimatedGRCDashboard = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 600 400" className="w-full h-auto rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
      <defs>
        <linearGradient id="grcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#01411c" />
        </linearGradient>
        <filter id="grcGlow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      <rect width="600" height="400" fill="#f8fafc" />
      
      {/* Main GRC Dashboard */}
      <rect x="40" y="40" width="520" height="320" fill="white" rx="12" stroke="#e2e8f0" strokeWidth="2" filter="url(#grcGlow)" />
      
      {/* Dashboard Header */}
      <rect x="50" y="50" width="500" height="40" fill="url(#grcGradient)" rx="6" />
      <text x="300" y="75" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">GRC Management Dashboard</text>
      
      {/* Governance Section */}
      <g transform="translate(70, 110)">
        <rect x="0" y="0" width="140" height="90" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="6" />
        <text x="70" y="20" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Governance</text>
        
        <circle cx="35" cy="45" r="12" fill="#10b981">
          <animate attributeName="opacity" values="0.6; 1; 0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="70" y="50" fill="#374151" fontSize="10">Policy Reviews: 92%</text>
        
        <rect x="20" y="60" width="100" height="8" fill="#e5e7eb" rx="4" />
        <rect x="20" y="60" width="78" height="8" fill="#10b981" rx="4">
          <animate attributeName="width" values="78; 85; 78" dur="4s" repeatCount="indefinite" />
        </rect>
        <text x="70" y="80" textAnchor="middle" fill="#374151" fontSize="9">Framework Maturity</text>
      </g>
      
      {/* Risk Management Section */}
      <g transform="translate(230, 110)">
        <rect x="0" y="0" width="140" height="90" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="6" />
        <text x="70" y="20" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Risk Management</text>
        
        <circle cx="30" cy="40" r="8" fill="#ef4444">
          <animate attributeName="r" values="8; 10; 8" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="45" y="35" fill="#374151" fontSize="8">High: 3</text>
        
        <circle cx="30" cy="55" r="8" fill="#f59e0b">
          <animate attributeName="r" values="8; 10; 8" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="45" y="50" fill="#374151" fontSize="8">Med: 12</text>
        
        <circle cx="30" cy="70" r="8" fill="#10b981">
          <animate attributeName="r" values="8; 10; 8" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="45" y="65" fill="#374151" fontSize="8">Low: 25</text>
      </g>
      
      {/* Compliance Section */}
      <g transform="translate(390, 110)">
        <rect x="0" y="0" width="140" height="90" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="6" />
        <text x="70" y="20" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Compliance</text>
        
        <circle cx="70" cy="50" r="20" fill="none" stroke="#e5e7eb" strokeWidth="4" />
        <circle cx="70" cy="50" r="20" fill="none" stroke="#10b981" strokeWidth="4" 
                strokeDasharray="95" strokeDashoffset="0">
          <animate attributeName="stroke-dashoffset" values="95; 15; 95" dur="6s" repeatCount="indefinite" />
        </circle>
        <text x="70" y="55" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="bold">87%</text>
        <text x="70" y="80" textAnchor="middle" fill="#374151" fontSize="9">Overall Score</text>
      </g>
      
      {/* Real-time Monitoring */}
      <g transform="translate(70, 220)">
        <rect x="0" y="0" width="460" height="100" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="6" />
        <text x="230" y="20" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Real-time Compliance Monitoring</text>
        
        <g fill="#64748b" fontSize="9">
          <text x="10" y="40" opacity="1">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="5s" repeatCount="indefinite" begin="0s" />
            [14:25:12] Policy update: Information Security Framework v2.1 approved
          </text>
          <text x="10" y="55" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="5s" repeatCount="indefinite" begin="1.5s" />
            [14:25:35] Risk assessment: Third-party vendor evaluation completed
          </text>
          <text x="10" y="70" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="5s" repeatCount="indefinite" begin="3s" />
            [14:25:48] Compliance check: SOX controls verification passed
          </text>
        </g>
      </g>
    </svg>
  </div>
);

// SOX Auditing - Financial Controls Monitor
export const AnimatedSOXAuditing = () => (
  <div className="w-full h-auto">
    <svg viewBox="0 0 600 400" className="w-full h-auto rounded-2xl shadow-2xl bg-gradient-to-br from-purple-50 to-violet-50">
      <defs>
        <linearGradient id="soxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#01411c" />
        </linearGradient>
        <filter id="soxGlow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      <rect width="600" height="400" fill="#faf5ff" />
      
      {/* Main SOX Control Dashboard */}
      <rect x="30" y="30" width="540" height="340" fill="white" rx="12" stroke="#e5e7eb" strokeWidth="2" filter="url(#soxGlow)" />
      
      {/* Dashboard Header */}
      <rect x="40" y="40" width="520" height="35" fill="url(#soxGradient)" rx="6" />
      <text x="300" y="62" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">SOX Compliance Control Center</text>
      
      {/* IT General Controls */}
      <g transform="translate(50, 90)">
        <rect x="0" y="0" width="240" height="120" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="8" />
        <text x="120" y="20" textAnchor="middle" fill="#374151" fontSize="13" fontWeight="bold">IT General Controls</text>
        
        <g transform="translate(15, 35)">
          <rect x="0" y="0" width="80" height="30" fill="#10b981" rx="4" opacity="0.9">
            <animate attributeName="opacity" values="0.9; 1; 0.9" dur="3s" repeatCount="indefinite" />
          </rect>
          <text x="40" y="12" textAnchor="middle" fill="white" fontSize="8">Access Control</text>
          <text x="40" y="22" textAnchor="middle" fill="white" fontSize="8">✓ Compliant</text>
        </g>
        
        <g transform="translate(105, 35)">
          <rect x="0" y="0" width="80" height="30" fill="#f59e0b" rx="4" opacity="0.9">
            <animate attributeName="opacity" values="0.9; 1; 0.9" dur="2.5s" repeatCount="indefinite" />
          </rect>
          <text x="40" y="12" textAnchor="middle" fill="white" fontSize="8">Change Mgmt</text>
          <text x="40" y="22" textAnchor="middle" fill="white" fontSize="8">⚠ Review</text>
        </g>
      </g>
      
      {/* Financial Controls */}
      <g transform="translate(310, 90)">
        <rect x="0" y="0" width="240" height="120" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="8" />
        <text x="120" y="20" textAnchor="middle" fill="#374151" fontSize="13" fontWeight="bold">Financial Controls</text>
        
        <circle cx="50" cy="50" r="8" fill="#10b981">
          <animate attributeName="opacity" values="0.6; 1; 0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="65" y="45" fill="#374151" fontSize="9">Revenue Recognition</text>
        <text x="65" y="55" fill="#10b981" fontSize="8">95% Effective</text>
      </g>
      
      {/* Audit Trail */}
      <g transform="translate(50, 230)">
        <rect x="0" y="0" width="500" height="100" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="8" />
        <text x="250" y="20" textAnchor="middle" fill="#374151" fontSize="13" fontWeight="bold">SOX Control Testing</text>
        
        <g fill="#64748b" fontSize="9">
          <text x="15" y="40" opacity="1">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="6s" repeatCount="indefinite" begin="0s" />
            [09:15:22] SOX Control 3.1.1: User access review completed - 247 accounts validated
          </text>
          <text x="15" y="55" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="6s" repeatCount="indefinite" begin="2s" />
            [09:15:45] SOX Control 2.2.3: Change management process tested - 12 changes approved
          </text>
          <text x="15" y="70" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" dur="6s" repeatCount="indefinite" begin="4s" />
            [09:16:08] SOX Control 1.4.2: Financial close procedures validated successfully
          </text>
        </g>
      </g>
      
      {/* Compliance Status */}
      <g transform="translate(460, 340)">
        <rect x="0" y="0" width="80" height="25" fill="#10b981" rx="4" opacity="0.9">
          <animate attributeName="opacity" values="0.9; 1; 0.9" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="40" y="12" textAnchor="middle" fill="white" fontSize="10">94% SOX</text>
        <text x="40" y="22" textAnchor="middle" fill="white" fontSize="8">Compliant</text>
      </g>
    </svg>
  </div>
);