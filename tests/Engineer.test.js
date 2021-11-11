const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Initalizatoin", () => {
        it("Should create an object with a name, id, email and gitHubUsername", () => {
            const engineer = new Engineer("Michael", 1, "michael@email.com", "testGitUserName");

            //confirm the new objects has the correct properties
            expect(engineer.name).toEqual("Michael");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("michael@email.com");
            expect(engineer.gitHub).toEqual("testGitUserName");
        });

        // //wrap the object initialization in a callback function that Jest will run
        // it("should throw an error if provided with no arguments", () => {
        //     const cb = () => new Engineer();

        //     //confirm that an error was thrown in the callback function 
        //     expect(cb).toThrow();
        // });

        // //same errors for NAME, ID, EMAIL as employee.test.js
        // it("should throw an error if name is not a string", () => {
        //     //define the error message that is expected to be thrown
        //     const cb = () => new Engineer(1, 2);

        //     //verify the correct error was throw when the classback is executed
        //     const err = new Error("Expected parameter 'name' to be a string");
        // });

        // //errors for ID; not provided, not a number input as string, negative number 
        // it("should throw an error if not provided with an id", () => {
        //     const cb = () => new Engineer("Michael", "West");
        //     const err = new Error("Expected parameter 'id' to be provided");
        //     expect(cb).toThrowError(err);
        // });

        // it("should throw an error if id is not a number", () => {
        //     const cb = () => new Engineer("Michael", "1");
        //     const err = new Error("Expected parameter 'id' to be a number not a string");
        //     expect(cb).toThrowError(err);
        // });

        // it("should throw an error if id is a negative number", () => {
        //     const cb = () => new Engineer("Michael", -1);
        //     const err = new Error("Expected parameter 'id' to be a number equal to or greater than 0");
        //     expect(cb).toThrowError(err)
        // });

        // //error for EMAIL; not provided, not a string 
        // it("should throw an error if email is not provided", () => {
        //     const cb = () => new Engineer("Michael", 1);
        //     const err = new Error("Expected parameter 'email' to be provided as a string");
        //     expect(cb).toThrowError(err)
        // });

        // it("should throw an error if email is not a string", () => {
        //     const cb = () => new Engineer("Michael", 1, 2);
        //     const err = new Error("Expected parameter 'email' to be provided as a string");
        //     expect(cb).toThrowError(err)
        // });

        // //error for GitHub'; Not provided, not a string 
        // it("should throw an error if GitHub username is not provided", () => {
        //     const cb = () => new Engineer("Michael", 1, "michael@email.com");
        //     const err = new Error("Expected parameter 'gitHub' to be provided as a string");
        //     expect(cb).toThrowError(err)
        // });

        // it("should throw an error if gitHub username is provided as a number", () => {
        //     const cb = () => new Manager("Michael", 1, "michael@email.com", 10);
        //     const err = new Error("Expected parameter 'gitHub' to be provided as a a string");
        //     expect(cb).toThrowError(err)
        // });

        //TO BE methods here 

        describe("Can set the gitHubUserName via constructor arguments", () => {
            it("Should return the engineers gitHub username", () => {
                const gitHubValue = "testGitUserName"
                const engineer = new Engineer("Jim", 1, "jim@email.com", gitHubValue);
                expect(engineer.gitHub).toBe(gitHubValue)
            })
        })

        //GET methods here 
        describe("Can get the git hub user name from getGitHub", () => {
            it("Should reutrn the engineers gitHub username", () => {
                const testValue = "gituser";
                const engineer = new Engineer("Name", 1, "test@email.com", testValue);
                expect(engineer.getGitHub()).toBe(testValue)
            })
        })

        //getRole here 
        describe("Can get role from getRole", () => {
            it("Should return the role as 'engineer' ", () => {
                const testValue = "Engineer";
                const engineer = new Engineer("James", 1, "james@email.com", "testGitUserName");
                expect(engineer.getRole()).toBe(testValue)
            })
        })

    })
})