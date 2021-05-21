requirejs.config({
    baseUrl: 'vendor',
    paths: {
        'jquery': 'jquery-1.9.1.min',
        'jquery-ui': 'jquery-1.9.1.min',
        'bootstrap': 'bootstrap-2.3.1.min',
        'lodash': 'lodash-4.17.4',
        'moment': 'moment'
    }
});

requirejs(['../lib/main']);