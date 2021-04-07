"use strict";
import {Person} from "../js/model/person.js"

export class Employee extends Person{
    constructor(name,dateOfBirth,salary,hireDate){
        super(name,dateOfBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }

    doJob(jobTitle){
        this.jobTitle = jobTitle;
        console.log(`${this.name} is a ${jobTitle} who earns ${this.salary.toFixed(2)}`)
    }

}