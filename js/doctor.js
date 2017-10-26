export class Doctor {
  constructor() {

  }

  doctorSearch (name, condition, apiKey) {
      let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${condition}&location=45.5231%2C-122.6765%2C50&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${apiKey}`;
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
        // debugger;
        if (list.meta.count > 0) {
          // console.log("Doctor count is 1 or more. Huzzah!");
          list.data.forEach(function(x) {
            $('.output').append(`<li><h4>${x.profile.first_name} ${x.profile.last_name}, ${x.profile.title}</h4></li>`);
            $('.output').append(`<li><h6>${x.specialties[0].actor}</h6><p>${x.profile.bio}</p></li>`);
            x.practices.forEach(function(location) {
              $('.output').append(`<li><h6>${location.name}</h6><p>${location.visit_address.street}</p><p>${location.visit_address.city} ${location.visit_address.state}. ${location.visit_address.zip}</p></li>`)
              $('.output').append(`<li><p>Phone: ${location.phone}</p></li>`);
              $('.output').append(`<li><p>Website: <a href=${location.website}>${location.website}</a></p></li>`);
            })
            if (x.practices[0].accepts_new_patients === true) {
              $('.output').append(`<li><p>Accepting new patients: Yes</p></li>`);
            } else {
              $('.output').append(`<li><p>Accepting new patients: No</p></li>`);
            }
          })
        } else {
          $('.output').append(`<li><h6>There are no results for your search parameters at this time.</h6></li>`);
      }
    }, function(error) {
      $('#error').text(`There was an error processing your request: ${error.message}`);
    });
  }
}
