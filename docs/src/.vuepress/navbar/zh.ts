import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "服务器", icon: "solar:server-bold-duotone", link: "https://server.panling.link" },

  {
    text: "投稿",
    icon: "solar:document-add-bold-duotone",
    link: "/other/post",
  },
]);
