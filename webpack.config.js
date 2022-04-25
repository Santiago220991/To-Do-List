const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode: 'development',
    entry: "./index.js",
    devServer: {
        static: './dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template: "./template.html"
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