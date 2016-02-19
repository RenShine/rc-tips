var path = require('path');

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            exclude: /node_modules/,
            loader: 'babel?presets[]=react,presets[]=es2015' // 加载模块 "babel" 是 "babel-loader" 的缩写

        },{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    }
};

module.exports = config;