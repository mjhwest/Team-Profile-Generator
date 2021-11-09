//require Employee class as it is the parent class 

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.getSchool
    }
    getRole() {
        return 'Intern'
    }
}



module.exports = Intern