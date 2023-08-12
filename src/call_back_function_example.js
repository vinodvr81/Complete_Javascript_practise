
function mainFunction(callbackFunction) {
    console.log("This will be executed first and then the other console log output that is defined at the end of program")
    setTimeout(function () {
      console.log("Main Function executed");
      callbackFunction(); 
    }, 500); // 30 sec min delay
  }
  
  // Callback function to be executed after the main function operation done
function callbackFunction() {
    console.log("Asynchronous execution example where a call back function after main function executed!");
  }
  

  mainFunction(callbackFunction);
  
console.log("Example of call back function demonstrated and this will be executed second as a delay of 30 sec was put in the main function");
  
