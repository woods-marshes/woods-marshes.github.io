(function (window) {  
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    var data = '?';
    var url = 'kanagawa.html';

    function Dialog(selector) {  
        if (! selector) {
            return new Error('No selector providede');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }       

    Dialog.prototype.showDialog = function (fn) {  
        this.$element.dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            },
            height: 140,
            modal: true,
            buttons: {
                '提交': function () {  
                    $( this ).dialog( "close" )
                    var $from = $('[data-woods-marshes="form"]').serializeArray();
                    console.log($from);
                    $from.forEach(function (element) {
                        if (element.name === 'id') {
                            data = data + element.name + '=' + element.value; 
                            console.log(element.name + ' is ' + element.value);
                        } else {
                            data = data + element.name + '=' + element.value + '&'; 
                            console.log(element.name + ' is ' + element.value);
                        }
                    });
                    console.log(data);
                    url = url + data;
                    setTimeout(() => {
                        window.location.href= url;
                        data = '?';
                        url = 'kanagawa.html'
                    }, 300);
                },

                '取消': function () {  
                    $( this ).dialog( "close" );
                }
            },
        });
    };

    Dialog.prototype.openDialog = function (selector) {  
        $(selector).click(function (e) { 
            this.$element.dialog("open");
        }.bind(this));
    };

    App.Dialog = Dialog;
    window.App = App;
})(window);