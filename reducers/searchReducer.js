import {
    ADD_COUNT,
    GET_LIST_RESPONSE,
    CHANGE_VIDEO,
    GET_USER,
    CHANGE_LIKE,
    CHANGE_CLOSE_LIKE
} from '../constants/index';

const defaultState = {
    count:0,
    listVideo: [],
    videoActive: '',
    token:'',
    email:'',
    name:'',
    like: []
};
const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case GET_LIST_RESPONSE:
            return {
                ...state,
                listVideo: action.data
            };
        case CHANGE_VIDEO:
            return {
                ...state,
                videoActive: action.data
            };
        case GET_USER:
            return {
                ...state,
                email: action.data.email,
                name: action.data.name
            };
        case CHANGE_LIKE:
        let list = state.like;
        list.unshift(action.video);
            return {
                ...state,
                like: state.like
            };
        case CHANGE_CLOSE_LIKE:
        const listLike = state.like;
        const index = listLike.indexOf(action.video)
        listLike.splice(index, 1);
            return {
                ...state,
                like: state.like
            };
        default:
            return state;
    }
};

export default searchReducer;
