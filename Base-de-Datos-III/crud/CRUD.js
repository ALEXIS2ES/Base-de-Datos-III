module.exports.insertarRegistro = function(db, callback){
	let coleccion = db.collection("alumnos")

	coleccion.insertMany([
	    {nombre: "miguel", apellido:"servantes", edad: 25, peso: 75},
		{nombre: "fernando", apellido:"ortiz", edad: 32, peso: 69},
		{nombre: "mirian", apellido:"calsina", edad: 21, peso: 57},
		{nombre: "estefani", apellido:"melendez", edad: 25, peso: 60},
		{nombre: "juan", apellido:"perez", edad: 26, peso: 65},
	
	], (error, result) => {
	  console.log("resultado de insert: " + result.toString());;

	});
}

module.exports.eliminarRegistro = function(db, callback){
	let coleccion = db.collection("alumnos")
	try{
		coleccion.deleteOne({edad:32})
		console.log("se elimino el registro correctamente")
	}catch(e){
		console.log("se genero un error: "+ e)
	}
}

module.exports actualizarYActualizar = function (db, callback) {
	let coleccion = db.collection("alumnos")

	coleccion.find().toArray((error, documents)=>{
	  if(error)console.log(error)
	  console.log(documents)
	  callback()
	})

	try{
		coleccion.updateOne({name:"miguel"}, {$set: {peso: 100}})
		console.log("se ha actualizado el registro correctamente")
	}catch(e){
		console.log("error actualizando el registro: "+e)
	}

	coleccion.find().toArray((error, documents)=>{
	  if(error)console.log(error)
	  console.log(documents)
	  callback()
	})
}