'use strict';
(function () {

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

})();


/**
 ******
 ******
 ******
 **/



function module2and3() {

    // Create object literal manually
    function Person(firstname, lastname, age, myFunction) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.myFunction = myFunction;

        this.isAdult = function () {
            return this.age > 18;
        }
        this.getFullName = function () {
            return this.firstname + " " + this.lastname;
        }
    }

    let person = new Person('Ayman', 'Ikar', 26, 'software engineer');

    person.currentProject = 'Risk Reveal';


    // Create object literal with a function
    function registerUser(firstname, lastname) {

        let person1 = new Person(firstname, lastname);

        display(person1);

        setTimeout(function () {
            Object.assign(person1, person);
            display(person1);
        }, 100)

    }

    registerUser('Rachida', 'Mabchour');

    let healthStats = {
        weight: 82,
        height: 1.80,
        weightUnit: 'kg',
        heightUnit: 'm'
    }

    display({...person, ...healthStats});
    display(Object.assign({...person}, healthStats))
    display(person);
}

function module4() {
    // Create object literal manually
    function Person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

        this.isAdult = function () {
            return this.age > 18;
        }

        Object.defineProperty(this, 'fullName', {
            get: function () {
                return this.firstname + ' ' + this.lastname;
            },
            enumerable: true
        })
    }


    function Student(firstname, lastname, age) {
        Person.call(this, firstname, lastname, age);

        this._enrolledCourses = [];
        this.enroll = function (courseId) {
            this._enrolledCourses.push(courseId);
        }
        this.getCourses = function () {
            return this.fullName + " " + this._enrolledCourses.join(',');
        }
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    let ayman = new Student('Ayman', 'Ikar', 26);

    ayman.enroll(123);
    ayman.enroll(564);

    display(ayman.getCourses())
}