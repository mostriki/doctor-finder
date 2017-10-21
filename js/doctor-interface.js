import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#formInput').submit(function() {
    event.preventDefault();
    let doctor = new Doctor();

    let condition = $('#condition').val();
    $('#condition').val("");
    $(".details").hide();

    doctor.doctorSearch(condition, apiKey);
  });

  $("#name").click(function() {
    event.preventDefault();
    $(".details").toggle();
  });

});
