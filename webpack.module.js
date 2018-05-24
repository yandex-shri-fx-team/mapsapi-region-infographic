module.exports = {
    mode: 'production',
    entry: './src/Regionmap.js',
    output: {
        filename: 'regionmap.min.js',
        path: __dirname + '/umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
