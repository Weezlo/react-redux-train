import React from 'react'

class DeleteButton extends React.Component {
  render(){
    return <button onClick={this.props.deleteLetter}>delete</button>
  }
}

export default DeleteButton
