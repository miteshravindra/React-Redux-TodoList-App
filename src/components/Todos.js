import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Todos extends Component {

    handleClick = (id) =>{
       this.props.deleteTodos(id);
    }

    render() {
        let todoItems = this.props.todos ? this.props.todos.map(todo =>
            <li className="list-group-item" key={todo.id} onClick={()=>this.handleClick(todo.id)}>{todo.todo}</li>
        ): 'No todos left'
        return (
            <div>
                <ul className="list-group">
                    {todoItems}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteTodos:(id)=> dispatch({type:'DELETE_TODOS',id})
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)
