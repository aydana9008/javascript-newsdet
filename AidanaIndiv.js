//function sleepIn(weekday, vacation){
//    if(weekday === false || vacation===true){
//        return true;   
//    }
//    else{
//        return false;
//    }
//}
//console.log(sleepIn(false, false));
//console.log(sleepIn(true, false));
//console.log(sleepIn(false, true));




//function monkeyTrouble(aSmile, bSmile){
//    if(aSmile && bSmile || !aSmile && !bSmile){
//        return true;;
//    }
//    else{
//        return false;
//    }
//}
//console.log(monkeyTrouble(true, true));
//console.log(monkeyTrouble(false, false));
//console.log(monkeyTrouble(true, false));







//function sumDouble(num1, num2){
//    if(num1 === num2){
//        return (num1+num2)*2;
//    }
//    else{
//        return num1 + num2;
//    }
//}
//console.log(sumDouble(1, 2));
//console.log(sumDouble(3, 2));
//console.log(sumDouble(2, 2));




//function diff21(n){
//    if(n > 21){
//      return (n-21)*2;
//    }
//    else{
//        return Math.abs(n-21);
//    }
//}
//console.log(diff21(19));
//console.log(diff21(11));
//console.log(diff21(23));





//function parrotTrouble(talk, hour){
//   if(talk === true){
//    if(hour < 7 || hour > 20){
//        return true;
//    }
//       else{
//           return false;
//       }
//   }
//    else{
//        return false;
//    }
//}
//console.log(parrotTrouble(true, 6));
//console.log(parrotTrouble(true, 7));
//console.log(parrotTrouble(false, 5));





//function makes10(a, b){
//    if( a===10 || b===10 || a+b===10){
//        return true;
//    }
//    else{
//        return false;
//    }
//}
//console.log(makes10(9, 10));
//console.log(makes10(9,9));
//console.log(makes10(1, 9));












//function nearHundred(n){
//    if(Math.abs(100 - n)<= 10 || Math.abs(200 - n)<= 10){
//        return true;
//    }
//    else{
//        return false;
//    }
//}
//console.log(nearHundred(93));
//console.log(nearHundred(90));
//console.log(nearHundred(89));
//console.log(nearHundred(189));




//function posNeg(num1, num2, negative){
//    if(negative === true){
//        if(num1 < 0 && num2 < 0){
//            return true;
//        }
//        else{
//            return false;
//        }
//    }
//    else{
//        if(num1 < 0 || num2<0){
//            return true;
//        }
//        else{
//            return false;
//        }
//    }
//}
//console.log(posNeg(1, -1, false));
//console.log(posNeg(-1, 1, false));
//console.log(posNeg(-4, -5, true));





//function notString(string){
//    var word = "not";
//    for(var i = 0; i < 3; i++){
//     if(string.slice(0, 3) === word){
//         return string;
//     }
//        else{
//            return word+" "+string;
//        }
//    }
//}
//console.log(notString("candy"));
//console.log(notString("x"));
//console.log(notString("not bad"));




//function missingChar(string, number){
//   var front = string.slice(0, number);
//    var end = string.slice(number+1, string.length);
//    return front.concat(end);
//}
//
//console.log(missingChar("kitten", 1));
//console.log(missingChar("kitten", 0));
//console.log(missingChar("kitchen", 4));







//function frontBack(string){
//     if(string.length <=1){
//        return string;
//    }
//   var str = string.charAt(0);
//    var str1 = string.charAt(string.length-1);
//    var mid = string.slice(1, string.length-1);
//   
//    return str1.concat(mid).concat(str);
//}
//console.log(frontBack("code"));
//console.log(frontBack("a"));
//console.log(frontBack("ab"));
















//function front3(string){
//     if(string.length < 3){
//        return string;
//    }
//    var result = string.slice(0, 3);
//    return result.concat(result).concat(result);
//   
//}
//console.log(front3("Java"));
//console.log(front3("Chocolate"));
//console.log(front3("ab"));





//function backAround(string){
//    var front = string.charAt(string.length-1);
//    return front.concat(string).concat(front);
//}
//console.log(backAround("cat"));
//console.log(backAround("Hello"));
//console.log(backAround("a"));




function front22(string){
    var front = string.slice(0, 2);
    if(string.length<2){
        console.log(string);
    }
else{
    console.log(front.concat(string).concat(front));
}
}

front22("kitten");
front22("Ha");
front22("abc");



















