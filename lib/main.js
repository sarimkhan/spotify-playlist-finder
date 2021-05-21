define(function(require) {
    const $ = require('jquery');
    const _ = require('lodash');
    const moment = require('moment');

    const api = require('./api');

    console.log('main');

    const container = $('#app');

    api.getCategories().then(({ categories }) => {
        categories.items.forEach(item => {
            container.append(JSON.stringify(item.name));
        })
    });
})