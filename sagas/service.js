// import { select } from 'redux-saga/effects';
import axios from 'axios';
import { list } from '../data/data';

function* changeSearchVideo(action) {
    return list
    // return yield axios
    //     .get('data/data.json')
    //     .then(function (response) {
    //         console.log(response.data)
    //         return response.status === 200 ? response.data : [];
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}

export const Service = {
    changeSearchVideo,
};
