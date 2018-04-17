var request = require('request');
var GITHUB_TOKEN = require('./secrets.js').GITHUB_TOKEN;

// get the list of contributors to a user-specified GitHub Repository, and call 'callback' function on contributor in the list:
module.exports = function getRepoContributors(repoOwner, repoName, callback) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'ryan-olejnik',
      'Authorization': 'token ' + GITHUB_TOKEN
    }
  };

  request(options, function(err, response, body){
    if (err) throw err;
    var contributorList = JSON.parse(body);
    // console.log(contributorList);
    if (contributorList.length > 0){
      contributorList.forEach(callback);
    } else {
      console.log('No contributors found for the specified repository');
    }

  });
};


