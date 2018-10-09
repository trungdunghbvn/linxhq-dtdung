import {
    ADD_COUNT,
    SEARCH_VIDEO_RESPONSE
} from '../constants/index';

const defaultState = {
    count:0,
    listVideo: []
};

const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case SEARCH_VIDEO_RESPONSE:
            return {
                ...state,
                listVideo: action.data
            };
        default:
            return state;
    }
};

export default searchReducer;
