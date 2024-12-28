import type { SEOSiteConfig}  from '@/types/site-info.type';

export const seoSiteConfig: SEOSiteConfig = {
  siteName: 'Next.js 样板', // 网站名称
  siteDescription: '一个 Next.js 项目的样板', // 网站描述
  siteUrl: 'https://example.com', // 网站 URL，必选
  metaInfo: {
    title: 'Next.js 样板', // 页面标题
    description: '一个 Next.js 项目的样板', // 页面描述
    keywords: 'nextjs, scaffold, template', // 页面关键词
    author: 'Your Name', // 页面作者，可选
    robots: 'index, follow', // 搜索引擎爬虫指令，可选，例如：index, follow
  },
  ogInfo: {
    title: 'Next.js 样板', // Open Graph 标题
    description: '一个 Next.js 项目的样板', // Open Graph 描述
    image: 'https://example.com/og-image.jpg', // Open Graph 图片，建议提供
    url: 'https://example.com', // Open Graph URL
    type: 'website', // Open Graph 类型，例如：website, article
    locale: 'zh_CN', // Open Graph 地区/语言，可选，例如：zh_CN
    site_name: 'Next.js 样板', // Open Graph 网站名称，可选
  },
  twitterInfo: { // Twitter 卡片信息，可选
    card: 'summary_large_image', // 卡片类型，例如：summary, summary_large_image
    site: '@yourSite', // 网站 Twitter 账号，例如：@yourSite
    creator: '@yourCreator', // 作者 Twitter 账号，例如：@yourCreator
  },
  socialLinks: { // 社交媒体链接，可选
    twitter: 'https://twitter.com/yourSite', // Twitter 链接
    facebook: 'https://facebook.com/yourSite', // Facebook 链接
    // ... 其他社交平台
  },
  contact: { // 联系方式，可选
    email: 'contact@example.com', // 邮箱地址
    // ... 其他联系方式
  },
};
