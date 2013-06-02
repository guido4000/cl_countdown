// var a = moment().format('MMMM Do YYYY, h:mm:ss a');
window.onload = function() {
  var t=setInterval(runFunction,1000);

  // decode all URL params function
  var QueryString = function () {
      // This function is anonymous, is executed immediately and 
      // the return value is assigned to QueryString!
      var query_string = {};
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
            // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = pair[1];
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
          var arr = [ query_string[pair[0]], pair[1] ];
          query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
          query_string[pair[0]].push(pair[1]);
        }
      } 
        return query_string;
  } ();

  /// enable URL date as paramter. e.g. ?d=6/2/2013%2019:45:00
  // console.log(QueryString.d);
  var tz = decodeURI(QueryString.d);
  console.log(moment(tz));


  function runFunction() {
    var a = moment();
    var b = moment().startOf('hour').fromNow();
    var c = new Date();
    var d = moment(c);
    var target = 'Sun Jun 02 2013 20:45:00 GMT+0300';
    

    var e = moment(tz); //ehemals target
    var f = moment(c);
    var diff = e - f;
    if (diff > 0 ) {
        var g = moment(diff).format('h:mm:ss');
    } else {
    var g = 0;
    }
    // var g = moment(c, "YYYY-MM-DD HH:mm"); 
    // document.getElementById('timeI').innerHTML = "<p>The Mac </p>";                   
    document.getElementById('timeI').innerHTML = '<p>' + g + '</p>';
  };

};
