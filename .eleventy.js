module.exports = config => {

    config.addLayoutAlias('home', 'layouts/home.html');

    config.addPassthroughCopy('./src/images/');

    return {

        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
