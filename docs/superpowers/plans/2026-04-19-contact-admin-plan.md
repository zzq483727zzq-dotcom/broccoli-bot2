# 联系页面与后台管理系统实施计划

> **For agentic workers:** 建议使用 subagent-driven-development 或 executing-plans 来逐任务执行。

**目标：** 为西兰花除草机器人网站添加联系页面和后台管理系统

**架构：** 纯前端方案，使用 localStorage 存储数据，与现有 React + TypeScript + Tailwind CSS 项目集成

**技术栈：** React, TypeScript, Tailwind CSS, Framer Motion, React Router DOM

---

## 文件结构

```
src/
├── pages/
│   ├── Contact.tsx          (新建 - 联系页面)
│   ├── Login.tsx            (新建 - 登录页)
│   └── admin/
│       ├── Admin.tsx        (新建 - 后台框架)
│       ├── Dashboard.tsx     (新建 - 仪表盘)
│       ├── Products.tsx     (新建 - 商品管理)
│       ├── Inquiries.tsx    (新建 - 咨询管理)
│       └── Profile.tsx      (新建 - 个人信息)
├── utils/
│   └── storage.ts           (新建 - localStorage 工具)
└── App.tsx                 (修改 - 添加路由)
```

---

## 任务清单

### Task 1: 创建 localStorage 工具模块

**文件：**
- 创建: `src/utils/storage.ts`

**内容：** 提供统一的 localStorage 操作接口

- [ ] **Step 1: 创建 storage.ts 文件**

```typescript
// src/utils/storage.ts

// 键名常量
export const STORAGE_KEYS = {
  ADMIN_LOGGED_IN: 'adminLoggedIn',
  ADMIN_USERNAME: 'adminUsername',
  ADMIN_PASSWORD: 'adminPassword',
  PRODUCTS: 'products',
  INQUIRIES: 'inquiries',
} as const;

// 默认管理员账号
export const DEFAULT_ADMIN = {
  username: 'admin',
  password: 'admin123',
};

// 登录状态
export const isLoggedIn = (): boolean => {
  return localStorage.getItem(STORAGE_KEYS.ADMIN_LOGGED_IN) === 'true';
};

export const setLoggedIn = (value: boolean): void => {
  localStorage.setItem(STORAGE_KEYS.ADMIN_LOGGED_IN, value.toString());
};

// 管理员信息
export const getAdminProfile = () => {
  return {
    username: localStorage.getItem(STORAGE_KEYS.ADMIN_USERNAME) || DEFAULT_ADMIN.username,
    password: localStorage.getItem(STORAGE_KEYS.ADMIN_PASSWORD) || DEFAULT_ADMIN.password,
  };
};

export const setAdminPassword = (password: string): void => {
  localStorage.setItem(STORAGE_KEYS.ADMIN_PASSWORD, password);
};

// 商品数据
export const getProducts = () => {
  const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  return data ? JSON.parse(data) : null;
};

export const setProducts = (products: any[]): void => {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
};

// 咨询数据
export const getInquiries = () => {
  const data = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
  return data ? JSON.parse(data) : [];
};

export const addInquiry = (inquiry: any): void => {
  const inquiries = getInquiries();
  inquiries.unshift({ ...inquiry, id: Date.now().toString(), createdAt: new Date().toISOString(), status: 'pending' });
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
};

export const updateInquiry = (id: string, updates: any): void => {
  const inquiries = getInquiries();
  const index = inquiries.findIndex((i: any) => i.id === id);
  if (index !== -1) {
    inquiries[index] = { ...inquiries[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  }
};

export const deleteInquiry = (id: string): void => {
  const inquiries = getInquiries().filter((i: any) => i.id !== id);
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
};
```

- [ ] **Step 2: 创建 utils 目录并提交**
```bash
mkdir -p src/utils
git add src/utils/storage.ts
git commit -m "feat: add localStorage utility module"
```

---

### Task 2: 创建联系页面

**文件：**
- 创建: `src/pages/Contact.tsx`

**内容：** 联系页面，包含联系方式和咨询表单

- [ ] **Step 1: 创建 Contact.tsx**

```tsx
// src/pages/Contact.tsx
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

  // ... (完整代码见设计文档)
}

export default Contact;
```

- [ ] **Step 2: 提交**
```bash
git add src/pages/Contact.tsx
git commit -m "feat: add contact page with inquiry form"
```

---

### Task 3: 创建登录页面

**文件：**
- 创建: `src/pages/Login.tsx`

**内容：** 管理员登录页

- [ ] **Step 1: 创建 Login.tsx**

```tsx
// src/pages/Login.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, AlertCircle, Shield } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { isLoggedIn, getAdminProfile, setLoggedIn, DEFAULT_ADMIN } from '../utils/storage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
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

  // ... (完整代码见设计文档)
}
```

- [ ] **Step 2: 提交**
```bash
git add src/pages/Login.tsx
git commit -m "feat: add admin login page"
```

---

### Task 4: 创建后台框架

**文件：**
- 创建: `src/pages/admin/Admin.tsx`
- 创建: `src/pages/admin/Dashboard.tsx`
- 创建: `src/pages/admin/Products.tsx`
- 创建: `src/pages/admin/Inquiries.tsx`
- 创建: `src/pages/admin/Profile.tsx`

**内容：** 后台管理系统的所有页面

- [ ] **Step 1: 创建 admin 目录和 Admin.tsx**

```tsx
// src/pages/admin/Admin.tsx
import { useEffect } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, MessageSquare, User, LogOut } from 'lucide-react';
import { isLoggedIn, setLoggedIn } from '../../utils/storage';

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation();

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
    { path: '/admin', icon: LayoutDashboard, label: '仪表盘' },
    { path: '/admin/products', icon: Package, label: '商品管理' },
    { path: '/admin/inquiries', icon: MessageSquare, label: '咨询管理' },
    { path: '/admin/profile', icon: User, label: '个人信息' },
  ];

  // ... (完整代码见设计文档)
}
```

- [ ] **Step 2: 创建其他后台页面**

分别为 Dashboard.tsx, Products.tsx, Inquiries.tsx, Profile.tsx

- [ ] **Step 3: 提交**
```bash
git add src/pages/admin/
git commit -m "feat: add admin panel pages"
```

---

### Task 5: 更新路由配置

**文件：**
- 修改: `src/App.tsx`

**内容：** 添加新页面的路由

- [ ] **Step 1: 更新 App.tsx**

```tsx
// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Cases from './pages/Cases';
import Research from './pages/Research';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/admin/Admin';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Inquiries from './pages/admin/Inquiries';
import Profile from './pages/admin/Profile';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/research" element={<Research />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="inquiries" element={<Inquiries />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
```

- [ ] **Step 2: 提交**
```bash
git add src/App.tsx
git commit -m "feat: add routes for contact, login, and admin pages"
```

---

### Task 6: 更新导航栏和购买渠道页面

**文件：**
- 修改: `src/components/Navbar.tsx`
- 修改: `src/pages/Store.tsx`

**内容：** 添加联系页面入口和按钮跳转

- [ ] **Step 1: 更新 Navbar.tsx**

在导航链接中添加联系页面：
```tsx
{ name: '联系我们', path: '/contact' },
```

用户图标点击跳转到登录页：
```tsx
<Link to="/login">
  <motion.button ... >
    <User className="w-5 h-5 ..." />
  </motion.button>
</Link>
```

- [ ] **Step 2: 更新 Store.tsx**

"立即预订"按钮跳转到联系页面：
```tsx
<Link to="/contact">
  <button className="...">
    <ShoppingCart className="w-5 h-5" /> 立即预订
  </button>
</Link>
```

- [ ] **Step 3: 提交**
```bash
git add src/components/Navbar.tsx src/pages/Store.tsx
git commit -m "feat: add contact page link and login navigation"
```

---

### Task 7: 添加初始商品数据

**文件：**
- 修改: `src/utils/storage.ts` 或创建初始化脚本

**内容：** 在首次访问时初始化三个商品数据

- [ ] **Step 1: 添加初始化函数**

```typescript
// 在 storage.ts 中添加
export const initializeProducts = () => {
  if (!getProducts()) {
    const initialProducts = [
      {
        id: '1',
        name: 'Standard 标准版',
        price: '¥ 49,999',
        description: '适合 100 亩以下中小型农场',
        image: '/hero-bg.png',
        features: ['基础全地形底盘 (4x4)', '50W 脉冲激光模组', '标准视觉识别系统', '4小时续航']
      },
      {
        id: '2',
        name: 'Pro 专业版',
        price: '¥ 89,999',
        description: '适合 500 亩左右大型基地',
        image: '/机器人3.jpg',
        features: ['增强型独立悬挂底盘', '100W 极速激光模组', '夜视增强 AI 视觉系统', '8小时长续航']
      },
      {
        id: '3',
        name: 'Fleet 集群版',
        price: '定制报价',
        description: '适合超大型农业合作社',
        image: '/冷光暖光.png',
        features: ['包含 3 台 Pro 版主机', '多机协同调度系统', '自动充电/散热维护舱', '3年企业级维保服务']
      }
    ];
    setProducts(initialProducts);
  }
};
```

- [ ] **Step 2: 在 App 入口调用初始化**

```tsx
// 在 App.tsx 中
import { useEffect } from 'react';
import { initializeProducts } from './utils/storage';

function App() {
  useEffect(() => {
    initializeProducts();
  }, []);
  // ...
}
```

- [ ] **Step 3: 提交**
```bash
git add src/utils/storage.ts src/App.tsx
git commit -m "feat: add product initialization data"
```

---

## 验收清单

- [ ] 联系页面可正常访问并提交表单
- [ ] 管理员可使用 admin/admin123 登录
- [ ] 未登录用户访问 /admin 自动跳转登录页
- [ ] 商品可增删改查
- [ ] 咨询记录可查看、标记处理、删除
- [ ] 个人信息可修改密码
- [ ] 导航栏显示联系我们入口
- [ ] 购买渠道页按钮跳转正常
