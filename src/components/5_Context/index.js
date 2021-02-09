import React, { Component } from 'react';
import './index.css'

const MyContext = React.createContext()
const {Provider,Consumer} = MyContext
class A extends Component {
  state = {name:'tom',age:28}
  render() {
    const {name,age} = this.state
    return (
      <div className ='father'>
        <h1>我是A</h1>
        <h4>我的名字：{name}</h4>
        <Provider value={{name,age}}>
          <B/>  
        </Provider>
      </div>
    );
  }
}
class B extends Component {
  static contextType = MyContext
  render() {
    return (
      <div className ='son'>
        <h1>我是B</h1>
        <h4>我接收的名字：{this.context.age}</h4>
        <C/>
      </div>
    );
  }
}
/* class C extends Component {
  static contextType = MyContext
  render() {
    return (
      <div className ='grand'>
        <h1>我是C</h1>
        <h4>我接收的名字：{this.context.name},&nbsp;年龄：{this.context.age}</h4>
      </div>
    );
  }
} */

function C() {
  return (
    <div className ='grand'>
      <h1>我是C</h1>
      <h4>
        <Consumer>
          {
            value => `我接收的名字：${value.name}, 年龄：${value.age}`
          }
        </Consumer>
      </h4>
    </div>
  )
}

export default A;