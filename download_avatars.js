var request = require('request');
var GITHUB_TOKEN = require('./secrets.js').GITHUB_TOKEN;

console.log('Welcome to the GitHub Avatar Downloader!');

var repoOwner = process.argv[2];
var repo = process.argv[3];

function getRepoContributors(repoOwner, repoName, callback) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'ryan-olejnik'
    }
  };

  request(options, function(err, response, body){
    if (err) throw err;
    var contributorList = JSON.parse(body);
    callback(contributorList);

  });

}

getRepoContributors('jquery', 'jquery', function(contributorList){
  console.log(contributorList);
});
