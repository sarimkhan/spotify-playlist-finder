define(function(require) {
    const $ = require('jquery');


    const AUTH_TOKEN = 'BQBYI3ya98AhQuXYtUa4y-ZxX-wmFTXZGa_f5joFLzV3AIWEecOyGe_8wCb0xGNZHfoTexGc35wyYGCHQl3lWyi4D6pDxc5aYLN4iVTaoPahWBp7HhGHad80UUHPjlUThaovASC8rbp-RA';

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
                    success: data => {
                        console.log('getArtists: ', data);
                        resolve(data);
                    },
                    error: err => {
                        reject(err);
                    }
                })
            })
            
        }
    }

})