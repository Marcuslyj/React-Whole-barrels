const path = require('path');

module.exports = {
    // 模式，表示dev环境
    mode: 'development',
    // 入口文件
    entry: '../src/index.js',
    // 让 webpack 能够去处理那些非 JavaScript 文件
    module: {
        rules: [{
            test: /.js$/,
            exclude: /node_modules/, // 排除node_modules中的代码
            use: [{
                loader: 'babel-loader'
            }],
        }]
    },
    // 插件
    plugins: {},
    output: {
        filename: 'bundle.js', // 打包后文件名称
        path: path.resolve(__dirname, '../dist')
    }
}