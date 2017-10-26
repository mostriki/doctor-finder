import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#formInput').submit(function() {
    event.preventDefault();
    let doctor = new Doctor();

    let name = $('#name').val();
    let condition = $('#condition').val();
    $('#condition').val("");
    $('#name').val("");
    $(".details").hide();

    doctor.doctorSearch(name, condition, apiKey);
  });

  $("#name").click(function() {
    event.preventDefault();
    $(".details").toggle();
  });

});
