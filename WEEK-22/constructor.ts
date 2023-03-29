class BluePrint {

    constructor(
        buildingLen: string, 
        buildingHieght: string,
        buildingWidth: string,
        buildingFoundationType: string,
    ){
        this.length = buildingLen;
        this.height = buildingHieght;
        this.width = buildingWidth;
        this.foundationType = buildingFoundationType;
    }



    length: string;
    width: string;
    height: string;
    foundationType: string;
    isCompleted: boolean;



}

const olaideHouse = new BluePrint("5 km", `3 km`, '2 km', "PILE")
const anonymousHouse = new BluePrint("393 miles", "290 miles", "903 miles", "STRIP")
const goldenHouse = new BluePrint('1cm', '1cm', '1cm', "PIER")


console.log()



// Path: WEEK-22/constructor.ts
class Student {
    level: number
}


const garbaOchayan = new Student('Garba', 'Ochayan', 'richkid@gmail.com', 200);
console.log(garbaOchayan);

garbaOchayan