import {ADD_COUNT, SEARCH_VIDEO, CHANGE_VIDEO } from '../constants';

export const addCount = () => {
    return {
        type: ADD_COUNT
    }
}
export const changeSearchVideo = (text) => {
    return {
        type: SEARCH_VIDEO,
        text
    }
}
export const changeVideo = (data) => {
    return {
        type: CHANGE_VIDEO,
        data
    }
}