import React from 'react'

class TodoForm extends React.Component{


    render(){
        return(
            <div>
                <form onSubmit={(e)=> e.preventDefault()}>
                <input value={this.props.inputvalue} onChange={this.props.handleChanges}type="text" name="item" />
                <button className="addbut" onClick={(e) => this.props.handleAdd(e)}>Add</button>
                </form>
            </div>
        )
    }
}
export default TodoForm