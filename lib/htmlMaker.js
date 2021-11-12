const fs = require('fs');

function htmlMaker()
let topHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <!-- link to bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- link to CSS:::::: STILL NEED TO MAKE CSS -->
    <link rel="stylesheet" href="./dist/style.css">
</head>

<body>
    <!-- header for page -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center"> The Dream Team</h1>
                <p class="lead text-center">Here is the profile for each member in your team.</p>
            </div>
        </div>
    </div>`;

const bottomHTML = `    <!-- boostrap bundle link  -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>

</html>`;

const people = [{ name: "Michael", role: "Manager" }, { name: "Sally", role: "Intern" }, { name: "Tom", role: "Engineer" }];

const renderPage = () => {
    let cardHTML = '';

    for (const person of people) {
        switch (person.role) {
            case 'Manager':
                cardHtml += `<div class="card employee-card mx-2 my-2" style="width: 20rem;">
                <div class="card-header">
                    <h5 class="card-title">Manager Name: ${managetData.name}</h5>
                    <p class="card-text">Role: Manager</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${managerData.id}:</li>
                        <li class="list-group-item">Email: ${managerData.email} </li>
                        <li class="list-group-item">Office Number: ${managerData.office}z</li>
                    </ul>
                </div>
            </div>`

            case 'Engineer':
                cardHTML += `<div class="card employee-card mx-2 my-2" style="width: 20rem;">
                <div class="card-header">
                    <h5 class="card-title">Engineer Name: ${engineerData.name}</h5>
                    <p class="card-text">Role: Engineer</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineerData.id}</li>
                        <li class="list-group-item">Email: ${engineerData.email}</li>
                        <li class="list-group-item">Git Hub Username: ${engineerData.github}</li>
                    </ul>
                </div>
            </div>`

            case 'Intern':
                cardHTML += `  <div class="card employee-card mx-2 my-2" style="width: 20rem;">
                <div class="card-header">
                    <h5 class="card-title">Intern Name ${internData.name}</h5>
                    <p class="card-text">Role: Intern</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${internData.id}</li>
                        <li class="list-group-item">Email: ${internData.email}</li>
                        <li class="list-group-item">School: ${internData.school} </li>
                    </ul>
                </div>
            </div>`
        }

        const finalHTML = topHTML + cardHTML + bottomHTML;

        console.log(finalHTML);

        fs.writeFile('team.html', finalHTML, (err) => console.log(err ? 'Error' : 'Success!'));
    }
}

renderPage()

module.exports = htmlMaker;