// https://github.com/Mdhasan112/Javascript-Assignment


function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    return meter;
}
var totalMeter = kilometerToMeter(10);
console.log(totalMeter);



function megaFriend(friendsName) {
    var max = friendsName[0];
for(i = 0; i < friendsName.length; i++) {
    var element = friendsName[i];
    if(element > max) {
        max = element;
    }
}
return max;
}
var friendsName = ["'kamal', 'jamaluddin', 'rob', 'rokibul',"]
var maxValue = megaFriend(friendsName);
console.log(maxValue);



function budgetCalculator(watch, phone, laptop){
   var watch = watch * 50;
   var phone = phone * 100;
   var laptop = laptop * 500;
   var result = watch + phone + laptop;
   return result;
}
var total = budgetCalculator(5, 10, 5);
console.log(total);


function hotelCost(numberOfDays){
   if(numberOfDays >= 1 && numberOfDays <= 10) {
      first10Days = numberOfDays * 100;
      return first10Days;
   }
   else if(numberOfDays >= 11 && numberOfDays <= 20) {
      var first10Days =  10 * 100;
      var secondDay =  (numberOfDays - 10) * 80;
      var remaining = first10Days + secondDay;
      return remaining;
   }
   else if( numberOfDays > 21) {
      var first10Days = 10 * 100;
      var secondDay =  10 * 80;
      var thirdDay = (numberOfDays - 20) * 50;
      var exrtandDay = first10Days + secondDay + thirdDay;
      return exrtandDay;
   }
   else{
      return false;
   }
}
var totalDays = hotelCost(12);
console.log(totalDays);



//             or

// function hotelCost(numbarOfDays){
    
//    if(numbarOfDays >= 1 && numbarOfDays <= 10){
//        const fist10DaysCost=numbarOfDays*100
//        return fist10DaysCost
       
       
//    }
//    else if(numbarOfDays >= 11 && numbarOfDays <= 20){
//         const fist10DaysCost=10*100
//         const second10DaysCost=(numbarOfDays-10) *80
//         return fist10DaysCost+second10DaysCost
        
       
       
//    }
//     else if(numbarOfDays >20){
        
//                  const fist10DaysCost=10*100
//               const second10DaysCost=10 *80
//               const  extaendDayCost=(numbarOfDays-20)*50
              
//               return fist10DaysCost+second10DaysCost+extaendDayCost
        
       
       
//    }
//    else{
       
//        return false
//    }
   
   
   
// }

// console.log(hotelCost(-30))
