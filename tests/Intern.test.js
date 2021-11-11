const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initalization", () => {
        it("Shold create an object with a name, id, email and school", () => {
            const intern = new Intern("Michael", 1, "michael@email.com", "Adelaide Uni")

            //confirm the new objects has the correct properties
            expect(intern.name).toEqual("Michael");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("michael@email.com");
            expect(intern.school).toEqual("Adelaide Uni");
            // expect(inter.getSchool()).toEqual("Adelaide Uni")
        });

        // //wrap the object initialization in a callback function that Jest will run
        // it("should throw an error if provided with no arguments", () => {
        //     const cb = () => new Intern();

        //     //confirm that an error was thrown in the callback function 
        //     expect(cb).toThrow(); //added err
        // });

        // //same errors for NAME, ID, EMAIL as employee.test.js
        // it("should throw an error if name is not a string", () => {
        //     //define the error message that is expected to be thrown
        //     const cb = () => new Intern(1, 2);

        //     //verify the correct error was throw when the classback is executed
        //     const err = new Error("Expected parameter 'name' to be a string");
        //     expect(cb).toThrowError(err)
        // });

        // //errors for ID; not provided, not a number input as string, negative number 
        // it("should throw an error if not provided with an id", () => {
        //     const cb = () => new Intern("Michael", "West");
        //     const err = new Error("Expected parameter 'id' to be provided");
        //     expect(cb).toThrowError(err);
        // });

        // it("should throw an error if id is not a number", () => {
        //     const cb = () => new Intern("Michael", "1");
        //     const err = new Error("Expected parameter 'id' to be a number not a string");
        //     expect(cb).toThrowError(err);
        // });

        // it("should throw an error if id is a negative number", () => {
        //     const cb = () => new Intern("Michael", -1);
        //     const err = new Error("Expected parameter 'id' to be a number equal to or greater than 0");
        //     expect(cb).toThrowError(err)
        // });

        // //error for EMAIL; not provided, not a string 
        // it("should throw an error if email is not provided", () => {
        //     const cb = () => new Intern("Michael", 1);
        //     const err = new Error("Expected parameter 'email' to be provided as a string");
        //     expect(cb).toThrowError(err)
        // });

        // it("should throw an error if email is not a string", () => {
        //     const cb = () => new Intern("Michael", 1, 2);
        //     const err = new Error("Expected parameter 'email' to be provided as a string");
        //     expect(cb).toThrowError(err)
        // });

        // //error for SCHOOL; not provided, not a string

        // it("should throw an error if school  is not provided", () => {
        //     const cb = () => new Intern("Michael", 1, "michael@email.com");
        //     const err = new Error("Expected parameter 'school' to be provided as a string");
        //     expect(cb).toThrowError(err)
        // });

        // it("should throw an error if school is provided as a number", () => {
        //     const cb = () => new Intern("Michael", 1, "michael@email.com", 10);
        //     const err = new Error("Expected parameter 'school' to be provided as a a string");
        //     expect(cb).toThrowError(err)
        // });

        //TO BE methods here 
        describe("Can set the school via constructor arguments", () => {
            it("Should return the interns school", () => {
                const schoolValue = "Adelaide Uni"
                const intern = new Intern("Jim", 1, "jim@email.com", schoolValue);
                expect(intern.school).toBe(schoolValue)
            })
        })

        //GET methods here 
        describe("Can get the school from getSchool", () => {
            it("Should reutrn the intern school", () => {
                const testValue = "school";
                const intern = new Intern("Name", 1, "test@email.com", testValue);
                expect(intern.getSchool()).toBe(testValue)
            })
        })


        //getRole here 
        describe("Can get role from getRole", () => {
            it("Should return the role as 'intern' ", () => {
                const testValue = "Intern";
                const intern = new Intern("James", 1, "james@email.com", "Adelaide Uni");
                expect(intern.getRole()).toBe(testValue)
            })
        })
    })
})