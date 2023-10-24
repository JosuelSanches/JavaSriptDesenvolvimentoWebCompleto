alter table empresas modify cnpj varchar(14);


insert into empresas
    (nome, cnpj)
values
    ('Bradesco',87868783000108),
    ('Vale', 11430446000172),
    ('Cielo', 64667337000130);

desc empresas
desc `prefeitos`

select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1 ,1 ,1),
    (1, 2, 0),
    (2, 5, 0),
    (2, 2, 1);
