// add solution here

function theBeatlesPlay(musician_array, instrument_array){
  var output_array=[];
  for ( var i=0; i<musician_array.length; i++){
    output_array.push(musician_array[i] + " plays " + instrument_array[i])
  }
  return output_array;
}


function johnLennonFacts(facts_array){
  var output_array = [];
  var counter = facts_array.length -1  // added -1 bc 1st line returns undefined
  while(counter >= 0) {
    output_array.push(facts_array[counter]+"!!!");
    counter--;
  }
  return output_array;
}


function iLoveTheBeatles(number_input){
  var output_array=[];
  var counter = 15 - number_input
  while (counter > 0) {
    if (number_input <15){
      output_array.push("I love the Beatles!")
      counter--;
    } else {
      return output_array;  // break loop. maybe just "return" better?
    }
  }
 return output_array; 
}

