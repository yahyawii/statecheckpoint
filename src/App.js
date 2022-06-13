import React from 'react';
import './App.css';
import Assad from './components/Assad';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      Person:{fullName :'Marwa',bio :'FullStack Js',imgSrc :'/aaaaa.jpg' ,profession :'BlaBla!'},
      Show: false,
    }
  }
  handleShow=()=>this.setState({Show : !this.state.Show})
  render(){
    return(
      <div>
        <h1 style={{color:'red'}}>Chechpoint State</h1>
        <button onClick={this.handleShow}>Show</button>
        {
          this.state.Show && <Assad Person={this.state.Person}/>
        }
      </div>
    )
  }
  }
  export default App 

