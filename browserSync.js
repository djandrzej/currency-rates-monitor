const browserSync = require('browser-sync');
const fs = require('fs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const bundler = webpack(webpackConfig);

const BUILD_PATH = './dist',
    INDEX_HTML_PATH = './dist/index.html';

if (!fs.existsSync(BUILD_PATH)) {
    fs.mkdirSync(BUILD_PATH);
}

fs.writeFileSync(INDEX_HTML_PATH,
    `<html>
        <head>
            <title>Currency rates monitor</title>
        </head>
        <body>
            <div id="app"></div>
            <script src="bundle.js"></script>
        </body>
    </html>`
);

browserSync({
    server: {
        baseDir: webpackConfig.output.path,
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: '/',
                contentBase: '/',
                inline: true,
                hot: true
            }),
            webpackHotMiddleware(bundler)
        ]
    }
});
