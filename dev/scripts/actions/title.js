export function hoverInTitle(_modal){
    return{
        type: 'HOVER_IN_TITLE',
        modal: _modal
    };
}

export function hoverOutTitle(){
    return{
        type: 'HOVER_OUT_TITLE',
    };
}