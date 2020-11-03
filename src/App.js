import React, { Component } from "react";
import Task from "./Component/Task/Task";
import Form from "./Component/Form/Form";

class App extends Component {
  state = {
    tasks: [
      {
        task: "Pepper don red :(",
        completed: false
      },
      {
        task: "Your choice :)",
        completed: false
      },
      {
        task: "(09049381385) #Airtel#",
        completed: false
      },
      {
        task: "Or send Airtime to Deji",
        completed: false
      },
      {
        task: "(0222149827) 'Gtbank' #Ayedun Akindeji Oluwaseun#",
        completed: false
      },
      {
        task: "Send money to Deji :)",
        completed: false
      }
    ],
    status: "all"
  };

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };
  handleComplete = task => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.indexOf(task);
    tasks[taskIndex] = { ...task };
    tasks[taskIndex].completed = !task.completed;
    this.setState({ tasks });
  };
  handleDelete = task => {
    const tasks = this.state.tasks.filter(entry => entry !== task);
    this.setState({ tasks });
  };
  handleStatusCheck = entry => {
    return this.state.status === entry ? "active" : "";
  };
  render() {
    const all = [...this.state.tasks.reverse()];
    const filteredTask = all.filter(task => task.task);
    const completed = filteredTask.filter(task => task.completed);
    const uncompleted = filteredTask.filter(task => !task.completed);
    let tasks;
    if (this.state.status === "completed") {
      tasks = completed;
    } else if (this.state.status === "uncompleted") {
      tasks = uncompleted;
    } else {
      tasks = all;
    }
    return (
      <div className="container">
        <Form tasks={this.state.tasks} onSubmit={this.handleSubmit} />
        <h2 className="mt">TASKS</h2>
        <div className="center">
          <button
            className={this.handleStatusCheck("all")}
            onClick={e => {
              this.setState({ status: "all" });
            }}
          >
            All: {this.state.tasks.length}
          </button>{" "}
          <button
            className={this.handleStatusCheck("completed")}
            onClick={() => {
              this.setState({ status: "completed" });
            }}
          >
            Completed: {completed.length}
          </button>{" "}
          <button
            className={this.handleStatusCheck("uncompleted")}
            onClick={() => {
              this.setState({ status: "uncompleted" });
            }}
          >
            Uncompleted: {uncompleted.length}
          </button>{" "}
        </div>
        <Task
          tasks={tasks}
          onComplete={this.handleComplete}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
