define(function(require) {
    const $ = require('jquery');


    const AUTH_TOKEN = 'BQAAAWy6KJ8LJpt3aDopdk55N1OG0mF-zSkCUtP4Cf-FXb0Z-TIjXrj5PoVzWqU5IdzRIrV8rRoSFa-2JFPPKNc1Mc02XEZR4EFCP-fi60sw2XIb7cxr6oDqTl9ZWEdCFqT7yDBdCs4';

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

        getPlaylists: function(som) {
          return new Promise((resolve, reject) => {
              $.ajax({
                  url: BASE_URL + '/browse/categories/'+som+'/playlists',
                  method: 'GET',
                  headers: {
                      Authorization: 'Bearer ' + AUTH_TOKEN
                  },
                  success: (data, status) => {
                      console.log('getPlaylists: ', data);
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
        }
    }

})
