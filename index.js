var fs = require('fs');
var color = require('colors');

fs.readdir('./', 'utf-8', function (err, files) {
  console.log('Folder content:'.blue);
  console.log('Output: ', files);
  fs.writeFile('./new.txt', files, function (err) {
    if (err) throw err;
    console.log('Data saved!'.red);
  });
});
