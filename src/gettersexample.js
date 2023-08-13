let personal_details = {
    name: 'Vinod Vukkalam',
    occupation: 'Software Developer',
    get occupationInfo(){
        return this.occupation + ' ' + " at Kyndryl India."
    },
    get nameDetails(){
        fn = this.name.split(" ")[0];
        ln = this.name.split(" ")[1];
        return [fn, ln]
    },
    set nameDetails(nm){
        this.name = nm.toString()   
    },
    
};
console.log(personal_details.nameDetails);
console.log(personal_details.occupationInfo);
personal_details.nameDetails = "Nevaan Skanda";
console.log(personal_details.nameDetails);
console.log(personal_details.occupationInfo);
