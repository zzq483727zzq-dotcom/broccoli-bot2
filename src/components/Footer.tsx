import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">产品</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/introduction" className="hover:text-white">全地形除草机器人</Link></li>
              <li><Link to="/introduction" className="hover:text-white">激光除草模组</Link></li>
              <li><Link to="/introduction" className="hover:text-white">AI视觉识别系统</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">探索</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/cases" className="hover:text-white">应用案例</Link></li>
              <li><Link to="/research" className="hover:text-white">研究调研</Link></li>
              <li><Link to="/research" className="hover:text-white">技术白皮书</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">服务与支持</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">售后服务政策</a></li>
              <li><a href="#" className="hover:text-white">安全飞行指引</a></li>
              <li><a href="#" className="hover:text-white">固件下载</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">团队介绍</a></li>
              <li><a href="#" className="hover:text-white">联系我们</a></li>
              <li><a href="#" className="hover:text-white">加入我们</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Broccoli-Bot 毕设团队 版权所有</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">使用条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
