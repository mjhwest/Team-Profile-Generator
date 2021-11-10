const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should create an object with a name, id, email and officeNumber", () => {
            const manager = new Manager("Michael", 1, "michael@email.com", 10);

            //confirm the new objects has the correct properties
            expect(manager.name).toEqual("Michael");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("micahel@email.com");
            expect(manager.officeNumber).toEqual(10);
        });

        //wrap the object initialization in a callback function that Jest will run
        it("should throw an error if provided with no arguments", () => {
            const cb = () => new Manager();

            //confirm that an error was thrown in the callback function 
            expect(cb).toThrow();
        });

        //same errors for NAME, ID, EMAIL as employee.test.js
        it("should throw an error if name is not a string", () => {
            //define the error message that is expected to be thrown
            const cb = () => new Manager(1, 2);

            //verify the correct error was throw when the classback is executed
            const err = new Error("Expected parameter 'name' to be a string");
        });


        //errors for ID; not provided, not a number input as string, negative number 
        it("should throw an error if not provided with an id", () => {
            const cb = () => new Manager("Michael", "West");
            const err = new Error("Expected parameter 'id' to be provided");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if id is not a number", () => {
            const cb = () => new Manager("Michael", "1");
            const err = new Error("Expected parameter 'id' to be a number not a string");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if id is a negative number", () => {
            const cb = () => new Manager("Michael", -1);
            const err = new Error("Expected parameter 'id' to be a number equal to or greater than 0");
            expect(cb).toThrowError(err)
        });

        //error for EMAIL; not provided, not a string 
        it("should throw an error if email is not provided", () => {
            const cb = () => new Manager("Michael", 1);
            const err = new Error("Expected parameter 'email' to be provided as a string");
            expect(cb).toThrowError(err)
        });

        it("should throw an error if email is not a string", () => {
            const cb = () => new Manager("Michael", 1, 2);
            const err = new Error("Expected parameter 'email' to be provided as a string");
            expect(cb).toThrowError(err)
        });

        //error for officeNumber: not present, negative number, string not nuber. 
        it("should throw an error if officeNumber is not a provided", () => {
            const cb = () => new Manager("Michael", 1, "michael@email.com");
            const err = new Error("Expected parameter 'officeNumber' to be provided as a string");
            expect(cb).toThrowError(err)
        });

        it("should throw an error if officeNumber is a negative number", () => {
            const cb = () => new Manager("Michael", 1, "michael@email.com", -10);
            const err = new Error("Expected parameter 'officeNumber' to be provided as a number equal to or greater than 0");
            expect(cb).toThrowError(err)
        });

        it("should throw an error if officeNumber is provided as a string", () => {
            const cb = () => new Manager("Michael", 1, "michael@email.com", "10");
            const err = new Error("Expected parameter 'officeNumber' to be provided as a number");
            expect(cb).toThrowError(err)
        });

        //TO BE methods here 
        describe("Can set the officeNumber via constructor arguments", () => {
            it("Should return the managers officeNumber", () => {
                const officeNumberValue = 10
                const manager = new Manager("Jim", 1, "jim@email.com", officeNumberValue);
                expect(manager.officeNumber).toBe(officeNumberValue)
            })
        })

        //GET methods here 
        describe("Can get office number from getOfficeNumber", () => {
            it("Should return the manager office number", () => {
                const testValue = 1;
                const manager = new Manager("Name", 1, "test@email.com", testValue);
                expect(manager.getOfficeNumber()).toBe(testValue)
            })
        })

        //getRole here
        describe("Can get role from getRole", () => {
            it("Should return the role as 'manager' ", () => {
                const testValue = "Manager";
                const manager = new Manager("James", 1, "james@email.com", 20);
                expect(manager.getRole()).toBe(testValue);
            })
        })
    })
})