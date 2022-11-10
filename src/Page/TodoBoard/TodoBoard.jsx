import React, { Component } from "react";
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
          title: "UI Todo",
          deadline: "Tue - 20/11/2022",
          description: "",
          status: TICKET_STATUS.TODO,
        },
        {
          id: 2,
          title: "UI Progress",
          deadline: "Sat - 20/11/2022",
          description: "",
          status: TICKET_STATUS.PROGRESS,
        },
        {
          id: 3,
          title: "UI Done",
          deadline: "Thu - 20/11/2022",
          description: "",
          status: TICKET_STATUS.DONE,
        },
      ],
    };

    this.createTicket = this.createTicket.bind(this);
  }

  createTicket(title, deadline, description) {
    if (title && deadline && description) {
      let currentTasks = this.state.tasks;
      let lastItemId = getLastItemId(currentTasks);

      let newTicket = {
        id: lastItemId,
        title: title || "",
        deadline: deadline || "",
        description: description || "",
        status: TICKET_STATUS.TODO,
      };

      currentTasks.push(newTicket);
      this.setState({ task: currentTasks });
    }
  }

  deleteTicket = (ticketId) => {
    let currentTasks = this.state.tasks;

    const newTasks = currentTasks.filter((ticket) => ticket.id !== ticketId);
    this.setState({ tasks: newTasks });
  };

  render() {
    const { todoTasks, progressTasks, doneTasks } = taskDivisor(
      this.state.tasks
    );

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
                <ListTask delTicket={this.deleteTicket} tasks={todoTasks}>
                  To Do
                </ListTask>
                <ListTask delTicket={this.deleteTicket} tasks={progressTasks}>
                  Progress
                </ListTask>
                <ListTask delTicket={this.deleteTicket} tasks={doneTasks}>
                  Done
                </ListTask>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const taskDivisor = (tasks) => {
  let todoTasks = [];
  let progressTasks = [];
  let doneTasks = [];

  for (const task of tasks) {
    // eslint-disable-next-line default-case
    switch (task.status) {
      case TICKET_STATUS.TODO:
        todoTasks.push(task);
        break;
      case TICKET_STATUS.PROGRESS:
        progressTasks.push(task);
        break;
      case TICKET_STATUS.DONE:
        doneTasks.push(task);
        break;
    }
  }

  return { todoTasks, progressTasks, doneTasks };
};

const getLastItemId = (items) => {
  if (items) {
    return items[items.length - 1].id + 1;
  } else {
    return 1;
  }
};

const TICKET_STATUS = {
  TODO: 1,
  PROGRESS: 2,
  DONE: 3,
};

export { TICKET_STATUS, taskDivisor, getLastItemId };
