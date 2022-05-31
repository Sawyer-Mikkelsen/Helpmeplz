async function main() {
    // This is where the code you're actually experimenting with goes.
    
    let prompt = "Please enter your name, or 'Exit' to quit: "
    let name = await input(prompt);
    document.getElementById("input").innerHTML = "hello" + input;
    var myCar = new Car("Ford", "Mustang", "8", "V", "Auto",0,false); //instantiate the car
    console.log("Instantiated");
    myCar.odometer = 0;
    myCar.running = false;
    startEngine();  //Turn on the engine
    console.log("Started");
    Drive(100);  //Drive 100km
    console.log("100");
    Drive(50);  //Drive 50 km
    console.log("50");
    stopEngine(); //Turn off the engine
    console.log("Stopped");
    console.log("Car went " + myCar.odometer + "km");  //Output the odometer reading to the console

    while (name != "Exit") 
    {
        output("Hello there, "+name+"!");
        name = await input(prompt);
    }
}

class Car {
    constructor(make, model, engineCylCount, engineCylConfig, transmissionType, odometer, running){
        this.make = make;
        this.model = model;
        this.engineCylCount = engineCylCount;
        this.engineCylConfig = engineCylConfig;
        this.transmissionType = transmissionType;
        this.odometer = odometer;
        this.running = running;
    }
    //    transmission(type, odometer) {
    //        this.type = type;
    //      this.odometer = odometer(0);
    //    }
    
        engine(cylCount, cylConfig, running) {
            this.cylCount = cylCount;
            this.cylConfig = cylConfig;
       
        }
    };
 //var myCar = new Car("Ford", "Mustang", "8", "V", "Auto");
 //this.myCar = myCar;

function startEngine(){    
    try{
    if (myCar.running == false) throw "off";
    myCar.running = true;
       document.getElementById("Started") = "Car is on!"; 
   }
   catch(err){
    console.log("myCar" + err);
   }
}; 
function stopEngine (){
    try{
    if (myCar.running == true);
    myCar.running = false;
    document.getElementById("Stopped").innerText = "Car is off!";
    }
    catch(err){
        console.log("myCar" + err);
    }};


function Drive (Distance){
    try{
        myCar.Odometer = myCar.Odometer + Distance
        //if (myCar.odometer == 50);
        //console.log("Car went 50km");

    //document.getElementById("car").innerHTML = "My car is a" + Carx();
    //document.getElementById("Engine is on.").innerHTML = myCar.startengine();
    }
    catch(err){
        alert("Broken");
    }
};

   // constructor ( distance ) {
     //   if ( x in distance == 50);
        //document.getElementById("odometer").innerHTML = ("You drove" + driveShort.value);
    //}
