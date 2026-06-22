/* @/src-tauri/src/main.rs - 桌面应用二进制入口
 * - ./src-tauri/src/lib.rs */

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    hex_core_app_lib::run();
}
