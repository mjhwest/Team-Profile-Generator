// This is the parent class! 
// children of this class will be Manager, Engineer and Intern.
//classes always start with 'CAPITAL LETTER' 
//classes dont need to type 'function' or ' => ' just type name of variable, name, method
// const Employee = require('./employee.js')

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee';
    }
}


module.exports = Employee;