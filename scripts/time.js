(function (window) {  
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function Times(selector) {  
        if (! selector) {
            return new Error('No selector providede');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    Times.prototype.showTime = function () { 
        //this.$element.html(getTime());
        //setInterval(getTime(),1000);
        setInterval(function () {  
            this.$element.html(getTime1());
        }.bind(this)
        , 1000);
    }; 

    Times.prototype.showTime2 = function () { 
        //this.$element.html(getTime());
        //setInterval(getTime(),1000);
        setInterval(function () {  
            this.$element.html(getTime2());
        }.bind(this)
        , 1000);
    }; 

    var getTime1 = function () {  
        var date = new window.Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var week = date.getDay();
        week = "星期" + '日一二三四五六'.charAt(week);
        var hour = date.getHours();
        hour = hour < 10 ? '0' + hour: hour;
        var minute = date.getMinutes();
        minute = minute < 10 ? '0' + minute: minute;
        var second = date.getSeconds();
        second = second < 10 ? '0' + second: second;
        return 'THE TIME IS' + ' ' + year + '-' + month + '-' + day + ' ' + week + ' ' + hour + ':' + minute + ':' + second;
    };

    var getTime2 = function () {  
        var date = new window.Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var week = date.getDay();
        week = "星期" + '日一二三四五六'.charAt(week);
        var hour = date.getHours();
        hour = hour < 10 ? '0' + hour: hour;
        var minute = date.getMinutes();
        minute = minute < 10 ? '0' + minute: minute;
        var second = date.getSeconds();
        second = second < 10 ? '0' + second: second;
        return year + '.' + month + '.' + day + ' ' +  hour + ':' + minute + ':' + second;
    };

    App.Times = Times;
    window.App = App;
})(window);
