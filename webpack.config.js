// webpack.config.js
const path = require('path');

process.traceDeprecation = true;    //显示详细错误

module.exports = {
    entry: path.join(__dirname, "/src/js/index.js"), // 入口文件
    output: {
        path: path.join( __dirname, "/dist"), //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./dist",
        port: "8088",
        inline: true,
        historyApiFallback: true,
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                {
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
        ]
    }
}