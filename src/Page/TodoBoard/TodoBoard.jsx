import React, { Component } from "react";
import ListTask from "../../Component/ListTask/ListTask";
import TicketForm, { FORM_STATUS } from "../../Component/TicketForm/TicketForm";
import "./TodoBoard.scss";

export default class TodoBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: false,
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
      ticketDelete: {
        id: 0,
        title: "",
        deadline: "",
        description: "",
      },
    };

    this.createTicket = this.createTicket.bind(this);
  }

  createTicket(title, deadline, status, description) {
    if (title && deadline && status) {
      let currentTasks = this.state.tasks;
      let lastItemId = getLastItemId(currentTasks);

      let newTicket = {
        id: lastItemId,
        title: title || "",
        deadline: deadline || "",
        description: description || "",
        status: parseInt(status),
      };

      currentTasks.push(newTicket);

      this.setState({ task: currentTasks });
    }
  }

  editTask = (id, title, deadline, status, desc) => {
    if (id && title && deadline && status) {
      let currentTasks = this.state.tasks;

      for (const task of currentTasks) {
        if (task.id === id) {
          task.title = title;
          task.deadline = deadline;
          task.status = parseInt(status);
          task.description = desc;
        }
      }

      this.setState({ task: currentTasks });
    }
  };

  deleteTicket = (ticketId) => {
    if (ticketId) {
      let currentTasks = this.state.tasks;

      const newTasks = currentTasks.filter((ticket) => ticket.id !== ticketId);
      this.setState({ tasks: newTasks });
    }
  };

  getValueTicketDeleteByForm = (ticket) => {
    this.setState({ ticketDelete: ticket });
  };

  toggleIsShowForm = (state) => {
    console.log(state);
    if (state === FORM_STATUS.CREATE) {
      if (this.state.isShowForm) {
        this.setState({ isShowForm: false });
      } else {
        this.setState({ isShowForm: true });
      }
    } else {
      this.setState({ isShowForm: true });
    }
  };

  render() {
    const { tasks, ticketDelete, isShowForm } = this.state;

    const { todoTasks, progressTasks, doneTasks } = taskDivisor(tasks);

    return (
      <div className="wrapper">
        <div className="board d-flex position-relative">
          <div
            className={`${
              isShowForm ? `btn-primary` : `btn-danger`
            } btn position-absolute bold`}
            style={{ top: "30px", left: "30px" }}
            onClick={() => this.toggleIsShowForm(FORM_STATUS.CREATE)}
          >
            {isShowForm ? `Form: ON` : `Form: OFF`}
          </div>
          <h1 className="board-item board-title">Todo List Board</h1>
          <div className="board-item board-content d-flex justify-content-around">
            <div
              className={`board-content__form ${
                isShowForm ? `show-form` : `hide-form`
              }`}
            >
              <h3 className="form-title text-center">Form Ticket</h3>
              <TicketForm
                ticketDelete={ticketDelete}
                deleteTicket={this.deleteTicket}
                addTask={this.createTicket}
                editTask={this.editTask}
              />
            </div>
            <div className="board-content__list">
              <div className="d-flex justify-content-between wrapper-items">
                <ListTask
                  tasks={todoTasks}
                  delTicket={this.deleteTicket}
                  deleteTicketByForm={this.getValueTicketDeleteByForm}
                  toggleIsShowForm={this.toggleIsShowForm}
                >
                  To Do
                </ListTask>
                <ListTask
                  tasks={progressTasks}
                  delTicket={this.deleteTicket}
                  deleteTicketByForm={this.getValueTicketDeleteByForm}
                  toggleIsShowForm={this.toggleIsShowForm}
                >
                  Progress
                </ListTask>
                <ListTask
                  tasks={doneTasks}
                  delTicket={this.deleteTicket}
                  deleteTicketByForm={this.getValueTicketDeleteByForm}
                  toggleIsShowForm={this.toggleIsShowForm}
                >
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
