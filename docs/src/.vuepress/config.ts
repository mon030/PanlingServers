import { defineUserConfig } from "vuepress";
<<<<<<< Updated upstream
import theme from "./theme.js";
import { defaultTheme } from "@vuepress/theme-default";
import { commentPlugin } from "vuepress-plugin-comment2";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'





=======

import theme from "./theme.js";

>>>>>>> Stashed changes
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "盘灵古域攻略站",
  description: "盘灵古域WIKI&攻略站",

  theme,

<<<<<<< Updated upstream
  plugins: [
       googleAnalyticsPlugin({
      id: 'G-EFWFD2M8G0',
    }),
    
  ],
  
    sidebar: "heading",


  // Enable it with pwa
  // shouldPrefetch: false,
});
=======

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  
});
>>>>>>> Stashed changes
