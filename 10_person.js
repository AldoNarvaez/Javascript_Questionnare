class Person{
    constructor(name,lastName){
        this.name = name;
        this.lastName = lastName;
    }

    fullName(){
        return this.name+" "+this.lastName;
    }
}

let p1= new Person("Aldo", "Cao")

class Medic extends Person{
    constructor (name, lastName, specialty="none", active="true"){
        super(name, lastName);
        this.specialty = specialty;
    }
}

let m1= new Medic("Carlos","Rivera","Oncologist");
