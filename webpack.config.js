const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
    devServer: {
        open: true,
        host: "localhost",
        watchFiles: 'index.html',
    },
    context: path.join(__dirname, 'docs'),
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './assets/', to: './assets/' },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: 'body',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};
