-- membuat table
create table jurusan(
 	id_jurusan serial primary key,
 	nama_jurusan char(25) not null
);

-- menginput data ke table
insert into jurusan values ('Teknik Informatika');

create table mahasiswa(
 	id serial primary key,
 	name char(25) not null,
 	age integer,
	birthdate date not null,
 	address text not null,
	isActive boolean,
	id_jurusan integer references jurusan(id_jurusan)
);

insert into mahasiswa(name, age, birthdate, address, isActive, id_jurusan)
values ('Adira', 20, '2001-04-04', 'Lumajang', 'true', 4);

-- delete data dari table
delete from mahasiswa where id = 1;

-- menambah 1 coloum pada table
alter table mahasiswa add coloum gender char;

-- menghapus 1 coloum pada table 
alter table mahasiswa drop coloum gender;

-- mengganti nama coloum
alter table mahasiswa rename coloum age to Age;

-- menghapus table
drop table if exists mahasiswa; -- if exists artinya jika ada