var stTime;
var stop = 0;
var date3 = null; // Thời gian bắt đầu bị trì hoãn
var minutes = [];
var hours = [];
var seconds = [];
var second = 0;
var minute = 0;
var hour = 0;

function startTime() {

    if (stop == 0)
        var date1 = new Date();
    else {
        var newTime = new Date();
        var date4 = newTime - date3;
        date1.setSeconds(date1.getSeconds + date4);
        stop = 0;
    }

    document.getElementById("startTime").innerHTML = "Bắt đầu";

    stTime = setInterval(function() {
        var date2 = new Date();
        var result = date2 - date1;
        console.log(date1);
        console.log(date2);

        //Hàm xử lý kết quả
        second = result / 1000;
        if (second > 60) {
            minute = Math.floor(second / 60);
            second -= minute * 60;
        }
        if (minute > 60) {
            hour = Math.floor(minute / 60);
            minute -= hour * 60;
        }

        document.getElementById("seconds").innerHTML = Math.floor(second);
        document.getElementById("minute").innerHTML = Math.floor(minute);
        document.getElementById("hour").innerHTML = Math.floor(hour);

    }, 1000);

}

function stopTime() {
    date3 = new Date();
    clearInterval(stTime);
    document.getElementById("startTime").innerHTML = "Tiếp tục";
    stop = 1;
}

function resetTime() {
    document.getElementById("seconds").innerHTML = 0;
    document.getElementById("minute").innerHTML = 0;
    document.getElementById("hour").innerHTML = 0;
}

function saveTime() {
    seconds.push(Math.floor(second));
    minutes.push(Math.floor(minute));
    hours.push(Math.floor(hour));
    var txt = new String();
    for (var i = 0; i < seconds.length; i++) {
        txt += "<li>" + hours[i] + ":" + minutes[i] + ":" + seconds[i] + "</li>";
    }
    document.getElementById("list").innerHTML = txt;
}