// var a = moment().format('MMMM Do YYYY, h:mm:ss a');
window.onload = function() {
  var t=setInterval(runFunction,1000);

  function runFunction() {
    var a = moment();
    var b = moment().startOf('hour').fromNow();
    var c = new Date();
    var d = moment(c);
    var target = 'Sat May 25 2013 20:45:00 GMT+0300';
    

    var e = moment(target);
    var f = moment(c);
    var diff = e - f;
    var g = moment(diff).format('h:mm:ss');
    // var g = moment(c, "YYYY-MM-DD HH:mm"); 
    // document.getElementById('timeI').innerHTML = "<p>The Mac </p>";                   
    document.getElementById('timeI').innerHTML = '<p>' + g + '</p>';
  };

};
