import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Check, AlertCircle, Globe, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { getAdminProfile, setAdminPassword, getSiteSettings, setSiteSettings, SiteSettings } from '../../utils/storage';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // 网站设置
  const [settings, setSettings] = useState<SiteSettings>(getSiteSettings());
  const [settingsMessage, setSettingsMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSiteSettings(settings);
    setSettingsMessage({ type: 'success', text: '网站联系方式已保存！' });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold">个人信息</h1>
          <p className="text-gray-400">管理您的账户信息和网站联系方式</p>
        </div>

        <div className="space-y-8">
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

          {/* Site Settings */}
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-agri-yellow/20 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-agri-yellow" />
              </div>
              <div>
                <p className="font-bold">网站联系方式</p>
                <p className="text-gray-400 text-sm">修改联系页面显示的信息</p>
              </div>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-6">
              {/* Row 1: Phone & Wechat */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 text-agri-yellow" /> 咨询热线
                  </label>
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="400-888-9527"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 text-agri-yellow" /> 咨询热线备注
                  </label>
                  <input
                    type="text"
                    value={settings.phoneNote}
                    onChange={(e) => setSettings({ ...settings, phoneNote: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="工作日 9:00-18:00"
                  />
                </div>
              </div>

              {/* Row 2: Wechat */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <MessageCircle className="w-4 h-4 text-agri-yellow" /> 商务微信
                  </label>
                  <input
                    type="text"
                    value={settings.wechat}
                    onChange={(e) => setSettings({ ...settings, wechat: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="agri_tech_service"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <MessageCircle className="w-4 h-4 text-agri-yellow" /> 微信备注
                  </label>
                  <input
                    type="text"
                    value={settings.wechatNote}
                    onChange={(e) => setSettings({ ...settings, wechatNote: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="扫码添加专属顾问"
                  />
                </div>
              </div>

              {/* Row 3: Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 text-agri-yellow" /> 电子邮箱
                  </label>
                  <input
                    type="text"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="sales@broccoli-bot.com"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 text-agri-yellow" /> 邮箱备注
                  </label>
                  <input
                    type="text"
                    value={settings.emailNote}
                    onChange={(e) => setSettings({ ...settings, emailNote: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="24小时内回复"
                  />
                </div>
              </div>

              {/* Row 4: Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 text-agri-yellow" /> 公司地址
                  </label>
                  <input
                    type="text"
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="北京市海淀区中关村科技园区"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 text-agri-yellow" /> 地址详情
                  </label>
                  <input
                    type="text"
                    value={settings.addressDetail}
                    onChange={(e) => setSettings({ ...settings, addressDetail: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="智慧农业产业基地 A座 5层"
                  />
                </div>
              </div>

              {/* Row 5: Service Hours */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Clock className="w-4 h-4 text-agri-yellow" /> 工作日服务时间
                  </label>
                  <input
                    type="text"
                    value={settings.serviceHoursWeekday}
                    onChange={(e) => setSettings({ ...settings, serviceHoursWeekday: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="周一至周六：9:00 - 20:00"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Clock className="w-4 h-4 text-agri-yellow" /> 周末服务时间
                  </label>
                  <input
                    type="text"
                    value={settings.serviceHoursWeekend}
                    onChange={(e) => setSettings({ ...settings, serviceHoursWeekend: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="周日：10:00 - 18:00"
                  />
                </div>
              </div>

              {/* Row 6: Service Note */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Clock className="w-4 h-4 text-agri-yellow" /> 服务说明
                </label>
                <input
                  type="text"
                  value={settings.serviceNote}
                  onChange={(e) => setSettings({ ...settings, serviceNote: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                  placeholder="节假日正常值班"
                />
              </div>

              {/* Row 7: Sales Rep */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 text-agri-yellow" /> 专属销售顾问
                  </label>
                  <input
                    type="text"
                    value={settings.salesRep}
                    onChange={(e) => setSettings({ ...settings, salesRep: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="张经理"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 text-agri-yellow" /> 顾问头衔
                  </label>
                  <input
                    type="text"
                    value={settings.salesRepTitle}
                    onChange={(e) => setSettings({ ...settings, salesRepTitle: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="农业智能化解决方案专家"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 text-agri-yellow" /> 顾问简介
                  </label>
                  <input
                    type="text"
                    value={settings.salesRepBio}
                    onChange={(e) => setSettings({ ...settings, salesRepBio: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                    placeholder="从业12年，服务超过500家农场"
                  />
                </div>
              </div>

              {settingsMessage && (
                <div
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm ${
                    settingsMessage.type === 'success'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {settingsMessage.type === 'success' ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  {settingsMessage.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-agri-yellow text-black py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors"
              >
                保存联系方式
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
