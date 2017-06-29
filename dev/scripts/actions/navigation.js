export function setActiveModal(modal){
    return {
        type: 'SET_ACTIVE_MODAL',
        payload: {
            modal: modal
        }        
    };
}

