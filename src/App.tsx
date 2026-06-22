/* @/src/App.tsx - 主应用组件
 * - ./src/main.tsx
 * - ./src/index.css */

import type React from 'react';

/**
 * 渲染模板阶段的应用根界面，真实业务界面将在后续功能阶段替换。
 */
function App(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-100">
      <h1 className="text-4xl font-semibold tracking-tight">Hex-Core</h1>
      <p className="mt-4 max-w-xl text-center text-base text-slate-300">
        跨平台本地 AI Agent 应用模板。
      </p>
    </main>
  );
}

export default App;
