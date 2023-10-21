select
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc
--Para pegar a media de populacao pode-se alterar um pouco o codigo e usar avg no lugar de sum--
--para pegar o total de populacao do brasil e so usar o sum sem definir que seja por estado--