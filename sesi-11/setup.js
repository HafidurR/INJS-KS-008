const db  = require('./db')

db.query(`
    create table barang(
	    id serial primary key,
	    name char(25),
	    kategory varchar(50),
	    harga integer
    );
`, 
(err, res) => {
  if(error) {
      console.log(err);
  } else {
      //console.log(res);
  }
}) 

