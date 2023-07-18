const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: process.env.VUE_API_SERVICE,
                changeOrigin: true,
                ws: false,
            },
        },
    },
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'public',
                        globOptions: {
                            ignore: ['**/assets/**', '**/index.html'],
                        },
                    },
                ],
            }),
        ],
    },

    publicPath: '/',
    outputDir: path.resolve(__dirname, '../main/resources/static'),
};
