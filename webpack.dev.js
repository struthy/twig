/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
require("@babel/polyfill");

module.exports = {
  devtool: "source-map",
  mode: "development",

  entry: {
    app: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },

  resolve: {
    extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              cacheDirectory: true,
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
};
