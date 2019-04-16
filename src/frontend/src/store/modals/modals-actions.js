const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = ({ modalProps, modalType }) => {
    return dispatch => {
        dispatch({
            type: SHOW_MODAL,
            modalProps,
            modalType
        });
  }
}
  
  export const hideModal = () => { 
    return dispatch => {
        dispatch({
        type: HIDE_MODAL
        });
  }
}