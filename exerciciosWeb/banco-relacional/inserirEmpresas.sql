alter table empresas modify cnpj varchar(14);


insert into empresas
    (nome, cnpj)
values
    ('Bradesco',87868783000108),
    ('Vale', 11430446000172),
    ('Cielo', 64667337000130);

desc empresas