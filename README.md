# 网上祭奠平台 (CyberMourning)

一个现代化、庄重的网上祭奠和纪念平台，为用户提供线上悼念、缅怀和纪念逝者的空间。

## 功能特点

- **纪念页面** - 为逝者创建个性化纪念页面，展示生平事迹和照片
- **动态背景** - 精心设计的动态背景效果，营造庄严肃穆的氛围
- **献花祭奠** - 允许访客在线献花、点烛和留言表达哀思
- **响应式设计** - 完美适配各种设备，包括桌面电脑、平板和手机
- **日夜模式** - 自动根据系统偏好切换明暗主题
- **优雅动画** - 温和的过渡动画和视觉效果，提升用户体验

## 技术栈

- **Next.js** - React框架，提供服务端渲染和静态站点生成
- **TypeScript** - 类型安全的JavaScript超集
- **Tailwind CSS** - 实用优先的CSS框架
- **React Three Fiber** - 用于创建3D粒子背景效果

## 开始使用

### 前提条件

- Node.js 18.0.0 或更高版本
- npm 或 yarn 或 pnpm

### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/cybermourning.git

# 进入项目目录
cd cybermourning

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发

```bash
# 启动开发服务器
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建

```bash
# 构建生产版本
npm run build
# 或
yarn build
# 或
pnpm build

# 启动生产服务器
npm run start
# 或
yarn start
# 或
pnpm start
```

## 项目结构

```
cybermourning/
├── public/            # 静态资源
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── components/  # 可复用组件
│   │   ├── memorial/   # 纪念页面
│   │   ├── utils/      # 工具函数
│   │   └── globals.css  # 全局样式
│   └── types/         # TypeScript类型定义
└── README.md          # 项目文档
```

## 贡献指南

欢迎提交问题和贡献代码，请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建一个Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情见 [LICENSE](LICENSE) 文件
