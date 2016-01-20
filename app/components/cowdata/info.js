import React from 'react';

class Info extends React.Component{

  render(){
    return(
    <ul className="list-group">
      {this.props.cowList.map((object, index) => (
        <li className="list-group-item" key={index}>ID: {object.id} --- Name: {object.name}</li>
      ))}
    </ul>
    )
  }
}

// Info.propTypes = {
//   name: React.PropTypes.string.isRequired
// }

export default Info;
