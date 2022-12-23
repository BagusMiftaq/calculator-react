import './App.css';
import React from 'react';
import Result from './Result'



class App extends React.Component{

state= {
  displayNumber : "0",
  operator: null,
  firsNumber: null
}

clearCalculator=()=>{
  this.setState({
    displayNumber : "0",
    operator : null,
    firsNumber : null,
  })
}

inputDigit=(digit)=> {
  if (this.state.displayNumber === "0") {
    this.setState({
      displayNumber : digit.target.innerText  
    })
  } else {
    this.setState({
      displayNumber : this.state.displayNumber + digit.target.innerText
    })
  }
}

handleOperator=(operator)=>{

  if(this.state.operator==null){
    this.setState({
      operator : operator.target.innerText,
      firsNumber : this.state.displayNumber,
      displayNumber : ""
  })
  } else {
    if(this.state.displayNumber===""){
      this.setState({
        operator : operator.target.innerText,
        displayNumber : ""
    })
    } else {
      this.setState({
        operator : operator.target.innerText,
        firsNumber : this.state.displayNumber,
        displayNumber : ""
    })
    }
    
  }  
}

performCalculation=()=>{
  if (this.state.firsNumber == null || this.state.operator == null){
      alert("Operatornya mana Bwwangg?");
      return;
  }

  let result = 0;
  if (this.state.operator === "+") {
      result = parseInt(this.state.firsNumber) + parseInt(this.state.displayNumber);
  } else if (this.state.operator === "-"){
      result = parseInt(this.state.firsNumber) - parseInt(this.state.displayNumber);
  }
  else if (this.state.operator === "x"){
    result = parseInt(this.state.firsNumber) * parseInt(this.state.displayNumber);
  } else {
    result = parseInt(this.state.firsNumber) / parseInt(this.state.displayNumber);
  }
  this.setState({
    displayNumber : result
  })
}

NUMBER = [
    {value:"7"},
    {value:"8"},
    {value:"9"},
    {value:"4"},
    {value:"5"},
    {value:"6"},
    {value:"1"},
    {value:"2"},
    {value:"3"},

  ]

  OPERATION = [
    {value:"+"},
    {value:"-"},
    {value:"/"},
    {value:"x"}
  ]

  render(){
    return(
    <>
    <div className='wrapper'>
      <Result value={this.state.displayNumber}/>
    <div className='calculator'>
      <div className='numberBlock'>
      {this.NUMBER.map((item)=>(
        <button onClick={this.inputDigit}>{item.value}</button>
      ))}
        <button onClick={this.clearCalculator} className='delete'>CE</button>
        <button onClick={this.inputDigit}>0</button>
        <button onClick={this.performCalculation} className='equals'>=</button>
      </div>
      <div onClick={this.handleOperator} className='operationBlok'>
      {this.OPERATION.map((item)=>(
        <button>{item.value}</button>
      ))}
      </div>
    </div>
    </div>
    </>  
    )
  }
} 

export default App;
