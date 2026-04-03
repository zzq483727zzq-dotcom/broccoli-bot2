import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Eye, Layers } from 'lucide-react';
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

      {/* ==================== 新增模块（优先展示） ==================== */}

      {/* 设计细节模块 */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* 图片区域 */}
            <div className="relative group">
              <div className="relative h-[600px] rounded-3xl overflow-hidden bg-[#111] border border-white/5 shadow-2xl">
                <img
                  src="/设计细节.png"
                  alt="设计细节"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                {/* 角标 */}
                <div className="absolute top-6 left-6 bg-agri-yellow/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Eye className="w-4 h-4 text-black" />
                  <span className="text-xs font-bold text-black uppercase tracking-wider">设计细节</span>
                </div>
              </div>
            </div>

            {/* 文字区域 */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-agri-yellow/10 px-4 py-2 rounded-full border border-agri-yellow/20">
                <Layers className="w-5 h-5 text-agri-yellow" />
                <span className="text-sm text-agri-yellow font-medium uppercase tracking-wider">Design Details</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                精工细作 <br />
                <span className="text-agri-yellow">每一处细节都经过深思熟虑</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                从散热格栅的参数化设计到状态指示灯的环形布局，每一个设计决策都服务于功能需求与用户体验的统一。模块化的结构设计便于维护升级，人性化的交互界面降低操作门槛。
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                <div className="bg-zinc-900/30 p-6 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold text-agri-yellow mb-2">模块化</div>
                  <p className="text-sm text-gray-500">便于维护升级的结构设计</p>
                </div>
                <div className="bg-zinc-900/30 p-6 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold text-agri-yellow mb-2">人机工学</div>
                  <p className="text-sm text-gray-500">降低操作门槛的交互界面</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 产品特写模块 */}
      <section className="py-24 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* 文字区域 - 左侧 */}
            <div className="space-y-8 lg:order-1">
              <div className="inline-flex items-center gap-3 bg-agri-yellow/10 px-4 py-2 rounded-full border border-agri-yellow/20">
                <Eye className="w-5 h-5 text-agri-yellow" />
                <span className="text-sm text-agri-yellow font-medium uppercase tracking-wider">Product Close-up</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                特写镜头 <br />
                <span className="text-agri-yellow">见证科技与设计的完美融合</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                高精度激光模组的微观视角，展现工业级组件的精密制造工艺。ASA 材质外壳在强光下的质感表现，铝合金阳极氧化件的金属光泽，每一处材质选择都经过严格测试。
              </p>

              <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-300 border border-white/5">
                  精密制造工艺
                </div>
                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-300 border border-white/5">
                  ASA 抗 UV 材质
                </div>
                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-300 border border-white/5">
                  铝合金阳极氧化
                </div>
                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-gray-300 border border-white/5">
                  高精度激光模组
                </div>
              </div>
            </div>

            {/* 图片区域 - 右侧 */}
            <div className="relative group lg:order-2">
              <div className="relative h-[600px] rounded-3xl overflow-hidden bg-[#111] border border-white/5 shadow-2xl">
                <img
                  src="/产品特写.png"
                  alt="产品特写"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-[#111]"></div>
                {/* 角标 */}
                <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-agri-yellow/20">
                  <Cpu className="w-4 h-4 text-agri-yellow" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">精密工艺</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 产品爆炸图模块 */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-agri-yellow/10 px-4 py-2 rounded-full border border-agri-yellow/20 mb-6">
              <Layers className="w-5 h-5 text-agri-yellow" />
              <span className="text-sm text-agri-yellow font-medium uppercase tracking-wider">Exploded View</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              产品爆炸图 <br />
              <span className="text-agri-yellow">透视每一层的精密结构</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              直观展示机器人各模块的空间布局与装配关系，从外壳到核心组件，层层剖析工业设计的精妙之处。
            </p>
          </motion.div>

          {/* 大图展示 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="relative h-[700px] rounded-3xl overflow-hidden bg-[#111] border border-white/5 shadow-[0_0_60px_rgba(247,181,0,0.1)]">
              <img
                src="/产品爆炸图.png"
                alt="产品爆炸图"
                className="w-full h-full object-contain p-8 group-hover:scale-102 transition-transform duration-500"
              />
              {/* 边框光效 */}
              <div className="absolute inset-0 rounded-3xl border-2 border-agri-yellow/10"></div>

              {/* 底部标注 */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050505] to-transparent h-32 flex items-end justify-center pb-8">
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-zinc-900/80 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/10">激光模组</span>
                  <span className="bg-zinc-900/80 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/10">视觉系统</span>
                  <span className="bg-zinc-900/80 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/10">升降机构</span>
                  <span className="bg-zinc-900/80 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/10">履带底盘</span>
                  <span className="bg-zinc-900/80 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/10">控制系统</span>
                  <span className="bg-zinc-900/80 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/10">外壳组件</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 底部说明卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900/30 p-6 rounded-xl border border-white/5"
            >
              <h3 className="text-lg font-bold mb-2 text-agri-yellow">模块化架构</h3>
              <p className="text-sm text-gray-400">各功能模块独立封装，便于快速拆装维护，降低售后维修成本。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/30 p-6 rounded-xl border border-white/5"
            >
              <h3 className="text-lg font-bold mb-2 text-agri-yellow">精密装配</h3>
              <p className="text-sm text-gray-400">工业级公差控制，确保长期田间作业的稳定性与可靠性。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-900/30 p-6 rounded-xl border border-white/5"
            >
              <h3 className="text-lg font-bold mb-2 text-agri-yellow">智能集成</h3>
              <p className="text-sm text-gray-400">视觉识别、激光控制、底盘驱动三大系统高度协同。</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== 原有模块 ==================== */}

      {/* Specs Section - 全地形底盘 */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              标准化垄作适配 <br />
              <span className="text-agri-yellow">全地形移动底盘</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              针对西兰花种植行距 60-80cm 的作业约束，采用四轮独立悬挂系统，配备宽度可调的橡胶履带（调节范围 50-70cm）。通过形态包裹设计将功能性结构转化为简洁的形体语言，缓解现有设备在规范化作业环境下"工业感过重"的问题。
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
              src="/标准化垄作适配.png"
              alt="标准化垄作适配"
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
                src="/功能与形态.png"
                alt="激光作业系统"
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
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">交互可视化</h3>
            <p className="text-gray-400">
              环形状态指示灯系统，根据西兰花生长周期切换色彩主题（苗期：蓝色；花期：橙色），实现 360 度作业状态感知。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#050505] to-zinc-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">想要了解更多技术参数？</h2>
            <p className="text-gray-400 mb-8">查看详细研究报告，获取完整的性能数据与技术指标。</p>
            <a
              href="/research"
              className="inline-flex items-center gap-3 bg-agri-yellow text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-colors"
            >
              查看研究报告 <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}