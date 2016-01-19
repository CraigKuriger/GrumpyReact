import React from 'react';

class Info extends React.Component{
  render(){
    return(
      <div>
        <p>INFO</p>
        <p>Name: {this.props.name}</p>
        <p>Hash: {this.props.hash.name}</p>
      </div>
    )
  }
}

Info.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Info;
