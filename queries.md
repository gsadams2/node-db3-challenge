# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName
FROM Products
join Categories
On Products.CategoryID = Categories.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName
from Orders
join Shippers
on Orders.ShipperID = Shippers.ShipperID
where Orders.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity
from Products
join OrderDetails
on Products.ProductID = OrderDetails.ProductID
where OrderDetails.OrderID = 10251
order by ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.OrderID, c.CustomerName, e.LastName
from Orders as o
join Customers as c on o.CustomerID = c.CustomerID
join Employees as e on o.EmployeeID = e.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT categoryname, count(categoryname) FROM [Products]
inner join categories
on products.categoryid = categories.categoryid
group by categoryname

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT orderid, sum(quantity) as ItemCount
from orderdetails
group by orderid
