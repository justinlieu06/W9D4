const APIUtil = require('./api_util.js');

class FollowToggle {

  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user_id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "unfollowed"){
      this.$el.text("Follow!");
      this.$el.prop('disabled', false);
    }
    else {
      this.$el.text("Unfollow!")
      this.$el.prop('disabled', false);
    }
  }

  handleClick(){
    const followToggle = this;
    event.preventDefault();

    if (this.followState === 'followed') {
      APIUtil.unfollowUser(followToggle.userId);
      followToggle.followstate = "unfollowed";
      followToggle.render();
    } else if (this.followState === 'unfollowed') {
      APIUtil.followUser(followToggle.userId);      
      followToggle.followstate = "followed";
      followToggle.render();
    }
  }

}
module.exports = FollowToggle;