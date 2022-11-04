import {display} from './utils.js';

export function module1() {

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

export {module1 as testCase1} from './module1.js';