SELECT
    categories.name,
    sum(products.amount) AS sum,
FROM 
    categories
    INNER JOIN products ON categories.id = products.id_categories
GROUP BY
    categories.name;
