const Module1 = function(){
"use strict";

/**
 * #1
 */

const Person ={
    name: "",
    dateOfBirth: "",
    getName: function(){
        return this.name;
    },
    setName: function(givenName){
        this.name = givenName;
    },
    toString: function(){    // overrides the object method tostring 
        console.log("The Person's name is", `${this.name}`);
        console.log(`${this.name}`,"was born on", `${this.dateOfBirth}`);
    }
};

const newPerson_1 = Object.create(Person);
newPerson_1.name = "John";
newPerson_1.dateOfBirth = "December 10th, 1998";
console.log(newPerson_1.toString());


/**
 * #2
 */

// const Employee = Object.create(Person,
// {   
//     'Salary': 0,
//     'hireDate': new Date(),
//     'jobTitle': "",
//     'doJob': function(jobTitle){
//         this.jobTitle = jobTitle;
//         console.log(`${this.name}`, "is a" ,`${jobTitle}` , "who earns", `${this.Salary}`)},
// }//     
// );

const Employee = Object.create(Person);
Employee.Salary = 0;
Employee.hireDate = Date.now(), // .toLocalDateString();
Employee.jobTitle = "";
Employee.doJob =  function(jobTitle){
            this.jobTitle = jobTitle;
            console.log(`${this.name}`, "is a" ,`${jobTitle}` , "who earns $", `${this.Salary.toFixed(2)}`)};



const employee1 = Object.create(Employee);
employee1.name = "Anna";
employee1.Salary = 249995.5767670;
employee1.doJob("Programmer");


/**
 * #3
 */
 }();

const Module2 = function(){
"use strict";

  function Person(name,DOB){
    this.name = name;
    this.dateOfBirth = DOB;

    this.getName = function(){
        return this.name;
    };

    this.setName = function(newName){
         this.name = newName;
    };

    this.toString = function(){
        console.log("Name:", `${this.name}`, "DateOFBirth:", `${this.dateOfBirth}`);
    }
}

const person_2 = new Person("Peter","1998-12-10");
person_2.toString();
}();
