
      // inherit example 
// // Parent class
// class Animal {
//     constructor(name, species) {
//       this.name = name;
//       this.species = species;
//     }
    
//     describe() {
//       console.log(`${this.name} is a ${this.species}.`);
//     }
  
//     makeSound() {
//       console.log(`${this.name} makes a sound.`);
//     }
//   }
  
//   // Child class
//   class Dog extends Animal {
//     constructor(name, breed) {
//       super(name, 'Dog');
//       this.breed = breed;
//     }
    
//     // Override the makeSound method
//     makeSound() {
//       console.log(`${this.name} barks.`);
//     }
    
//     sit() {
//       console.log(`${this.name} sitted...`);
//     }
//   }
  
//   // Another child class
//   class Cat extends Animal {
//     constructor(name, color) {
//       super(name, 'Cat'); 
//       this.color = color;
//     }
    
//     // Override the makeSound method
//     makeSound() {
//       console.log(`${this.name} meows.`);
//     }
    
//     climb() {
//       console.log(`${this.name} is climbing a tree.`);
//     }
//   }
  
//   // Create instances of Dog and Cat
//   const Dog1 = new Dog('Buddy', 'Golden Retriever');
  
//   const Cat1 = new Cat('Whiskers', 'Black');
//   // const info= new Animal()
 
//   // Use the methods
//  Dog1.describe();
//  Dog1.makeSound(); 
//  Dog1.sit(); 
  
//   Cat1.describe(); 
//   Cat1.makeSound(); 
//   Cat1.climb(); 
//   info.makeSound();


               // // inherit 1st workout try//
//        class family {
//   constructor(name, member) {
//     this.familyname = name;
//     this.familymember = member;
//   }

//   show() {
//     console.log(`${this.familyname} is a ${this.familymember}`);
//   }

//   detail() {
//     console.log(`${this.familyname} show a detail.`);
//   }

// }

// // kolantha  class

// class Paiyan extends family {
//   constructor(familyname, brother) {
//     super(familyname, 'paiyan');
//     this.brother = brother;
//   }

//   //detail show method

//   detail() {
//     console.log(`${this.familyname}young brother.`);
//   }
//   ride() {
//     console.log(`${this.familyname}  ride a bike...`);
//   }

// }

// // another kollantha class
// class Ponnu extends family {
//   constructor(familyname, sister) {
//     super(familyname, 'ponnu')
//     this.sister = sister;
//   }

//   // detail show method
//   detail() {
//     console.log(`${this.familyname}young sister.`);
//   }

//   ride() {
//     console.log(`${this.familyname} is ride a car`);
//   }

// }

// //create instance of paiyan and ponu

// const paiyan = new Paiyan('abishek', '3mem');

// const ponnu = new ponnu('abi,2mem')

// //  use the detail show method

// paiyan.show();
// paiyan.detail();
// paiyan.ride();
  


          // 2nd workout for inherit

//  parent class for management
// class Management {
//     constructor(fees, studentID) {
//         this.fee = fees;
//         this.rollno = studentID;
//     }

//     show() {
//         console.log(`${this.fee}is a ${this.rollno}`);
//     }

//     detail() {
//         console.log(`${this.fee} show a detail`)
//     }
// }

// // child class for HOD 
// class Student1 extends Management {
//     constructor(fee, rupees) {
//         super(fee, '10rupees');
//         this.rupees= rupees;
//     }
//     // detail show method
//     detail() {
//         console.log(`${this.rupees}2rs paid,`)

//     }
//     balance() {
//         console.log(`${this.rupees} balance fees 8 rupees only...`);

//     }
// }

// // another child class for student2
// class Student2 extends Management {
//     constructor(fee, scholorship) {
//         super(fee, 'nofees')
//         this.scholorship = scholorship;

//     }

//     // detail show method

//     detail() {
//         console.log(`${this.fee} fully paid`);
//     }

//     bus_fees() {

//         console.log(`${this.feepay} bus fees  balance 5 rupees`);
//     }
// }

// //  create instance of HOD and Incharge
// const Student1= new Student1 ('goodstud','rollno.21');
// const Student2 = new Student2('fees paided','rollno.20');

// //   use  the detail show method
// Student1.show();
// Student1.detail();
// Student1.balance();


// Student2.detail();
// Student2.bus_fees();

       
      //2nd work out oda preset pani(edit pani pananthu)   
//  parent class for management
class Management {
    constructor(StudentID,Fees) {
        this.rollno = StudentID;
        this.fee = Fees;
    }

    show() {
        console.log(`${this.rollno}is a ${this.fee}`);
    }

    tutionfees() {
        console.log(`${this.rollno} show a balance `)
    }
}

// child class for bAstudent
class BAstudent extends Management {
    constructor(StudentID,arts) {
        super(StudendtID, 'rollno21');
        this.arts= arts;
    }
    // detail show method
    tutionfees() {
        console.log(`${this.rollno}balance fees 10rupai,`)

    }
    bus_fees() {
        console.log(`${this.rollno} bus fess fully paid...`);

    }
}

// another child class for student2
class BSCstudent extends Management {
    constructor(attenance, result) {
        super(StudentID, 'rollno1')
        this.result = result;

    }

    // detail show method

    bus_fees() {
        console.log(`${this.rollno} paid50%`);
    }

     internalmark() {

        console.log(`${this.rollno} internal pass`);
    }
}

//  create instance of BAstudent and BSCstudent
const BAstudent1= new BAstudent ('abishek','defence std');
const BSCstudent1 = new BSCstudent('75%','pass');

//   use  the detail show method
BAstudent1.show();
BAstudent1.tutionfees();
BAstudent1.bus_fees();


BSCstudent1.detail();
BSCstudent1.bus_fees();
BSCstudent1.internalmark();

