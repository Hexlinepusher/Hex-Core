/* @/core/src/lib.rs - 应用运行时初始化
 * - ./main.rs
 * - ../Cargo.toml */

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
