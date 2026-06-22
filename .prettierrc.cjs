/* @/.prettierrc.cjs - 代码格式化规则
 * - ./.prettierignore
 * - ./package.json */

module.exports = {
  semi: true, // 分号强制生效，符合 TypeScript 风格
  singleQuote: true, // 字符串用单引，减少转义
  jsxSingleQuote: false, // JSX 属性用双引，遵循 HTML 惯例
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false, // JSX 闭合符独占一行
  arrowParens: 'always',
  trailingComma: 'es5',
  quoteProps: 'as-needed',
  endOfLine: 'lf', // 跨平台一致性
};
