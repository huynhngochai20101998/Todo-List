import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  render() {
    return (
      <div className="tiket">
        <div className="tiket-header">
          <h5 className="tiket-header__title text-center">Title</h5>
        </div>
        <div className="tiket-body">
          <p className="tiket-body__content">body body body</p>
        </div>
        <div className="tiket-footer py-2 d-flex justify-content-between">
          <p className="p-0 m-0 tiket-footer__edit-btn">
            <i className="fa-sharp fa-solid fa-pencil"></i>
          </p>
          <p className="p-0 m-0 tiket-footer__deadline float-end">
            Tue - 20/11/2021
          </p>
        </div>
      </div>
    );
  }
}
