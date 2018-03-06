// ** server 200 ok
// ** chrome tools para la navegación lenta

// window vs document --------------------------

// Obsoleto en la version 3.0
// $( document ).ready(function(event) {
//   console.log("documento listo");
// });

// jquery 4
// $( function() {
//   console.log( "documento listo DOCUMENT" );
// });

// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("documento listo");
// });

// $( window ).on( "load", function() {
//   console.log("documento listo WINDOW");
// });

// window.onload = function () {
//   console.log("documento listo");
// }

// Si vamos a trabajar con los elementos que componen la web (divs, inputs, …) usaremos $(document).ready().
// Si vamos a trabajar con imágenes para alinearlas o comprobar sus dimensiones tendremos que usar $(window).load().
// $('.cargando').hide();

// selectores --------------------------

// $('#titulo')
// $('.parrafo')
// $('p')
// $('p:first')
// $('p:last')


// atributos --------------------------

// $('#atributos').addClass('card');
// $('#atributos').removeClass('card');
// $('#atributos').attr('onclick','saludar();');
// $('#atributos').removeAttr('onclick');
// var saludar = function () {
//   console.log('Hola');
// }
// $('#titulo').html("Hola desde JQuery");
// $('.parrafo').html("Hola desde JQuery");
// $('p').html("Hola desde JQuery");
// $('p').html('Hola desde <a href="http://jquery.com/"> JQuery </a>');
// $('input[type="text"]').val();


// atributos --------------------------

// $('input[type="text"]').slideToggle();
// $('input[type="text"]').animate({
// 	'width':'200px',
// 	'height': '50px'
// });



// effects --------------------------


// events --------------------------


// ajax

// function ajax() {
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     console.log(this.readyState,this.status);
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open("GET", "ajax.txt", true);
//   xhttp.send();
// }

function get(){
  $.ajax({
    url: "ajax.json",
    success: function(response){
      console.log(response);
    },
    error: function (error) {
      console.log(error);
    }
  });
}
//
// $('#submit').click(function () {
//   let nombre = $('input[type="text"]').val();
//   let edad = $('input[type="number"]').val();
//   var objUser = {
//     nombre: nombre,
//     edad: edad
//   }
//   post(objUser);
// })
//
// function post(){
//   $.ajax({
//     method: 'POST',
//     url: "ajax.txt",
//     data: {
//       name: "Donald Duck",
//       city: "Duckburg"
//     },
//     success: function(response){
//       console.log(response);
//     },
//     error: function (error) {
//       console.log(error);
//     }
//   });
// }

// $('#upload').on('click', function() {
//     var file_data = $('#sortpicture').prop('files')[0];
//     var form_data = new FormData();
//     form_data.append('file', file_data);
//     alert(form_data);
//     $.ajax({
//         url: 'upload.php', // point to server-side PHP script
//         dataType: 'text',  // what to expect back from the PHP script, if anything
//         cache: false,
//         contentType: false,
//         processData: false,
//         data: form_data,
//         type: 'post',
//         success: function(php_script_response){
//             alert(php_script_response); // display response from the PHP script, if any
//         }
//      });
// });
