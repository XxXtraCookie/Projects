$(document).ready(function() {
  $('.city').addClass('show'); // start showing all countries

  $('li:first-child').click(function() { // show all countries
    $('.city').addClass('show');
  });

  $('li:nth-child(2)').click(function() { // show montenegro
    $('.city').removeClass('show');
    $('.city').addClass('hide');
    $('.montenegro').addClass('show');
  });

  $('li:nth-child(3)').click(function() { // show croatia
    $('.city').removeClass('show');
    $('.city').addClass('hide');
    $('.croatia').addClass('show');
  });

  $('li:nth-child(4)').click(function() { // show france
    $('.city').removeClass('show');
    $('.city').addClass('hide');
    $('.france').addClass('show');
  });

  $('li:nth-child(5)').click(function() { // show italy
    $('.city').removeClass('show');
    $('.city').addClass('hide');
    $('.italy').addClass('show');
  });

});
