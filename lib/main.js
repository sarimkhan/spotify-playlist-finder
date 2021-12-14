define(function(require) {
    const $ = require('jquery');
    const _ = require('lodash');
    const moment = require('moment');

    const api = require('./api');

    console.log('main');

    const container = $('#app');
    var colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

    api.getCategories().then(({ categories }) => {
        categories.items.forEach(item => {
            var random_color = colors[Math.floor(Math.random() * colors.length)];
            d = document.createElement("div");
            $(d).css('background-color', random_color);
            $(d).attr('id', item.id);
            $(d).addClass("tile");
            $(d).addClass("span4");
            container.append(d);
            $("#"+item.id).html("<p id = cap2 >" + item.name + "</p>");
        })
    });

    $("div").click(function(event){
      api.getPlaylists(event.target.id).then(({ playlists }) => {
          playlists.items.forEach(item => {
              container.after(JSON.stringify(item.description));
          });
      });
    });
})
