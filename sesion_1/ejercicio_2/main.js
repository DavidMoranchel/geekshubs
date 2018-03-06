$(document).ready(function () {
  let $li = $('.element-list')
  $li.removeClass('active-list');
  $li.click(function(event) {
    $li.removeClass('active-list');
    $(this).addClass('active-list');
    console.log(event);
  });
});
