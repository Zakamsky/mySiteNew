// const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const {terser} = require('rollup-plugin-terser');

module.exports = {
    input: 'src/assets/js/main.js',
    plugins: [commonjs()],
    output: {
        dir: 'dist/assets/js',
        format: 'cjs',
        sourcemap: 'inline',
        plugins: [terser()],
    },
};


