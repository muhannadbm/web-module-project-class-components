import React from 'react';
import './components/Todo.css'
import TodoList from './components/TodoList'
const mylist = [
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todolist : mylist,
      inputValue: ''
    }
  }
  handleClear = () => {
    console.log('inside clear')
    if(this.state.todolist){
      let myarry = this.state.todolist.filter(el => el.completed !== true )

      this.setState({todolist: myarry}) } 
  }
  handleAddItem = (e) =>{
    e.preventDefault();
    // this.setState(this.state, {task: 'myname'})
    const newitem = {task: this.state.inputValue,id: Date.now(), completed: false }
    this.setState({todolist: [
      ...this.state.todolist, newitem]})
    this.setState({inputValue: ''})
  }
  handleChanges= (e) =>{

    this.setState({...this.state, inputValue: e.target.value})
}
handleToggle = (id)=>{
  if(this.state.todolist){
let myarry = this.state.todolist.map(el => {
  if (el.id === id){
    return {task: el.task, completed: !el.completed, id: el.id} }
  else return el} )
  console.log(myarry)
this.setState({todolist: myarry}) } 
}
  render() {
    return (
      <div className= "container">
        <h1>Welcome to your Todo App!</h1>
        <TodoList inputvalue = {this.state.inputValue }clear = {this.handleClear} toggle = {this.handleToggle} list = {this.state.todolist } handleChanges = {this.handleChanges} inputValue = {this.state.inputValue} handleAddItem= {this.handleAddItem}/>
      </div>
    );
  }
}

export default App;
