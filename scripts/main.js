(function (window) {  
    'use strict'
    var TIMES_SELECTOR = '[data-woods-marshes="showtime"]';
    var DIALOG_SELECTOR = '[data-woods-marshes="dialog-form"]';
    var OPENER_SELECTOR = '[data-woods-marshes="opener"]';
    var App = window.App;
    var Times = App.Times;
    var Dialog = App.Dialog;

    var dialog = new Dialog(DIALOG_SELECTOR);
    dialog.openDialog(OPENER_SELECTOR);
    dialog.showDialog();

    var times = new Times(TIMES_SELECTOR);
    times.showTime();
    
})(window);