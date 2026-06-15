# 睡了么 (Sleepled)

一个专注于睡眠监测和健康管理的微信小程序。

## 📱 项目介绍

「睡了么」是一个帮助用户追踪睡眠质量、建立健康作息的微信小程序。用户可以：

- 📊 记录每日睡眠时间和质量
- 📈 查看睡眠数据统计和趋势分析
- ⏰ 设置睡眠提醒
- 👥 与朋友分享睡眠数据（可选）
- 🎯 获得个性化睡眠建议

## 🛠️ 技术栈

### 前端
- 微信小程序原生开发
- 框架：原生小程序 API
- UI 组件：自定义组件库

### 后端
- Node.js + Express
- 数据库：MongoDB
- 部署：腾讯云/阿里云

## 📁 项目结构

```
sleepled/
├── mini-app/                 # 微信小程序前端
│   ├── pages/               # 页面文件
│   │   ├── index/          # 首页
│   │   ├── record/         # 睡眠记录
│   │   ├── stats/          # 数据统计
│   │   └── user/           # 用户中心
│   ├── components/          # 可复用组件
│   ├── styles/             # 全局样式
│   ├── utils/              # 工具函数
│   ├── app.js              # 小程序入口
│   ├── app.json            # 小程序配置
│   └── app.wxss            # 全局样式
├── backend/                 # Node.js 后端
│   ├── src/
│   │   ├── models/         # 数据模型
│   │   ├── routes/         # API 路由
│   │   ├── controllers/    # 控制器
│   │   ├── middleware/     # 中间件
│   │   ├── utils/          # 工具函数
│   │   └── app.js          # 应用入口
│   ├── .env.example        # 环境变量示例
│   ├── package.json        # 项目依赖
│   └── README.md           # 后端说明
├── .gitignore              # Git 忽略规则
└── README.md               # 项目说明
```

## 🚀 快速开始

### 前端开发

1. 下载微信开发者工具
2. 打开项目根目录下的 `mini-app` 文件夹
3. 获取 AppID，在 `app.json` 中配置
4. 点击「编译」开始开发

### 后端开发

```bash
cd backend

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env

# 启动开发服务器
npm run dev
```

## 📝 主要功能

### Phase 1: MVP（最小可行产品）
- [x] 用户注册/登录
- [x] 睡眠记录（入睡/起床时间）
- [x] 基础睡眠质量评分
- [x] 周报表展示
- [ ] 睡眠提醒通知

### Phase 2: 进阶功能
- [ ] 月度报告
- [ ] 睡眠趋势分析
- [ ] 智能睡眠建议
- [ ] 可穿戴设备集成

### Phase 3: 社交功能
- [ ] 睡眠数据分享
- [ ] 好友互相监督
- [ ] 睡眠排行榜

## 🔧 配置说明

详见 `backend/README.md`

## 📄 License

MIT

## 👨‍💻 开发者

- zhangruochen123
