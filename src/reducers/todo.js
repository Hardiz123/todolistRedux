const changeTodo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {item: action.payload, id: new Date().getTime()}
            ];
        case 'DELETE_TODO':
           const newList = state.filter((elem) => elem.id !== action.payload);
           return newList;
        case 'EDIT_TODO':
            const  nState = state.map((ele) => {
                if (action.payload.id === ele.id) {
                    return {...ele, item:action.payload.data}
                }
                return ele;
            });
            return nState;
        default:
            return state;
    }
}

export default changeTodo;