import React from 'react';
import ReactDOM from 'react-dom'

/* class Sum extends React.Component {
  state = {count:0}
  myRef = React.createRef()
  add = () => {
    this.setState(state => ({count:state.count+1}))
  }

  componentDidMount() {
   this.timer = setInterval(() => {
    this.setState(state => ({count:state.count+1}))
   },1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  

  unMount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  showData = () => {
    console.log('111',this.myRef.current.value)
  }
  
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <h1>当前值{this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.unMount}>unMount</button>
        <button onClick={this.showData}>show</button>
      </div>
    );
  }
} */


function Sum() {
  const [count,setCount] = React.useState(0)
  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count+1)
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  },[])

  function add(){
    setCount(count => count+1)
  }

  function unMount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function showData(){
    console.log(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef}/>
      <h1>当前值{count}</h1>
      <button onClick={add}>add</button>
      <button onClick={unMount}>unMount</button>
      <button onClick={showData}>show</button>
    </div>
  )
}

export default Sum
