////Javascript Functions;

// var dogName = 'rover'
// var dogweight = 23;
// if (dogweight > 20) {
//     console.log(dogName + ' says WOOF WOOF');
// } else {
//     console.log(dogName + ' says woof woof');
// }

// dogName = 'spot';
// dogweight = 13;
// if (dogweight > 20) {
//     console.log(dogName + 'says WOOF WOOF')
// } else {
//     console.log(dogName + ' says woof woof');
// }

// dogName = "spike";
// dogWeight = 53;
// if (dogWeight > 20) {
// console.log(dogName + " says WOOF WOOF");
// } else {
// console.log(dogName + " says woof woof");
// }
// dogName = "lady";
// dogWeight = 17;
// if (dogWeight > 20) {
// console.log(dogName + " says WOOF WOOF");
// } else {
// console.log(dogName + " says woof woof");
// }


//////Function
function bark(name , weight) {
    if (weight > 20) {
        console.log(name + ' says WOOF WOOF');
    } else {
        console.log(name + 'says woof woof');
    }
}

bark('rover' , 23);
bark('spot' , 13);
bark('spike' , 53);
bark('lady' , 17);

