import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
constructor(props){
  super(props);
  console.log("hello");
}

  state ={  //컴포넌트의 데이터를 넣는 곳
    count: 0 ,
  };

  add = () => {
    console.log("add");
    this.setState(current => ({ count: current.count+1})); //current state를 호출
    //this.state.count += 1; render를 실행하지 않아 화면이 안변함
  };

  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count-1}));
    //this.state.count -= 1;
  };

  componentDidMount(){
    console.log("component rendered")
  }

  componentDidUpdate(){
    console.log("just updated")
  }
  componentWillUnmount(){
    console.log("Unmount")
  }


  render(){
    console.log("render");
    return <div>
      <h1>the num is {this.state.count}</h1>
      <button onClick={this.add}> + </button>
      <button onClick={this.minus}> - </button>
    </div>
    
    
  }
}

export default App;
