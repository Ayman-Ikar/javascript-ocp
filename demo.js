'use strict';
(function () {


    // Create object literal manually
    function Person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

        this.isAdult = function () {return this.age > 18;}

        Object.defineProperty(this, 'fullName', {
            get : function () {
                return this.firstname + ' ' + this.lastname;
            },
            enumerable: true
        })
    }


    function Student(firstname, lastname, age) {
        Person.call(this, firstname, lastname, age);

        this._enrolledCourses = [];
        this.enroll = function(courseId) {
            this._enrolledCourses.push(courseId);
        }
        this.getCourses = function () {
            return this.fullName + " " + this._enrolledCourses.join(',');
        }
    }

    let ayman = new Student('Ayman', 'Ikar', 26);

    ayman.enroll(123);
    ayman.enroll(564);

    display(ayman.getCourses())

})();







function module1(){

    // Create object literal manually
    function Person(firstname, lastname, age, myFunction) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.myFunction = myFunction;

        this.isAdult = function () {return this.age > 18;}
        this.getFullName = function() {return this.firstname +" "+ this.lastname;}
    }

    let person = new Person('Ayman', 'Ikar', 26, 'software engineer');

    person.currentProject = 'Risk Reveal';


    // Create object literal with a function
    function registerUser(firstname, lastname) {

        let person1 = new Person(firstname, lastname);

        display(person1);

        setTimeout(function() {
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