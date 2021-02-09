import React, { Component } from 'react'

export default class Child extends Component {
  /* state = {person:[
    {id:'001',name:'lisi',age:18},
    {id:'002',name:'wangming',age:28},
    {id:'003',name:'zhangsan',age:38}
  ]} */
  state = {person:'tom'}
  render() {
    const {person} = this.state
    return (
      <div>
        <h1>child</h1>
        {
          person.map((item) =>{
            return <p key={item.id}>name:{item.name} age: {item.age}</p>
          })
        }
      </div>
    )
  }
}
