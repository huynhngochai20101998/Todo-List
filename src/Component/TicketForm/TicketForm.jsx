import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./TicketForm.scss";

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.props.addTask.bind(this);
    this.editTask = this.props.editTask.bind(this);

    this.refTitle = React.createRef();
    this.refDeadline = React.createRef();
    this.refStatus = React.createRef();
    this.refDescription = React.createRef();

    this.state = {
      id: 0,
      title: "",
      deadline: "",
      status: "",
      description: "",
    };

    this.setTitle = this.setTitle.bind(this);
    this.setDeadline = this.setDeadline.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.handleCreateTicket = this.handleCreateTicket.bind(this);
  }

  setTitle(event) {
    this.setState({ values: event.target.value });
  }
  setDeadline(event) {
    this.setState({ deadline: event.target.value });
  }
  setStatus = (event) => {
    this.setState({ status: event.target.value });
  };
  setDescription(event) {
    this.setState({ description: event.target.value });
  }
  clearCacheData = () => {
    this.setState({ id: 0 });
    this.refTitle.current.value = "";
    this.refDeadline.current.value = "";
    this.refStatus.current.value = "";
    this.refDescription.current.value = "";
  };

  handleCreateTicket(...input) {
    this.addTask(
      this.refTitle.current.value,
      this.refDeadline.current.value,
      this.refStatus.current.value,
      this.refDescription.current.value
    );
    this.clearCacheData();
  }

  handleEditTicket = () => {
    this.editTask(
      this.state.id,
      this.refTitle.current.value,
      this.refDeadline.current.value,
      this.refStatus.current.value,
      this.refDescription.current.value
    );
    this.clearCacheData();
  };

  static getDerivedStateFromProps(props) {
    const { ticketDelete } = props;

    return {
      id: ticketDelete.id,
      title: ticketDelete.title,
      deadline: ticketDelete.deadline,
      status: ticketDelete.status,
      description: ticketDelete.description,
    };
  }

  render() {
    const { deleteTicket } = this.props;
    const { title, deadline, status, description } = this.state;
    console.log(title);

    return (
      <Form id="form" className="form-custom position-relative" on>
        <FormGroup floating>
          <Input
            id="title"
            name="title"
            placeholder="Title"
            type="text"
            defaultValue={title}
            innerRef={this.refTitle}
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
            defaultValue={deadline}
            innerRef={this.refDeadline}
            onChange={this.setDeadline}
          />
          <Label for="deadline">Deadline</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="status"
            name="status"
            type="select"
            value={status}
            innerRef={this.refStatus}
            onChange={this.setStatus}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Input>

          <Label for="status">Status</Label>
        </FormGroup>{" "}
        <FormGroup className="form-custom__desc" floating>
          <Input
            id="description"
            name="description"
            placeholder="Description"
            type="textarea"
            className="desc-input"
            defaultValue={description}
            innerRef={this.refDescription}
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
            onClick={() => {
              deleteTicket(this.state.id);
              this.clearCacheData();
            }}
          >
            {this.state.isEditForm ? `Cancel` : `Delete`}
          </Button>
        </div>
      </Form>
    );
  }
}

export default TicketForm;
