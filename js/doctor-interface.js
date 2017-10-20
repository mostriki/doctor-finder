import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#formInput').submit(function() {
    event.preventDefault();
    let doctor = new Doctor();

    let condition = $('#condition').val();
    $('#condition').val("");
    console.log(condition);


    doctor.betterDoctorAPI(condition, apiKey);
  });
});

// captures first_name data points.
// list.data.forEach(function(x) {
//   console.log(x.profile.first_name)
// })
