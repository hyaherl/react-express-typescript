module.exports = {
    webpack: function (config, env) {
        config.module.rules[1].oneOf[2].options.cacheDirectory = false;
        config.module.rules[1].oneOf[3].options.cacheDirectory = false;

        config.plugins.forEach((p, i) => {
            if (p.constructor.name === 'ESLintWebpackPlugin') {
                config.plugins[i].options.cache = false;
            }
        })

        if (env === "production") {
            //JS Overrides
            config.output.filename = 'static/js/[name].js';
            config.output.chunkFilename = 'static/js/[name].chunk.js';

            //Media and Assets Overrides
            config.module.rules[1].oneOf[0].options.name = 'static/media/[name].[ext]';
            config.module.rules[1].oneOf[1].options.name = 'static/media/[name].[ext]';
            config.module.rules[1].oneOf[8].options.name = 'static/media/[name].[ext]';

            //CSS Overrides
            config.plugins.forEach((p, i) => {
                if (p.constructor.name === 'MiniCssExtractPlugin') {
                    config.plugins[i].options.filename = 'static/css/[name].css';
                    config.plugins[i].options.chunkFilename = 'static/css/[name].chunk.css';
                }
            })
        }
        
        return config;
    }
};
