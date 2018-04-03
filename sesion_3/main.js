const url = 'https://geekshubs-b97d3.firebaseio.com/javier/-nskjdhfjksbdfkds.json';

$( function() {

  //get
  // getAJAX();

  //evento submit
  $('form').submit( function(event) {
    //evita que la página se recargue
    event.preventDefault();
    console.log(event);
    let formData = {
        'nombre'    : $('input[name=nombre]').val(),
        'apellidos' : $('input[name=apellidos]').val(),
        'edad'      : $('input[name=edad]').val()
    };
    formData = JSON.stringify(formData);
    console.log(formData);
    //memoria de entre 5 y 10 mb, no se borran tus datos
    localStorage.setItem('objTemporal', formData);
    postAJAX(formData);
  });

});

// GET functions ----------------

var getAJAX = function () {
  $.ajax({
    type: 'GET',
    url: url
  }).done(function (success) {
    console.log(success);
    // successGET(success)
  }).fail(function (error) {
    alert('ocurrio un error GET');
  });
}

var successGET = function (obj) {
  $.each( obj, function(key, value) {
    createTr(key, value);
  });
}

var createTr = function(key, value) {
  let tr = '<tr id="'+ key +'">';
      tr += '<td>'+ key +'</td>';
      tr += '<td>'+ value.nombre +'</td>';
      tr += '<td>'+ value.apellidos +'</td>';
      tr += '<td>'+ value.edad +'</td>';
      tr += '<td><i class="material-icons" onclick="edit(\''+ key +'\')">edit</i></td>';
      tr += '<td><i class="material-icons" onclick="deleteAJAX(\''+ key +'\')">delete</i></td>';
      tr += '</tr>';
  $('table').append(tr);
}

// POST functions ------------------

var postAJAX = function (data) {
  $.ajax({
    type: 'POST',
    url: url,
    data: data
  })
  .done(function (success) {
    console.log(success);
    successPOST(success.name);
  })
  .fail(function (error) {
    console.log(error);
    alert('ocurrio un error');
  });
}

var successPOST = function (key) {
  let objData = JSON.parse(localStorage.getItem('objTemporal'));
  let tr = '<tr id="'+ key +'">';
      tr += '<td>'+ key +'</td>';
      tr += '<td>'+ objData.nombre +'</td>';
      tr += '<td>'+ objData.apellidos +'</td>';
      tr += '<td>'+ objData.edad +'</td>';
      tr += '<td><i class="material-icons">edit</i></td>';
      tr += '<td><i class="material-icons">delete</i></td>';
      tr += '</tr>';
  $('table').append(tr);
}

// DELETE functions

var deleteAJAX = function (key) {
    $.ajax({
      url: "https://geekshubs-b97d3.firebaseio.com/users/"+key+".json",
      type: "DELETE"
    }).done(function (success) {
        $('#'+key).remove();
    }).fail(function (error) {
        console.log(error);
        alert('ocurrio un error');
    });
}



// UPDATE functions

// var putServer = function (data,url) {
//   $.ajax({
//     url: "https://geekshubs-b97d3.firebaseio.com/users/"+url+".json",
//     type: "PUT",
//     data: JSON.stringify(data),
//     success: function(response){
//       console.log(response, 'respuestaServidor');
//     },
//     error: function (error) {
//       console.log(error, 'errorServidor');
//     }
//   });
// }
