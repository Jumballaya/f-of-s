const fs = require('fs');
const postcss = require('postcss');
const atVariables = require('postcss-at-rules-variables');
const atImport = require('postcss-import');
const atEach = require('postcss-each');
const atFor = require('postcss-for');
const customProps = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const nested = require('postcss-nested');
const pseudo = require('postcss-pseudoelements');
const responsify = require('postcss-responsify');
const autoprefixer = require('autoprefixer')({browsers: ['last 1 version']});
const calc = require('postcss-calc');


// Media Query breakpoints for postcss-responsify
const breakpoints = [
{ prefix: 'xs-', mediaQuery: '(max-width: 480px)' },
{ prefix: 'sm-', mediaQuery: '(min-width: 480px)' },
{ prefix: 'md-', mediaQuery: '(min-width: 630px)' },
{ prefix: 'nrw-', mediaQuery: '(min-width: 720px)' },
{ prefix: 'lg-', mediaQuery: '(min-width: 800px)' },
{ prefix: 'mn-', mediaQuery: '(min-width: 960px)' },
{ prefix: 'xl-', mediaQuery: '(min-width: 1200px)' },
{ prefix: 'hdr-', mediaQuery: '(min-width: 1440px)' },
];


// PostCSS entry file
const pcss = fs.readFileSync('src/index.pcss', 'utf8');


// Process the pcss with postcss
const output = postcss()
  .use(atVariables)
  .use(atEach())
  .use(atImport({
    plugins: [
      require('postcss-at-rules-variables')({}),
      require('postcss-import'),
    ]
  }))
  .use(customProps())
  .use(customMedia())
  .use(pseudo())
  .use(nested())
  .use(responsify({breakpoints}))
  .process(pcss, {
    from: 'src/index.pcss',
  })

output.then(val => {
  fs.writeFileSync('dist/index.css', val.css);
})
