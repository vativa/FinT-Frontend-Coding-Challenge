import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
    entry: {
        bundle: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true,
        host: 'world-clocks.mw',
        port: '3000'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'template.html'),
            filename: path.join(__dirname, 'build', 'index.html'),
            favicon: path.join(__dirname, 'src/assets/img', 'favicon.png')
        }),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, 'src', '.htaccess'), to: path.join(__dirname, 'build') },
        ])
    ]
};
