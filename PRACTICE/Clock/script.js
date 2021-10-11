function updateTime ()
{
    var fullDate = new Date();
    
    let hour = fullDate.getHours();
    let minute = fullDate.getMinutes();
    let second = fullDate.getSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = `${hour} : ${minute} : ${second}`;
    //console.log(time);
    document.querySelector('#time').innerText = time;
    setTimeout(updateTime, 1000)
}

function updateDate ()
{
    var fullDate = new Date();

    var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var year = fullDate.getFullYear();
    var month = monthList[fullDate.getMonth()];
    var date = fullDate.getDate();

    let today = `${month} ${date} ${year}`;
    document.querySelector('#date').innerText = today;
}

updateTime();
updateDate();