import React from "react";


class App extends React.Component{
constructor(props) {
  super(props);
  console.log('집 보내주세요');
}

componentDidMount() {
  console.log("집 가고 싶다");
}

componentDidUpdate() {
  console.log("자고싶다");
}
state = {
count: 0,
};


add= () => {
    console.log('add');
    this.setState(current => ({count: current.count+1}));
};

minus= () => {
  console.log('minus');
    this.setState(current => ({count: current.count-1}));
};

reset= () => {
  console.log('reset');
    this.setState({count:0});
};

render() {
  console.log('집 보내주세요');
  return (
  <div>
    <h1> Class Component {this.state.count}</h1>
    <button onClick={this.add}>Add </button> 
    <button onClick={this.minus}> Minus </button> 
    <button onClick={this.reset}> reset </button> 
    </div>
  );
}
}



export default App;