import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./TicketForm.scss";

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditForm: false,
    };
  }

  render() {
    return (
      <Form className="form-custom position-relative">
        <FormGroup floating>
          <Input id="title" name="title" placeholder="Title" type="text" />
          <Label for="title">Title</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="deadline"
            name="deadline"
            placeholder="Deadline"
            type="text"
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
          />
          <Label for="description">Description</Label>
        </FormGroup>{" "}
        <div className="form-custom__btn position-absolute">
          <Button className="btn-item" color="success">
            Save
          </Button>
          <Button className="btn-item" color="info">
            Edit
          </Button>
          <Button className="btn-item" color="danger">
            {this.state.isEditForm ? `Cancel` : `Delete`}
          </Button>
        </div>
      </Form>
    );
  }
}

export default TicketForm;
