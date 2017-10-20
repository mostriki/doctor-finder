export class DoctorFinder {

  search(doctor, apiKey) {
      let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        // let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&appid=${apiKey}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });

      promise.then(function(response) {
        let body = JSON.parse(response);

      //   let arr = [];
      //   body.weather.forEach(function(x) {
      //     $('.condition').append(`<li>The weather ${x.icon} conditon indicates ${x.description}.</li>` );
      //
      //   });
      //
      // $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      // $('.showTemp').text(`The temperature in Fahrenheit is ${body.main.temp} degrees.`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }

}
