const path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //
  // JS
  //
  // Compile the javascript together into bundle.js
  entry: ['./src/js/app.js', './src/scss/app.scss', './src/static/index.html'],

  devServer: {
    contentBase: './dist'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      //
      // HTML
      // Minify (in production) from /src into /dist
      //
      // Attempted this, in vain:
      // https://webpack.js.org/loaders/html-loader/#export-into-html-files
      {
        test: /\.html$/,
        // use: ['file-loader?name=[path][name].[ext]!extract-loader!html-loader']
        // https://stackoverflow.com/a/44480093/3098773
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: './src/static',
          outputPath: '/',
          publicPath: '/'
        }
      },

      //
      // SCSS
      //
      {
        // Inject CSS into bundle.js for live reloading during development,
        // but if in production, extract those styles to a dedicated file (bundle.css)
        // (Not sure if this is actually working)
        // https://webpack.js.org/loaders/sass-loader/#examples
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          // Use style-loader in development
          fallback: 'style-loader'
        })
      },

      //
      // IMAGES
      //
      
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: process.env.NODE_ENV === 'development'
    })
  ]
};
