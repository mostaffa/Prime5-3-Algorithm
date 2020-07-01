"use strict"
class Package{
    static _count_of_first_number  
     _count_of_second_number
     _amount
    constructor(amount, firstNumber, secondNumber){
        this._count_of_first_number = firstNumber;
        this._count_of_second_number = secondNumber;
        this.amount = amount;
        this.findPackage(amount);
    }
    getFirstNumber() {
        return this._count_of_first_number
    }
    getSecondNumber(){
        return this._count_of_second_number;
    }
    findPackage(packCount) {
        if(packCount>12){
            packCount-=5;
            this._count_of_first_number++;
            this.findPackage(packCount);
        }
        else if (packCount >=3) {
            if(packCount % 3 ===0){
                packCount-= 3;
                this._count_of_second_number++;
                findPackage(packCount);
            }
            else{
                packCount-=5;
                this._count_of_first_number++;
                this.findPackage(packCount);
            } 
        }
    }
    
}
// let packages = {
//     countOfFive: 0,
//     countOfThree: 0
// }

// function findPackage(packCount) {
//     if(packCount>12){
//         packCount-=5;
//         packages.countOfFive++;
//         findPackage(packCount);
//     }
//     else if (packCount >=3) {
//         if(packCount % 3 ===0){
//             packCount-= 3;
//             packages.countOfThree++;
//             findPackage(packCount);
//         }
//         else{
//             packCount-=5;
//             packages.countOfFive++;
//             findPackage(packCount);
//         } 
//     }
// }

// function testerFunction(ti){
//     for(var n=8;n<=ti;n++){
//         findPackage(n);
//         if(packages.countOfFive*5 + packages.countOfThree*3 === n){
//             console.log(`Test ${n} : Passed`)
//         }else{
//             console.log(`Failed in ${n} Test`);
//             console.log(packages)
//             break;
//         }
//         packages.countOfFive=0;
//         packages.countOfThree=0;
//     }
//     console.log(`The function test done and passed (${ti}) Times 100%`)
// }
// testerFunction(1000);
// findPackage(51);
// console.log(packages)

let t = new Package(20, 5, 3);
console.log(t.getFirstNumber())
console.log(t.getSecondNumber())
