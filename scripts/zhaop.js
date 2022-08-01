(function (window) {
    'use strict'
    var App = window.App || {};
    var $ = window.jQuery;
    var $music = $('[data-woods-marshes="my-music"]');
    var $big_image = $('[data-woods-marshes="big-image"]');
    var $big_loge_text = $('[data-woods-marshes="big-loge-text"]');
    var a = App.a;

    function ZhaoP (selector) {  
        if (! selector) {
            return new Error('No selector providede');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    };

    ZhaoP.prototype.addZhaoPList = function (selector1, selector2) {  
        this.$element.on('click',function () {  
            console.log(a);
            $(selector2).fadeOut();
            $music.fadeOut();
            if (! a) {
                a = 0;
            }
            if (a === 0) {
                $big_image.attr('src', 'img/mmj-3.jpg');
                $big_loge_text.html('<em>モア！ジャンプ！モア！</em>');
                $(selector1).fadeIn();
                a++;
            } else {
                a = 0;
                $big_image.attr('src', 'img/001.jpg');
                $big_loge_text.html('<em>woods-marshes</em>');
                $(selector1).fadeOut();
            }
        });
    };

    App.a = a;
    App.ZhaoP = ZhaoP;
    window.App = App;
})(window);