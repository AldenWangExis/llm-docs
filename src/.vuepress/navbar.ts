import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "LLM教程",
    icon: "brain",
    prefix: "/guide/",
    children: [
      {
        text: "基础篇",
        icon: "book",
        children: [
          { text: "概念重构", link: "01-concepts/" },
          { text: "模型生态", link: "02-models/" },
          { text: "工具链与产品", link: "03-tools/" },
        ],
      },
      {
        text: "进阶篇",
        icon: "graduation-cap",
        children: [
          { text: "进阶能力", link: "04-advanced/" },
          { text: "实战案例", link: "05-cases/" },
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
