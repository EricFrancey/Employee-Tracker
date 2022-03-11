insert into department (name)
values
("Management"), 
("Sales"),
("Accounting"),  
("Back End"), 
("Sound Design"), 
("Graphics"); 

insert into role (title, salary, department_id)
values  
("General Manager", 80000, 1),
("Sales Manager", 80000, 1),
("Salesperson", 130000, 2), 
("Accountant", 90000, 3), 
("Junior Developer", 130000, 4),
("Senior Developer", 180000, 4), 
("Beatmaker", 90000, 5);

insert into employee (first_name, last_name, role_id, manager_id)
values 
("Dr", "Dre", 1, 1),
("Snoop", "Dogg", 2, 2), 
("Eazy", "E", 2, 3), 
("Ill", "Matic", 3, null), 
("Em", "Inem", 3, null),
("Homer", "Simpson", 4, 4),
("Marge", "Simpson", 5, null), 
("Bart", "Simpson", 5, null),
("Lisa", "Simpson", 6, null), 
("Maggie", "Simpson", 7, null); 

