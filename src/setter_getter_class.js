class ProfessionalDetails{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    get hiringDate(){
        return this.date;
    }
    set hiringDate(date){
        this.date = date;
    }
    get designation(){
        return this.desig;
    }
    set designation(desig){
        this.desig = desig;
    }
};

let emp1oyee = new ProfessionalDetails('Vinod', 150000);
emp1oyee.hiringDate = "17-05-2022";
emp1oyee.designation = "Software Developer";

console.log(emp1oyee.name);
console.log(emp1oyee.salary);
console.log(emp1oyee.desig);
console.log(emp1oyee.date)