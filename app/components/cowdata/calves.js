import React from 'react';

class Calves extends React.Component{
  render(){
    return(
      <div>
        <h4>COW</h4>
        <p>NAME: {this.props.cowDetails.name}</p>
        <p>Money: ${this.props.cowDetails.money}</p>
        <img src={this.props.cowDetails.image_url} className="img-responsive"/>
      </div>
    )
  }
}

// Calves.propTypes = {
//   cowNumbers: React.PropTypes.array.isRequired
// }

export default Calves;
