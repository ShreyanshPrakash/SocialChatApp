const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    watch : true,   // to keep wtahcing the changes
    target: 'web',  // to target an env defined in webpack itself package.node,web,aync-node etc
    devtool: 'source-map',  // so that devlopers can debug
    entry : '',

    output: {
        path:'',
        publicPath: '',
        filename: '[name].js'
    },

    modules: {
        rules: [
            {
                test : '',
                exclude: '',
                use: {
                    loader: ''
                }
            }
        ]
    },

    plugin: [
        new HtmlWebpackPlugin( {
            template: '',
            filename: '',
            excludeChunks: ['server']
        })
    ]

}