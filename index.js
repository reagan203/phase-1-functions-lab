// Code your solution in this file!
function  distanceFromHqInBlocks (pickUpLocation) {
    let distance ;
    if (pickUpLocation >= 42){
        distance=pickUpLocation - 42 ;
    }
    else if (pickUpLocation < 42){
        distance = 42 - pickUpLocation;
    }
    return distance;
}
function distanceFromHqInFeet(pickUpLocation) {
   let distance =distanceFromHqInBlocks(pickUpLocation) ;
   return distance *264;
}
function distanceTravelledInFeet (startingBlock ,endingBlock ){
    let distance;
    if (startingBlock>= endingBlock){
        distance =startingBlock -endingBlock;
    }
    else if(startingBlock< endingBlock){
        distance = endingBlock -startingBlock;
    }
    return distance *264;
}

function calculatesFarePrice (startingBlock ,endingBlock ) {
    let farePrice;
    let distance =distanceTravelledInFeet (startingBlock ,endingBlock );
    if (distance<=400){
        return farePrice =0;
    }
    else if (distance >400 && distance <=2000 ){
        return farePrice= (distance - 400)*(2/100);
    }
    else if (distance>2000 && distance<=2500 ){
        return farePrice = 25;
    }
    else if (distance>2500){
        return 'cannot travel that far';
    }


}

    