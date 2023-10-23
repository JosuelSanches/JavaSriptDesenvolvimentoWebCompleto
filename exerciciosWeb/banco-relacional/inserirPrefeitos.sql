select * from cidades;

insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Neves', 2),
    ('Raquel Lira', 3),
    ('Zenaldo Coutinho', null),
    ('Vitor Casiano', 5);

select * from prefeitos

insert into prefeitos
    (nome, cidade_id)
values
    ('Rafael Greca', null);

-- Entrada duplicada nao permitida
insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Pinheiro', 3);

select 
    p.nome as Prefeito,
    c.nome as Cidade,
    e.nome as Estado,
    regiao as regiao
from estados e
inner join cidades c inner join prefeitos p on e.id = c.estado_id and p.cidade_id = c.id