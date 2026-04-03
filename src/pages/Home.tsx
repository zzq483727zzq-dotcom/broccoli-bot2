import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-agri-yellow font-mono tracking-widest text-sm md:text-base mb-4 uppercase">
              面向标准化种植的西兰花全地形激光除草机器人
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter">
              BROCCOLI-BOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-yellow to-yellow-600">PRO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-wide">
              设计者：杨志硕 · 指导教师：杨雪 · 202208540109
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/introduction" className="bg-agri-yellow text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                了解更多 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid - DJI Style */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心技术突破</h2>
            <p className="text-gray-400">针对西兰花标准化垄作模式（行距 60-80cm）深度定制</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="rounded-2xl relative overflow-hidden group h-[400px]"
            >
              <img
                src="/机器人3.jpg"
                alt="高能激光作业系统"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <Zap className="w-8 h-8 text-agri-yellow mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-white">高能激光作业系统</h3>
                <p className="text-gray-300 max-w-sm">
                  集成于底盘中部，可升降结构（30-50mm），内置多组激光模组，毫米级精准除草。
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="rounded-2xl relative overflow-hidden group h-[400px]"
            >
              <img
                src="/标准化垄作适配.png"
                alt="全地形底盘适配"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <Target className="w-8 h-8 text-agri-yellow mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-white">全地形底盘适配</h3>
                <p className="text-gray-300 max-w-sm">
                  四轮独立悬挂，配备宽度可调橡胶履带（50-70cm），完美适配西兰花垄间作业。
                </p>
              </div>
            </motion.div>

            {/* Feature 3 - Full width */}
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 rounded-2xl relative overflow-hidden group h-[450px]"
            >
              <img
                src="/冷光暖光.png"
                alt="可视化状态反馈"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 z-10 text-center">
                <ShieldCheck className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">可视化状态反馈</h3>
                <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                  基于作物生长周期的灯光信号系统：苗期蓝色冷光，花期橙色暖光警示，作业状态一目了然。
                </p>
                <Link to="/introduction" className="inline-flex items-center gap-2 mt-6 text-agri-yellow hover:text-yellow-400 transition-colors">
                  探索设计细节 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
