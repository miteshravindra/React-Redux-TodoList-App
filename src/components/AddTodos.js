import React, { Component } from 'react'

export class AddTodos extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Add todo's here "/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodos
