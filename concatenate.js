const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        './dist/bar-chart-widget/runtime-es5.js',
        './dist/bar-chart-widget/polyfills-es5.js',
        './dist/bar-chart-widget/polyfills-es2015.js',
        './dist/bar-chart-widget/scripts.js',
        './dist/bar-chart-widget/main-es5.js'
      ];

      await fs.ensureDir('output');
      await concat(files, 'output/bar-chart-widget.js');
}
concatenate();
