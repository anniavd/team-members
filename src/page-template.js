const Engineer = require("../lib/Engineer");


const generateManager = teamMember => {
    if (!teamMember) {
        return '';
    }

    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    <h3> Manager:${teamMember.manager.name}<h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${teamMember.manager.id}</li>
      <li class="list-group-item">${teamMember.manager.email}</li>              
      <li class="list-group-item">${teamMember.manager.officeNumber}</li>
    </ul>
  </div>
    `;
};


/*const generateEngineer = (teamMember) => {

    if (!teamMember.engineer) {
        return '';
    } else {
        var html = '';
        for (let i = 0; i < teamMember.engineer.length; i++) {
            console.log(teamMember.engineer[i])
            html += `      
    <div class="card" style="width: 18rem; ">
    <div class="card-header">
    <h3>Engineer:${teamMember.engineer[i].name}<h3>
    </div>
    <ul class="list-group list-group-flush">          
      <li class="list-group-item">${teamMember.engineer[i].id}</li>              
      <li class="list-group-item">${teamMember.engineer[i].email}</li>
      <li class="list-group-item">${teamMember.engineer[i].github}</li>
    </ul>
  </div>   `
        }
        return html;
    }
};*/

const generateEngineer = (teamMember) => {
   
    if (!teamMember.engineer) {
        return '';
    }
    else {
        let html = '';
        for (let i = 0;i<teamMember.engineer.length;i++) {
            html += `            
    <div class="card" style="width: 18rem; ">
    <div class="card-header">
    <h3>Engineer:${teamMember.engineer[i].name}<h3>
    </div>
    <ul class="list-group list-group-flush">          
      <li class="list-group-item">${teamMember.engineer[i].id}</li>              
      <li class="list-group-item"><a href="#">${teamMember.engineer[i].email}</a></li>
      <li class="list-group-item"><a href="https://github.com/${teamMember.engineer[i].github}"  target="_blank">${teamMember.engineer[i].github}</a></li>
    </ul>
  </div>   `
        }
        return html;
    }
};

const generateIntern = teamMember => {
  
    if (!teamMember.intern) {
        return '';
    }
    else {
       let html='';
        for (let i = 0; i<teamMember.intern.length; i++) {
         html+=`      
<div class="card" style="width: 18rem; ">
    <div class="card-header">
    <h3>Inter:${teamMember.intern[i].name}<h3>   
    </div>
    <ul class="list-group list-group-flush">          
      <li class="list-group-item">${teamMember.intern[i].id}</li>              
      <li class="list-group-item"><a href="#">${teamMember.intern[i].email}</a></li>
      <li class="list-group-item">${teamMember.intern[i].nameSchool}</li>
    </ul>
  </div>  `
        }
        return html;
    }
};



//generate the html
module.exports = (teamMember) => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

        <title>TEAM MEMBERS</title>
    </head>
    <body>
    <header>
    <h1> Team Members</h1>
   </header>
   <main class="container ">   
      ${generateManager(teamMember)}       
      ${generateEngineer(teamMember)} 
      ${generateIntern(teamMember)}   
                          
    </main>

      <footer class="container text-center py-3">
       
      </footer>
    </body>
    </html>
    `
};