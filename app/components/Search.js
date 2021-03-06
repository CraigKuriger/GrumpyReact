// var React = require('react');
// var Router = require('react-router');
//
// var Search = React.createClass({
//   mixins: [Router.History],
//   getRef: function(ref){
//     this.cowIdRef = ref;
//   },
//   handleSubmit: function(){
//     var cowId = this.cowIdRef.value;
//     this.cowIdRef.value = '';
//     this.history.pushState(null, "display/" + cowId)
//   },
//   render: function(){
//     return (
//       <div className="col-sm-12">
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group col-sm-7">
//             <input type="text" className="form-control" ref={this.getRef} />
//           </div>
//           <div className="form-group col-sm-5">
//             <button type="submit" className="btn btn-block btn-primary">Search</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// });
//
// module.exports = Search;

import React from 'react';
import Router from 'react-router';


class Search extends React.Component {
  getRef(ref){
    this.cowIdRef = ref;
    console.log(this.cowIdRef.value)
  }
  handleSubmit(){
    const cowId = this.cowIdRef.value
    this.cowIdRef.value = '';
    this.props.history.pushState(null, "display/" + cowId)
  }
  render(){
    return(
      <div>
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-5">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)}/>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search</button>
          </div>
        </form>
      </div>
    )
  }
}
Search.PropTypes = {
  history: React.PropTypes.object.isRequired
}

export default Search;
