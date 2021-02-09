import React, { Component } from 'react';

class Demo extends Component {
  state = {count:1}

  add = () => {
    // this.setState({count:this.state.count+1},() => {
    //   console.log('state: ',this.state.count)
    // })
    this.setState(state => ({count:state.count+1}))
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

export default Demo;