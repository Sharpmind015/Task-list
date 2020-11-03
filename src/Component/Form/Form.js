import React, { Component } from "react";
import "../../index.css";
import "./form.css";

class Form extends Component {
  initialState = {
    name: ""
  };
  state = this.initialState;

  submitForm = e => {
    e.preventDefault();
    this.props.onSubmit({ task: this.state.name, completed: false });
    this.setState(this.initialState);
  };

  handleChange = event =>
    this.setState({
      name: event.target.value
    });
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Add a new task"
        />
        <input type="submit" className="button" value="ADD" />
      </form>
    );
  }
}
export default Form;
