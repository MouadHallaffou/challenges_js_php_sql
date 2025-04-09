select order_date, username,p.name, quantity, 
quantity*price as total from products p

left join orederdetails od on od.product_id = p.id
left join orders o on o.id = od.order_id
left join users u on u.id = o.user_id

SELECT username, sum(quantite*price) at mt_total from users u 

left join orders o on o.id = od.order_id
left join orderdetails od on u.id = o.user_id
group by username;
