// Reducer will be called first before the store is created. So, we need to set the initial state of the store.


const INITIAL_STATE = {
    numOfCakes: 0
}

const cakeReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    console.log(state);

    if (action.type == 'BUY_CAKE') {
        return {
            ...state,
            // numOfCakes: state.numOfCakes + 1
            numOfCakes: state.numOfCakes + action.payload.cakesToBuy
        }
    }
    else if (action.type == 'REFUND_CAKE') {
        return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
    }
    else {
        return state; // when first time reducer is called, as there is no action is created then this else will return the initial state.
    }
}

export default cakeReducer;