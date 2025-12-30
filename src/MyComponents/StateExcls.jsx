import React, { Component } from 'react'
import './StateExcls.css'
export default class StateExcls extends Component {
    constructor(props){
        super(props);
        this.state={liked:0,
                    unlike:0}
    }

  render() {
    return (
      <div style={{height:'100vh',display:'flex'}}>
        <div className='main'>
            <div>⭐ rating :{parseInt((this.state.liked)/((this.state.liked)+(this.state.unlike))*10   )}/10</div>
            <div>
                <button onClick={()=>{this.setState({count:this.state.liked+=1})}}>👍 Like({this.state.liked})</button>
                <button onClick={()=>{this.setState({count:this.state.unlike+=1})}}>👎 Dislike({this.state.unlike})</button>
            </div>
            <div>Total FeedBack : {(this.state.liked)+(this.state.unlike)}</div>
        </div>
      </div>
    )
  }
}

