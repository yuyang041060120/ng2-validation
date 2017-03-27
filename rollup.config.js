const pluginTypescript = require('rollup-plugin-typescript');
const typescript = require('typescript');

module.exports = {
  entry: 'src/index.ts',
  dest: 'bundles/ng2-validation.umd.js',
  format: 'umd',
  sourceMap: true,
  moduleName: 'ng.validation',
  plugins: [
    pluginTypescript({
      typescript: typescript
    })
  ],
  globals: {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms'
  },
  external: [ '@angular/core', '@angular/forms' ]
};
