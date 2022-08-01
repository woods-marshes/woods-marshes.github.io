(function (window) {  
    'use strict'
    var TIMES_SELECTOR = '[data-woods-marshes="showtime"]';
    var DIALOG_SELECTOR = '[data-woods-marshes="dialog-form"]';
    var OPENER_SELECTOR = '[data-woods-marshes="opener"]';
    var LIST_SELECTOR = '[data-woods-marshes="inner-list"]';
    var ZHAO_SELECTOR = '[data-woods-marshes="zhao-opener"]';
    var SONGS_SELECTOR = '[data-woods-marshes="songs"]';
    var MUSIC_SELECTOR = '[data-woods-marshes="music-list"]';
    var ZP_SELECTOR = '[data-woods-marshes="zhao-p"]';
    var App = window.App;
    var Times = App.Times;
    var Dialog = App.Dialog;
    var Songs = App.Songs;
    var ZhaoP = App.ZhaoP;


    var dialog = new Dialog(DIALOG_SELECTOR);
    dialog.openDialog(OPENER_SELECTOR);
    dialog.showDialog();

    var times = new Times(TIMES_SELECTOR);
    times.showTime();

    var songs = new Songs(SONGS_SELECTOR);
    songs.addSongsList(MUSIC_SELECTOR, ZP_SELECTOR);
    songs.songs();

    var zhaoP = new ZhaoP(ZHAO_SELECTOR);
    zhaoP.addZhaoPList(ZP_SELECTOR, MUSIC_SELECTOR,);
    
})(window);