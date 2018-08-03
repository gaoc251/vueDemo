var path= require("path")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist', 
        publicPath: '/static/', 
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: ['css-loader', "postcss-loader"]
                            }),
                            less: ExtractTextPlugin.extract({
                                use: ["css-loader", "postcss-loader", "less-loader"]
                            })
                        }
                    }
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader", "less-loader"]
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'    // 将图片都放入 images 文件夹下，[hash:7]防缓存
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入 fonts 文件夹下
                    }
                }]
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                include: [path.resolve(__dirname, 'src')]
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/style.css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.tpl.html'
        }),
    ]
}