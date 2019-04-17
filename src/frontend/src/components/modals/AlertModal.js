import React from 'react'
import '../../styles/Modals.css'

const AlertModal = ({ closeModal, title, message }) => {
  return (   
    <div className="modal">
    <div className="modal_inner">
      <label className="modal_close"></label>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal_button">
        <button className="ui button " onClick={closeModal}>OK</button>
        </div>     
    </div>    
    </div>
  )
}

export default AlertModal