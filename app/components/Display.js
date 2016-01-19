import React from 'react';
import Router from 'react-router'
import Info from './cowdata/Info'
import Calves from './cowdata/Calves'
import Notes from './cowdata/Notes'

class Display extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numbers: [1, 2, 3,],
      hash: {name: "Random String"},
      notes: ["a", "b", "c"]
    }
  }
  render(){
    return(
      <div>
        <div className="col-md-4">
          <Info name={this.props.params.name} hash={this.state.hash}/>
        </div>
        <div className="col-md-4">
          <Calves numbers={this.state.numbers}/>
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}/>
        </div>
      </div>
    )
  }
}

export default Display;
