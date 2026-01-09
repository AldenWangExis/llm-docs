import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "LLM教程",
    prefix: "/guide/",
    children: [
      {
        text: "基础篇",
        icon: "book",
        children: [
          { text: "概念认知", link: "01-concepts/" },
          { text: "LLM工程", link: "02-models/" },
          { text: "工具生态", link: "03-tools/" },
        ],
      },
      {
        text: "进阶篇",
        icon: "graduation-cap",
        children: [
          { text: "进阶能力", link: "04-advanced/" },
        ],
      },
      {
        text: "附录",
        icon: "book-open",
        link: "appendix/",
      },
    ],
  },
  // "/demo/",
]);
