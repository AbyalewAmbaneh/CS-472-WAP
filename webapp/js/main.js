"use strict";
import {Person} from "./model/person.js"
import {Employee} from "./employee.js"

const person_1 = new Person("Ana Smith", "1998-12-15");
const person_2 = new Person("Bob Jone", "1945-11-16");
const person_3 = new Person("Carlos Slim Helu", "1976-09-24");
const Employee_1 = new Employee("Jim Hanson","1945-11-16",245990,Date());

const people = [person_1,person_2,person_3,Employee_1];
for(let key of people){
        console.log(key.toString());
}

console.log(Employee_1.doJob("Software Engineer"))