// webpack.prod.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');
const glob = require('glob');
const PurifyCssWebpack = require('purifycss-webpack');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new PurifyCssWebpack({
            paths: glob.sync(path.join(__dirname, 'src/*.html')) // purify all unused style
        })
    ]
})