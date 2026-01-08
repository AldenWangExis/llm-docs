import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "LLM教程",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
  ],
});
