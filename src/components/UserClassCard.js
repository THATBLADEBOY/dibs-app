import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Moment from 'react-moment';
import CalendarModal from './CalendarModal'

export class UserClassCard extends Component {

    state = {
        event: {
          title: this.props.eachClass.class.className,
          description: this.props.eachClass.class.description,
          location: '952 Main St, Nashville, TN 37206',
          startTime: new Date(this.props.eachClass.class.date).toISOString(),
          endTime: new Date(this.props.eachClass.class.date).toISOString()
        }
    }

  render() {
     var moment = require('moment');
      let startDateTime = new Date(this.props.eachClass.class.date).toISOString();
      let endDateTime = moment(startDateTime).add(30, 'm').toDate();
      console.log("HMMMM...", startDateTime, endDateTime)
      let eachClass = this.props.eachClass
    return (
        <div className="class-container" key={eachClass.id}>
        <h3>{eachClass.class.className}</h3>
        <Moment format="LLLL">{eachClass.class.date}</Moment>
        <p>with {eachClass.class.trainerId}</p>
        <div className="userClass-buttons">
        <CalendarModal event={this.state.event} />
        <Button className="drop-class-button" color="danger" onClick={() => {
                let deleteConfirmation = window.confirm(`Are you sure you want to delete ${eachClass.class.className} on ${eachClass.class.date}?`)
                if(deleteConfirmation === true) {
                this.props.deleteUserClass(eachClass.id)
                this.props.removeSpotFromClass(eachClass.class)
                }}}>Drop Class</Button>
        </div>
    </div>
    )
  }
}

export default UserClassCard
