import {ADD_COUNT, GET_LIST, CHANGE_VIDEO, GET_TOKEN, CHANGE_LIKE, CHANGE_CLOSE_LIKE } from '../constants';

export const addCount = () => {
    return {
        type: ADD_COUNT
    }
}
export const getListVideo = () => {
    return {
        type: GET_LIST,
    }
}
export const changeVideo = (data) => {
    return {
        type: CHANGE_VIDEO,
        data
    }
}
export const getToken = (data) => {
    return {
        type: GET_TOKEN,
        data
    }
}
export const changeLike = (video) => {
    return {
        type: CHANGE_LIKE,
        video
    }
}
export const changeCloseLike = (video) => {
    return {
        type: CHANGE_CLOSE_LIKE,
        video
    }
}