const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
    'examples',
    'examples/main',
    'examples/dataset'
];

module.exports = {
    entry: pages.reduce((acc, path) => Object.assign(acc, {
        [path]: `./${path}/index.${path === 'examples' ? 'html' : 'js'}`
    }), {}),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.geojson$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [].concat(
        pages.map((path) => {
            return new HtmlWebpackPlugin({
                chunks: [path],
                template: `${path}/index.html`,
                filename: path === 'examples' ?
                    'index.html' :
                    `${path.replace('examples/', '')}/index.html`
            });
        })
    )
};
