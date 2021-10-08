-- membuat table guru
create table guru( 
	id_guru serial primary key,
	nig integer,
	nama char(25),
	gender char(15),
	tgl_lahir date,
	alamat text,
	no_telp varchar
);

-- input data ke table guru
insert into guru(nig, nama, gender, tgl_lahir, alamat, no_telp)
values (876997, 'Kamil Malik', 'pria', '2001-09-21', 'Jl. Raya Kraksaan No.35', '087716256509');

-- membaca data dari table guru
select * from guru;
-- menambah 1 coloum baru di table guru
alter table guru add column age integer;
-- mengahpus table guru
drop table guru;

create table kelas(
	id_kelas serial primary key,
	nama varchar(25) 
);

insert into kelas (nama) values ('X'), ('XI'), ('XII');

update kelas set nama = 'V' where id_kelas = 1;

delete from kelas where id_kelas = 1;
select * from kelas;

create table siswa(
	id_siswa serial primary key,
	nisn integer,
	nama char(25),
	gender char(15),
	tgl_lahir date,
	alamat text,
	no_telp varchar,
	id_kelas integer references kelas(id_kelas) on delete cascade
);

insert into siswa(nisn, nama, gender, tgl_lahir, alamat, no_telp, id_kelas)
values (1234567890, 'Andika', 'pria', '2021-09-21', 'Jl. Raya Kraksaan No.35', '089777162565', 3),
(1234567890, 'Suhadi', 'pria', '2021-09-21', 'Jl. Raya Kraksaan No.35', '089777162565', 2),
(1234567890, 'Indana', 'wanita', '2021-09-21', 'Jl. Raya Kraksaan No.35', '089777162565', 1);

select * from siswa;