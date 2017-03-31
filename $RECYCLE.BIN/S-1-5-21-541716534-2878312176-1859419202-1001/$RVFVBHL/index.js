var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost/crud"

var operaciones = require('./CRUD.js')

MongoClient.connect(url, function(err, db){
	if(err)console.log(err)
	console.log("coneccion establecida con la base de datos")
	operaciones.insertarRegistro(db, (error, result) =>{             // en esta linea de codigo solamente se manipula eliminarRegistro o insertarregistro     
	if(error)console.log("Error insertando los registros: "+error)     //para anadir  o eliminar a un elemto
  })
})