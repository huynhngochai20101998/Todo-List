import React, { Component } from "react";
import "./ListTask.scss";

export default class ListTask extends Component {
  render() {
    const { title } = this.props;

    return (
      <>
        <div className="items">
          <div className="items-header">
            <p className="items-header__name">{title}</p>
          </div>
          <div className="items-body">
            <div className="items-body__content">{this.props.children}</div>
          </div>
        </div>
      </>
    );
  }
}
