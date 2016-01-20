import React from 'react';

class Notes extends React.Component{
  render(){
    return(
      <div>
        <p>NOTES</p>
        {this.props.cowList[0].name}
      </div>
    )
  }
}

export default Notes;
