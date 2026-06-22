# 技术栈与模板能力

Hex-Core 是 Tauri 2 + React 19 + TypeScript 的本地 AI Agent 应用模板。

## 已接入

- Tauri 2：桌面应用壳、窗口、打包入口和前后端桥接。
- React 19：前端界面组件；当前仍是模板欢迎页。
- TypeScript：前端类型检查。
- Vite：前端开发服务器和构建流程。
- Tailwind CSS 4：轻量样式入口。
- Tauri SQL Plugin / SQLite：本地持久化能力。
- ESLint / Prettier / EditorConfig：代码质量和格式约束。
- GitHub Actions：工作区骨架检查。

## 预置能力

- Zustand：后续前端状态管理。
- reqwest：后续后端 HTTP 通信。
- serde / serde_json：后续后端数据序列化与 JSON 交互。
- tauri-plugin-log：调试构建中的日志能力。

## 模板占位

- Tauri `identifier` 中的 `default` 应在派生真实应用并准备发布前替换。
- 默认窗口标题、尺寸和权限集应随真实应用需求调整。
- 当前欢迎页只是模板根组件，不代表最终产品界面。

## 暂不预置

- 具体 LLM Provider SDK。
- 前端路由库。
- 数据库 ORM。
- 测试框架。
- UI 组件库。

这些能力应在真实业务需求明确后再引入。
