const Employee=require("./Employee")

class Intern extends Employee{
    constructor (name, id, email, nameSchool){
        super(name,id,email);
        this.nameSchool=nameSchool; 
    }
   
    getnameSchool(){
        return this.nameSchool;
    }

    getRole(){

        return "Intern";
      }

}

module.exports=Intern;