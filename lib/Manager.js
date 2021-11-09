//require Employee class as it is the parent class 

const Employee = require('./employee');

//Manager class extends Employee, MANAGER class can include its own properties and behavours
//Manager will have everything from EMPLOYEE + anything inside Manager
class Manager extends Employee {
    constructor(officeNumber) {
        //super class of EMPLOYEE, List same parameters
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

//QUESTION TO ASK 
//In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

// Question 1 : 
// does the suyper class (name, id, email) cover the additional removeProperties, or we we need to list 
// them as a constructor too
// i.e constructor (name, id, email, officeNumber)


// Question 2 : 
// Why is name depricated on line 11