# Sleepled Backend API

后端 API 服务，为睡了么小程序提供数据支持。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 环境配置

复制 `.env.example` 为 `.env`，并填写必要的配置：

```bash
cp .env.example .env
```

### 启动服务

**开发环境**（支持热重载）：
```bash
npm run dev
```

**生产环境**：
```bash
npm start
```

服务器将在 `http://localhost:3000` 启动。

## 📁 项目结构

```
src/
├── routes/          # API 路由
│   ├── auth.js     # 认证相关
│   ├── sleep.js    # 睡眠数据相关
│   └── users.js    # 用户相关
├── models/          # MongoDB 数据模型
│   ├── User.js
│   ├── Sleep.js
│   └── ...
├── controllers/     # 业务逻辑
├── middleware/      # 中间件
├── utils/           # 工具函数
└── app.js          # 应用入口
```

## 📋 API 文档

### 健康检查

```
GET /api/health
```

响应：
```json
{
  "status": "ok",
  "message": "Sleepled API is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### 待开发的 API 端点

- `POST /api/auth/login` - 用户登录
- `POST /api/auth/register` - 用户注册
- `POST /api/sleep/record` - 记录睡眠
- `GET /api/sleep/stats` - 获取睡眠统计
- `GET /api/users/profile` - 获取用户信息

## 🗄️ 数据库

### MongoDB 连接

确保 MongoDB 服务正在运行，默认连接到 `mongodb://localhost:27017/sleepled`。

## 🔧 配置说明

| 环境变量 | 说明 | 示例 |
|---------|------|------|
| PORT | 服务器端口 | 3000 |
| NODE_ENV | 运行环境 | development/production |
| MONGO_URI | MongoDB 连接字符串 | mongodb://localhost:27017/sleepled |
| JWT_SECRET | JWT 密钥 | your_secret_key |
| JWT_EXPIRATION | Token 过期时间 | 7d |
| WECHAT_APP_ID | 微信 App ID | xxx |
| WECHAT_APP_SECRET | 微信 App Secret | xxx |

## 📚 开发指南

### 添加新的 API 端点

1. 在 `routes/` 目录创建新文件
2. 在 `models/` 目录创建数据模型（如需要）
3. 在 `controllers/` 目录创建业务逻辑
4. 在 `app.js` 中注册路由

### 示例路由

```javascript
// routes/example.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Example endpoint' });
});

module.exports = router;
```

## 🧪 测试

```bash
npm test
```

## 📝 License

MIT
