const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/js/main.ts',
    mode: "development",
    devtool: 'source-map',
    plugins: [new MiniCssExtractPlugin({filename: "[name].css"}),
        new HtmlWebpackPlugin({template: "./src/main.html"})],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
                ],
            },
            { test: /\.hbs$/, loader: "handlebars-loader" },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.`ts', '.js'],
    },
    devServer: {
        port: 3030,
        open: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}