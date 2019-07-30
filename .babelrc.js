module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
          "corejs": false, // 默认值，可以不写
          "helpers": true, // 默认，可以不写
          "regenerator": false, // 通过 preset-env 已经使用了全局的 regeneratorRuntime, 不再需要 transform-runtime 提供的 不污染全局的 regeneratorRuntime
          "useESModules": true, // 使用 es modules helpers, 减少 commonJS 语法代码
      }
    ]
  ],
  presets: [
    [
      "@babel/preset-env",

      {
          "modules": false,
          "useBuiltIns": 'usage',
           // 不需要手动import '@babel/polyfill'(加上也无妨，编译时会自动去掉), 且会根据 .browserslist + 业务代码使用到的新 API 按需进行 polyfill。
      }
    ]
  ]
}
