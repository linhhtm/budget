// webpack.config.js
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './main.js',
  // Where should the compiled file go?
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    // rules: [
    // ],
    // Special compilation rules
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      
      {
        // Ask webpack to check: If this file ends with .vue, then apply some transforms
        test: /\.vue$/,
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /(node_modules|bower_components)/,
        // Transform it with vue
        
        loader: 'vue-loader',
        // options: {
        //   loaders: {
        //     scss: ExtractTextPlugin.extract({
        //       use: 'css-loader!sass-loader',
        //       fallback: 'vue-style-loader'
        //     }),
        //     sass: ExtractTextPlugin.extract({
        //       use: 'css-loader!sass-loader?indentedSyntax',
        //       fallback: 'vue-style-loader'
        //     })
        //   }
        // }
      },
      
    ],
    
  },
  // resolve: {
  //   extensions: [".tsx", ".ts", ".js", "scss"]
  // },
  devServer: {
    port: 8081
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}

// module.exports.plugins = (module.exports.plugins || []).concat([
//   new ExtractTextPlugin({
//     filename: 'style.css'
//   })
// },

