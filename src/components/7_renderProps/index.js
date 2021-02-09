import React, { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <h1>我是Parent</h1>
        <A render={name => <B name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {
  state = {name:'tom'}
  render() {
    return (
      <div>
        <h1>我是A</h1>
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h1>我是B {this.props.name}</h1>
      </div>
    )
  }
}
