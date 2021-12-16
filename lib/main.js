define(function(require) {
    const $ = require('jquery');
    const _ = require('lodash');
    const moment = require('moment');

    const api = require('./api');

    console.log('main');

          ///START///
    const container = $('#app');
        ///RANDOM COLOR ARRAY
    var colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

        ///GETTING GATEGORIES///
    api.getCategories().then(({ categories }) => {
        categories.items.forEach(item => {
            var random_color = colors[Math.floor(Math.random() * colors.length)];
            d = document.createElement("span");
            $(d).css('background-color', random_color);
            $(d).attr('id', item.id);
            $(d).addClass("tile");
            $(d).addClass("span4");
            container.append(d);
            $("#"+item.id).html("<p id = cap2 >" + item.name + "</p>");
        })

            ///ON CLICK GET PLAYLIST AND SHOW IN A MODAL
        $(document).ready(function(){
          $(".tile").click(function(event){
            $("#mod").html("");
            $("#mod").html("<h3>" + event.target.id + "</h3>");
            m = document.createElement("div");
            $(m).attr('id', "info");
            api.getPlaylists(event.target.id).then(({ playlists }) => {
                playlists.items.forEach(item => {
                  $("#info").append(JSON.stringify(item.name));
                });
            });
            $("#mod").append(m);
            $("#mod").show();
          });
        });
    });
});
