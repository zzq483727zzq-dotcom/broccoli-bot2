import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, AlertCircle, Shield, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { isLoggedIn, getAdminProfile, setLoggedIn } from '../utils/storage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // 如果已登录，跳转到后台
  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // 模拟登录验证
    await new Promise(resolve => setTimeout(resolve, 1000));

    const profile = getAdminProfile();
    if (username === profile.username && password === profile.password) {
      setLoggedIn(true);
      localStorage.setItem('adminUsername', username);
      navigate('/admin');
    } else {
      setError('用户名或密码错误，请重试');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 bg-agri-yellow rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-xl">B</span>
            </div>
            <span className="text-white text-xl font-bold tracking-tight">BROCCOLI-BOT</span>
          </Link>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-agri-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-agri-yellow" />
            </div>
            <h1 className="text-2xl font-bold mb-2">管理员登录</h1>
            <p className="text-gray-400 text-sm">请输入管理员账号信息</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">用户名</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-zinc-800/50 border border-white/10 rounded-xl focus:border-agri-yellow focus:ring-1 focus:ring-agri-yellow outline-none transition-colors"
                  placeholder="请输入用户名"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">密码</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 bg-zinc-800/50 border border-white/10 rounded-xl focus:border-agri-yellow focus:ring-1 focus:ring-agri-yellow outline-none transition-colors"
                  placeholder="请输入密码"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl text-sm"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-agri-yellow text-black py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                  />
                  登录中...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  登录
                </>
              )}
            </button>
          </form>

          {/* Default Credentials Hint */}
          <div className="mt-6 p-4 bg-agri-yellow/10 rounded-xl border border-agri-yellow/20">
            <p className="text-sm text-gray-400 mb-2">默认管理员账号：</p>
            <p className="text-sm font-mono text-agri-yellow">admin / admin123</p>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-agri-yellow transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </motion.div>
      </div>
    </div>
  );
}