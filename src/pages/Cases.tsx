import { motion } from 'framer-motion';
import { PlayCircle, MapPin, TrendingUp, Leaf } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      title: "山东寿光大型西兰花基地",
      desc: "针对 60-80cm 标准化行距设计的除草方案，替代传统人工，效率提升 500%，每亩节省成本 300 元以上。",
      image: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&q=80",
      stats: ["500%", "效率提升", "¥300+", "亩均降本"],
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "浙江台州丘陵梯田农场",
      desc: "全地形履带底盘完美适应 30° 复杂坡地，解决机械化设备难以进入的痛点，实现全区域覆盖。",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80",
      stats: ["30°", "最大爬坡", "100%", "地形适应"],
      icon: <MapPin className="w-5 h-5" />
    },
    {
      title: "江苏盐城有机生态农庄",
      desc: "纯物理激光除草技术，零化学农药残留，完美符合有机蔬菜认证标准，保护土壤微生态。",
      image: "/机器人2.png",
      stats: ["0", "农药残留", "100%", "有机达标"],
      icon: <Leaf className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-[#0a0a0a] pt-16 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-agri-yellow font-mono tracking-widest text-sm mb-4 uppercase">Success Stories</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">实际应用案例</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            从平原到丘陵，从传统到有机，见证智能激光除草技术在不同场景下的卓越表现。
          </p>
        </motion.div>

        <div className="space-y-32">
          {cases.map((c, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl border border-white/5">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
                <img src={c.image} alt={c.title} className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <div className="bg-agri-yellow p-6 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                    <PlayCircle className="w-12 h-12 text-black" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <div className="text-agri-yellow">{c.icon}</div>
                  <span className="text-xs font-bold tracking-widest uppercase">{c.title.split(' ')[0]}</span>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{c.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">{c.desc}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/10">
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-agri-yellow tracking-tighter">{c.stats[0]}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest font-mono">{c.stats[1]}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-agri-yellow tracking-tighter">{c.stats[2]}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest font-mono">{c.stats[3]}</div>
                  </div>
                </div>

                <button className="group flex items-center gap-3 text-agri-yellow font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                  查看详细报告 <div className="w-8 h-[1px] bg-agri-yellow group-hover:w-12 group-hover:bg-white transition-all"></div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
