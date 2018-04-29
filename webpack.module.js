module.exports = {
    mode: 'production',
    entry: './src/RegionInfographic/RegionInfographic.js',
    output: {
        filename: 'region-infographic.min.js',
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
