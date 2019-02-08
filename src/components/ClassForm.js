import React, { Component } from "react";





export default class ClassForm extends Component {
  // Set initial state
  state = {
    className: "",
    date: "",
    time: "",
    description: "",
    trainerId: "",
    spots: "",
    spotsTaken: ""
  };


  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const classToChange = {};
    classToChange[evt.target.id] = evt.target.value;
    this.setState(classToChange);
  };

  /*
        Local method for validation, creating event object and
        invoking the function reference passed from parent component
     */
  constructNewClass = evt => {
    evt.preventDefault();
    if (this.state.className === "") {
      window.alert("Please enter a name for your class.");
    } else if (this.state.date === "") {
      window.alert("Please enter a date for your class.")
    } else if (this.state.time === "") {
      window.alert("Please enter a time for your class.")
    } else {
      const newClass = {
        className: this.state.className,
        date: this.state.date,
        time: this.state.time,
        description: this.state.description,
        trainerId: this.state.trainerId,
        spots: this.state.spots,
        spotsTaken: 0
      };

      // Create the event and redirect user to event list
      this.props
        .addClass(newClass)
        .then(() => this.props.history.push("/"));
    }
  };

  render() {
    return (
      <React.Fragment className="add-form-page">
        <form className="classForm">
          <div className="form-group">
            <label htmlFor="className">Class Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="className"
              placeholder="Class Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              placeholder="Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="time"
              placeholder="Time of Class"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="description"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainerId">Trainer</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="trainerId"
              placeholder="Trainer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="spots">Spots Available</label>
            <input
              type="number"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="spots"
              placeholder="Spots"
            />
          </div>
          <div className="add-class-form-buttons">
          <button
            type="submit"
            onClick={this.constructNewClass}
            className="btn btn-primary"
          >
            Submit
          </button>
          {' '}
          <button
            type="submit"
            onClick={(() => this.props.history.push("/"))}
            className="btn btn-primary"
          >
            Nevermind
          </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
