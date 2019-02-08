import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UsersInClassModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

 

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

     
      return (
      <div>
        <Button color="edit" onClick={this.toggle}>spots filled</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{this.props.classTitle}</ModalHeader>
          <ModalBody>
             
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