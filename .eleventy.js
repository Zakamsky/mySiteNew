//11ty plugins
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const pluginTOC = require('eleventy-plugin-toc')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");




// utils
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create a helpful production flag
const isProd = process.env.ELEVENTY_ENV === 'production'

module.exports = config => {

    // Markdown
    config.setLibrary(
        'md',
        markdownIt().use(markdownItAnchor)
    )

    config.addLayoutAlias('home', 'layouts/home.html');

    config.addPassthroughCopy('./src/images/');


    // Only minify HTML if we are in production because it slows builds _right_ down
    if (isProd) {
        config.addTransform('htmlmin', htmlMinTransform);
    }

    // Plugins
    config.addPlugin(eleventyNavigationPlugin);
    config.addPlugin(rssPlugin);
    config.addPlugin(pluginTOC, {
        tags: ['h2', 'h3'],
        ul: true,
        wrapperClass: 'page-nav',
        wrapperLabel: 'Table of content'

    })

    // collections:

    config.addCollection('work', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
    });

    config.addCollection('featuredWork', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(
            x => x.data.featured
        );
    });

    // Returns a collection of blog posts in reverse date order
    config.addCollection('blog', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

    // Returns a list of people ordered by filename
    config.addCollection('people', collection => {
        return collection.getFilteredByGlob('./src/people/*.md').sort((a, b) => {
            return Number(a.fileSlug) > Number(b.fileSlug) ? 1 : -1;
        });
    });


    // Add filters
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);

    // additional watchers:
    config.addWatchTarget('./src/assets')

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

    return {

        templateFormats: ['njk', 'md', 'html', '11ty.js'],
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
