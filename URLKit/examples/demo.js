
require.config({
    baseUrl: '../../js/'
});

require([
    'jquery',
    'mo/lang',
    'urlkit'
], function($, _, URLKit){

    var url = URLKit({
        baseUrl: ''
    });

    url.route('default', function(){
        console.info('default: ', arguments);
    }).route('/house/:hid/room/:rid', function(params, hid, rid){
        console.info('route: ', hid, rid, params);
    });

    url.listen();

    $('.url-list a').click(function(){
        var href = this.href;
        if (URLKit.SUPPORT_PUSHSTATE) {
            href = href.replace(location.href
                .replace(/[^\/]*$/, ''), '');
        } else {
            href = href.replace(location.href
                .replace(/#.*/, '')
                .replace(/[^\/]*$/, ''), '#');
        }
        var parts = URLKit.parse(href);
        var params = parts.shift();
        _.mix(parts, params);
        url.nav(parts);
        return false;
    });

    $('.url-list button').click(function(){
        var code = this.innerHTML;
        var house_id = url.nav('1');
        var page_id = url.nav('page');
        if (!house_id) {
            return alert('Click on any of the above links first!');
        }
        eval(code);
    });

});

