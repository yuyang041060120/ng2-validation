const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    main: './example/main',
    vendor: './example/vendor',
    polyfills: './example/polyfills'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/example/dist',
    filename: 'bundle.js',
    publicPath: '/ng2-validation/example/dist/'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /\.d\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.less$/,
        loaders: [ 'raw-loader', 'less-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'vendor', 'polyfills' ],
      filename: '[name].js'
    })
  ]
};