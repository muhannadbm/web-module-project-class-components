import React from 'react'

class TodoForm extends React.Component{


    render(){
        return(
            <div>
                <form onSubmit={(e)=> e.preventDefault()}>
                <input onChange={this.props.handleChanges}type="text" name="item" />
                <button onClick={(e) => this.props.handleAdd(e)}>Add</button>
                </form>
            </div>
        )
    }
}
export default TodoForm