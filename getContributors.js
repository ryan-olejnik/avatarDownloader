var request = require('request');

var username = 'ryan-olejnik';
var github_API_key = '00404b73deb5309d0454edb0d880b5eed787d0f3';

var githubEndpoint = 'https://api.github.com/repos/jquery/jquery/contributors';

request(githubEndpoint, function(err, response, body){
  if (err) throw err;

  console.log('Body =', body);

});
