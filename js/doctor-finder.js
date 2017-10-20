export class DoctorFinder {
 //  constructor(doctor, condition) {
 //   this.doctor = doctor;
 //   this.condition = condition;
 // }

  getDoctor(condition, apiKey) {
      let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        // let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${condition}&location=45.5206%2C-122.6774%2C50&user_location=45.5206%2C-122.6774&sort=best-match-asc&skip=0&limit=25&user_key=${apiKey}`;
        // request.onload = function() {
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=45.5206%2C-122.6774%2C50&user_location=45.5206%2C-122.6774&sort=best-match-asc&skip=0&limit=25&user_key=${apiKey}`;
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
        let doctor = JSON.parse(response);

      //   let arr = [];
      //   doctor.weather.forEach(function(x) {
      //     $('.condition').append(`<li>The weather ${x.icon} conditon indicates ${x.description}.</li>` );
      //
      //   });
      //
      // $('.showHumidity').text(`The humidity in ${city} is ${doctor.main.humidity}%`);
      $('.doctorOutput').text(`The temperature in Fahrenheit is ${doctor.query} degrees.`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }

}
