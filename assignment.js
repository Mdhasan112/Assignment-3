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

function budgetCalculator(totalWatch, totalPhone, totalLaptop) {
    var watch = 50; 
    var phone = 100;
    var laptop = 500;
}