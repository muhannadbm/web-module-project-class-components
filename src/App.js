import React from 'react';
import TodoList from './components/TodoList'
const mylist = [
  {} 
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

  handleAddItem = (e) =>{
    e.preventDefault();
    // this.setState(this.state, {task: 'myname'})
    console.log('clicked')
    const newitem = {task: this.state.inputValue,id: Date.now(), completed: false }
    this.setState({todolist: [
      ...this.state.todolist, newitem]})
  }
  handleChanges= (e) =>{
    console.log(e.target.value)
    this.setState({...this.state, inputValue: e.target.value})
}
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list = {this.state.todolist } handleChanges = {this.handleChanges} inputValue = {this.state.inputValue} handleAddItem= {this.handleAddItem}/>
      </div>
    );
  }
}

export default App;
