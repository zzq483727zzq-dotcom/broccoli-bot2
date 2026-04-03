import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';

export default function Introduction() {
  return (
    <div className="bg-[#050505] pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            硬核科技，尽在掌握
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            深入了解西兰花全地形激光除草机器人的每一个创新细节。
          </motion.p>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              标准化垄作适配 <br />
              <span className="text-agri-yellow">全地形移动底盘</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              针对西兰花种植行距 60-80cm 的作业约束，采用四轮独立悬挂系统，配备宽度可调的橡胶履带（调节范围 50-70cm）。通过形态包裹设计将功能性结构转化为简洁的形体语言，缓解现有设备在规范化作业环境下“工业感过重”的问题。
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-4xl font-light text-white mb-2">50-70<span className="text-xl text-gray-500">cm</span></div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">履带调节范围</div>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-2">IP54</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">防护等级</div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] bg-[#111] rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
              alt="Chassis" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 border border-white/10 rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* Laser System */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] bg-[#111] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" 
                alt="Laser System" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 border border-white/10 rounded-3xl"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                功能与形态融合 <br />
                <span className="text-agri-yellow">激光作业系统</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                激光除草系统集成于底盘中部，设计为可升降结构（升降行程 30-50mm）。通过优化散热风道布局，将其转化为具有韵律感的参数化格栅肌理，在紧凑结构中实现功能可视化的同时，确保激光模组的高效散热需求。
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-4xl font-light text-white mb-2">30-50<span className="text-xl text-gray-500">mm</span></div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">升降行程</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-white mb-2">95<span className="text-xl text-gray-500">%+</span></div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">识别准确率</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMF Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">CMF 设计策略</h2>
          <p className="text-gray-400">专业农机可靠性与现代科技美感的统一</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-agri-yellow rounded-full mb-6"></div>
            <h3 className="text-xl font-bold mb-4">色彩体系</h3>
            <p className="text-gray-400">
              主体采用农机黄（RAL 1023）与深灰（RAL 7043）搭配，既符合农业装备的警示性需求，又展现出工业设计的严谨感。
            </p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-zinc-700 rounded-full mb-6 flex items-center justify-center text-xs">ASA</div>
            <h3 className="text-xl font-bold mb-4">材料选择</h3>
            <p className="text-gray-400">
              应用 ASA 抗 UV 材料，确保在田间强紫外线环境下长期使用不褪色、不脆化。关键结构采用铝合金阳极氧化工艺。
            </p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full mb-6 flex items-center justify-center text-emerald-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">交互可视化</h3>
            <p className="text-gray-400">
              环形状态指示灯系统，根据西兰花生长周期切换色彩主题（苗期：蓝色；花期：橙色），实现 360 度作业状态感知。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
