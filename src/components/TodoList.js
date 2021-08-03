// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends React.Component {
    render(){
        return(
            
            <div>My list
                <TodoForm handleAdd = {this.props.handleAddItem} handleChanges ={this.props.handleChanges}  inputValue = {this.props.inputValue} />
                {this.props.list.map(el => {
                    return <Todo element = {el}/>
                })}

            </div>
        )
    }
}
export default TodoList