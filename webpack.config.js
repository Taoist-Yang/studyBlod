const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    //development devtool: 'cheap-module-eval-source-map',
    //production devtool: 'cheap-module-source-map',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './src/index.js',
        sub: './src/index.js'
    },
    devServer: {
        contentBase: './dist',
        open: true,
        proxy: {
            './api': 'http://location:3000'
        },
        port: 8000,
        hot: true,
        hotOnly: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: [["@babel/preset-env",{
                    useBuiltIns: 'usage'
                }]]
            }
        },{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 1024
                }
            }
        },{
            test: /\.(svg|eot|ttf)$/,
                use: {
                loader: 'file-loader',
                    options: {
                    name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 2048
                }
            }
        },{
            test: /\.scss$/,
            use:['style-loader',
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2
                    }
                },'css-loader','sass-loader']
        },{
            test: /\.vue$/,
            use: {
                loader: 'vue-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        publicPath: "/",
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    }
}

