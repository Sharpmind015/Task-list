import React, { Component } from "react";
import Task from "./Component/Task/Task";
import Form from "./Component/Form/Form";

const STATUS = [
  {
    name: "all",
    filtered: () => true
  },
  {
    name: "completed",
    filtered: task => task.completed
  },
  {
    name: "uncompleted",
    filtered: task => !task.completed
  }
];

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
    status: "completed"
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
  render() {
    const filtered = STATUS.filter(entry => this.state.status === entry.name);
    const tasks = this.state.tasks.filter(filtered[0].filtered);
    return (
      <div className="container">
        <Form tasks={this.state.tasks} onSubmit={this.handleSubmit} />
        <h2 className="mt">TASKS</h2>
        <div className="center">
          {STATUS.map(data => (
            <button
              key={data.name}
              className={this.state.status === data.name ? "active" : ""}
              onClick={() => {
                this.setState({ status: data.name });
              }}
            >
              {data.name.toLocaleUpperCase()}:{" "}
              {this.state.tasks.filter(data.filtered).length}
            </button>
          ))}
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
