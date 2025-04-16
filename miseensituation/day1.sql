select order_date, username,p.name, quantity, 
quantity*price as total from products p

left join orederdetails od on od.product_id = p.id
left join orders o on o.id = od.order_id
left join users u on u.id = o.user_id

SELECT username, sum(quantite*price) at mt_total from users u 

left join orders o on o.id = od.order_id
left join orderdetails od on u.id = o.user_id
group by username;


-- Exercice 1 – Moyenne des dépenses par client
-- Écrivez une requête SQL pour afficher :
-- Le nom du client
-- Le montant moyen de ses commandes

select name , avg(count(qunatite*price)) as moyenne from users
LEFT join orders o on o.user_id = users.id
left join orders_item ot on ot.order_id = o.id id
left join products p on p.id = ot.product_id id
GROUP BY name;

-- Exercice 2 – Produit le plus vendu
-- Affichez :
-- Le nom du produit
-- Le nombre total de fois qu'il a été commandé

select p.name, count(p.id) moyenne from product p
left join oreders_items oi on oi.product_id = p.id
group by p.name
order by moyenne desc
limit 1;

-- Exercice 3 – Clients sans commandes
-- Écrivez une requête qui retourne les clients qui n’ont jamais passé de commande.

select name, o.id from users 
left join orders o on o.user_id = users.id
where o.id is null;