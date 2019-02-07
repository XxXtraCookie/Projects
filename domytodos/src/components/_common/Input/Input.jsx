import React from 'react';

import './input.scss';

const addIcon = require('../../../_images/add.png');

class Input extends React.Component {
  state = { value: '', todo: '' };

  handleChange = event => this.setState({ value: event.target.value });
  saveTodo = () => this.setState({ todo: this.state.value });

  render() {
    return (
      <div className="input-wrapper">
        <div className="add-todo-icon" onClick={this.saveTodo}>
          <img src={addIcon} alt="+" />
        </div>
        <input
          required
          type="text"
          name="todo-field"
          className="input-field"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {
          this.state.todo
        }
      </div>
    );
  }
};

export default Input;
