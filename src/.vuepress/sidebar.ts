import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "LLM教程",
      prefix: "guide/",
      link: "guide/",
      children: [
        {
          text: "概念重构",
          prefix: "01-concepts/",
          link: "01-concepts/",
          // children: "structure",
        },
        {
          text: "模型生态",
          prefix: "02-models/",
          link: "02-models/",
          // children: "structure",
        },
        {
          text: "工具链",
          prefix: "03-tools/",
          link: "03-tools/",
          // children: "structure",
        },
        {
          text: "进阶能力",
          prefix: "04-advanced/",
          link: "04-advanced/",
          // children: "structure",
        },
        {
          text: "实战案例",
          prefix: "05-cases/",
          link: "05-cases/",
          // children: "structure",
        },
        {
          text: "附录",
          prefix: "appendix/",
          link: "appendix/",
          // children: "structure",
        },
      ],
    },
  ],
});
