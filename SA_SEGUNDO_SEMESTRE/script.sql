drop database if exists dbpetwalker;

create database dbpetwalker;

use dbpetwalker;

create table usuario(
id_usuario int not null,
usuario_nome varchar(45),
usuario_password varchar(45),
usuario_cpf char(11),
usuario_endereco varchar(245),
usuario_email varchar(150),
primary key (id_usuario)
);

create table petwalker(
id_petwalker int not null,
id_usuario int,
petwalker_nome varchar(45),
petwalker_email varchar(150),
petwalker_telefone char(11),
primary key (id_petwalker),
foreign key (id_usuario) references usuario (id_usuario)
);

create table pet(
id_pet int not null,
id_usuario int,
pet_porte varchar(45),
pet_sexo char(1),
pet_nome varchar(45),
pet_raca varchar(45),
pet_idade int,
primary key (id_pet),
foreign key (id_usuario) references usuario (id_usuario)
);

create table agenda(
id_agenda int not null,
id_pet int,
id_petwalker int,
horario_saida int,
horario_retorno int,
dt_agenda date,
primary key (id_agenda),
foreign key (id_pet) references pet (id_pet),
foreign key (id_petwalker) references petwalker (id_petwalker)
);

