const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = config => {

    config.addLayoutAlias('home', 'layouts/home.html');

    config.addPassthroughCopy('./src/images/');

    // collections:

    config.addCollection('work', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
    });

    config.addCollection('featuredWork', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(
            x => x.data.featured
        );
    });

    config.addCollection('blog', collection => {
        // Returns a collection of blog posts in reverse date order
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
