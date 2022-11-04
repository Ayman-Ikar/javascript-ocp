import {display} from './utils.js';

export function module3(){
    class Person {

        constructor(firstname, lastname, age) {
            this._firstname = firstname;
            this._lastname = lastname;
            this._age = age;
        }

        isAdult() {
            return this._age >= 18;
        }


        get firstname() {
            return this._firstname;
        }

        set firstname(value) {
            this._firstname = value;
        }

        get lastname() {
            return this._lastname;
        }

        set lastname(value) {
            this._lastname = value;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            this._age = value;
        }

        get fullName() {
            return this.firstname + ' ' + this.lastname;
        }

        set fullName(fullName) {
            let nameParts = fullName.split(' ');
            this.firstname = nameParts[0];
            this.lastname = nameParts[1];
        }
    }


    class Student extends Person {
        constructor(firstname, lastname, age) {
            super(firstname, lastname, age);
            this._enrolledCourses = [];
        }

        enroll(courseId) {
            this._enrolledCourses.push(courseId);
        }

        getCourses() {
            return this.fullName + ' ' + this._enrolledCourses.join(',');
        }
    }

    let ayman = new Student('Ayman', 'Ikar', 26);
    ayman.enroll("CS101");
    display(ayman.getCourses());
}

export {module3 as testCase3} from './module3.js';