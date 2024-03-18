db.users.insertMany([
    {
      nombres: "julian",
      apellidos: "perez",
      correo: "julian@gmail.com",
      ciudad: "New York",
      pais: "EEUU",
      salario_dlls: 6000,
      edad: 20,
      altura_cm: 175,
      peso_libra: 150,
    },
    {
      nombres: "Juan",
      apellidos: "Perez",
      correo: "ejemplo@riwi",
      ciudad: "Bogotá",
      pais: "Colombia",
      salario_dlls: 3000,
      edad: 45,
      altura_cm: 160,
      peso_libra: 130,
    },
    {
      nombres: "Andrés",
      apellidos: "González",
      correo: "andres@hotmail.com",
      ciudad: "Toronto",
      pais: "Canada",
      salario_dlls: 5800,
      edad: 28,
      altura_cm: 180,
      peso_libra: 185,
    },
    {
      nombres: "Valentina",
      apellidos: "López",
      correo: "valentina@yahoo.com",
      ciudad: "Venecia",
      pais: "Italia",
      salario_dlls: 1500,
      edad: 22,
      altura_cm: 185,
      peso_libra: 195,
    },
    {
      nombres: "Santiago",
      apellidos: "Martínez",
      correo: "santiago@gmail.com",
      ciudad: "Paris",
      pais: "Francia",
      salario_dlls: 3100,
      edad: 30,
      altura_cm: 158,
      peso_libra: 155,
    },
    {
      nombres: "John",
      apellidos: "Doe",
      correo: "John@hotmail.com",
      ciudad: "Rio de janeiro",
      pais: "Brasil",
      salario_dlls: 4000, 
      edad: 27,
      altura_cm: 155,
      peso_libra: 110,
    },
    {
      nombres: "David",
      apellidos: "Hernández",
      correo: "david@yahoo.com",
      ciudad: "Tokyo",
      pais: "China",
      salario_dlls: 950,
      edad: 55,
      altura_cm: 170,
      peso_libra: 200,
    },
    {
      nombres: "María",
      apellidos: "García",
      correo: "maria@gmail.com",
      ciudad: "Maipu",
      pais: "Chile",
      salario_dlls: 4000, 
      edad: 15, 
      altura_cm: 159,
      peso_libra: 135,
    },
    {
      nombres: "Ana",
      apellidos: "Rojas",
      correo: "otro@riwi.net",
      ciudad: "Guadalajara",
      pais: "Mexico",
      salario_dlls: 2500, 
      edad: 14,
      altura_cm: 175,
      peso_libra: 155,
    },
    {
      nombres: "Maria",
      apellidos: "Pérez", 
      ciudad: "Berlin",
      pais: "Alemania",
      salario_dlls: 0, 
      edad: 29,
      altura_cm: 165,
      peso_libra: 125,
    },
    {
      nombres: "Pedro",
      apellidos: "Moreno",
      correo: "Moreno@example.com",
      ciudad: "Londres",
      pais: "Reino Unido",
      salario_dlls: 2800,
      edad: 32,
      altura_cm: 182,
      peso_libra: 160,
    },
    {
      nombres: "Giuseppe",
      apellidos: "Rossi",
      correo: "giuseppe@example.com",
      ciudad: "Roma",
      pais: "Italia",
      salario_dlls: 2200,
      edad: 27,
      altura_cm: 175,
      peso_libra: 145,
    },
    {
      nombres: "Lucía",
      apellidos: "Fernández",
      ciudad: "París",
      pais: "Francia",
      salario_dlls: 3200,
      edad: 28,
      altura_cm: 168,
      peso_libra: 125,
    },
    {
      nombres: "Rafael",
      apellidos: "Santos",
      correo: "rafael@example.com",
      ciudad: "Buenos Aires",
      pais: "Argentina",
      salario_dlls: 1800,
      edad: 24,
      altura_cm: 170,
      peso_libra: 135,
    },
    {
      nombres: "Priya",
      apellidos: "Patel",
      ciudad: "Mumbai",
      pais: "India",
      edad: 31,
      altura_cm: 160,
      peso_libra: 115,
    },
    {
        nombres: "Octavio",
        apellidos: "Mesa",
        ciudad: "roma",
        pais: "España",
        salario_dlls: 3200,
        edad: 31,
        altura_cm: 195,
        peso_libra: 115,
      },
      {
        nombres: "juanito",
        apellidos: "jaramillo",
        ciudad: "sidney",
        pais: "Australia",
        salario_dlls: 3200,
        edad: 31,
        altura_cm: 160,
        peso_libra: 150,
      },
      {
        nombres: "peranito",
        apellidos: "montoya",
        ciudad: "Berlin",
        pais: "ALemania",
        salario_dlls: 4200,
        edad: 45,
        altura_cm: 160,
        peso_libra: 150,
      },
      {
        nombres: "Alejandro",
        apellidos: "Martinez",
        ciudad: "London",
        pais: "Reino Unido",
        salario_dlls: 4200,
        edad: 45,
        altura_cm: 160,
        peso_libra: 150,
      },
      {
        nombres: "juan",
        apellidos: "Perez",
        ciudad: "Toronto",
        pais: "Canada",
        salario_dlls: 3200,
        edad: 51,
        altura_cm: 190,
        peso_libra: 150,
      },
  ]);

  
db.users.drop();




//UPDATE EJERCICIOS

/* Incrementar el salario de todos los usuarios en un 10%. */
db.users.updateMany({}, { $mul: { salario_dlls: 1.1 } });

/* Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles". */
db.users.updateMany({ city: "New York" }, { $set: { city: "Los Ángeles" } });

/* Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez". */
db.users.updateMany({ nombres: "Juan", apellidos: "Perez" }, { $set: { correo: "nuevo@riwi.com" } });

/* Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años. */
db.users.updateMany({ correo: "ejemplo@riwi.es" }, { $set: { edad: 35 } });

/* Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada". */
db.users.updateMany({ pais: "Mexico" }, { $set: { pais: "Canada" } });

/* Aumentar la altura de todos los usuarios en 5 centímetros. */
db.users.updateMany({}, { $inc: { altura_cm: 5 } });

/* Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González". */
db.users.updateMany({ correo: "otro@riwi.net" }, { $set: { apellidos: "González" } });

/* Actualizar el peso del usuario con nombre "Maria" a 140 libras. */
db.users.updateMany({ nombres: "Maria" }, { $set: { peso_libras: 140 } });

/* Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%. */
db.users.updateMany({ pais: "Estados Unidos" }, { $mul: { salario_dlls: 1.15 } });

/* Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co". */
db.users.updateMany({ nombres: "Pedro" }, { $set: { correo: "nuevo_correo@riwi.co" } });

/* Cambiar la edad de todos los usuarios menores de 30 años a 30 años. */
db.users.updateMany({ edad: { $lt: 30 } }, { $set: { edad: 30 } });

/* Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%. */
db.users.updateMany({ salario_dlls: { $lt: 3000 } }, { $mul: { salario_dlls: 1.20 } });

/* Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín". */
db.users.updateMany({ city: "Bogotá" }, { $set: { city: "Medellín" } });

/* Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia". */
db.users.updateMany({ salario_dlls: { $gt: 5000 } }, { $set: { pais: "Australia" } });

/* Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años. */
db.users.updateMany({ edad: { $gt: 50 } }, { $inc: { edad: -5 } });

/* Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras. */
db.users.updateMany({ peso_libras: { $gt: 200 } }, { $set: { peso_libras: 180 } });

/* Incrementar el salario de los usuarios que viven en "London" en un 25%. */
db.users.updateMany({ city: "London" }, { $mul: { salario_dlls: 1.25 } });

/* Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith". */
db.users.updateMany({ salario_dlls: { $gt: 4000 } }, { $set: { apellidos: "Smith" } });

/* Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".*/
db.users.updateMany({ nombres:{$regex:/(A)$/}}, { $set: { correo: "nuevo@riwi.es" } });

/* Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".*/
db.users.updateMany({ altura_cm: { $lt: 160 } }, { $set: { city: "París" } });




//DELETE EJERCICIOS


/* 1. Eliminar todos los usuarios que tienen un salario menor que 2000 dólares. */
db.users.deleteMany({salario_dlls:{$lt:2000}});


/* 2. Eliminar usuarios que tienen una edad menor que 25 años. */
db.users.deleteMany({edad:{$lt:25}});


/* 3. Borrar todos los usuarios que viven en "París". */
db.users.deleteMany({ciudad:"París"});


/*4. Eliminar usuarios que tienen un peso superior a 180 libras. */
db.users.deleteMany({peso_libra:{$gt:180}});


/* 5. Eliminar usuarios que tienen una altura inferior a 160 centímetros. */
db.users.deleteMany({altura_cm:{$lt:160}});


/* 6. Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe". */
db.users.deleteMany({$and:[{nombres:"John"},{apellidos:"Doe"}]});


/* 7. Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com". */
db.users.deleteMany({correo:{$regex:/(@example.com)$/}})


/* 8. Eliminar usuarios que no tienen una dirección de correo electrónico registrada. */
db.users.deleteMany({correo:{$exists:false}});


/* 9. Eliminar usuarios que viven en "Tokyo". */
db.users.deleteMany({ciudad:"Tokyo"});


/*10. Borrar todos los usuarios que son menores de 18 años. */
db.users.deleteMany({edad:{$lt:18}});


/* 11. Eliminar usuarios que tienen un salario igual a 0. */
db.users.deleteMany({salario_dlls:0});


/* 12. Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.*/
db.users.deleteMany({$and:[{ciudad:"New York"},{salario_dlls:{$gt:5000}}]});


/* 13. Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam". */
db.users.deleteMany({correo:{$regex:/(spam)$/}});


/* 14. Borrar usuarios que viven en "Bello" y tienen más de 50 años. */
db.users.deleteMany({$and:{ciudad:"Bello"}},{$gt:50});


/* 15. Eliminar todos los usuarios que tienen el apellido "González". */
db.users.deleteMany({apellidos:"González"});


/* 16. Borrar usuarios que tienen una edad superior a 70 años. */
db.users.deleteMany({edad:{$gt:70}});


/* 17. Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.*/
db.users.deleteMany({$and:[{pais:"Canada"},{salario_dlls:{$lt:4000}}]});


/* 18. Borrar usuarios que tienen un salario entre 1000 y 2000 dólares. */
db.users.deleteMany({$and:[{salario_dlls:{$gte:1000}},{salario_dlls:{$lte:2000}}]});


/* 19. Eliminar usuarios que tienen una edad igual a 30 años. */
db.users.deleteMany({edad:30});


/* 20. Borrar usuarios que tienen una altura superior a 190 centímetros.*/
db.users.deleteMany({altura_cm:{$gt:190}});

