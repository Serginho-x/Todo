const initialState = {
  modalProps: {}
}

export default function Modals(state = initialState, action){
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        modalProps: action.payload
      }
    case 'HIDE_MODAL':
      return initialState
    default:
      return state
  }
}