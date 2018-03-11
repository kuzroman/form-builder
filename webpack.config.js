const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

let components = 'components';

let PROD = 0;//JSON.parse(process.env.PROD_ENV || '0');

let pathTo = {
    dist: path.resolve(__dirname, 'dist'),
    js: path.resolve(__dirname, 'js/main.js'),
    css: path.resolve(__dirname, 'styles/main.sass'),
};

console.log(path.join(__dirname, 'js'));

// webpack --progress --colors --watch
module.exports = {

    devtool: 'source-map',

    entry: {
        js: pathTo.js,
        css: pathTo.css,
    },
    output: {
        // filename: PROD ? 'main.min.js' : 'main.js',
        filename: 'main.[name]',
        path: pathTo.dist
    },

    plugins: PROD ? [
        new ExtractTextPlugin('main.css'),
        // new webpack.ProvidePlugin({$: 'jquery'}),
        new webpack.optimize.UglifyJsPlugin()
    ] : [
        new ExtractTextPlugin('main.css'),
        // new webpack.ProvidePlugin({$: 'jquery'}),
    ],

    resolve: { // path to scripts for imports & require in .js
        modules: ['node_modules'],
        alias: {
            Components: path.resolve(__dirname, 'js/'+components+'/'),
            Data: path.resolve(__dirname, 'js/data/'),
            Js: path.resolve(__dirname, 'js/')
        }
    },

    module: {
        rules: [

            { // it need if we want use Uglify with es6
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },

            { // Extract css
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader',
                })
            },

            {test: /\.(png||svg)$/, loader: 'url-loader?limit=100000'},
            {test: /\.jpg$/, loader: 'file-loader'},

            {test: /\.vue/, loader: "vue-loader"}
            // { test: /\.twig$/, loader: "twig-loader" }
        ]
    }

};