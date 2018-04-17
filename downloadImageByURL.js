var request = require('request');
var fs = require('fs');

module.exports = function downloadImageByURL(url, filePath){
  var destinationFilename = filePath.split('/')[1];

  request(url +'/' + filePath)
  .on('error', function(err){throw err;})
  .pipe(fs.createWriteStream(`./avatars/${destinationFilename}`));
};
