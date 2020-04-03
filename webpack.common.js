// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.join(__dirname, "/src/js/index.js"),
    output: {
        path: path.join( __dirname, "/dist"),
        filename: "js/[name]-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },{
                    loader: "css-loader"
                },{
                    loader: 'postcss-loader'
                }, {
                    loader: "sass-loader"
                }]
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin('Webpack demo banner'),    //Adds a banner to the top of each generated chunk
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/index.template.html")
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-bundle.css',
        })
    ]
}