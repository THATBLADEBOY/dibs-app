import React, { Component } from 'react'
import ClassManager from '../module/ClassManager'
import { Button } from 'reactstrap'

export default class EventEditForm extends Component{
    state = {
        className: "",
        date: "",
        time: "",
        description: "",
        trainerId: ""
      };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}
  componentDidMount(){
    ClassManager.get(this.props.match.params.classesId).then(classes => {
      this.setState({
        className:classes.className,
        date:classes.date,
        time:classes.time,
        description:classes.description,
        trainerId:classes.trainerId
      })
    })
  }

  updateExistingClass = evt => {
      evt.preventDefault()

      const existingClass = {
        className:this.state.className,
        date: this.state.date,
        time:this.state.time,
        description:this.state.description,
        trainerId:this.state.trainerId
      }
      this.props.updateClass(this.props.match.params.classesId, existingClass)
      .then(() => this.props.history.push("/"))
    }

  render() {
    return (
        <React.Fragment>
            <form className="classForm">
                <div className="form-group">
                    <label htmlFor="className">Class Name</label>
                    <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="className"
                          value={this.state.className}
                          />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Class Date</label>
                    <input type="date" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="date"
                          value={this.state.date}
                          />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Class Time</label>
                    <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="time"
                          value={this.state.time}
                          />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="description"
                          value={this.state.description}
                          />
                </div>
                <div className="form-group">
                    <label htmlFor="trainerId">Trainer</label>
                    <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="trainerId"
                          value={this.state.trainerId}
                          />
                </div>
                <button type="submit" onClick={this.updateExistingClass} className="btn btn-primary">Update</button> <button onClick={() => {this.props.history.push("/")}} className="btn btn-primary">Cancel</button>
                <Button color="danger" className="delete-class-button" onClick={() => {
                    let deleteConfirmation = window.confirm(`Are you sure you want to delete ${this.state.className} on ${this.state.date}?`)
                    if(deleteConfirmation === true) {
                    this.props.deleteClass(this.props.match.params.classesId)
                    this.props.getUserClasses();
                    this.props.history.push("/")
                    }}}>Delete Class</Button>
                
                
            </form>
        </React.Fragment>
    )
}
}