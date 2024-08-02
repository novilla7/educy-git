create database db_eduwork;

use db_eduwork;

CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    gender VARCHAR(10),
    address VARCHAR(255)
);

SHOW TABLES;

insert into users values (1, "budi", "budi@gmail.com", "081234567890", "pria", "jl. satu");
insert into users values (2, "siti", "budi@gmail.com", "081234567890", "wanita", "jl. dua");
insert into users values (3, "bunga", "bunga@gmail.com", "081234567890", "wanita", "jl. tuga");
insert into users values (4, "adam", "adam@gmail.com", "081234567890", "pria", "jl. empat");
insert into users values (5, "nana", "nana@gmail.com", "081234567890", "wanita", "jl. lima");
insert into users values (6, "rudi", "rudi@gmail.com", "081234567890", "pria", "jl. enam");
insert into users values (7, "dian", "dian@gmail.com", "081234567890", "pria", "jl. tujuh");
insert into users values (8, "indah", "indah@gmail.com", "081234567890", "wanita", "jl. delapan");
insert into users values (9, "nur", "nur@gmail.com", "081234567890", "wanita", "jl. sembilan");
insert into users values (10, "ridho", "ridho@gmail.com", "081234567890", "pria", "jl. sepuluh");
insert into users values (11, "lisa", "lisa@gmail.com", "081234567890", "wanita", "jl. sebelas");
insert into users values (12, "suzy", "suzy@gmail.com", "081234567890", "wanita", "jl. duabelas");
insert into users values (13, "jae", "jae@gmail.com", "081234567890", "pria", "jl. tigabelas");
insert into users values (14, "icha", "icha@gmail.com", "081234567890", "wanita", "jl. empatbelas");
insert into users values (15, "jojon", "jojon@gmail.com", "081234567890", "pria", "jl. limabelas");
insert into users values (16, "arfah", "arfah@gmail.com", "081234567890", "pria", "jl. enambelas");
insert into users values (17, "daniel", "daniel@gmail.com", "081234567890", "pria", "jl. tujuhbelas");
insert into users values (18, "iqbal", "iqbal@gmail.com", "081234567890", "pria", "jl. delapanbelas");
insert into users values (19, "julian", "julian@gmail.com", "081234567890", "pria", "jl. sembilanbelas");
insert into users values (20, "tito", "tito@gmail.com", "081234567890", "pria", "jl. duapuluh");
insert into users values (21, "rahayu", "rahayu@gmail.com", "081234567890", "wanita", "jl. duapuluhsatu");
insert into users values (22, "ridha", "ridha@gmail.com", "081234567890", "wanita", "jl. duapuluhdua");
insert into users values (23, "kiki", "kiki@gmail.com", "081234567890", "pria", "jl. duapuluhtiga");
insert into users values (24, "vira", "vira@gmail.com", "081234567890", "wanita", "jl. duapuluhempat");
insert into users values (25, "lily", "lily@gmail.com", "081234567890", "wanita", "jl. duapuluhlima");
insert into users values (26, "puji", "puji@gmail.com", "081234567890", "wanita", "jl. duapuluhenam");
insert into users values (27, "nandi", "nandi@gmail.com", "081234567890", "pria", "jl. duapuluhtujuh");
insert into users values (28, "gesti", "gesti@gmail.com", "081234567890", "Pria", "jl. duapuluhdelapan");
insert into users values (29, "andi", "andi@gmail.com", "081234567890", "Pria", "jl. duapuluhsembilan");
insert into users values (30, "retno", "retno@gmail.com", "081234567890", "Pria", "jl. tigapuluh");

select * from users; 

select
	name AS Name,
    phone AS Phone_Number,
    address AS Address
from
	users;























drop database db_eduwork;
drop table users;