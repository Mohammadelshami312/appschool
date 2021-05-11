import { TOGGLE_LANG } from './actions';

function reducer(state, action) {
    if (action.type === TOGGLE_LANG) {
        return {
            ...state,
            language: action.payload.lang
        }
    }
    return state;
}

export default reducer;