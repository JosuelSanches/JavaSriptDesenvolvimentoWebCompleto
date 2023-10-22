select * from estados where nome = 'São Paulo'
select * from estados where nome = 'Rio de Janeiro'

insert into cidade (nome, area, estado_id)
value ('Campinas', 795,29)

SELECT * from cidade where nome = 'Campinas'

insert into cidade (nome, area, estado_id)
value ('Niteroi', 133.9, 23)

insert into cidade
(nome, area, estado_id)
value (
    'Caruaru', 
    920.9, 
    (select id from estados where sigla = 'PE')
    )

    insert into cidade
        (nome, area, estado_id)
    value(
        'Juazeiro do Norte',
        248.2,
        (select id from estados where sigla = 'CE')
    )
    select * from cidade