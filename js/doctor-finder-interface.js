import { DoctorFinder } from './../js/doctor-finder.js';
let apiKey = require('./../.env').apiKey;





$(document).ready(function() {


  $('#searchButton').submit(function() {
    event.preventDefault();

    // Gather inputted information
    let doctor = $('#doctor').val();
    $('#doctor').val("");

    let doctorfinder = new DoctorFinder();

    doctorfinder.getDoctor(doctor, apiKey);
  });
});
