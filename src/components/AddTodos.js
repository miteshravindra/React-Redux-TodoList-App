import React, { Component } from 'react'
import { connect } from 'react-redux';

export class AddTodos extends Component {

    state = {
        todo:''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo:''
        })

    }

    handleChange = (e) =>{
        this.setState({
            todo:e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Add todo's here " 
                        onChange={this.handleChange}
                        value={this.state.todo}/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch({ type: 'ADD_TODO',todo })
    }
}

export default connect(null, mapDispatchToProps)(AddTodos)
