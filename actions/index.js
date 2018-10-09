import {ADD_COUNT, SEARCH_VIDEO } from '../constants';

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