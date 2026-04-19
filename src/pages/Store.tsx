import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, Zap, Shield, Cpu } from 'lucide-react';

export default function Store() {
  return (
    <div className="bg-[#0a0a0a] text-white pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-agri-yellow font-mono tracking-widest text-sm mb-4 uppercase">Product Lineup</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">选择您的作业型号</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            针对不同规模的标准化西兰花种植基地，提供全方位的智能除草解决方案。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Model */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/5 hover:border-agri-yellow/30 transition-all flex flex-col group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Standard 标准版</h3>
              <p className="text-gray-500 text-sm">适合 100 亩以下中小型农场</p>
            </div>
            <div className="text-4xl font-bold mb-8 text-agri-yellow">¥ 49,999</div>
            <div className="relative h-48 mb-8 rounded-2xl overflow-hidden bg-zinc-800">
              <img
                src="/hero-bg.png"
                alt="Standard"
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-agri-yellow" /> 基础全地形底盘 (4x4)</li>
              <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-agri-yellow" /> 50W 脉冲激光模组</li>
              <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-agri-yellow" /> 标准视觉识别系统</li>
              <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-agri-yellow" /> 4小时续航 (ASA 材质外壳)</li>
            </ul>
            <Link to="/contact">
              <button className="w-full bg-white text-black py-4 rounded-full font-bold hover:bg-agri-yellow transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> 立即预订
              </button>
            </Link>
          </div>

          {/* Pro Model */}
          <div className="bg-zinc-900 rounded-3xl p-8 border-2 border-agri-yellow shadow-[0_0_40px_rgba(255,215,0,0.1)] transform md:-translate-y-4 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-agri-yellow text-black text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
              Recommended
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Pro 专业版</h3>
              <p className="text-gray-400 text-sm">适合 500 亩左右大型基地</p>
            </div>
            <div className="text-4xl font-bold mb-8 text-agri-yellow">¥ 89,999</div>
            <div className="relative h-48 mb-8 rounded-2xl overflow-hidden bg-zinc-800">
              <img
                src="/机器人3.jpg"
                alt="Pro"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm text-gray-200"><Zap className="w-5 h-5 text-agri-yellow" /> 增强型独立悬挂底盘</li>
              <li className="flex items-center gap-3 text-sm text-gray-200"><Zap className="w-5 h-5 text-agri-yellow" /> 100W 极速激光模组</li>
              <li className="flex items-center gap-3 text-sm text-gray-200"><Zap className="w-5 h-5 text-agri-yellow" /> 夜视增强 AI 视觉系统</li>
              <li className="flex items-center gap-3 text-sm text-gray-200"><Zap className="w-5 h-5 text-agri-yellow" /> 8小时长续航 (ASA+碳纤维)</li>
              <li className="flex items-center gap-3 text-sm text-gray-200"><Zap className="w-5 h-5 text-agri-yellow" /> RTK 厘米级定位基站</li>
            </ul>
            <Link to="/contact">
              <button className="w-full bg-agri-yellow text-black py-4 rounded-full font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> 立即预订
              </button>
            </Link>
          </div>

          {/* Enterprise Model */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/5 hover:border-agri-yellow/30 transition-all flex flex-col group">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Fleet 集群版</h3>
              <p className="text-gray-500 text-sm">适合超大型农业合作社</p>
            </div>
            <div className="text-4xl font-bold mb-8 text-agri-yellow">定制报价</div>
            <div className="relative h-48 mb-8 rounded-2xl overflow-hidden bg-zinc-800">
              <img 
                src="/冷光暖光.png"
                alt="Enterprise" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm text-gray-300"><Shield className="w-5 h-5 text-agri-yellow" /> 包含 3 台 Pro 版主机</li>
              <li className="flex items-center gap-3 text-sm text-gray-300"><Shield className="w-5 h-5 text-agri-yellow" /> 多机协同调度系统 (Swarm)</li>
              <li className="flex items-center gap-3 text-sm text-gray-300"><Shield className="w-5 h-5 text-agri-yellow" /> 自动充电/散热维护舱</li>
              <li className="flex items-center gap-3 text-sm text-gray-300"><Shield className="w-5 h-5 text-agri-yellow" /> 3年企业级维保服务</li>
            </ul>
            <Link to="/contact">
              <button className="w-full bg-transparent border border-white/30 text-white py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Cpu className="w-5 h-5" /> 联系销售
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
