import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Shield, DollarSign, Users, Target } from 'lucide-react';

const EnterpriseMetrics: React.FC = () => {
  const metrics = [
    {
      icon: Clock,
      value: "99.9%",
      label: "Uptime Guarantee",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Recovery Speed Improvement",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      value: "$2.3M",
      label: "Average Downtime Cost Saved",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      value: "24/7",
      label: "Continuous Monitoring",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      value: "500+",
      label: "Enterprise Clients",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Target,
      value: "< 15min",
      label: "Average RTO",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg p-4 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${metric.color}`}>
              <metric.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">{metric.value}</div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EnterpriseMetrics;