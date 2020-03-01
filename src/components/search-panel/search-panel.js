import React, {Component} from 'react';

import './search-panel.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render (){
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder={"search"}
                   value={this.state.term}
                   onChange={this.onSearchChange}
            />
        )
    }

};
