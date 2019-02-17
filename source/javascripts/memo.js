(function() {

  console.log("hg");

  if (localStorage.getItem('memo')) {
    $('#memo').val(localStorage.getItem('memo'));
  }

  $('#clear').click(function() {
    $('#memo').val('');
    localStorage.removeItem('memo');
  });

  $('#memo').on('keyup', function() {
    localStorage.setItem('memo', $('#memo').val());
    $('#message').fadeIn(500).fadeOut(500);
  });

  /*   (function autoSave() {
    localStorage.setItem('memo', $('#memo').val());
    $('#message').show().hide(200);
    setTimeout(autoSave, 1000);
  })();
   */
});
