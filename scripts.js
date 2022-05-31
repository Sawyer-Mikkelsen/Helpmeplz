async function main() {
    // This is where the code you're actually experimenting with goes.
    
    let prompt = "Please enter your name, or 'Exit' to quit: "
    let name = await input(prompt);
    document.getElementById("input").innerHTML = "hello" + input;

    var myCar = new Car("Ford", "Mustang", "8", "V", "Auto",0,false); //instantiate the car

    console.log("Instantiated");

    //Turn on the engine
    myCar.startEngine();  
    console.log("Started");

    //Drive 100km
    myCar.drive(100);  
    console.log("100");

    //Drive 50 km
    myCar.drive(50);  
    console.log("50");

    //Turn off the engine
    myCar.stopEngine(); 
    console.log("Stopped");

    //Output the odometer reading to the console
    console.log("Car went " + myCar.odometer + "km");  

    while (name != "Exit") 
    {
        output("Hello there, "+name+"!");
        name = await input(prompt);
    }
}

class Car {

  constructor(make, model, engineCylCount, engineCylConfig, transmissionType, odometer, running) {
        this.make = make;
        this.model = model;
        this.engineCylCount = engineCylCount;
        this.engineCylConfig = engineCylConfig;
        this.transmissionType = transmissionType;
        this.odometer = odometer;
        this.running = running;
  }

  engine(cylCount, cylConfig, running) {
    this.cylCount = cylCount;
    this.cylConfig = cylConfig;
  }

  startEngine() {    

    if (this.running == false) {
      this.running = true;
      //document.getElementById("Started").innerText = "Car is on!"; 
    } else {      
      throw "Unable to start engine: The car is already running";
    }
  }; 

  stopEngine () {
      
    if (this.running == true) {
      this.running = false;
      //document.getElementById("Stopped").innerText = "Car is off!";
    }
  };

  drive (distance) {
      
    this.odometer = this.odometer + distance;
    //if (myCar.odometer == 50);
    //console.log("Car went 50km");
  
    //document.getElementById("car").innerHTML = "My car is a" + Carx();
    //document.getElementById("Engine is on.").innerHTML = myCar.startengine();
      
  };
};
 //var myCar = new Car("Ford", "Mustang", "8", "V", "Auto");
 //this.myCar = myCar;



   // constructor ( distance ) {
     //   if ( x in distance == 50);
        //document.getElementById("odometer").innerHTML = ("You drove" + driveShort.value);
    //}
