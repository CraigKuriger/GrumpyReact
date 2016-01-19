import React from 'react';

class Calves extends React.Component{
  render(){
    return(
      <div>
        <p>CREATURES</p>
        CREATURES {this.props.numbers}
      </div>
    )
  }
}

Calves.propTypes = {
  numbers: React.PropTypes.array.isRequired
}

export default Calves;
