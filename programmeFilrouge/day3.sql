-- Écrivez une requête pour sélectionner tous les employés.
-- Sélectionnez uniquement les noms des employés.
-- Sélectionnez les employés du département "IT".
SELECT * from employes;
select e.name from employes e;
select * from employes where departement = 'IT';

-- Sélectionnez les employés avec un salaire supérieur à 3000.
-- Sélectionnez les noms et salaires des employés du département "RH".
-- Sélectionnez les employés dont le nom commence par "A".
-- Sélectionnez les employés avec un salaire entre 2000 et 4000.
select from enmployes where salaire > 3000;
SELECT e.name , e.salaire from emplyes WHERE departement = 'RH';
SELECT * from employes where name like %A;
select * from employes whre salaire betwen 2000 AND 4000;

-- Sélectionnez les employés triés par salaire décroissant :.
-- Sélectionnez le nom et le département des employés avec un salaire > 2500 et du département "IT".
-- Sélectionnez les employés dont le nom contient "e" et le département est "Finance".
select * from employes
order by salaire DESC;
select e.name , e.department from employes where salaire >  2500 AND departement ='IT';

select * employes where name like %e% And departement ='finance';
