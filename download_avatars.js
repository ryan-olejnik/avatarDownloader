var request = require('request');
var downloadImageByURL = require('./downloadImageByURL.js');
var getRepoContributors = require('./getContributors.js');

var GITHUB_TOKEN = require('./secrets.js').GITHUB_TOKEN;

console.log('Welcome to the GitHub Avatar Downloader!');

var repoOwner = process.argv[2];
var repo = process.argv[3];

function callback(contributor) {
  var url = contributor.avatar_url;
  var filePath = `avatars/${contributor.login}`;
  downloadImageByURL(url, filePath);
}

if (repoOwner && repo){
  getRepoContributors(repoOwner, repo, callback);
} else {
  console.log('Input Invalid! Please enter in the format: \nnode download_avatars.js <Repository Owner> <Repository>');
}




