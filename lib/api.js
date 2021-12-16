define(function(require) {
    const $ = require('jquery');


    const AUTH_TOKEN = 'BQBKDsg6-V_WYEf1_SolYFDcwNLd44lJbDp-rjufJvb82gk3xRbf5yOJVzog5-wbEpyDtrJdhBHx1hRxYyhKeEArTjLkCM5_cbdfQcvYbO6XLhVH5267xolyD06hYwl9e-IG2aafMYg';

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
