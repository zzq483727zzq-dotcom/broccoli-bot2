import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 滚动监听 - 导航栏压缩效果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: '首页', path: '/' },
    { name: '产品介绍', path: '/introduction' },
    { name: '应用案例', path: '/cases' },
    { name: '研究调研', path: '/research' },
    { name: '购买渠道', path: '/store' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-lg border-b border-agri-yellow/20 py-2'
          : 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold tracking-tighter flex items-center gap-2 group"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-agri-yellow rounded-sm flex items-center justify-center"
              >
                <span className="text-black font-black">B</span>
              </motion.div>
              <span className="text-white group-hover:text-agri-yellow transition-colors duration-200">
                BROCCOLI-BOT
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-2">
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="relative px-5 py-2.5 text-base tracking-wide group cursor-pointer"
                >
                  {/* 悬停背景 - 简洁圆角矩形 */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-agri-yellow/15'
                      : 'bg-transparent group-hover:bg-white/5'
                  }`} />

                  {/* 文字 */}
                  <span className={`relative z-10 font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-agri-yellow'
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>

                  {/* 下划线 */}
                  <span className={`absolute bottom-1 left-3 right-3 h-0.5 rounded-full transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-agri-yellow'
                      : 'bg-transparent group-hover:bg-agri-yellow/50'
                  }`} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-3 text-gray-300">
            {/* Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full hover:bg-white/10 group cursor-pointer"
            >
              <Search className="w-5 h-5 group-hover:text-agri-yellow transition-colors duration-200" />
            </motion.button>

            {/* User Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full hover:bg-white/10 group cursor-pointer"
            >
              <User className="w-5 h-5 group-hover:text-agri-yellow transition-colors duration-200" />
            </motion.button>

            {/* Cart Button */}
            <Link to="/store">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-agri-yellow text-black px-5 py-2.5 rounded-full text-base font-bold hover:bg-yellow-400 transition-colors duration-200 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>商城</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-white/5 text-gray-300 hover:text-white transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-agri-yellow/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                      location.pathname === link.path
                        ? 'text-black bg-agri-yellow'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Cart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  to="/store"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-agri-yellow text-black px-4 py-3 rounded-xl font-bold"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>商城</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}