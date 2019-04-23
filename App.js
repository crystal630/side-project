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
     <img src={"https://images-na.ssl-images-amazon.com/images/I/51Mbanx0rlL._SX327_BO1,204,203,200_.jpg"} alt=''></img>
     <img src={"https://fearrington.com/wp-content/uploads/2018/03/love-and-ruin.jpg"} width="400px" height="500px" alt=''></img>
     <img src={"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/11/01/14/books-to-read.jpeg"} width="450px" height="500px" alt=''></img>

    </div>
    
    
    
  );
  }

}


export default App;
