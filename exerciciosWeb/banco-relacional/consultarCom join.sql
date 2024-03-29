select e.nome AS Estado, 
c.nome as Cidade, 
e.regiao as regiao
 from estados e, cidades c
where e.id = c.estado_id;

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as regiao
from estados e
inner join cidades c on e.id = c.estado_id