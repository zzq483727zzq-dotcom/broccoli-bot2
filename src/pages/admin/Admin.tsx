import { useEffect } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, MessageSquare, User, LogOut } from 'lucide-react';
import { isLoggedIn, setLoggedIn } from '../../utils/storage';

export default function Admin() {
  const navigate = useNavigate();
  const adminName = localStorage.getItem('adminUsername') || 'Admin';

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/login');
  };

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: '仪表盘', end: true },
    { path: '/admin/products', icon: Package, label: '商品管理' },
    { path: '/admin/inquiries', icon: MessageSquare, label: '咨询管理' },
    { path: '/admin/profile', icon: User, label: '个人信息' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-16 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-white/10 min-h-[calc(100vh-4rem)] fixed left-0 top-16">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-agri-yellow rounded-lg flex items-center justify-center">
              <span className="text-black font-black">B</span>
            </div>
            <div>
              <p className="text-white font-bold">BROCCOLI-BOT</p>
              <p className="text-xs text-gray-500">管理后台</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-agri-yellow/20 text-agri-yellow'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4 px-4">
            <div className="w-8 h-8 bg-agri-yellow/20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-agri-yellow" />
            </div>
            <span className="text-gray-400 text-sm">{adminName}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">退出登录</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}