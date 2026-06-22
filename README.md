# Hex-Core

Hex-Core 是一个跨平台本地 AI Agent 应用模板，用于派生可定制提示词、工作流、变量、工具和聊天界面的桌面应用。

当前仓库处于模板基础阶段：工程骨架、桌面壳、前端入口、本地存储能力和质量检查工具已经接入，真实业务界面与 Agent 能力尚未展开。

## 快速开始

```powershell
npm install
npm run app:dev
```

常用检查：

```powershell
npm run type:check
npm run lint:check
npm run format:check
```

更多命令见 [命令速查](DOCUMENTS/Commands.md)。

## 文档索引

- [技术栈与模板能力](DOCUMENTS/TechStack.md) — 当前接入能力、预置能力和模板占位说明。
- [命令速查](DOCUMENTS/Commands.md) — 开发、构建、检查和清理命令。
- [.docs/](.docs/) — 本地开发过程文档区；各子目录 README 作为归属索引。

## 工作区结构

```text
@/
├── src/                         # 前端源码入口与界面组件
├── src-tauri/                   # Tauri 后端、桌面配置和 Rust 工程
├── DOCUMENTS/                   # 稳定公开文档
├── .docs/                       # 本地开发过程文档与归属索引
├── .github/workflows/           # 自动化检查
│
├── index.html                   # 前端 HTML 宿主页
├── package.json                 # npm 脚本、前端依赖和工程元信息
├── tsconfig.json                # TypeScript 编译检查配置
├── vite.config.ts               # Vite 与 Tauri 前端构建配置
├── eslint.config.js             # ESLint 检查规则
├── tailwind.config.js           # Tailwind CSS 内容扫描配置
│
├── .editorconfig                # 编辑器格式约束
├── .gitattributes               # Git 文本与二进制处理规则
├── .gitignore                   # Git 忽略规则
├── .prettierignore              # Prettier 忽略规则
├── .prettierrc.cjs              # Prettier 格式规则
│
├── CLAUDE.md                    # 项目协作规范
├── CHANGELOG.md                 # 变更日志
├── README.md                    # 项目入口说明
└── LICENSE                      # GPL-2.0-only 许可证
```

## 模板说明

- Tauri `identifier` 中的 `default` 是模板占位值，应在派生真实应用并准备发布前替换。
- `.docs/` 默认作为本地过程文档区，具体任务文档不纳入 Git；各子目录 README 用于说明内容归属。
- 当前欢迎页只是模板根组件，不代表最终产品界面。

## 许可证

本项目根据 GPL-2.0-only 许可证授权，详细内容请参阅 [LICENSE](LICENSE) 文件。
