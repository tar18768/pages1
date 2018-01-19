import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
const students =[
  {id:12, name:'mick', score: 23},
  {id:18, name:'yoyo', score: 27},
  {id:20, name:'yep', score: 22},
]

const StudentLine = (props) => (
  <div>{props.id} {props.name} = {props.score}</div>
  
)

class App extends Component {
  render() {
    return (
      <div>{
          _.map(students, students => <StudentLine{...students} key = {students.id}/>)
      }</div>
    );
  }
}

export default App;
