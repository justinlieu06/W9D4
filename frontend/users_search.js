const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor(el){
    this.$el = el;
    this.input = el.input;
    this.ul = el.ul;
    this.$el.on('click', this.handleClick.bind(this));
  }

  handleClick() {
    const usersSearch = this;
    event.preventDefault();
    APIUtil.searchUsers(usersSearch.input.val);
  }

  handleInput(event) {
    if (this.$input.val() === ''){
      this.renderResults([]);
      return;
    }
    APIUtil.searchUsers(this.$input.val())
      .then(users => this.renderResults(users))

  }

  renderResults() {
    this.$ul.empty();

    
  }
}

module.exports = UserSearch;