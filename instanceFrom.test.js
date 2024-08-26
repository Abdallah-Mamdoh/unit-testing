import "./instanceFrom"

class Person{
    constructor(name){
        this.name=name;
    }
}

class Human{
    constructor(name){
        this.name=name;
    }
}


test.only('this is instance from class', () => {
    const personName = new Person("Ahmed");
    const humanName = new Human("Ali");
    expect(humanName).instanceFrom(Human);
});
