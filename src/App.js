import React, { Component } from 'react';
// import Demo from './components/1_setState'
// import MyRouter from './components/2_lazyLoad'
// import Sum from './components/3_hooks'
// import Demo from './components/4_Fragment'
// import Demo from './components/5_Context'
// import Demo from './components/6_potimize'
// import Demo from './components/7_renderProps'
import Demo from './components/8_ErrorBoundary/Parent'


class App extends Component {
  render() {
    return (
      <div>
        {/* <Demo/> */}
        {/* <MyRouter/> */}
        {/* <Sum/> */}
        <Demo></Demo>
      </div>
    );
  }
}

export default App;
