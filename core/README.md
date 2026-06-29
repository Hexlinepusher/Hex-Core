# core/

Rust 后端工作区。Tauri 只做壳（窗口、IPC、打包），业务逻辑由我们自己的内核实现。

## 结构

```text
core/
├── src/                # 后端源码
│
├── Cargo.toml          # Rust 配置&依赖
├── Cargo.lock          # Rust 依赖锁定
├── rustfmt.toml        # Rust 格式化
├── clippy.toml         # Rust 静态分析
│
├── tauri.conf.json     # Tauri 配置
├── build.rs            # Tauri 构建脚本
├── icons/              # Tauri 应用图标
└── capabilities/       # Tauri 权限白名单
```
