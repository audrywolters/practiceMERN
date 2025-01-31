import React, {Component} from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        };

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority    = this.onChangeTodoPriority.bind(this);
        this.onSubmit                = this.onSubmit.bind(this);
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        // eslint-disable-next-line react/no-direct-mutation-state
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })

    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>

                <form onSubmit={this.onSubmit}>

                    {/* description */}
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.todo_description}
                               onChange={this.onChangeTodoDescription}
                        />
                    </div>

                    {/* responsible */}
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.todo_responsible}
                               onChange={this.onChangeTodoResponsible}
                        />
                    </div>

                    {/* priority */}
                    <div className="form-group">
                        {/* low */}
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.todo_priority === 'Low'}
                                   onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        {/* medium */}
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.todo_priority === 'Medium'}
                                   onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        {/* high */}
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.todo_priority === 'High'}
                                   onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    {/* button */}
                    <div className="form-group">
                        <input type="submit"
                               value="Create Todo"
                               className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}
