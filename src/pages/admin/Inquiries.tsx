import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Check, Trash2, X, Phone, Mail, Building, FileText } from 'lucide-react';
import { getInquiries, updateInquiry, deleteInquiry, Inquiry } from '../../utils/storage';

export default function Inquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  useEffect(() => {
    setInquiries(getInquiries());
  }, []);

  const handleMarkProcessed = (id: string) => {
    updateInquiry(id, { status: 'processed' });
    setInquiries(getInquiries());
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这条咨询记录吗？')) {
      deleteInquiry(id);
      setInquiries(getInquiries());
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getAcreageLabel = (value: string) => {
    const map: Record<string, string> = {
      '<100': '100亩以下',
      '100-500': '100-500亩',
      '500-1000': '500-1000亩',
      '>1000': '1000亩以上',
    };
    return map[value] || value || '-';
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold">咨询管理</h1>
          <p className="text-gray-400">查看和处理客户的咨询请求</p>
        </div>

        {inquiries.length === 0 ? (
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-12 text-center">
            <p className="text-gray-500">暂无咨询记录</p>
          </div>
        ) : (
          <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">姓名</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">电话</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">种植规模</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">时间</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">状态</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-400">操作</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">{inquiry.name}</td>
                    <td className="px-6 py-4 text-gray-400">{inquiry.phone}</td>
                    <td className="px-6 py-4 text-gray-400">{getAcreageLabel(inquiry.acreage)}</td>
                    <td className="px-6 py-4 text-gray-400">{formatDate(inquiry.createdAt)}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs rounded-full ${
                          inquiry.status === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}
                      >
                        {inquiry.status === 'pending' ? '待处理' : '已处理'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedInquiry(inquiry)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-agri-yellow"
                          title="查看详情"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {inquiry.status === 'pending' && (
                          <button
                            onClick={() => handleMarkProcessed(inquiry.id)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-green-400"
                            title="标记已处理"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(inquiry.id)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-red-400"
                          title="删除"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-lg"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold">咨询详情</h2>
              <button onClick={() => setSelectedInquiry(null)} className="p-2 hover:bg-white/10 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-agri-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">{selectedInquiry.name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-lg">{selectedInquiry.name}</p>
                  <span
                    className={`inline-block px-2 py-0.5 text-xs rounded-full ${
                      selectedInquiry.status === 'pending'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {selectedInquiry.status === 'pending' ? '待处理' : '已处理'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl">
                  <Phone className="w-5 h-5 text-agri-yellow" />
                  <div>
                    <p className="text-xs text-gray-500">联系电话</p>
                    <p className="font-medium">{selectedInquiry.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl">
                  <Mail className="w-5 h-5 text-agri-yellow" />
                  <div>
                    <p className="text-xs text-gray-500">电子邮箱</p>
                    <p className="font-medium">{selectedInquiry.email || '-'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl">
                  <Building className="w-5 h-5 text-agri-yellow" />
                  <div>
                    <p className="text-xs text-gray-500">公司/农场</p>
                    <p className="font-medium">{selectedInquiry.company || '-'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl">
                  <FileText className="w-5 h-5 text-agri-yellow" />
                  <div>
                    <p className="text-xs text-gray-500">种植规模</p>
                    <p className="font-medium">{getAcreageLabel(selectedInquiry.acreage)}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-xl">
                <p className="text-xs text-gray-500 mb-2">咨询内容</p>
                <p className="whitespace-pre-wrap">{selectedInquiry.message}</p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-gray-500">提交时间：{formatDate(selectedInquiry.createdAt)}</p>
                {selectedInquiry.status === 'pending' && (
                  <button
                    onClick={() => {
                      handleMarkProcessed(selectedInquiry.id);
                      setSelectedInquiry(null);
                    }}
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    标记已处理
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}