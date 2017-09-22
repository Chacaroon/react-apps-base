const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {publicPath, clientBuildPath, clientSourcePath} = require('./application.config')

const IS_DEV = (process.env.NODE_ENV !== 'production');

const extractTextPlugin = new ExtractTextPlugin({
    filename: 'style.css',
    disable: IS_DEV
});

module.exports = {
    entry: [
        './src/index.js'
    ]

    , output: {
        path: clientBuildPath
        , filename: '[name].bundle.js'
        , publicPath
    }

    , module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.s?css$/,
            use: extractTextPlugin.extract({
                fallback: {
                    loader: 'style-loader',
                    options: {sourceMap: IS_DEV}
                }
                , use: [{
                    loader: 'css-loader',
                    options: {
                        localIdentName: (IS_DEV ? '[path]-[name]_[local]' : '[name]_[local]_[hash:5]'), // [hash:base64]
                        modules: true,
                        sourceMap: IS_DEV
                    }
                }
                , {
                    loader: 'sass-loader',
                    options: {sourceMap: IS_DEV}
                }
                , {
                    loader: 'postcss-loader',
                    options: {sourceMap: IS_DEV}
                }]
            })
        }]
    }
    , plugins: [
        extractTextPlugin,
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module) => {
                if (module.resource && (/^.*\.(s?css)$/).test(module.resource)) {
                    return false;
                }
                return (module.context && module.context.includes('node_modules'));
            }
        })
    ]
    , resolve: {
        modules: [
            clientSourcePath,
            'node_modules'
        ]
        , extensions: [".js", ".jsx"]
    }
}