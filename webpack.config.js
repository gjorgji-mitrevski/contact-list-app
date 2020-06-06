const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); 


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts'
    }
    
    // module: {
    //     rules: [
    //       { test: /\.js$/, use: 'raw-loader' }
    //     ]
    //   },
    //   plugins: [
    //     new HtmlWebpackPlugin({template: './src/index.html'})
    //   ]
};