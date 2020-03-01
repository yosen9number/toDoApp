import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
      label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
    };
    
    render() {
        return (
            <form className="item-add-from d-flex"
                onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="form-control new-todo-label"
                       onChange={this.onLabelChange}
                       placeholder={'New item' }/>
                <button type="submit"
                        className="btn btn-outline-secondary"
                >Add Item</button>
            </form>
        );
    };

}
