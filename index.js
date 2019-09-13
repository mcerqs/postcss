var fs = require('fs');
var postcss = require('postcss');
var sprites = require('postcss-sprites');
const pfm = require('postcss-font-magician');

var css = fs.readFileSync('./css/style.css', 'utf8');
var opts = {
  stylesheetPath: './dist',
  spritePath: './dist/images/'
};
 
postcss([sprites(opts), pfm()])
.process(css, {
  from: './css/style.css',
  to: './dist/style.css'
})
.then(function(result) {
  fs.writeFileSync('./dist/style.css', result.css);
});