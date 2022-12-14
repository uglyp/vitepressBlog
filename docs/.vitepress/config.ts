import { defineConfig } from "vitepress";

export default defineConfig({
  title: "iridescent",
  description: "hello world",
  base: "/blog/",

  head: [["link", { rel: "icon", type: "image/jpg", href: "logo.jpg" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.jpg",
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/daily/" },
      { text: "持续学习", link: "/javascript/" },
      { text: "代码人生", link: "/life/" },
      // { text: "我的掘金", link: "https://juejin.cn/user/2242659452477016" },
      { text: "关于我", link: "/me/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/uglyp" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021-07-27～present iridescent",
    },

    sidebar: {
      "/life/": [
        {
          text: '生活感悟',
          items: [
            { text: "社会", link: "/life/" },
            { text: "2022-06年中总结", link: "/life/2022-06" },
          ]
        }
      ],
      "/javascript/": [
        {
          text: 'JavaScript积累',
          items: [
            { text: "社会", link: "/javascript/" },
            { text: "2022-06年中总结", link: "/life/2022-06" },
            { text: "2021-12年终总结", link: "/life/2021-12" },
          ]
        }
      ],
      "/daily/": [
        {
          text: "2022年每日笔记",
          items: [
            { text: "current", link: "/daily/" },
            { text: "2022-08", link: "/daily/2022-08" },
            { text: "2022-07", link: "/daily/2022-07" },
            { text: "2022-06", link: "/daily/2022-06" },
            { text: "2022-05", link: "/daily/2022-05" },
            { text: "2022-04", link: "/daily/2022-04" },
            { text: "2022-03", link: "/daily/2022-03" },
            { text: "2022-02", link: "/daily/2022-02" },
            { text: "2022-01", link: "/daily/2022-01" },
          ],
        },
        {
          text: "2021年每日笔记",
          items: [
            { text: "2021-12", link: "/daily/2021-12" },
            { text: "2021-11", link: "/daily/2021-11" },
            { text: "2021-10", link: "/daily/2021-10" },
            { text: "2021-09", link: "/daily/2021-09" },
            { text: "2021-08", link: "/daily/2021-08" },
            { text: "2021-07", link: "/daily/2021-07" },
            { text: "2021-06", link: "/daily/2021-06" },
            { text: "2021-05", link: "/daily/2021-05" },
            { text: "2021-04", link: "/daily/2021-04" },
            { text: "2021-03", link: "/daily/2021-03" },
            { text: "2021-02", link: "/daily/2021-02" },
            { text: "2021-01", link: "/daily/2021-01" },
          ],
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
      port: 3000,
      open: true,
      proxy: {
        '/so': {
          target: 'http://139.159.245.209:5000', // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/so/, '')
        }
      }
    },
  },
});
