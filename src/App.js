import React from "react";


class App extends React.Component{
  state = {
    isLoding: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoding: false});
    }, 3000);
  }

render() {
  const {isLoding} = this.state;
  return (
    <div>{isLoding ? 'Loading...' : 'We are ready'}</div>
  )
}
}



export default App;