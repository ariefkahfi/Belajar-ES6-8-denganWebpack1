const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
    // module: {
    //     loaders: [
    //         {
    //             test: /\.js$/,
    //             loader: 'babel-loader',
    //             query: {
    //                 presets: ['env']
    //             }
    //         }
    //     ]
    // },
    // stats: {
    //     colors: true
    // },
    // devtool: 'source-map'
};
