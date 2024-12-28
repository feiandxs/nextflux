export interface SEOSiteConfig {
  siteName: string; // 网站名称
  siteDescription: string; // 网站描述
  siteUrl: string; // 网站 URL，必选
  metaInfo: {
    title: string; // 页面标题
    description: string; // 页面描述
    keywords: string; // 页面关键词
    author?: string; // 页面作者，可选
    robots?: string; // 搜索引擎爬虫指令，可选，例如：index, follow
  };
  ogInfo: {
    title: string; // Open Graph 标题
    description: string; // Open Graph 描述
    image: string; // Open Graph 图片，建议提供
    url: string; // Open Graph URL
    type: string; // Open Graph 类型，例如：website, article
    locale?: string; // Open Graph 地区/语言，可选，例如：zh_CN
    site_name?: string; // Open Graph 网站名称，可选
  };
  twitterInfo?: { // Twitter 卡片信息，可选
    card?: string; // 卡片类型，例如：summary, summary_large_image
    site?: string; // 网站 Twitter 账号，例如：@yourSite
    creator?: string; // 作者 Twitter 账号，例如：@yourCreator
  };
  socialLinks?: { // 社交媒体链接，可选
    twitter?: string; // Twitter 链接
    facebook?: string; // Facebook 链接
    instagram?: string; // Instagram 链接
    linkedin?: string; // LinkedIn 链接
    // ... 其他社交平台
  };
  contact?: { // 联系方式，可选
    email?: string; // 邮箱地址
    phone?: string; // 电话号码
    // ... 其他联系方式
  };
}
