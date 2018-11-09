$( document ).ready(function() {
    var username = localStorage.getItem("username");
    document.getElementByClass("userName").innerHTML = username;
    $( ".userName" ).each(function() {
        $(this).innerHTML = username;
      });
});