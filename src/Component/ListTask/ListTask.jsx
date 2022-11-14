import React, { Component } from "react";
import Card from "../Card/Card";
import "./ListTask.scss";

export default class ListTask extends Component {
  render() {
    const { delTicket, tasks, deleteTicketByForm } = this.props;

    const taskRender = tasks?.map((task, index) => (
      <Card
        key={index}
        taskDetail={task}
        delTicket={delTicket}
        status={task.status}
        deleteTicketByForm={deleteTicketByForm}
      />
    ));

    return (
      <>
        <div className="items">
          <div className="items-header">
            <p className="items-header__name">{this.props.children}</p>
          </div>
          <div className="items-body">
            <div className="items-body__content">{taskRender}</div>
          </div>
        </div>
      </>
    );
  }
}
