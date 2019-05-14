import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import '../../styles/ModalAlert.css';

const modalStyles = {
  content: {
      background: null,
      border: null
  }
};

class ModalAlert extends React.Component { 
    
  render() {    
    const {modal} = this.props;
    return (
      <div>
        <Modal
          isOpen={modal.modalProps.open}
          onRequestClose={modal.modalProps.closeModal}
          ariaHideApp={false}
          style={ modalStyles }
        >
          <div className="modal">           
              <h2>{modal.modalProps.title}</h2>
              <p>{modal.modalProps.message}</p>
              <button className="ui button" onClick={modal.modalProps.closeModal}>
                OK
              </button>
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = store => ({
   modal: store.modals
})

export default connect(mapStateToProps, null)(ModalAlert)