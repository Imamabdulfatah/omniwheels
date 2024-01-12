
console.log("Javascript Connected!");
// Controller
$(function() {
  $('a#maju').bind('click', function() {
    $.getJSON('/maju',
        function(data) {
      //do nothing

    });
return false;
});
});


$(function() {
  $('a#kanan').bind('click', function() {
    $.getJSON('/kanan',
    function(data) {
  //do nothing
  
});
return false;
});
});

$(function() {
  $('a#kiri').bind('click', function() {
    $.getJSON('/kiri',
    function(data) {
  //do nothing
 
});
return false;
});
});


$(function() {
  $('a#mundur').bind('click', function() {
    $.getJSON('/mundur',
    function(data) {
  //do nothing

});
return false;
});
});

$(function() {
  $('a#berhenti').bind('click', function() {
    $.getJSON('/berhenti',
    function(data) {
  //do nothing

});
return false;
});
});

$(function() {
  $('a#shutdown').bind('click', function() {
    $.getJSON('/shutdown',
    function(data) {
  //do nothing

});
return false;
});
});


$(function() {
  $(document).keydown(function(e) {
    switch (e.key) {
      case 'w':
        $.getJSON('/maju', function(data) {
          // aksi maju
        });
        break;
      case 'a':
        $.getJSON('/kiri', function(data) {
          // aksi kiri
        });
        break;
      case 'd':
        $.getJSON('/kanan', function(data) {
          // aksi kanan
        });
        break;
      case 'z':
        $.getJSON('/mundur', function(data) {
          // aksi mundur
        });
        break;
      case 's':
        $.getJSON('/berhenti', function(data) {
          // aksi berhenti
        });
        break;
    }
    return false;
  });
});