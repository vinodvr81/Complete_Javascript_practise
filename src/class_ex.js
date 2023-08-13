class EmplDetails{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    hiring_date(date){
        this.date = date;
    }
    designation(desig){
        this.desig = desig;
    }

};

let emp1 = new EmplDetails('Vinod', 150000);
emp1.hiring_date("15-05-2022");
emp1.designation("Software Developer");

console.log(emp1.name);
console.log(emp1.salary);
console.log(emp1.desig);
console.log(emp1.date)