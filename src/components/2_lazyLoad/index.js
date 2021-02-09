import React, { Component,lazy,Suspense} from 'react';
import {Link,Route} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
import Lazy from './Lazy'

const Home = lazy(() => import('./Home') )
const About = lazy(() => import('./About') )

class Myrouter extends Component {
  render() {
    return (
      <div>
        <h1>router_demo</h1>
        <Link to="/home">home</Link> &nbsp;
        <Link to="/about">about</Link> <hr/>
        <Suspense fallback={<Lazy/>}>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Suspense>
      </div>
    );
  }
}

export default Myrouter;