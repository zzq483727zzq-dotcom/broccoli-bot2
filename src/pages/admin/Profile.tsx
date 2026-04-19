import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Check, AlertCircle } from 'lucide-react';
import { getAdminProfile, setAdminPassword } from '../../utils/storage';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const profile = getAdminProfile();
    setUsername(profile.username);
  }, []);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const profile = getAdminProfile();

    if (currentPassword !== profile.password) {
      setMessage({ type: 'error', text: '原密码错误' });
      return;
    }

    if (newPassword.length < 6) {
      setMessage({ type: 'error', text: '新密码长度至少6位' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: '两次输入的密码不一致' });
      return;
    }

    setAdminPassword(newPassword);
    setMessage({ type: 'success', text: '密码修改成功！' });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold">个人信息</h1>
          <p className="text-gray-400">管理您的账户信息</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Account Info */}
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-agri-yellow/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-agri-yellow" />
              </div>
              <div>
                <p className="text-xl font-bold">{username}</p>
                <p className="text-gray-400 text-sm">管理员</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl">
                <span className="text-gray-400">用户名</span>
                <span className="font-medium">{username}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl">
                <span className="text-gray-400">账户类型</span>
                <span className="font-medium text-agri-yellow">管理员</span>
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-agri-yellow/20 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-agri-yellow" />
              </div>
              <div>
                <p className="font-bold">修改密码</p>
                <p className="text-gray-400 text-sm">定期更换密码以保护账户安全</p>
              </div>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">原密码</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                  placeholder="请输入原密码"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">新密码</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                  placeholder="请输入新密码（至少6位）"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">确认新密码</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                  placeholder="请再次输入新密码"
                  required
                />
              </div>

              {message && (
                <div
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm ${
                    message.type === 'success'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {message.type === 'success' ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-agri-yellow text-black py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors"
              >
                修改密码
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}