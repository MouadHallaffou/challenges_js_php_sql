-- Historique des commandes avec détails
-- Objectif : Lister toutes les commandes avec des informations croisées.
-- Écrivez une requête SQL qui affiche pour chaque commande :
-- la date de commande (order_date)
-- le nom d’utilisateur
-- le nom du produit commandé
-- la quantité commandée
-- le prix unitaire du produit
-- le prix total de l’article (quantity * price)
-- Trier les résultats par date décroissante.

select u.name , p.name , oi.qunatite, order_date , p.price ,
quantite*price as price_total from orders o 
left join users u on u.id = o.user_id 
left join order_items oi on oi.order = o.id 
left join products p on p.id = oi.product_id
GROUP BY p.name;