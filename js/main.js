var stTime;

function startTime() {
    var date1 = new Date();

    stTime = setInterval(function() {
        var date2 = new Date();
        var result = date2 - date1;

        //Hàm xử lý kết quả
        var seconds = result / 1000;
        var minute = 0;
        var hour = 0;
        if (seconds > 60) {
            minute = Math.floor(seconds / 60);
            seconds -= minute * 60;
        }
        if (minute > 60) {
            hour = Math.floor(minute / 60);
            minute -= hour * 60;
        }

        document.getElementById("seconds").innerHTML = Math.floor(seconds);
        document.getElementById("minute").innerHTML = Math.floor(minute);
        document.getElementById("hour").innerHTML = Math.floor(hour);

    }, 1000);


}

function stopTime() {
    clearInterval(stTime);
}

function resetTime() {
    document.getElementById("seconds").innerHTML = 0;
    document.getElementById("minute").innerHTML = 0;
    document.getElementById("hour").innerHTML = 0;
}