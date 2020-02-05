// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    entry: "./src/electron.ts",
    target: "electron-main",
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }]
        }
      ]
    },
    output: {
      path: __dirname + "/dist",
      filename: "electron.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  }
];
