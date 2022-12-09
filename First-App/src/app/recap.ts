const username="boomcrash";
const username1:string="boomcrash";
const username2:string | number="boomcrash";

const sum = () => {
    return 10 + 20;
    }


const suma = (a:number,b:number) => {
    return a + b;
    }

const suma1 = (a:number,b:number) => a + b;

sum();
suma(10,20);
suma1(10,20);

class Person {
    private  age: number;
    public lastName: string;
    protected firstName: string;
    constructor(age: number, lastName: string, firstName: string) {
        this.age = age;
        this.lastName = lastName;
        this.firstName = firstName;
    } 
}

const person=new Person(10,"boom","crash");
console.log(person);

