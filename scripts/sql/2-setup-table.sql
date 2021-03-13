use SCHEME;

create table if not exists appuser (
	id integer primary key not null auto_increment,
    username varchar(255) unique,
    password varchar(255),
    role varchar(255)
);

create table if not exists dog (
	id integer auto_increment primary key not null,

	name varchar(255),
	picture_url varchar(255),
	breed varchar(255),
	birthdate date,
	gender varchar(255),
	weight integer,

	country varchar(255),
	location varchar(255),

	description text	
);