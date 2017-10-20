import { DoctorFinder } from './../js/doctor-finder.js';
let apiKey = require('./../.env').apiKey;


$(document).ready(function() {

  let doctorfinder = new DoctorFinder();

  $('#searchButton').submit(function() {
    event.preventDefault();

    // Gather inputted information
    let doctor = $('#doctor').val();
    $('#doctor').val("");


    doctorfinder.getDoctor(doctor, apiKey);
  });
});
