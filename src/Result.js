import './App.css';
import React from 'react';

class Result extends React.Component{

    render(){
      return(
        <div className='display'>
        <label>{this.props.value}</label>
        </div>
      )
    }
  }

export default Result;