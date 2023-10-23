select e.nome AS Estado, 
c.nome as Cidade, 
e.regiao as regiao
 from estados e, cidade c
where e.id = c.estado_id;