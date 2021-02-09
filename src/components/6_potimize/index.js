import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {
  state = {car:'mazda3'}
  changeCar = () =>{
    this.setState({car:'ben c74'})
  }
  /* shouldComponentUpdate(nextProps, nextState) {
    if(this.state.car === nextState.car) return false
    else return true
  } */
  
  render() {
    console.log('partent render')
    return (
      <div>
        <h1>我的车{this.state.car}</h1>
        <button onClick={this.changeCar}>changeCar</button>
        <Child car={this.state.car}/>
      </div>
    )
  }
}

class Child extends PureComponent {
 /*  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.car !== '' && nextProps.car === this.props.car) return true
    else return false
  } */
  
  render() {
    console.log('child render')
    return (
      <div>
        <h1>我是child{this.props.car}</h1>
      </div>
    )
  }
}
