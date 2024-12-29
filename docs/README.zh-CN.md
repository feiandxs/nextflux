# 🚀 Nextflux

一个现代化、生产就绪的 Next.js 启动工具包，专注于开发者体验。

[English](../README.md) | [简体中文](./README.zh-CN.md)

🔥 **[在线演示](https://nextflux.netlify.app/)**

## ✨ 特性

- 🛠️ **现代技术栈**
  - 采用 App Router 的 [Next.js 14](https://nextjs.org/)
  - 使用 [TypeScript](https://www.typescriptlang.org/) 确保类型安全
  - 使用 [Tailwind CSS](https://tailwindcss.com/) 进行样式设计
  - 使用 [shadcn/ui](https://ui.shadcn.com/) 提供美观且无障碍的组件
  
- 📊 **数据库与 ORM**
  - [PostgreSQL](https://www.postgresql.org/) - 先进的开源数据库
  - [Drizzle ORM](https://orm.drizzle.team/) - 拥有出色开发体验的 TypeScript ORM

- 🌐 **国际化**
  - 使用 [next-intl](https://next-intl-docs.vercel.app/) 实现类型安全的翻译
  - 便捷的语言切换
  - 优化的 SEO 设置

- 🔧 **开发者体验**
  - ESLint 与 Prettier 配置
  - 使用 Husky 的 Git hooks
  - 开发环境类型检查
  - 快速刷新支持

## 🚀 快速开始

1. 克隆仓库：
```bash
git clone https://github.com/feiandxs/nextflux.git
```

2. 安装依赖：
```bash
pnpm install
```

3. 复制环境变量文件：
```bash
cp .env.example .env
```

4. 设置数据库：
```bash
pnpm db:push
```

5. 启动开发服务器：
```bash
pnpm dev
```

## 📦 项目结构

```txt
nextflux/
├── app/
├── components/
├── lib/
│   ├── db/
│   └── utils/
├── public/
└── [其他目录结构]
```

## 📝 环境变量

```bash
# 数据库
DATABASE_URL=

# 添加其他环境变量
```

## 🛠️ 开发

[开发相关说明]

## 🚀 部署

[部署相关说明]

## 📄 许可证

MIT 许可证
