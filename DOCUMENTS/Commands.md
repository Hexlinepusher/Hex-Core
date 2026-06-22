# 命令速查

Hex-Core 的常用命令以 [../package.json](../package.json) 为准。

## 开发

```powershell
npm run app:dev # 启动 Tauri 桌面应用开发环境
npm run frontend:dev # 只启动 Vite 前端开发服务器
```

## 检查

```powershell
npm run type:check # 运行 TypeScript 类型检查
npm run lint:check # 运行 ESLint 检查
npm run format:check # 检查公开代码与文档格式
```

## 构建

```powershell
npm run frontend:build # 构建前端产物
npm run app:build # 构建完整 Tauri 应用
```

## 修复与清理

```powershell
npm run lint:fix # 自动修复 ESLint 可修复问题
npm run format:fix # 使用 Prettier 格式化匹配文件
npm run clean # 清理前端构建产物和常见检查缓存
```
