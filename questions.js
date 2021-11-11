const inquirer = require("inquirer");
const path = reuqire("path");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { get } = require("http");

const team = []

//function to generate entire team profile
async function teamProfileGenerator() {


    // function to pick initial team member
    function whichMember() {
        inquirer.prompt([{
            type: "list",
            message: "Select Employee Description",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }]).then(data => {
            if (data.role === "Manager") {
                manager();
            } else if (data.role === "Engineer") {
                engineer();
            } else if (data.role === "Intern") {
                intern();
            }

        })

        // (async function selectRole(data) {
        //     if (data.role === "Manager") {
        //         manager();
        //     } else if (data.role === "Engineer") {
        //         engineer();
        //     } else if (data.role === "Intern") {
        //         intern();
        //     }
        // });
    };

    //function to see if there are more employees
    function moreMembers() {
        inquirer.prompt([{
            type: "list",
            message: "Select Employee Description",
            name: "role",
            choice: [
                "Manager",
                "Engineer",
                "Intern",
                "Our team is complete"
            ]
        }]).then(data => {
            if (data.role === "Manger") {
                manager();
            } else if (data.role === "Engineer") {
                engineer();
            } else if (data.role === "Intern") {
                intern();
            } else if (data.role === "Our team is complete") {
                getHTML()
            }
        }).catch(error => {
            return error;
        });

    };


    //function for Manager Questions 
    async function manager() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "what is the manager name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is their ID number?"
            },
            {
                type: "input",
                name: 'email',
                message: "What is the managers email?"
            },
            {
                tyle: "number",
                name: "office",
                message: "what is the managers office number?"
            },
        ]).then(data => {
            const managerInfo = new Manager(data.name, data.id, data.email, data.office);
            this.team.push(managerInfo);
            moreMembers();

        }).catch(error => {
            console.log(error);
        })
    }


    //function for Engineer Questions
    async function engineer() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "what is the engineers name?"
            },
            {
                type: "number",
                name: "id",
                message: "what is the engineers ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "what is the enginners email?"
            },
            {
                type: "input",
                name: "github",
                message: "what is the enginners github username?"
            }
        ]).then(data => {
            const engineerInfo = new Engineer(data.name, data.id, data.email, data.github);
            this.team.push(engineerInfo);
            moreMembers();

        }).catch(error => {
            console.log(error);
        })
    }


    //function for Intern Questions 
    async function intern() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "what is the interns name?"
            },
            {
                type: "number",
                name: "id",
                message: "what is the interns ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "what is the interns email?"
            },
            {
                type: "input",
                name: "school",
                message: "what is the interns school?"
            }
        ]).then(data => {
            const internInfo = new Intern(data.name, data.id, data.email, data.school);
            this.team.push(internInfo);
            moreMembers();

        }).catch(error => {
            console.log(error);
        });
    };


    async function startQuestions() {
        whichMember();
    };
    startQuestions();


    //Get object and wtite to HTML

    function getHTML() {
        const myHTML = render(team);

        fs.writeFileSync(outputPath, myHTML, function(err) {
            if (err) return err;

            console.log("Success! You made a team.html file!")
        });
    };



}


teamProfileGenerator();

module.exports