$(document).ready(function () {
  $('#input-title').keyup(function (event) {
    let content = $(this).val();
    console.log(content);
    $('#card-title').html(content);
  });
  $('#input-description').keyup(function (event) {
    let content = $(this).val();
    console.log(content);
    $('#card-description').html(content);
  });
  $('#input-section').keyup(function (event) {
    let content = $(this).val();
    console.log(content);
    $('#card-section').html(content);
  });
});

// function () {
//
// }
