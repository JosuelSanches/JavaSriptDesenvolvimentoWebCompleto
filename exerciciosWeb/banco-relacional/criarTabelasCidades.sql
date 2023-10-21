create table if not exists cidade (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    estados_id int unsigned not null,
    area decimal(10,2),
    primary key (id),
    foreign key (estado_id) references estados (id)
)