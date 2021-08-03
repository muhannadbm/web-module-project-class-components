import React from 'react'

class Todo extends React.Component {
    render(){
        return(<div>
           {this.props.element.task}
           {this.props.element.id}
           {this.props.element.completed}
        </div>)
    }
}
export default Todo