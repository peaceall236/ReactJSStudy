import constants from "../constants"

const initialState = {
    items: [],
    fetching: false
}

export default function postReducer  (state = initialState, action)  {
    switch(action.type) {
        case constants.FETCHING_POST:
            return Object.assign({}, state, {fetching: true})
        case constants.FETCH_POSTS:
            return Object.assign({}, state, {items: action.items, fetching: false})
        case constants.NEW_POST:
            return Object.assign({}, state, {items: [...state.items, action.item]})
        default:
            return state
    }
}