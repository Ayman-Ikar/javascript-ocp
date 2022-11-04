import {display} from './utils.js';

export function module2() {
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

export {module2 as testCase2} from './module2.js';