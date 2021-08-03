// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends React.Component {
    render(){
        return(
            
            <div className="list"><h2>My Todo list</h2>
                <TodoForm inputvalue = {this.props.inputvalue} handleAdd = {this.props.handleAddItem} handleChanges ={this.props.handleChanges}  inputValue = {this.props.inputValue} />
                <button onClick={()=> this.props.clear()}>Clear Completed</button>
                {this.props.list.map(el => {
                    return <Todo toggle = {this.props.toggle }element = {el}/>
                })}

            </div>
        )
    }
}
export default TodoList