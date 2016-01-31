$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<p>The current weather is  " + data.currently.summary + " and it is " + data.currently.apparentTemperature + " degrees" +
     " degrees</p><p>The 3-day forecast is: <ul><li>Day 1: " + data.daily.data[1].summary +
     "<li>Day 2: " + data.daily.data[2].summary + "with a high of " + data.daily.temperatureMax
     "<li>Day 3: " + data.daily.data[3].summary +
     "</ul>test</p>"


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
