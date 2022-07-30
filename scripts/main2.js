(function (window) {  
    var App = window.App;
    var $ = window.jQuery;
    var TIMES_SELETOR = '[data-kanagawa="time"]';
    var PHONE_CODE_SELETOR = '[data-kanagawa="phonecode"]';
    var AREA_SELETOR = '[data-kanagawa="area"]';
    var ID_SELETOR = '[data-kanagawa="id"]';
    var Time = App.Times;

    var times = new Time(TIMES_SELETOR);
    times.showTime2();

    var searchStr = location.search;
    console.log(searchStr);
    //searchStr = decodeURI(searchStr);
    console.log(searchStr);
    searchStr = searchStr.slice(1,searchStr.length);
    console.log(searchStr);
    var searchs = searchStr.split('&');
    console.log(searchs[0].split('='));

    var data1 = '';
    var data2 = '';
    var data3 = '';

    data1 = searchs[0].split('=');
    data2 = searchs[1].split('=');
    data3 = searchs[2].split('=');

    $(PHONE_CODE_SELETOR).html(decodeURI(data1[1]));


    $(AREA_SELETOR).html(decodeURI(data2[1]));

    if (decodeURI(data3[1]) === 'he') {
        $(ID_SELETOR).html('哈人');
    }if (decodeURI(data3[1]) === '晶哥') {
        $(ID_SELETOR).html(decodeURI(data3[1]) + '摇了我吧');
    }if (decodeURI(data3[1]) === 'glasses') {
        $(ID_SELETOR).html('我告诉你我是身经百战了');
    }if (decodeURI(data3[1]) === '也要鼓掌') {
        $(ID_SELETOR).html('通过!通过!通过!这' + decodeURI(data3[1]) + '!');
    }else {
        $(ID_SELETOR).html(decodeURI(data3[1]) + '滚');
    }

    console.log(data1[2]);

})(window);