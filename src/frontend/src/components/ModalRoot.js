import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';

import { default as modalTypes } from './modals';

const MODAL_TYPES = {
  'alert': modalTypes.AlertModal
}

class ModalRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: !this.state.modalIsOpen
      })
    }
  }

  closeModal = ()=> {
    this.setState({ modalIsOpen: false })
  }

  render() {
    if (!this.props.modalType) {
      return null
    }
    const SpecifiedModal = MODAL_TYPES[this.props.modalType]
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
          overlayClassName="modal fade show"
          bodyOpenClassName="modal-open"
          className="modal-dialog modal-dialog-centered"
        >
          <SpecifiedModal
            closeModal={this.closeModal}
            {...this.props.modalProps}
          />
        </ReactModal>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  ...store.modals
})

export default connect(mapStateToProps, null)(ModalRoot)