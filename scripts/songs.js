(function () {  
    'use strict'
    var App = window.App || {};
    var $ = window.jQuery;
    var $music = $('[data-woods-marshes="my-music"]');
    var $big_image = $('[data-woods-marshes="big-image"]');
    var $big_loge_text = $('[data-woods-marshes="big-loge-text"]');
    var a = App.a;

    function Songs(selector) {  
        if (! selector) {
            return new Error('No selector providede');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    };

    Songs.prototype.addSongsList = function (selector1) {  
        this.$element.on('click',function () {  
            //console.log(a);
            //$(selector2).fadeOut();
            $('[data-woods-marshes="one"]').css({'color':'rgba(240, 245, 250, 0.8)', 'text-shadow':'rgba(0, 0 , 0, 0.9) 1px 2px 3px'});
            if (! a) {
                a = 0;
            }
            if (a === 0) {
                $big_image.attr('src', 'img/mmj-3.jpg');
                $big_loge_text.html('<em>モア！ジャンプ！モア！</em>');
                $music.fadeIn();
                $(selector1).fadeIn();
                $music[0].play();
                a++;
            } else {
                a = 0;
                $big_image.attr('src', 'img/001.jpg');
                $big_loge_text.html('<em>woods-marshes</em>');
                $music[0].pause();
                $music.fadeOut();
                $(selector1).fadeOut();
            }
        });
    };

    Songs.prototype.songs = function () {  
        $('[data-woods-marshes="li-song"]').on('click', function (event) {  
            event.preventDefault();
            $('[data-woods-marshes="music-list"]').find('span').css({'color':'rgba(5, 3, 34, 0.7)', 'text-shadow':'rgba(0, 0, 0, 0) 0px 0px 0px'});
            console.log(this);
            var url = $(this).find('a').attr("href");
            var title = $(this).find('span').text();
            $music.attr('src', url);
            $big_loge_text.html('<em>' + title + '</em>');
            $(this).find('span').css({'color':'rgba(240, 245, 250, 0.8)', 'text-shadow':'rgba(0, 0 , 0, 0.9) 1px 2px 3px'});
            $music[0].play();
        });
    }
    App.a = a;
    App.Songs = Songs;
    window.App = App;
})(window);