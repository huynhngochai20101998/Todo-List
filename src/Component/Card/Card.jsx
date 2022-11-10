import React, { Component } from "react";
import { TICKET_STATUS } from "../../Page/TodoBoard/TodoBoard";
import "./Card.scss";

export default class Card extends Component {
  getBackgroundHeader = (status) => {
    let color = "#cccc00";

    // eslint-disable-next-line default-case
    switch (status) {
      case TICKET_STATUS.TODO:
        color = "#cccc00";
        break;
      case TICKET_STATUS.PROGRESS:
        color = "#29cce5";
        break;
      case TICKET_STATUS.DONE:
        color = "#009900";
        break;
    }

    return { backgroundColor: `${color}` };
  };

  render() {
    const { staskDetail, status, delTicket } = this.props;

    return (
      <div className="ticket">
        <div className="ticket-header" style={this.getBackgroundHeader(status)}>
          <h5 className="ticket-header__title text-center">
            {staskDetail?.title || "[Title]"}
          </h5>
          <span
            className="ticket-header__del float-end"
            onClick={() => delTicket(staskDetail.id)}
          >
            <span className="line line-100 line-one"></span>
            <span className="line line-100 line-second"></span>
          </span>
        </div>
        <div className="ticket-body">
          <p className="ticket-body__content">
            {staskDetail.description || "[Description]"}
          </p>
        </div>
        <div className="ticket-footer py-2 d-flex justify-content-between">
          <p className="p-0 m-0 ticket-footer__edit-btn float-end">
            <i className="fa-sharp fa-solid fa-pencil"></i>
          </p>
          <p className="p-0 m-0 ticket-footer__deadline float-end">
            {staskDetail.deadline || "[Deadline]"}
          </p>
        </div>
      </div>
    );
  }
}
