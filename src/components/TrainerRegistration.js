import React, { Component } from "react";
import { Button } from 'reactstrap';





export default class TrainerRegistration extends Component {
  // Set initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };


  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const userToChange = {};
    userToChange[evt.target.id] = evt.target.value;
    this.setState(userToChange);
  };

  /*
        Local method for validation, creating event object and
        invoking the function reference passed from parent component
     */
  constructNewUser = evt => {
    evt.preventDefault();
    if (this.state.firstName === "") {
      window.alert("Please enter your first name.");
    } else if (this.state.lastName === "") {
      window.alert("Please enter your last name.")
    } else if (this.state.email === "") {
      window.alert("Please enter an email.")
    } else {
      const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        trainerStatus: true
      };

      // Create the event and redirect user to event list
      this.props
        .addUser(newUser)
        .then(() => this.props.history.push("/"));
    }
  };

  render() {
    return (
      <React.Fragment >
        <form className="registrationForm">
        <h2>Add a New Trainer</h2>
        <p className="text-muted"><i>Adding a new trainer gives this person rights to add and edit classes. If you
            don't want the user to have those rights, please have them register on the login page.</i>
        </p>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="email"
              placeholder="Email@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="register-buttons">
          <Button
            color="primary"
            type="submit"
            onClick={this.constructNewUser}
          >
            Create Account
          </Button>
          {' '}
          <Button
            type="submit"
            onClick={(() => this.props.history.push("/"))}
          >
            Nevermind
          </Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}