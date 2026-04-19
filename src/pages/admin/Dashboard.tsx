import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, MessageSquare, ArrowRight } from 'lucide-react';
import { getProducts, getInquiries } from '../../utils/storage';

export default function Dashboard() {
  const products = getProducts();
  const inquiries = getInquiries();
  const pendingInquiries = inquiries.filter(i => i.status === 'pending').length;
  const recentInquiries = inquiries.slice(0, 3);
  const adminName = localStorage.getItem('adminUsername') || 'Admin';

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('zh-CN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">欢迎回来，{adminName}</h1>
        <p className="text-gray-400 mb-8">这是您的管理后台概览</p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link
            to="/admin/products"
            className="bg-zinc-900 border border-white/10 rounded-2xl p-6 hover:border-agri-yellow/30 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 mb-2">商品数量</p>
                <p className="text-4xl font-bold text-agri-yellow">{products.length}</p>
              </div>
              <Package className="w-12 h-12 text-agri-yellow/30 group-hover:text-agri-yellow transition-colors" />
            </div>
          </Link>

          <Link
            to="/admin/inquiries"
            className="bg-zinc-900 border border-white/10 rounded-2xl p-6 hover:border-agri-yellow/30 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 mb-2">待处理咨询</p>
                <p className="text-4xl font-bold text-agri-yellow">{pendingInquiries}</p>
              </div>
              <MessageSquare className="w-12 h-12 text-agri-yellow/30 group-hover:text-agri-yellow transition-colors" />
            </div>
          </Link>
        </div>

        {/* Recent Inquiries */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">最近咨询</h2>
            <Link
              to="/admin/inquiries"
              className="flex items-center gap-2 text-agri-yellow hover:text-yellow-400 transition-colors"
            >
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {recentInquiries.length === 0 ? (
            <p className="text-gray-500 text-center py-8">暂无咨询记录</p>
          ) : (
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl"
                >
                  <div>
                    <p className="font-medium">{inquiry.name}</p>
                    <p className="text-sm text-gray-400">{inquiry.phone}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{formatDate(inquiry.createdAt)}</p>
                    <span
                      className={`inline-block px-2 py-0.5 text-xs rounded-full ${
                        inquiry.status === 'pending'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-green-500/20 text-green-400'
                      }`}
                    >
                      {inquiry.status === 'pending' ? '待处理' : '已处理'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}