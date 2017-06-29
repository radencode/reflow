export function hoverInTitle(modal){
    return{
        type: 'HOVER_IN_TITLE',
        payload: {
            modal: modal
        }
    };
}

export function hoverOutTitle(){
    return{
        type: 'HOVER_OUT_TITLE'
    };
}