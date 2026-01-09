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
          text: "概念认知",
          prefix: "01-concepts/",
          link: "01-concepts/",
          children: [
            {
              text: "计算机工程类比：让LLM不再陌生",
              link: "computer-analogies.md",
            },
            {
              text: "LLM：概率推理引擎",
              link: "llm.md",
            },
            {
              text: "RAG：检索增强生成",
              link: "rag.md",
            },
            {
              text: "Agent：自主执行代理",
              link: "agent.md",
            }],
        },
        {
          text: "LLM工程",
          prefix: "02-architecture/",
          link: "02-architecture/",
          children: [
            {
              text: "LLM工程全景",
              link: "landscape.md",
            },
            {
              text: "模型分类与选型",
              link: "model-selection.md",
            },
            {
              text: "推理引擎",
              link: "inference-engine.md",
            },
            {
              text: "从提示词工程到上下文工程",
              link: "context-engineering.md",
            },
            {
              text: "数据工程与知识工程",
              link: "data-engineering.md",
            },
            {
              text: "RAG架构深挖",
              link: "rag-architecture.md",
            },
            {
              text: "向量库管理",
              link: "vector-store.md",
            },
            {
              text: "可观测性与评估",
              link: "observability.md",
            },
            {
              text: "Agent的工具演化",
              link: "agent-tools.md",
            },
            {
              text: "多Agent架构",
              link: "multi-agent.md",
            },
            {
              text: "环境与反馈机制",
              link: "environment-feedback.md",
            }],
        },
        {
          text: "工具生态",
          prefix: "03-tools/",
          link: "03-tools/",
          children: "structure",
        },
        {
          text: "进阶能力",
          prefix: "04-advanced/",
          link: "04-advanced/",
          children: "structure",
        },
        {
          text: "附录",
          prefix: "appendix/",
          link: "appendix/",
          children: "structure",
        },
      ],
    },
  ],
});
