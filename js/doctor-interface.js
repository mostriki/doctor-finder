import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#formInput').submit(function() {
    event.preventDefault();
    let doctor = new Doctor();
    let name = $('#name').val();
    $('#name').val("");
    let condition = $('#condition').val();
    $('#condition').val("");
    $(".output2").hide();
    doctor.doctorSearch(name, condition, apiKey);
  });
  $(".output1").click(function() {
    event.preventDefault();
    $(".output2").toggle();
  });
});
