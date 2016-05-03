import React, { PropTypes } from 'react'

class UserInfos extends React.Component {
  changeUserId(){
    this.props.changeUserId();
  }
  render () {
    return (
      <div>
        <div>UserName: {this.props.user.username}</div>
        <div>User Id: {this.props.user.id}</div>
        <button onClick={this.changeUserId.bind(this)}>Update username</button>
      </div>
    );
  }
}

export default UserInfos;
