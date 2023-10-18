SELECT * FROM estados

SELECT nome, sigla from estados

select sigla, nome as 'Nome do estado' from estados


select sigla, nome as 'Nome do estado' from estados WHERE regiao = 'Norte'


select nome, regiao, populacao as 'Estados com mais de 10 milhoes de habitantes' 
from estados WHERE populacao > 8 order by populacao desc