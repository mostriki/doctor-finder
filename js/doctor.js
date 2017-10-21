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
          // captures first_name data points.
          list.data.forEach(function(x) {
            console.log(x.profile.first_name);
            $('#name').html(`<h4>${x.profile.first_name} ${x.profile.last_name}, ${x.profile.title}</h4>`);
            $('#specialty').html(`<h6>Specialty: ${x.specialties[0].actor}</h6>`);
            $('#biography').html(`<p>${x.profile.bio}</p>`);
            $('#website')

            x.practices.forEach(function(location) {
              $('#location').append(`<h6>${location.name}</h6><p>${location.visit_address.street}</p><p>${location.visit_address.city} ${location.visit_address.state}. ${location.visit_address.zip}</p>`)
            })


            if (x.practices[0].accepts_new_patients === true) {
              $('#availability').html(`<h6>Accepting new patients: Yes</h6>`);
            } else {
              $('#availability').html(`<h6>Accepting new patients: No</h6>`);
            }
          })
          debugger;
          }else {
        // post this if there are results in search
        console.log("There are no Doctors. Boo.");
      }
    }, function(error) {
      // delivers an error message to the page when the API cannot be called
      $('#showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }

}
