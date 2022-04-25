const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode: 'development',
    entry: "./src/index.js",
    devServer: {
        static: './dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html"
        }),
      ],
    output: {
        filename: "final.js",
        path: path.resolve(__dirname, 'dist')
    },
     module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}