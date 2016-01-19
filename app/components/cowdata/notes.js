import React from 'react';

class Notes extends React.Component{
  render(){
    return(
      <div>
        <p>NOTES</p>
        NOTES {this.props.numbers}
      </div>
    )
  }
}

export default Notes;
