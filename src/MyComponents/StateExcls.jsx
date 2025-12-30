import React, { Component } from 'react'
import './StateExcls.css'
export default class StateExcls extends Component {
    constructor(props){
        super(props);
        this.state={like:true,
                    count:0
        }
    }

    handleLike=()=>{
                    //change of color when click heart symbol
                    this.setState({like:!this.state.like}); //toggle function

                    // count value chnage when click button
                    this.setState({count:this.state.count+=1})
                  }

  render() {
    return (
      <div style={{display:'flex',height:'100vh'}}>
            <div className='main'>
                <button onClick={this.handleLike} id='heart'>{this.state.like ?'❤️':'🤍'}</button><br />
                <div id='counting' >Count :<span id='countingValue'> {this.state.count}</span></div>
          </div>
      </div>
    )
  }
}