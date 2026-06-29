# Hex-Core

Hex-Core 是一个跨平台本地 AI Agent 应用模板，用于派生可定制提示词、工作流、变量、工具和聊天界面的桌面应用。

## 快速开始

$(填写面向用户的最小起步指南：克隆、安装依赖、启动项目、配置、验证运行)

## 文档索引

- [技术栈与模板能力](DOCUMENTS/TechStack.md) — 当前接入能力、预置能力和模板占位说明。
- [命令速查](DOCUMENTS/Commands.md) — 开发、构建、检查和清理命令。

## 工作区结构

```text
@/
├── core/README.md      # 后端工作区
├── web/README.md       # 前端工作区
│
├── DOCUMENTS/          # 公开文档
│   ├── TechStack.md    # 技术选型
│   └── Commands.md     # 命令说明
│
├── package.json        # Node 根配置
├── package-lock.json   # Node 依赖锁定
│
├── .github/workflows/  # Git Actions
├── .gitignore          # Git 忽略规则
├── .gitattributes      # Git 配置
│
├── .editorconfig       # 编辑器配置
│
├── CLAUDE.md           # 协作指南
├── CHANGELOG.md        # 变更日志
├── README.md           # 项目自述
└── LICENSE             # 开源证书
```

## 许可证

本项目根据 GPL-2.0-only 许可证授权，详细内容请参阅 [LICENSE](LICENSE) 文件。
