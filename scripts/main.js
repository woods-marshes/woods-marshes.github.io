(function (window) {  
    'use strict'
    var TIMES_SELECTOR = '[data-woods-marshes="showtime"]';
    var App = window.App;
    var Times = App.Times;

    var times = new Times(TIMES_SELECTOR);
    times.showTime();
    
})(window);