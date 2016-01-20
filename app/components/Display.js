import React from 'react';
import Router from 'react-router'
import Info from './cowdata/Info'
import Calves from './cowdata/Calves'
import Notes from './cowdata/Notes'
import getCowInfo from './utils/helpers'

class Display extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cowList: [1, 2, 3,],
      cowDetails: {name: "Random String"},
      notes: ["a", "b", "c"]
    }
  }
  componentWillMount(){
    this.init(this.props.params.cowId)
  }
  init(cowId){
    getCowInfo(cowId)
      .then((data) => {
        this.setState({
          cowList: data.cowList,
          cowDetails: data.cowDetails
        })
      })
  }
  componentWillReceiveProps(nextProps){
    this.init(nextProps.params.cowId)
  }
  render(){

    return(
      <div>
        <div className="col-md-4 well">
          <Info cowList={this.state.cowList}/>
        </div>
        <div className="col-md-4 well">
          <Calves cowDetails={this.state.cowDetails}/>
        </div>
        <div className="col-md-4 well">
          <Notes cowList={this.state.cowList}/>
        </div>
      </div>
    )
  }
}

export default Display;
