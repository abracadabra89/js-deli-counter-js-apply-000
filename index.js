var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){
  if(katzDeli <= 0){
    return "There is nobody waiting to be served!";
  } else {
    return 'Currently serving ' + katzDeli.shift();
    }
  }
 function currentLine(arr){
   if(arr.length === 0){
     return "The line is currently empty.";
   } else {
     for(let num = 1; num < arr.length; num++){
     arr = arr.split().push(i+'.').join();
     }
   return 'The line is currently: ' + arr;
 }
 }