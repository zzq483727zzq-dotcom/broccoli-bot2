// localStorage 工具模块

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

// 商品数据类型
export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

// 咨询数据类型
export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  acreage: string;
  company: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'processed';
}

// 商品数据
export const getProducts = (): Product[] => {
  const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  return data ? JSON.parse(data) : [];
};

export const setProducts = (products: Product[]): void => {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
};

export const updateProduct = (id: string, updates: Partial<Product>): void => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updates };
    setProducts(products);
  }
};

export const addProduct = (product: Product): void => {
  const products = getProducts();
  products.push(product);
  setProducts(products);
};

export const deleteProduct = (id: string): void => {
  const products = getProducts().filter(p => p.id !== id);
  setProducts(products);
};

// 咨询数据
export const getInquiries = (): Inquiry[] => {
  const data = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
  return data ? JSON.parse(data) : [];
};

export const addInquiry = (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): void => {
  const inquiries = getInquiries();
  inquiries.unshift({
    ...inquiry,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: 'pending',
  });
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
};

export const updateInquiry = (id: string, updates: Partial<Inquiry>): void => {
  const inquiries = getInquiries();
  const index = inquiries.findIndex(i => i.id === id);
  if (index !== -1) {
    inquiries[index] = { ...inquiries[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  }
};

export const deleteInquiry = (id: string): void => {
  const inquiries = getInquiries().filter(i => i.id !== id);
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
};

// 初始化商品数据
export const initializeProducts = (): void => {
  if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
    const initialProducts: Product[] = [
      {
        id: '1',
        name: 'Standard 标准版',
        price: '¥ 49,999',
        description: '适合 100 亩以下中小型农场',
        image: '/hero-bg.png',
        features: ['基础全地形底盘 (4x4)', '50W 脉冲激光模组', '标准视觉识别系统', '4小时续航 (ASA 材质外壳)'],
      },
      {
        id: '2',
        name: 'Pro 专业版',
        price: '¥ 89,999',
        description: '适合 500 亩左右大型基地',
        image: '/机器人3.jpg',
        features: ['增强型独立悬挂底盘', '100W 极速激光模组', '夜视增强 AI 视觉系统', '8小时长续航 (ASA+碳纤维)'],
      },
      {
        id: '3',
        name: 'Fleet 集群版',
        price: '定制报价',
        description: '适合超大型农业合作社',
        image: '/冷光暖光.png',
        features: ['包含 3 台 Pro 版主机', '多机协同调度系统 (Swarm)', '自动充电/散热维护舱', '3年企业级维保服务'],
      },
    ];
    setProducts(initialProducts);
  }
};
