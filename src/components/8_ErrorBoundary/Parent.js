import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {haserror:''}

  static getDerivedStateFromError(error){
    return {haserror:error}
  }

  componentDidCatch(error, info) {
    console.log("错误信息")
  }
  
  render() {
    return (
      <div>
        <h1>parent</h1>
        {this.state.haserror ? <h1>网络波动，请稍候</h1> : <Child/>}
      </div>
    )
  }
}
