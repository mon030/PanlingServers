import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";

export default hopeTheme({
  hostname: "https://servers.panling.link",
  lang: "zh-CN",

  author: {
    name: "LenKun",
    url: "https://imon.eu.org",
  },

  logo: "images/logo.png",

  repo: "mon030/PanlingServers",

  docsDir: "docs/src",

  docsBranch: "master",

  // 导航栏
  navbar,

  // 页脚
  footer: "盘灵古域攻略站",
  copyright: "Copyright © 2015 - 2025 3ON EM",
  license: "CC BY 4.0",
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    markmap: false,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    chartjs: true,
    echarts: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    icon: {
      assets: "iconify",
    },

    comment: {
      provider: "Waline",
      serverURL: "https://c.3onem.eu.org",
      recaptchaV3Key: "6LcdIwoiAAAAAMQbdZ_wH5PVBeIwJPYbTCuOVaxM",
      pageview: true,
      reaction: true,
    },

    components: {
      components: ["Badge", "VPBanner", "BiliBili", "VidStack", "VPCard"],
    },

    copyright: {
      license: "CC BY 4.0",
    },
  },
});