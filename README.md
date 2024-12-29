# 🚀 Nextflux

A modern, production-ready Next.js starter kit crafted with developer experience in mind.

[English](./README.md) | [简体中文](./docs/README.zh-CN.md)

🔥 **[Live Demo](https://nextflux.netlify.app/)**

## ✨ Features

- 🛠️ **Modern Stack**
  - [Next.js 14](https://nextjs.org/) with App Router
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components
  
- 📊 **Database & ORM**
  - [PostgreSQL](https://www.postgresql.org/) - Advanced open-source database
  - [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM with great developer experience

- 🌐 **Internationalization**
  - [next-intl](https://next-intl-docs.vercel.app/) for type-safe translations
  - Easy language switching
  - SEO-friendly setup

- 🔧 **Developer Experience**
  - ESLint & Prettier setup
  - Git hooks with Husky
  - Type checking in development
  - Fast refresh enabled

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/feiandxs/nextflux.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy the example environment file:
```bash
cp .env.example .env
```

4. Set up your database:
```bash
pnpm db:push
```

5. Start the development server:
```bash
pnpm dev
```

## 📦 Project Structure

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

## 📝 Environment Variables

```bash
# Database
DATABASE_URL=

# Add other environment variables
```

## 🛠️ Development

[开发相关说明]

## 🚀 Deployment

[部署相关说明]

## 📄 License

MIT License
