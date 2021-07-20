const generateManager = managerArrays => {
    return `
        
        <div class = "col-3">
            <div class = "card"> 
                
                ${managerArrays.map(({employeeName, employeeId, employeeEmail, employeeRole, officeNumber }) => {
                    return `
                    <div class="card-title">
                        <h2> ${employeeRole}<h2>
                        <h3> ${employeeName}</h3> 
                    </div>
                    <div class = "card-body">
                        <div class = "card-text"> 
                            <ul>
                                <li> ID: ${employeeId}</li>
                                <li> Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a></li>
                                <li> Office Number: ${officeNumber}</li>
                            </ul>
                        </div>
                    </div>`;
                })}     
            </div>
        </div>

    `
};

const generateEngineer = engineerArrays => {
    return `
        
        <div class = "col-3">
            <div class = "card"> 
               
                ${engineerArrays.map(({employeeName, employeeID, employeeEmail, employeeRole, gitHubUsername }) => {
                    return `
                    <div class="card-title">
                        <h2> ${employeeRole}</h2>
                        <h3> ${employeeName}</h3> 
                    </div>    
                    <div class = "card-body">
                        <div class = "card-text"> 
                            <ul>
                                <li> ID: ${employeeID}</li>
                                <li> Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a></li>
                                 <li> GitHub ID: <a href="https://github.com/${gitHubUsername}">${gitHubUsername}</a></li>
                            
                             </ul>
                        </div>
                    </div>`;
                })}  
            </div>
        </div>

    `
};

const generateIntern = internArrays => {
    return `
        
        <div class = "col-3">
            <div class = "card">

                ${internArrays.map(({employeeName, employeeID, employeeEmail, employeeRole, internSchool}) => {
                    return `
                    <div class = "card-title"> 
                        <h2>${employeeRole}</h2>
                        <h3> ${employeeName}</h3> 
                    </div>
                    <div class = "card-body">
                        <div class = "card-text"> 
                            <ul>
                                <li> ID: ${employeeID}</li>
                                <li> Email: <a href="mailto:${employeeEmail}"></a></li>
                                <li> Intern School: ${internSchool}</li>
                            </ul>
                        </div>
                    </div>`;
                }) }                
            </div>        
        </div>

    `
};

module.exports = teamMembers => {
    const managers = [];
    const engineers = [];
    const interns = [];

    // seprating team members into seprate arrays
    teamMembers.forEach(function (item) {
        if(item.employeeRole === "Engineer") {
            engineers.push(item);
        }
        else if(item.employeeRole === "Intern") {
            interns.push(item);
        }
        else{
            managers.push(item);
        }
    });

    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        
</head>
<body>
    <header>
        <h1>
            Team Profile Generator 
        </h1>
    </header>
    <main class="container">
        <div class = "row">
            ${generateManager(managers)}
            ${generateEngineer(engineers)}
            ${generateIntern(interns)}
        </div>
    </main>
</body>
</html>
`;
}