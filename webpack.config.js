module.exports = {
  entry: ['./client/client.js'],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devServer:{
    inline:true,
    port:3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
