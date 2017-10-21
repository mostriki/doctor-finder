export class Doctor {
  constructor() {

  }

  doctorSearch (condition, apiKey) {
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
          list.data.forEach(function(x) {
console.log(x.profile.first_name);
            $('#name').append(`<li><h4>${x.profile.first_name} ${x.profile.last_name}, ${x.profile.title}</h4></li>`);
            $('.details').append(`<li><h6>Specialty: ${x.specialties[0].actor}</h6><br><p>${x.profile.bio}</p></li>`);

            x.practices.forEach(function(location) {
              $('.details').append(`<li><h6>${location.name}</h6><p>${location.visit_address.street}</p><p>${location.visit_address.city} ${location.visit_address.state}. ${location.visit_address.zip}</p></li>`)
              $('.details').append(`<li><p>Phone: ${location.phone}</p></li>`);
              $('.detailse').append(`<li><p>Website: <a href=${location.website}>${location.website}</a></p></li>`);
            })

            for (let i = 0; i >= x.practices.length; ++i) {

            }

            if (x.practices[0].accepts_new_patients === true) {
              $('.details').append(`<li><h6>Accepting new patients: Yes</h6></li>`);
            } else {
              $('.details').append(`<li><h6>Accepting new patients: No</h6></li>`);
            }
          })
          // debugger;
        }else {
        console.log("There are no Doctors. Boo.");
      }
    }, function(error) {
      $('#error').text(`There was an error processing your request: ${error.message}`);
    });
  }

}
