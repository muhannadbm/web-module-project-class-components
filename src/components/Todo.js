import React from 'react'

class Todo extends React.Component {
    
    handleClick = (id)=> {
        this.props.toggle(id)
    }
    render(){

        return(
        <div className="todoelement"  onClick={()=> this.handleClick(this.props.element.id)}>
            {this.props.element ? <div><p className={this.props.element.completed ? 'striked p' : 'normal p'}>{this.props.element.task}</p>
           {this.props.element.completed}</div> : null }

        </div>)
    }
}
export default Todo