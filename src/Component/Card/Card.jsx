import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  render() {
    const { staskDetail } = this.props;
    return (
      <div className="tiket">
        <div className="tiket-header">
          <h5 className="tiket-header__title text-center">
            {staskDetail?.title || "[Title]"}
          </h5>
        </div>
        <div className="tiket-body">
          <p className="tiket-body__content">
            {staskDetail?.description || "[Description]"}
          </p>
        </div>
        <div className="tiket-footer py-2 d-flex justify-content-between">
          <p className="p-0 m-0 tiket-footer__edit-btn">
            <i className="fa-sharp fa-solid fa-pencil"></i>
          </p>
          <p className="p-0 m-0 tiket-footer__deadline float-end">
            {staskDetail.deadline || "[Deadline]"}
          </p>
        </div>
      </div>
    );
  }
}
