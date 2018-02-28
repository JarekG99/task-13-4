var os = require('os');

function getTime() {
    var uptime = os.uptime();

  var hours = (uptime /3600).toFixed(0);
  var min = ((uptime - (hours * 3600)) / 60).toFixed(0);
  var sec = uptime - (hours * 3600) - (min * 60);
  var time = hours + 'hours ' + min + 'min ' + sec + 'sec';
  return time;
}

exports.print = getTime;
