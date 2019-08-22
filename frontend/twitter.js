const FollowToggle = require('./follow_toggle.js');
const UserSearch= require('./users_search.js');

$(function () {
  $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn) );
  $('nav.users-search').each((i, el) => new UserSearch(el));
});