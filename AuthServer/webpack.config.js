/// <binding BeforeBuild='Run - Development' />
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['bootstrap', 'jquery', './Content/Styles/Vendor.scss'],
        app: ['./Content/Scripts/main.js', './Content/Styles/app.scss']
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot', 'scripts'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../styles/fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../styles/[name].bundle.css'
        })
    ]
};