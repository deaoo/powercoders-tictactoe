var $ = require('jquery');

$(function() {
  $('td').click(function() {
    var row = $(this).parent().attr('data-row');
    var col = $(this).attr('data-col');

    console.log('clicked cell ' + col + ' in row ' + row);
  });
});
