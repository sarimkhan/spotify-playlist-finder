define(function(require) {
    const $ = require('jquery');


    const AUTH_TOKEN = 'BQCPTnaf5PONzxfH6q0UjUr4yGxucEI5bWsDkraEFDlVVXx1XAmYci-YRyq46dp9bJdKGHlhZsHzH_XK61A-4ShPrCSvRVAZbjMo8loaNXWUjwEZDu5VskXDvFUxP-6-wvJtYymtuKW88g';

    const BASE_URL = 'https://api.spotify.com/v1';

    return {
        getCategories: function() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: BASE_URL + '/browse/categories',
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + AUTH_TOKEN
                    },
                    success: (data, status) => {
                        console.log('getCategories: ', data);
                        resolve(data);
                    },
                    error: err => {
                        if(err.status === 401) {
                            alert('Spotify Auth Token is Invalid')
                        } else {
                            reject(err);
                        }
                    }
                })
            })
            
        },
    }

})