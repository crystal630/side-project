import React, {Component} from 'react';

import './App.css';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      currentInput1:"",
      currentInput2:"",
      currentInput3:"",
      
    }
  }
  inputChanged1=(event)=>{
    let inputValue=event.target.value;
    console.log(inputValue);
    this.setState({currentInput1:inputValue})
  }
  inputChanged2=(event)=>{
    let inputValue=event.target.value;
    console.log(inputValue);
    this.setState({currentInput2:inputValue})
  }
  inputChanged3=(event)=>{
    let inputValue=event.target.value;
    console.log(inputValue);
    this.setState({currentInput3:inputValue})
    
  }
  aaa=(event)=>{
   alert('Successfully Submit!')
    
  }
  
  
  
  render(){
  
    
     
  return (
    
    <div className="App">
   
     <h1>Share your suggestion on the plot!</h1>
    
     <h2>I want to keep：</h2>
     <input type="text" size="30" name="a" keep='keep' onInput={this.inputChanged1}></input>
     
     <h2>I want to delete：</h2>
     <input type="text" size="30" name="a"  delete='delete' onInput={this.inputChanged2}></input>
     
     <h2>I want to change：</h2>
     <input type="text" size="30" name="a" change='change' onInput={this.inputChanged3}></input>
  
     <h1>    </h1>
     
     <button onClick={this.aaa}>Submit!</button>
     
    </div>
    
    
    
  );
  }

}


export default App;
