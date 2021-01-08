import React from 'react';
import axios from 'axios';


function api() {
    const res = axios.get('api.giphy.com/v1/gifs/random', {
        params: {
            api_key:'XcEYFeZJVXFwiUoyPRdn16bci6Ja4d9e'
        }
    })
    return res.url;
}


export default api;

