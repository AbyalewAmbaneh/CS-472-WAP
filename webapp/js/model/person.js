/**
 * Person.js
 */
 "use strict";

 export class Person {
    constructor(name,dateOfBirth){
        this.name = name;
        this.dateOfBirth = new Date(dateOfBirth);
    };

    get name(){  // js getter method
        return this._name;
    };

    set name(name){   // js setter method
        this._name = name;
    };

    getDateOfBirth(){  //user getter method
        return this.dateOfBirth;
    };

    setDateOfBirth(newDOB){  //user setter method
        if(!(new Date(newDOB))){
                console.log("input must be yyyy-mm-dd")
            }
        this.dateOfBirth = newDOB;
    };

    toString(){
        return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth() + 1}-${this.dateOfBirth.getDate()}`
    };
};



