import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LLM工程实践教程",
  description: "面向开发者的LLM实践指南",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
