const path = require('path');
const rollup = require('rollup');
const loadConfigFile = require('rollup/dist/loadConfigFile');
const {resolve} = require('path');

const rollupConfigFile = resolve(__dirname, '../../../rollup.config.js');


const ENTRY_POINTS = {
    main: 'main.js',
    test: 'test.js',
}

module.exports = class {
    // again, the data() function does esentially the same
    // as defining front matter in a markdown file.
    async data() {
        return {
            // define a custom property "entryPoints" first
            entryPoints: ENTRY_POINTS,

            // then take each of the files in "entryPoints"
            // and process them separately as "bundleName"
            pagination: {
                data: 'entryPoints',
                alias: 'bundleName',
                size: 1
            },

            // for each bundle, output a different Javascript file
            permalink: ({ bundleName }) => `/assets/scripts/${bundleName}.js`,

            // keep the scripts.11ty.js itself out of collections
            eleventyExcludeFromCollections: true
        }
    }


    async compileJS(bundleName) {
        const entryPoint = path.join(__dirname, ENTRY_POINTS[bundleName])


        return loadConfigFile(rollupConfigFile ).then(
            async ({options, warnings}) => {
                const option = options[0];

                // warnings wrap:
                console.log(`We currently have ${warnings.count} warnings`);
                warnings.flush();

                option.input = entryPoint;

                const bundle = await rollup.rollup(option);
                await Promise.all(option.output.map(bundle.write));

            }
        );

        // return js
    }

    // output the compiled JS as file contents
    async render ({ bundleName }) {

        try {
            await this.compileJS(bundleName)
            return
        } catch (err) {
            console.log(err)
            return null
        }
    }
}
