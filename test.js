var downloadImageByURL = require('./downloadImageByURL.js');

var contributors =   [
  
  { login: 'mathiasbynens',
    id: 81942,
    avatar_url: 'https://avatars1.githubusercontent.com/u/81942?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/mathiasbynens',
    html_url: 'https://github.com/mathiasbynens',
    followers_url: 'https://api.github.com/users/mathiasbynens/followers',
    following_url: 'https://api.github.com/users/mathiasbynens/following{/other_user}',
    gists_url: 'https://api.github.com/users/mathiasbynens/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/mathiasbynens/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/mathiasbynens/subscriptions',
    organizations_url: 'https://api.github.com/users/mathiasbynens/orgs',
    repos_url: 'https://api.github.com/users/mathiasbynens/repos',
    events_url: 'https://api.github.com/users/mathiasbynens/events{/privacy}',
    received_events_url: 'https://api.github.com/users/mathiasbynens/received_events',
    type: 'User',
    site_admin: false,
    contributions: 9 },
  { login: 'pbakaus',
    id: 43004,
    avatar_url: 'https://avatars1.githubusercontent.com/u/43004?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/pbakaus',
    html_url: 'https://github.com/pbakaus',
    followers_url: 'https://api.github.com/users/pbakaus/followers',
    following_url: 'https://api.github.com/users/pbakaus/following{/other_user}',
    gists_url: 'https://api.github.com/users/pbakaus/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/pbakaus/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/pbakaus/subscriptions',
    organizations_url: 'https://api.github.com/users/pbakaus/orgs',
    repos_url: 'https://api.github.com/users/pbakaus/repos',
    events_url: 'https://api.github.com/users/pbakaus/events{/privacy}',
    received_events_url: 'https://api.github.com/users/pbakaus/received_events',
    type: 'User',
    site_admin: false,
    contributions: 9 } ];

contributors.forEach(callback);

function callback(contributor) {
  var url = contributor.avatar_url;
  var filePath = `avatars/${contributor.login}.jpg`;

  downloadImageByURL(url, filePath);


}



