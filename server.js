const inquirer = require('inquirer');
const mysql = require('mysql2')
require("console.table");

/// can remove when using .env
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user : 'root',
    password: '',    // ADD YOUR PASSWORD HERE
    database: 'employee_db'
    },

    console.log('Connection made to database: employee_db.'),
    startPrompts()
    
);
////////// diff way
// const addDeptPrompt2 = () => {
//     console.log('hi1');
//     inquirer.prompt({
//         type: 'input',
//         message: 'Enter new department:',
//         name: 'addDept2'
  
//     }).then(function (answer) {
//         db.query('INSERT INTO department SET ?', { name: answer.addDept2 });
//         startPrompts();
//     });
// };


function addDeptPrompt() {
    console.log('hi1');
    inquirer.prompt({
        type: 'input',
        message: 'Enter new department:',
        name: 'addDept'
  
    }).then(function (answer) {
 
    console.log('hi2')
        db.query(`INSERT INTO department (name) VALUES ('${answer.addDept}')`)
      startPrompts();
    })  
};
//////////// works
function addRolePrompt() {
    // console.log('hi1');
    inquirer.prompt([
        {
        type: 'input',
        message: 'Which department?',
        name: 'addRoleDept'
    }

]).then(function (answer) {
    // console.log('hi2')
        db.query(`
        
        INSERT INTO role (department_id) VALUES ('${answer.addRoleDept}');
            `)
            startPrompts();
    })
};

// function addRolePrompt() {
//     inquirer.prompt({
//         type: 'list',
//         message: 'What dpt',
//         name: 'addRoleDept',
//         choices: [
//         'd1',
//         'd2',
//         'd3',
//         'Custom dep',
//         ]
//     }).then(function (answer) {
//         switch (answer.addRoleDept) {
//             case 'd1':
//                 db.query(`
        
//                      INSERT INTO role (department_id) VALUES ('${answer.addRoleDept}');
//            `)

//                 break;
//             case 'd2':
//                 db.query(`
        
//                     INSERT INTO role (department_id) VALUES ('${answer.addRoleDept}');
//                         `)
//                 break;
//             case 'd3':
                
//                 break;
//             case 'Custom dep':
              
//                 break;
         
//         }
//     })
// };

///////////////////////////////////////
// function addEmployeePrompt() {
//     console.log('hi1');
//     inquirer.prompt({
//         type: 'input',
//         message: 'Enter new employee:',
//         name: 'addEmployee'
  
//     }).then(function (answer) {
 
//     console.log('hi2')
//         db.query(`INSERT INTO department (name) VALUES ('${answer.addEmployee}')`)
//       startPrompts();
//     })  
// };

function startPrompts() {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'promptMenu',
        choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        // 'Add a department2',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Quit'
        ]

    }).then(function (answer) {
        switch (answer.promptMenu) {
            case 'View all departments':
                viewDepartment();
                break;
            case 'View all roles':
                viewRole();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDeptPrompt();
                break;
            // case 'Add a department2':
            //         addDeptPrompt2();
            //         break;
            case 'Add a role':
                addRolePrompt();
                break;
            case 'Add an employee':
                addEmployeePrompt();
                break;
            case 'Update an employee role':
                updateRolePrompt();
                break;
            case 'Quit':
                quitMenu();
                break;
        }
    })
};


function viewDepartment() {
    db.query('SELECT * FROM department;', function (err,res) {
        console.table(res);
        startPrompts();
    })
};


function viewRole() {
    db.query('SELECT * FROM role;', function (err, res) {
        console.table(res);
       startPrompts();
    })
};

function viewEmployees() {

    db.query('SELECT * FROM employee;', function (err,res) {
        console.table(res);
        startPrompts();
    })
};

function quitMenu() {
    db.end();
    console.log('Connection to employee_db terminated.');
};