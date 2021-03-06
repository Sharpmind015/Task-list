import React, { Component } from "react";
import "./task.css";

class Tasks extends Component {
  render() {
    const { tasks, onComplete, onDelete } = this.props;
    const deleteIcon = task => (
      <i
        className="fa fa-trash fa-lg "
        onClick={() => {
          onDelete(task);
        }}
      />
    );
    return (
      <ul>
        {tasks.reverse().map((task, index) => (
          <li key={index}>
            {!task.task ? (
              <React.Fragment>
                <span className="empty">Empty task</span>
                <div>{deleteIcon(task)}</div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span>{task.task}</span>
                <div>
                  <i
                    className={
                      "fa fa-check fa-lg " + (task.completed ? "clicked" : "")
                    }
                    onClick={() => onComplete(task)}
                  />
                  {deleteIcon(task)}
                </div>
              </React.Fragment>
            )}{" "}
          </li>
        ))}
      </ul>
    );
  }
}

export default Tasks;
