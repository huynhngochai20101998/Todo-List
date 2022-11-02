import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./TicketForm.scss";

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.props.addTask.bind(this);

    this.state = {
      isEditForm: false,
      title: "",
      deadline: "",
      description: "",
    };

    this.setTitle = this.setTitle.bind(this);
    this.setDeadline = this.setDeadline.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.handleCreateTicket = this.handleCreateTicket.bind(this);
    this.handleEditTicket = this.handleEditTicket.bind(this);
    this.handleDeleteTicket = this.handleDeleteTicket.bind(this);
  }

  setTitle(event) {
    this.setState({ title: event.target.value });
  }
  setDeadline(event) {
    this.setState({ deadline: event.target.value });
  }
  setDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleCreateTicket(...input) {
    this.addTask(this.state.title, this.state.deadline, this.state.description);
  }
  handleEditTicket(...input) {
    console.log("A");
    console.log("B");
    console.log("C");
  }
  handleDeleteTicket(...input) {
    console.log(1);
    console.log(2);
    console.log(3);
  }

  render() {
    return (
      <Form className="form-custom position-relative">
        <FormGroup floating>
          <Input
            id="title"
            name="title"
            placeholder="Title"
            type="text"
            value={this.state.title}
            onChange={this.setTitle}
          />
          <Label for="title">Title</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="deadline"
            name="deadline"
            placeholder="Deadline"
            type="text"
            value={this.state.deadline}
            onChange={this.setDeadline}
          />
          <Label for="deadline">Deadline</Label>
        </FormGroup>{" "}
        <FormGroup className="form-custom__desc" floating>
          <Input
            id="description"
            name="description"
            placeholder="Description"
            type="textarea"
            className="desc-input"
            value={this.state.description}
            onChange={this.setDescription}
          />
          <Label for="description">Description</Label>
        </FormGroup>{" "}
        <div className="form-custom__btn position-absolute">
          <Button
            className="btn-item"
            color="success"
            onClick={this.handleCreateTicket}
          >
            Save
          </Button>
          <Button
            className="btn-item"
            color="info"
            onClick={this.handleEditTicket}
          >
            Edit
          </Button>
          <Button
            className="btn-item"
            color="danger"
            onClick={this.handleDeleteTicket}
          >
            {this.state.isEditForm ? `Cancel` : `Delete`}
          </Button>
        </div>
      </Form>
    );
  }
}

export default TicketForm;
