const questionsToUser = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "URL_project",
        message: "What is the project URL"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the command required for the installation process?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "What information is needed to be able to use URL?"
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license is needed for the project",
        chioces: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"]
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "license",
        message: "Enter licence number"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter Contributors names"
    }
];
module.exports = questionsToUser;