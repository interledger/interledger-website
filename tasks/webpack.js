import path from 'path'

let webpackConfig = {
  mode: "production",
  watch: true,
  entry: './scripts/index.js',
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, '../src')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
}


module.exports = { webpackConfig }