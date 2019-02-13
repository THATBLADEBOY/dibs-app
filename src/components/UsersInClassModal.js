import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserClassManager from '../module/UserClassManager'

class UsersInClassModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      usersInClass: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
      
    });
  }


getUsersInClass = (classId) => {
    UserClassManager.getUsersInSpecificClass(classId)
    .then(allUsers => {
        this.setState({usersInClass: allUsers})
    })
    }  

    componentDidMount(){
        this.getUsersInClass(this.props.theClass.id)
    }
 
  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
     
      return (
      <div>
        <Button color="edit" onClick={this.toggle}>spots filled</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
          <ModalHeader toggle={this.toggle} close={closeBtn}>People Who Called dibs on {this.props.theClass.className}:</ModalHeader>
          <ModalBody>
           {this.state.usersInClass.map(user =>
            <div key={user.user.id}>{user.user.firstName}</div>)}
             
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Sweet, Thanks!</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UsersInClassModal;