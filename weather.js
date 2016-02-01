$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<p><strong>Location:</strong> " + data.timezone + " </p> " + " <p><i>(All temperatures are in degrees Fahrenheit)</i></p> " +
    "<p></p><p><h4>The current weather is  " + data.currently.summary + " and it is " + data.currently.apparentTemperature + " degrees</p></h4>" + 
     " </p><p>The 3-day forecast is: <ul><li><strong>Day 1:</strong> " + data.daily.data[1].summary + "There will be a high of " + data.daily.data[1].temperatureMax + " and a low of " + data.daily.data[1].temperatureMin +
     "<li><strong>Day 2:</strong> " + data.daily.data[2].summary + "There will be a high of " + data.daily.data[2].temperatureMax + " and a low of " + data.daily.data[2].temperatureMin +
     "<li><strong>Day 3:</strong> " + data.daily.data[3].summary + " There will be a high of " + data.daily.data[3].temperatureMax + " and a low of " + data.daily.data[3].temperatureMin +
     "</ul> </p>"

// <font color="#FF0000>"Day 3:</strong></font>
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
