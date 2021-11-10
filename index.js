/* this is where the will actually run */
const inquirer = require("inquirer");
const fs = require('fs');
const htmlRender = require("./htmlRender.js")

//for code to run it requires each of the classes
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");