const getSecondsToTomorrow = () => {
    let d = new Date();
    let secondsToTomorrow = 86400 - (d.getHours()*3600 + d.getMinutes()*60 + d.getSeconds());
    console.log(secondsToTomorrow);
}

getSecondsToTomorrow();