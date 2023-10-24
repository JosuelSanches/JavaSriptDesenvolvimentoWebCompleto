select * from prefeitos
select * from cidades

select * from cidades c inner join prefeitos p on c.id = p.cidade_id;
select * from cidades c left join prefeitos p on c.id = p.cidade_id;
--faz o mesmo que o comando anterior
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;
select * from cidades c right join prefeitos p on c.id = p.cidade_id;

-- select * from cidades c full join prefeitos p on c.id = cidade_id
-- pode ser possivel simular o full join da seguinte forma

select * from cidades c left outer join prefeitos p on c.id = cidade_id
union
select * from cidades c right join prefeitos p on c.id = p.cidade_id;