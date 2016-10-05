function formatTime(seconds) {
    let min = Math.floor(seconds / 60),
        second = seconds % 60,
        hour, newMin, time;
    if(min > 60) {
        hour = Math.floor(min / 60);
        newMin = min % 60;
    }
    if(second < 10) second = '0' + second;
    if(min < 10) min = '0' + min;
    return time = hour ? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
}

module.exports = {
    formatTime: formatTime
}
