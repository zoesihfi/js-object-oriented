const whiskers = {
    animal: "cat",
    age: "3",
    breed: "bengal",
    color: "golden",
    tail: "short",
    gender: "male",
    sound: function () {
      console.log("Meow");
    },
    play: function () {
      console.log("Oohh Yarn Toy!");
    },
  };

//Prompt 1: Access the animal property of the object above and print its value to the console using dot notation.
console.log(whiskers.animal)

//Prompt 2: Access the age property of the object above and print its value to the console using dot notation.
console.log(whiskers.age)

//Prompt 3: Call the sound method property from object above and print to the console using dot notation.
console.log(whiskers.sound())

//Prompt 4: Access the breed property of the object above and print its value to the console using bracket notation.
console.log(whiskers.breed)

//Prompt 5: Access the color property of the object above and print its value to the console using bracket notation.
console.log(whiskers['color'])

//Prompt 6: Call the play method property from object above and print to the console using bracket notation.
console.log(whiskers['play()'])

//Prompt 7: Create a variable and store one of the properties from the object in the variable and print its value to the console using bracket notation.
let tailVariable = whiskers['tail'];
console.log(tailVariable)

//Prompt 8: Change the value of the color property to white using dot notation.
whiskers.color = 'white'

//Prompt 9: Change the value of the gender property to female using bracket notation.
whiskers.gender = 'female'

//Prompt 10: Add a property called size with a value of small using dot notation.
whiskers.size = 'small'

//Prompt 11: Add a property called diet with a value of kitty mix using bracket notation.
whiskers.diet = 'kitty mix'

//Classes Prompts
//Prompt 1: Create a class called Smartphone and add an empty constructor method to the Smartphone class.
class Smartphone {
  //Prompt 2: Add the following parameters to the constructor method and set it equal to the parameters:
    //OS, model, app market, company.
  constructor (OS, model, appMarket, company, ringtone) {
    this.OS = OS;
    this.model = model;
    this.appMarket = appMarket;
    this.company = company;
    this.ringtone = ringtone;
  }
    //Prompt 7: Add a method called Call to the Smartphone class. This means you will also have to add another parameter called ringtone to the constructor to hold the value/sound the call method would make.
  call () {
    console.log(this.ringtone);
  }
  //Prompt 10: Add a method to the Smartphone class called changeRingtone. This method should receive one parameter, representing the new ringtone. It shouldn’t return anything. The object of the method is to change the value of the ringtone property.
  changeRingtone (ringtone) {
    let newringtone = ringtone;
    return newringtone
  }
  //Getters & Setter Prompts
    //Prompt 12: Create a getter method called businessCalls that retrieves todays date and time.
    set businessCalls (time) {

      //Prompt 12: Write a conditional in getter method that if the time is greater than 10 and less than 21 then return "phone has been ringing all day!". If not, then it will return "phone on nighttime mode".
      if (time > 10 || time < 21) {
        return "phone has been ringing all day!";
      }else {
        return "phone on nighttime mode"
      }
    }
    
    //Prompt 13: Create a setter method called phoneOwner with a parameter of phoneOwner.
    set phoneOwner (phoneOwner) {
      this._phoneOwner = phoneOwner
      //Prompt 14: Add a console log inside the setter method to make sure it has been called.
      console.log(phoneOwner);
    }    
    //Prompt 15: Create a getter method called phoneOwner.
    get phoneOwner () {
      
    }
}

//Prompt 3: Create 1 new instance named phone1 for the Smartphone class.
let phone1 = new Smartphone ('ios', 'iphone XR', 'app store','apple', 'ring');
//Prompt 4: Create another new instance named phone2 for the Smartphone class, make it a different device from phone1.
let phone2 = new Smartphone ('android', 'Samsung Galaxy', 'google play', 'Samsung', 'buzz');
//Prompt 5: Print the OS property of phone1 to the console using dot notation.
console.log(phone1.OS);
//Prompt 6: Print the model property of phone2 to the console using bracket notation.
console.log(phone2['model']);
//Prompt 8: Use dot notation to call the call method for phone1 and print it to the console.
console.log(phone1.call());
//Prompt 9: Use bracket notation to alcl the call method for phone2 and print it to the console.
console.log(phone1.call());
//Prompt 11: Call the changeRingtone method and change the ringtone to “Beyonce” for phone1 using dot notation.
phone1.changeRingtone('Beyonce');
//Prompt 11: Call the changeRingtone method and change the ringtone to “Drake” for phone2 using bracket notation.
phone2['changeRingtone']('Drake');
//Prompt 12: Print the value of the businessCalls to the console using dot and bracket notation (on separate lines).
console.log(phone1.businessCalls)
console.log(phone1["businessCalls"]);
//Prompt 16: Add an owner of phone1 named John using bracket notation and print owner to the console.
phone1['phoneOwner'] = 'John'
console.log(phone1['phoneOwner']);
//Prompt 17: Add an owner of phone2 named Jane using dot notation and print owner to the console.
phone2.phoneOwner = 'Jane';
console.log(phone2.phoneOwner);