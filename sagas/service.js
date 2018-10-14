// import { select } from 'redux-saga/effects';
import axios from 'axios';
import data from '../data/data.json';

function* changeSearchVideo(action) {
    return data
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
function* getToken(action) {
    return yield axios
        .get('https://graph.facebook.com/me?fields=name,email', {
            params: {
                access_token: action.data
            }
          })
        .then(function (response) {
            console.log(response)
            return response.status === 200 ? response.data : [];
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const Service = {
    changeSearchVideo,
    getToken
};
