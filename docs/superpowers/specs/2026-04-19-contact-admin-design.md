# 联系页面与后台管理系统设计

**日期：** 2026-04-19
**状态：** 已批准
**版本：** 1.0

---

## 概述

为西兰花除草机器人网站添加联系页面和管理后台系统，采用纯前端方案（localStorage 存储）。

---

## 1. 技术选型

- **框架：** React + TypeScript + Tailwind CSS
- **路由：** React Router DOM
- **动画：** Framer Motion
- **数据存储：** localStorage
- **样式：** 与现有网站保持一致（深色主题 + 黄色强调色 #E5B93C）

---

## 2. 页面结构

```
/contact      → 联系页面
/login        → 管理员登录页
/admin        → 后台主页（仪表盘）
/admin/products → 商品管理
/admin/inquiries  → 咨询管理
/admin/profile   → 个人信息
```

---

## 3. 页面设计

### 3.1 联系页面 (/contact)

**功能：**
- 展示公司联系方式（电话、微信、邮箱、地址、服务时间）
- 展示专属销售顾问信息
- 在线咨询表单

**布局：**
- Hero 区域：标题 + 简介
- 左侧：联系方式卡片 + 销售顾问介绍
- 右侧：在线咨询表单
- 底部：来访地址

**表单字段：**
| 字段 | 类型 | 必填 |
|------|------|------|
| 姓名 | text | 是 |
| 电话 | tel | 是 |
| 邮箱 | email | 否 |
| 种植规模 | select | 否 |
| 公司名称 | text | 否 |
| 咨询内容 | textarea | 是 |

**数据存储：**
```javascript
localStorage.setItem('inquiries', JSON.stringify([...]))
```

---

### 3.2 管理员登录页 (/login)

**功能：**
- 管理员身份验证
- 登录状态持久化

**默认账号：**
- 用户名：admin
- 密码：admin123

**交互：**
- 登录成功 → localStorage 存储 `adminLoggedIn: true` → 跳转 /admin
- 登录失败 → 显示错误提示

**组件元素：**
- Logo
- 用户名输入框
- 密码输入框（带显示/隐藏切换）
- 登录按钮（加载状态）
- 错误提示
- 默认账号提示

---

### 3.3 后台管理主页 (/admin)

**功能：**
- 仪表盘概览
- 导航到各子模块

**布局：**
- 左侧导航栏（固定）
- 右侧主内容区

**导航项：**
1. 仪表盘（默认）
2. 商品管理
3. 咨询管理
4. 个人信息
5. 登出

**权限控制：**
- 未登录访问 /admin 任意路径 → 跳转 /login

---

### 3.4 仪表盘

**组件：**
- 欢迎信息（显示管理员用户名）
- 统计卡片：商品数量、待处理咨询数
- 最近咨询列表（最新3条）

---

### 3.5 商品管理 (/admin/products)

**功能：**
- 列表展示所有商品
- 新增商品
- 编辑商品
- 删除商品

**商品数据结构：**
```javascript
{
  id: string,
  name: string,
  price: string,
  description: string,
  image: string,
  features: string[]
}
```

**初始数据：** 从现有 Store.tsx 中的三个产品导入

**操作：**
- 编辑：弹窗表单
- 删除：确认对话框
- 新增：弹窗表单

---

### 3.6 咨询管理 (/admin/inquiries)

**功能：**
- 列表展示所有咨询记录
- 查看详情
- 标记已处理
- 删除记录

**数据结构：**
```javascript
{
  id: string,
  name: string,
  phone: string,
  email: string,
  acreage: string,
  company: string,
  message: string,
  createdAt: string,
  status: 'pending' | 'processed'
}
```

**操作：**
- 查看详情：弹窗显示完整信息
- 标记已处理：更新状态
- 删除：确认对话框

---

### 3.7 个人信息 (/admin/profile)

**功能：**
- 查看当前账号信息
- 修改密码

**表单：**
- 原密码（验证）
- 新密码
- 确认新密码

**数据存储：**
```javascript
localStorage.setItem('adminProfile', JSON.stringify({ username, password }))
```

---

## 4. 组件清单

| 组件 | 路径 | 描述 |
|------|------|------|
| Contact | src/pages/Contact.tsx | 联系页面 |
| Login | src/pages/Login.tsx | 登录页 |
| Admin | src/pages/admin/Admin.tsx | 后台框架 |
| AdminDashboard | src/pages/admin/Dashboard.tsx | 仪表盘 |
| AdminProducts | src/pages/admin/Products.tsx | 商品管理 |
| AdminInquiries | src/pages/admin/Inquiries.tsx | 咨询管理 |
| AdminProfile | src/pages/admin/Profile.tsx | 个人信息 |

---

## 5. localStorage 键名

| 键名 | 用途 |
|------|------|
| adminLoggedIn | 登录状态 |
| adminUsername | 管理员用户名 |
| adminPassword | 管理员密码 |
| products | 商品数据 |
| inquiries | 咨询记录 |

---

## 6. 路由配置

```javascript
<Routes>
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/admin" element={<Admin />}>
    <Route index element={<AdminDashboard />} />
    <Route path="products" element={<AdminProducts />} />
    <Route path="inquiries" element={<AdminInquiries />} />
    <Route path="profile" element={<AdminProfile />} />
  </Route>
</Routes>
```

---

## 7. 初始数据

### 商品初始数据（从现有 Store.tsx）

| 型号 | 价格 | 图片 |
|------|------|------|
| Standard 标准版 | ¥ 49,999 | /hero-bg.png |
| Pro 专业版 | ¥ 89,999 | /机器人3.jpg |
| Fleet 集群版 | 定制报价 | /冷光暖光.png |

---

## 8. 验收标准

1. 联系页面可正常提交表单并保存到 localStorage
2. 管理员可使用 admin/admin123 登录
3. 未登录用户无法访问后台页面
4. 商品可正常增删改查
5. 咨询记录可查看、标记处理、删除
6. 个人信息可修改密码
7. 所有样式与现有网站风格一致
