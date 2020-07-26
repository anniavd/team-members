const Engineer = require("../lib/Engineer");

//create manager card
const generateManager = teamMember => {
  if (!teamMember) {
    return '';
  }

  return `
    
    <div class="col-md-4">
    <div class="card m-4 " style="width: 18rem;">
    <div class="card-header" style=" background-color: rgb(247, 211, 112);">
    <h3>Manager<h3>
    <h4>${teamMember.manager.name}<h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="far fa-id-badge"> ${teamMember.manager.id}</i></li>
      <li class="list-group-item"><i class="fas fa-envelope-square"></i><a href="mailto:" + ${teamMember.manager.email}> ${teamMember.manager.email}</a></li>              
      <li class="list-group-item"><i class="fas fa-phone-volume"></i> ${teamMember.manager.officeNumber}</li>
    </ul>
  </div>
  </div>
 
    `;
};

//create engineer cards
const generateEngineer = (teamMember) => {

  if (!teamMember.engineer) {
    return '';
  }
  else {
    let html = '';
    for (let i = 0; i < teamMember.engineer.length; i++) {
      html += ` 
    
    <div class="col-md-4">                  
    <div class="card m-4 " style="width: 18rem; ">
    <div class="card-header" style=" background-color: rgb(247, 211, 112);">
    <h3>Engineer<h3>
    <h4>${teamMember.engineer[i].name}<h4>
    </div>
    <ul class="list-group list-group-flush">          
      <li class="list-group-item"><i class="far fa-id-badge"> ${teamMember.engineer[i].id}</i></li>              
      <li class="list-group-item"><i class="fas fa-envelope-square"></i><a href="mailto:" +${teamMember.engineer[i].email}> ${teamMember.engineer[i].email}</a></li>
      <li class="list-group-item"><i class="fab fa-github"></i><a href="https://github.com/${teamMember.engineer[i].github}" target="_blank"> ${teamMember.engineer[i].github}</a></li>
    </ul>
  </div> 
  </div> 
  `
    }
    return html;
  }
};
//create intern cards
const generateIntern = teamMember => {

  if (!teamMember.intern) {
    return '';
  }
  else {
    let html = '';
    for (let i = 0; i < teamMember.intern.length; i++) {
      html += ` 

<div class="col-md-4">             
<div class="card m-4 " style="width: 18rem; ">
    <div class="card-header" style=" background-color:rgb(247, 211, 112);">
    <h3>Intern<h3>   
    <h4>${teamMember.intern[i].name}<h4>   
    </div>
    <ul class="list-group list-group-flush">          
      <li class="list-group-item"><i class="far fa-id-badge"> ${teamMember.intern[i].id}</i> </li>              
      <li class="list-group-item"><i class="fas fa-envelope-square"></i><a href="mailto:" +${teamMember.intern[i].email}> ${teamMember.intern[i].email}</a></li>
      <li class="list-group-item"><i class="fas fa-graduation-cap"></i> ${teamMember.intern[i].nameSchool}</li>
    </ul>
  </div> 
  </div> 
   `
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
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&family=Playfair+Display:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css"/>

        <title>TEAM MEMBERS</title>
    </head>
    <body>
    <header>
    <nav class="navbar  justify-content-center" style="background-color:rgb(189, 157, 70);">
        <h1 class="navbar-text text-body">Team Members</h1>
   </nav>
   </header>
   <main class="container ">  
   <div class="row mb-2 justify-content-center"> 
      ${generateManager(teamMember)}  
   </div>     
   <div class="row mb-2 justify-content-center">    
      ${generateEngineer(teamMember)} 
  </div>   
  <div class="row mb-2 justify-content-center">    
      ${generateIntern(teamMember)}   
  </div>                     
    </main>         
     
    </body>
    </html>
    `
};