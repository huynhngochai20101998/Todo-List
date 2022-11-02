import React, { Component } from "react";
import Card from "../../Component/Card/Card";
import ListTask from "../../Component/ListTask/ListTask";
import TicketForm from "../../Component/TicketForm/TicketForm";
import "./TodoBoard.scss";

export default class TodoBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };

    this.createTicket = this.createTicket.bind(this);
  }

  createTicket(title, deadline, description) {
    if (title && deadline && description) {
      let newTicket = {
        title: title || "",
        deadline: deadline || "",
        description: description || "",
      };
      let currentTasks = this.state.tasks;

      currentTasks.push(newTicket);
      this.setState({ task: currentTasks });
    }
  }

  render() {
    let todos = this.state.tasks || [];
    console.log("todo:", todos);

    const taskRender = todos?.map((task, index) => (
      <Card key={index} staskDetail={task} />
    ));

    return (
      <div className="wrapper">
        <div className="board d-flex">
          <h1 className="board-item board-title">Todo List Board</h1>
          <div className="board-item board-content d-flex justify-content-between">
            <div className="board-content__form">
              <h3 className="form-title text-center">Form Ticket</h3>
              <TicketForm addTask={this.createTicket} />
            </div>
            <div className="board-content__list">
              <div className="d-flex justify-content-between wrapper-items">
                <ListTask title="To Do">{taskRender}</ListTask>
                <ListTask title="Progress"></ListTask>
                <ListTask title="Done"></ListTask>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const TICKET_STATUS = {
  TODO: 1,
  PROGRESS: 2,
  DONE: 3,
};

export { TICKET_STATUS };
