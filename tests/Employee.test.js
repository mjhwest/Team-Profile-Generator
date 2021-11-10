const Employee = require('../lib/employee');

//test for all use cases when initializing a new employee object 

describe("Employee", () => {
    describe("Initialization", () => {
        it("it should create an object with a name, id and email", () => {
            const employee = new Employee("Michael", 1, "michael@email.com");

            //confirm that new objects has the correct properties
            expect(employee.name).toEqual("Michael");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("michael@email.com");
        });

        //wrap the object initialization in a callback function that Jest will run
        it("should throw an error if provided with no arguments", () => {
            const cb = () => new Employee();

            //confirm that an error was thrown in the callback function 
            expect(cb).toThrow();
        });

        //error for NAME; not a string:
        it("should throw an error if name is not a string", () => {
            //define the error message that is expected to be thrown
            const cb = () => new Employee(1, 2);

            //verify the correct error was throw when the classback is executed
            const err = new Error("Expected parameter 'name' to be a string");
        });


        //errors for ID; not provided, not a number input as string, negative number 
        it("should throw an error if not provided with an id", () => {
            const cb = () => new Employee("Michael", "West");
            const err = new Error("Expected parameter 'id' to be provided");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if id is not a number", () => {
            const cb = () => new Employee("Michael", "1");
            const err = new Error("Expected parameter 'id' to be a number not a string");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if id is a negative number", () => {
            const cb = () => new Employee("Michael", -1);
            const err = new Error("Expected parameter 'id' to be a number equal to or greater than 0");
            expect(cb).toThrowError(err)
        });

        //error for EMAIL; not provided, not a string 
        it("should throw an error if email is not provided", () => {
            const cb = () => new Employee("Michael", 1);
            const err = new Error("Expected parameter 'email' to be provided as a string");
            expect(cb).toThrowError(err)
        });

        it("should throw an error if email is not a string", () => {
            const cb = () => new Employee("Michael", 1, 2);
            const err = new Error("Expected parameter 'email' to be provided as a string");
            expect(cb).toThrowError(err)
        });




        // TO BE methods  HERE

        // describe, it (const's), expect. 
        //describe - what does functionality do - testing that you can created an new employee object
        describe("Can create Employee instance", () => {
            //it - describe what it should do - create new employee object
            it("should return a new emplyoee object")
            const employee = new Emlpoyee();
            //expect - run test to expect
            expect(typeof(employee)).toBe("object");
        });

        //testing that name can be set via constructor arguments
        describe("Can set name via constructor arguments", () => {
            it("should return the employees name", () => {
                const name = "Michael";
                const employee = new Employee(name);
                expect(employee.name).toBe(name);
            })
        });

        //testing id can be set via constructor arguments 
        describe("Can set id via constructor arguments", () => {
            it("Should return the employees id number", () => {
                const idValue = 1;
                const employee = new Employee("James", idValue);
                expect(employee.id).toBe(idValue)
            })
        });

        //testing email can be set via constructor arguments 
        describe("Can set email via constructor arguments", () => {
            it("Should return the employees email", () => {
                const emailValue = "test@test.com";
                const employee = new Employee("James", 1, emailValue);
                expect(employee.email).toBe(emailValue)
            })
        })

        // GET methods HERE:
        describe("Can get name from getName", () => {
            it("Should return the employees name", () => {
                const testValue = "Jim";
                const employee = new Employee(testValue);
                expect(employee.getName()).toBe(testValue)
            });
        })
        describe("Can get id from getId", () => {
            it("Should return the employees id", () => {
                const testValue = 1;
                const employee = new Employee(testValue);
                expect(employee.getId()).toBe(testValue)
            });
        })

        describe("Can get email from getEmail", () => {
            it("Should reutrn the employees email", () => {
                const testValue = "test@email.com";
                const employee = new Employee(testValue);
                expect(employee.getEmail()).toBe(testValue)
            });
        })

        describe("Can get role from getRole", () => {
            it("Should return role as 'employee' ", () => {
                const testValue = "Employee";
                const employee = new Employee("Jim", 1, "test@email.com");
                expect(employee.getRole()).toBe(testValue);
            })
        })

    })
})