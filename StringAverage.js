function averageString(str) {
    var number = {'zero':0,'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9};
    var strArray = str.split(" ");
    var numberSum = 0; 
    for(let i=0 ; i<strArray.length ;i++) {
        if(number[strArray[i]] == undefined){ 
          return "n/a"
        }
        else{
          numberSum += number[strArray[i]];
        }
    } 
  return Object.keys(number)[Math.floor(numberSum/strArray.length)]
}
