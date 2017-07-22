module.exports={
    entry: './js/main.js',
    output:{
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }


}

