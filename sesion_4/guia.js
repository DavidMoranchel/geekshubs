//es una referencia al servicio de base de datos
var database = firebase.database();

//creamos una referencia en la base de datos
var alumnosRef = database.ref('alumnos');

//creamos un alumno
alumnosRef.push({
  name:'David',
  apellido:'Moranchel'
})
  .then( (snapshot) => {
    console.log(snapshot);
  })
  .catch( (error) => {
    console.log(error);
  });

//actualizamos alumno
alumnosRef.child('key').update({
  name:'David',
  apellido:'Cermeño'
})
  .then( (snapshot) => {
    console.log(snapshot);
  })
  .catch( (error) => {
    console.log(error);
  });

// eliminamos alumno
alumnosRef.child('key').remove()
  .then( (snapshot) => {
    console.log(snapshot);
  })
  .catch( (error) => {
    console.log(error);
  });


//recuperamos datos

//una unica ves
alumnosRef.on('value', (data) => {
  console.log(data);
});

//cada que ocurra un cambio en la referencia
alumnosRef.on('child_added', (data) => {
  console.log(data);
});

//una unica ves
alumnosRef.on('child_changed', (data) => {
  console.log(data);
});

//una unica ves
alumnosRef.on('child_removed', (data) => {
  console.log(data);
});
