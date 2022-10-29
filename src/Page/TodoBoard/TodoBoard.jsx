import React, { Component } from "react";
import Card from "../../Component/Card/Card";
import ListTask from "../../Component/ListTask/ListTask";
import TicketForm from "../../Component/TicketForm/TicketForm";
import "./TodoBoard.scss";

export default class TodoBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "description",
          status: TICKET_STATUS.TODO,
        },
        {
          id: 2,
          title: "Task 2",
          description: "description",
          status: TICKET_STATUS.TODO,
        },
        {
          id: 3,
          title: "Task 3",
          description: "description",
          status: TICKET_STATUS.TODO,
        },
      ],
    };
  }

  render() {
    let todos = this.state.tasks || [];

    const taskRender = todos.map((task, index) => <Card key={index} />);

    return (
      <div className="wrapper">
        <div className="board d-flex">
          <h1 className="board-item board-title">Todo List Board</h1>
          <div className="board-item board-content d-flex justify-content-between">
            <div className="board-content__form">
              <h3 className="form-title text-center">Form Ticket</h3>
              <TicketForm />
            </div>
            <div className="board-content__list">
              <div className="d-flex justify-content-between wrapper-items">
                <ListTask title="To Do">{taskRender}</ListTask>
                <ListTask title="Progress">{taskRender}</ListTask>
                <ListTask title="Done">{taskRender}</ListTask>
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
