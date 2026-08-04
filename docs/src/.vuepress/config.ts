import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "盘灵古域攻略站",
  description: "盘灵古域WIKI&攻略站",

  head: [
    [
      "script",
      { src: "https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" }
    ]
  ],

  theme,
});
