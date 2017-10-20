export class Doctor {
  constructor() {

  }

  betterDoctorAPI (condition, apiKey) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=or-portland&user_location=45.5206%2C-122.6774&sort=best-match-asc&skip=0&limit=25&user_key=${apiKey}`;
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

     // this could be its own function
     promise.then(function(response) {
        let list = JSON.parse(response);
        if (list.meta.count > 0) {
          console.log("Doctor count is 1 or more. Huzzah!");
          // display this name, last name, address, phone number, and website
          
          captures first_name data points.
          list.data.forEach(function(x) {
            console.log(x.profile.first_name)
          })
          // debugger;
          list.data.forEach(function(x) {
  	        x.practices.forEach(function(y) {
              if (y.accepts_new_patients === true) {
                // post here if they accept new patients
                console.log(x.profile.first_name + " accepts new patients!");
              } else {
                // post here if they do not accept new patients
                console.log(x.profile.first_name + " does not accept new patients!");
              }
            });
          });
      }else {
        // post this if there are results in search
        console.log("There are no Doctors. Boo.");
      }
    }, function(error) {
      // delivers an error message to the page when the API cannot be called
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }

}
