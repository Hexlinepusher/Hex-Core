# 命令速查

Hex-Core 的常用命令以 [../package.json](../package.json) 为准。

## 检查

```powershell
npm run type:check # 运行 TypeScript 类型检查
npm run form:check # 检查代码与公开文档格式
npm run lint:check # 运行 ESLint 检查
npm run rust:check # 运行 Rust 格式检查与静态分析
```

## 修复

```powershell
npm run form:fix # 运行 Prettier 格式化
npm run lint:fix # 修复 ESLint 可修复问题
npm run rust:fix # 运行 Rust 格式化 & 修复 Clippy 可修复问题
```

## 开发

```powershell
npm run web:dev # 启动 Vite 开发服务器
npm run app:dev # 启动 Tauri 开发环境
```

## 构建

```powershell
npm run web:build # 构建前端产物
npm run app:build # 构建完整应用
```

## 清理

```powershell
npm run clean # 清理前端构建产物和常见缓存
```
