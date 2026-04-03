import { motion } from 'framer-motion';
import { FileText, Download, BarChart3, Cpu, Globe, Target, ShieldCheck, Microscope } from 'lucide-react';

export default function Research() {
  return (
    <div className="bg-[#0a0a0a] pt-16 min-h-screen text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-agri-yellow font-mono tracking-widest text-sm mb-4 uppercase">Research & Development</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">研究与调研</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            基于山东省西兰花产业规模化发展的迫切需求，深入探索智能激光除草技术在标准化种植环境下的应用。
          </p>
        </motion.div>

        {/* Research Background Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="space-y-8">
            <div className="border-l-2 border-agri-yellow pl-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-agri-yellow" /> 选题依据
              </h3>
              <p className="text-gray-400 leading-relaxed">
                山东省西兰花种植面积达 12.8 万亩，年出口额超 2 亿美元。然而，传统除草方式成本高达 300-500 元/亩，占生产成本的 35%-40%。人工效率低，化学除草导致农残超标，传统机械伤根率高。市场急需针对 60-80cm 标准化行距的专用智能装备。
              </p>
            </div>
            <div className="border-l-2 border-agri-yellow pl-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Microscope className="w-6 h-6 text-agri-yellow" /> 国内外现状
              </h3>
              <p className="text-gray-400 leading-relaxed">
                国外如 Carbon Robotics 已实现毫米级精准除草商用。国内华工科技、蔚蓝引擎等企业在视觉识别准确率（95%+）和全地形底盘适配（最小转弯半径 0.8m）方面取得重大突破。本项目立足于国产化适配与形态语义创新。
              </p>
            </div>
          </div>
          <div className="bg-zinc-900/50 rounded-3xl p-8 border border-white/10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BarChart3 className="w-32 h-32" />
            </div>
            <h4 className="text-agri-yellow font-mono text-xs mb-4 uppercase tracking-widest">Market Data</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-gray-500 text-sm">种植面积 (山东)</span>
                <span className="text-2xl font-bold">12.8万亩</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-gray-500 text-sm">传统除草成本</span>
                <span className="text-2xl font-bold text-red-400">¥300-500/亩</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-gray-500 text-sm">预期回收周期</span>
                <span className="text-2xl font-bold text-emerald-400">1.5-2年</span>
              </div>
            </div>
          </div>
        </div>

        {/* Breakthroughs - Technical Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">核心研究突破点</h2>
            <p className="text-gray-400">突破传统农业装备“功能先行、形态包裹”的设计局限</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 group hover:border-agri-yellow/50 transition-all">
              <div className="w-12 h-12 bg-agri-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-agri-yellow/20 transition-colors">
                <Target className="w-6 h-6 text-agri-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-4">形态适配设计</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                针对 60-80cm 行距约束，创新设计基于视觉识别的底盘形态语言，使功能组件成为形态特征的一部分，缓解“工业感过重”问题。
              </p>
            </div>
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 group hover:border-agri-yellow/50 transition-all">
              <div className="w-12 h-12 bg-agri-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-agri-yellow/20 transition-colors">
                <Cpu className="w-6 h-6 text-agri-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-4">语义融合设计</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                将激光系统的散热需求转化为具有韵律感的参数化格栅肌理，在紧凑结构中实现功能可视化的同时，确保模组高效散热。
              </p>
            </div>
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 group hover:border-agri-yellow/50 transition-all">
              <div className="w-12 h-12 bg-agri-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-agri-yellow/20 transition-colors">
                <ShieldCheck className="w-6 h-6 text-agri-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-4">状态可视化</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                设计差异化灯光信号系统，根据作业模式（苗期蓝色、花期橙色）切换主题，使操作者远距离即可判断设备工作状态。
              </p>
            </div>
          </div>
        </div>

        {/* Thesis Outline - List Style */}
        <div className="bg-zinc-900/30 rounded-3xl p-8 md:p-12 border border-white/10 mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FileText className="w-6 h-6 text-agri-yellow" /> 论文提纲概览
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {[
              "一、 绪论：背景、目标与研究框架",
              "二、 种植模式与除草装备设计基础",
              "三、 设计方案构建与深化：CMF策略",
              "四、 设计实践与方案实现：建模渲染",
              "五、 设计验证与评价：1:5模型测试",
              "六、 结论与展望：模块化设计启示"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5">
                <span className="text-agri-yellow font-mono text-xs">0{i+1}</span>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div className="bg-agri-yellow rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between text-black">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">项目成果下载</h2>
            <p className="text-black/70 max-w-xl">
              包含完整的开题报告、系统架构设计、CMF 设计手册及 1:5 比例模型制作记录。
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-xl">
              <Download className="w-5 h-5" /> 下载开题报告
            </button>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-xl">
              <Download className="w-5 h-5" /> 下载答辩 PPT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
