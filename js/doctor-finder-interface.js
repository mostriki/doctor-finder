import { DoctorFinder } from './../js/doctor-finder.js';
let apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#searchButton').click(function() {
    // let doctor = $('#doctor').val();
    // $('#doctor').val("");

      let doctorfinder = new DoctorFinder();

      doctorfinder.search(doctor, apiKey);
  });
});
