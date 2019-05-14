export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = (modalProps) => {
    return {
        type: SHOW_MODAL,
        payload: modalProps
    };    
}

export const HIDE_MODAL = 'HIDE_MODAL';
export const hideModal = () => { 
    return {
        type: HIDE_MODAL       
    }
}