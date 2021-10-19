
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');

let collectionArray = [];
let finalHtml = ``;

/*
This asks for a confirmation to begin and then invokes the managerPrompt function
*/
let initialPrompt = function () {
    inquirer.prompt([
        {
            name: 'askForManager',
            message: 'Would you tell me about who is managing.',
            type: 'confirm'
        }
    ])
        .then((answers) => {

            if (answers.askForManager == true) {
                managerPrompt();

            }
        })


}

let managerPrompt = function () {
    inquirer.prompt([
        {
            name: 'theirName',
            message: 'What is the name of the employee?',
            type: 'input'
        },
        {
            name: 'theirId',
            message: 'What is the id of the employee?',
            type: 'input'
        },
        {
            name: 'theirEmail',
            message: 'What is the email address of the employee?',
            type: 'input'
        },
        {
            name: 'theirOffice',
            message: 'What is their office numnber?',
            type: 'number'
        }
    ])
        .then(function (answer) {
            let grabName = answer.theirName;
            let grabId = answer.theirId;
            let grabEmail = answer.theirEmail;
            let grabOffice = answer.theirOffice;
            let newEmployee = new Manager(grabName, grabId, grabEmail, grabOffice);
            collectionArray.push(new Manager(grabName, grabId, grabEmail, grabOffice));
            checkForMoreEmployees();
        })
};

let checkForMoreEmployees = function () {
    inquirer.prompt([
        {
            name: 'askForMoreEmployees',
            message: 'Would you like to add another employee?',
            type: 'confirm'
        }
    ])
        .then((answers) => {

            if (answers.askForMoreEmployees == true) {
                inquirer.prompt([
                    {
                        name: 'bringToMenu',
                        message: 'What type of role do they have?',
                        type: 'rawlist',
                        choices: ['engineer', 'intern']
                    }
                ])
                    .then((answers) => {


                        if (answers.bringToMenu === 'engineer') {
                            engineerPrompt();
                        }
                        else {
                            internPrompt();
                        }
                    })
            } else {


                fromArrayToHtml();
                //make new function here that takes finalHtml as an argument and use that to create the page.
                makeHtmlPage(finalHtml);

            }
        })
}

let internPrompt = function () {
    inquirer.prompt([
        {
            name: 'theirName',
            message: 'What is the name of the intern?',
            type: 'input'
        },
        {
            name: 'theirId',
            message: 'What is the id of the intern?',
            type: 'input'
        },
        {
            name: 'theirEmail',
            message: 'What is the email address of the intern?',
            type: 'input'
        },
        {
            name: 'theirSchool',
            message: 'Where did they go to school?',
            type: 'input'
        }
    ])
        .then(function (answer) {
            let grabName = answer.theirName;
            let grabId = answer.theirId;
            let grabEmail = answer.theirEmail;
            let grabSchool = answer.theirSchool;
            let newIntern = new Intern(grabName, grabId, grabEmail, grabSchool);
            collectionArray.push(new Intern(grabName, grabId, grabEmail, grabSchool))
            // console.log(collectionArray[0]);
            checkForMoreEmployees();
        })
};

let engineerPrompt = function () {
    inquirer.prompt([
        {
            name: 'theirName',
            message: 'What is the name of the engineer?',
            type: 'input'
        },
        {
            name: 'theirId',
            message: 'What is the id of the engineer?',
            type: 'input'
        },
        {
            name: 'theirEmail',
            message: 'What is the email address of the engineer?',
            type: 'input'
        },
        {
            name: 'theirGithub',
            message: 'What is their github name?',
            type: 'input'
        }
    ])
        .then(function (answer) {
            let grabName = answer.theirName;
            let grabId = answer.theirId;
            let grabEmail = answer.theirEmail;
            let grabGithub = answer.theirGithub;
            let newEngineer = new Engineer(grabName, grabId, grabEmail, grabGithub);
            collectionArray.push(new Engineer(grabName, grabId, grabEmail, grabGithub));
            // for (var i = 0; i < collectionArray.length; i++) {
            //     console.log(collectionArray[i]);
            // }
            checkForMoreEmployees();
        })
};

let fromArrayToHtml = function () {
    for (var i = 0; i < collectionArray.length; i++) {
        finalHtml = finalHtml + " <p>" + collectionArray[i].employeeName + "</p>";
        finalHtml = finalHtml + " <p>" + collectionArray[i].employeeIdent + "</p>";
        finalHtml = finalHtml + " <p>" + collectionArray[i].employeeEmail + "</p>";
        if (collectionArray.employeeOffice) {
            finalHtml = finalHtml + " <p>" + collectionArray[i].employeeOffice;
        }
        if (collectionArray.employeeGithub) {
            finalHtml = finalHtml + " <p>" + collectionArray[i].employeeGithub + "</p>";
        }
        if (collectionArray.employeeSchool) {
            finalHtml = finalHtml + " <p>" + collectionArray[i].employeeSchool + "</p>";

            finalHtml = finalHtml + "        ";
        }


    }

}


const makeHtmlPage = function (myTeamInfo) {
    fs.writeFile('./teamPage.html', `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
      `+ myTeamInfo + `
        
    </body>
    </html>
    `, err => {
        if (err) {
            console.error(err)
            return
        }

    })
}



module.exports = {
    managerPrompt,
    initialPrompt,

}