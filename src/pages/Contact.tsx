import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { addInquiry } from '../utils/storage';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    acreage: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry(formData);
    alert('感谢您的咨询！我们的销售团队将在24小时内与您联系。');
    setFormData({ name: '', phone: '', email: '', company: '', acreage: '', message: '' });
  };

  return (
    <div className="bg-[#0a0a0a] text-white pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-agri-yellow/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-agri-yellow font-mono tracking-widest text-sm mb-4 uppercase">Contact Us</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">获取专业咨询</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              无论是产品选购、技术咨询还是定制方案，我们的专家团队随时为您提供一对一服务
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-agri-yellow rounded-full" />
              联系方式
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-agri-yellow/30 transition-colors">
                <div className="w-12 h-12 bg-agri-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-agri-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">咨询热线</h4>
                  <p className="text-gray-400">400-888-9527</p>
                  <p className="text-sm text-gray-500 mt-1">工作日 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-agri-yellow/30 transition-colors">
                <div className="w-12 h-12 bg-agri-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-agri-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">商务微信</h4>
                  <p className="text-gray-400">agri_tech_service</p>
                  <p className="text-sm text-gray-500 mt-1">扫码添加专属顾问</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-agri-yellow/30 transition-colors">
                <div className="w-12 h-12 bg-agri-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-agri-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">电子邮箱</h4>
                  <p className="text-gray-400">sales@broccoli-bot.com</p>
                  <p className="text-sm text-gray-500 mt-1">24小时内回复</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-agri-yellow/30 transition-colors">
                <div className="w-12 h-12 bg-agri-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-agri-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">公司地址</h4>
                  <p className="text-gray-400">北京市海淀区中关村科技园区</p>
                  <p className="text-sm text-gray-500 mt-1">智慧农业产业基地 A座 5层</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-agri-yellow/30 transition-colors">
                <div className="w-12 h-12 bg-agri-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-agri-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">服务时间</h4>
                  <p className="text-gray-400">周一至周六：9:00 - 20:00</p>
                  <p className="text-gray-400">周日：10:00 - 18:00</p>
                  <p className="text-sm text-agri-yellow mt-1">节假日正常值班</p>
                </div>
              </div>
            </div>

            {/* Sales Team */}
            <div className="mt-8 p-6 bg-gradient-to-br from-agri-yellow/20 to-agri-yellow/5 rounded-2xl border border-agri-yellow/30">
              <h4 className="font-semibold mb-4 text-agri-yellow">专属销售顾问</h4>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-agri-yellow/20 rounded-full flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div>
                  <p className="font-medium">张经理</p>
                  <p className="text-sm text-gray-400">农业智能化解决方案专家</p>
                  <p className="text-sm text-agri-yellow">从业12年，服务超过500家农场</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-agri-yellow rounded-full" />
              在线咨询
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">您的姓名 *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl focus:border-agri-yellow focus:ring-1 focus:ring-agri-yellow outline-none transition-colors"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">联系电话 *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl focus:border-agri-yellow focus:ring-1 focus:ring-agri-yellow outline-none transition-colors"
                    placeholder="请输入手机号码"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">电子邮箱</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl focus:border-agri-yellow focus:ring-1 focus:ring-agri-yellow outline-none transition-colors"
                    placeholder="选填，用于发送资料"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">种植规模</label>
                  <select
                    value={formData.acreage}
                    onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl focus:border-agri-yellow focus:ring-1 focus:ring-agri-yellow outline-none transition-colors"
                  >
                    <option value="">请选择</option>
                    <option value="<100">100亩以下</option>
                    <option value="100-500">100-500亩</option>
                    <option value="500-1000">500-1000亩</option>
                    <option value=">1000">1000亩以上</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">公司/农场名称</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl focus:border-agri-yellow focus:ring-1 focus:ring-agri-yellow outline-none transition-colors"
                  placeholder="选填，公司或农场名称"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">咨询内容 *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl focus:border-agri-yellow focus:ring-1 focus:ring-agri-yellow outline-none transition-colors resize-none"
                  placeholder="请描述您的需求，如：采购意向、作业场景、技术问题等"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-agri-yellow text-black py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                提交咨询
              </button>

              <p className="text-xs text-gray-500 text-center">
                提交即表示您同意我们的隐私政策。我们将保护您的个人信息安全。
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-agri-yellow rounded-full" />
            来访地址
          </h3>
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-agri-yellow mx-auto mb-4" />
                <p className="text-xl font-semibold">北京市海淀区中关村科技园区</p>
                <p className="text-gray-400 mt-2">智慧农业产业基地 A座 5层</p>
                <p className="text-sm text-gray-500 mt-4">地铁4号线中关村站A口出，步行800米</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
