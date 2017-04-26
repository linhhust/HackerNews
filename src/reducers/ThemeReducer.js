const initState = {
    color: 'blue',
    size: 19
}

export default themeReducer = (state = initState, actions) => {
    switch (actions.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: actions.color };
        default:
            return state;
    }

}