/// <binding BeforeBuild='Run - Production' />
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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../Styles/[name].bundle.css'
        })
    ]
};