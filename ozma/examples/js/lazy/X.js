define([
    "./C"
], function(lazy_C){

    return {
        name: 'lazy/X',
        deps: {
            'lazy/C': lazy_C
        }
    };

});
