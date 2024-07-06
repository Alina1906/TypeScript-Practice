select c.name, count(o.customer_id) as orders
from orders o
         inner join customers c on o.customer_id = c.id
group by c.name
having count(o.customer_id) > 1;

select *
from orders o
         left join customers c
                   on o.customer_id = c.id;

select *
from orders o
         right join customers c
                    on o.customer_id = c.id;


select *
from orders o
         full join customers c
                   on o.customer_id = c.id;

select *
from orders o
         cross join customers c;

select sum(o.price)
from orders o;

select c.name, count(o.customer_id) as orders, sum(o.price) as total_price
from orders o
         inner join customers c on o.customer_id = c.id
group by c.name;

/* простой скалярный подзапрос */

select min(ord.price) as max_price
from orders ord;

select o.name
from orders o
where o.price > (select min(ord.price) as max_price
                 from orders ord);

/* простой табличный подзапрос */

select ord.price as price
from orders ord
where ord.price > 50000;

select o.name
from orders o
where o.price in (select ord.price as price
                  from orders ord
                  where ord.price > 50000);

select o.name
from orders o
where o.price = any (select ord.price as price
                     from orders ord
                     where ord.price > 30000);

select o.name
from orders o
where o.price = all (select ord.price as price
                     from orders ord
                     where ord.price > 30000);