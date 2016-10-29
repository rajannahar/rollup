export default {
  entry: 'src/output/output1.js'
  	/* /this is the file we want Rollup to process. 
  	In most apps, this would be the main JavaScript file, which initializes everything and actually starts the show. */
  dest: '/js/main.js',
  	// this is the location where the processed scripts should be saved.
  format: 'iife',
  	/* Rollup supports several output formats. 
  	Since we’re running in the browser, we want to use an immediately-invoked function expression (IIFE). */
  sourceMap: 'inline',
  	/* it’s extremely helpful for debugging to provide a sourcemap. 
  	This option adds a sourcemap inside the generated file, which keeps things simple. */
};