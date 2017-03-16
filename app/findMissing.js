exports.findMissing = function (arr1, arr2){
    var newList =[];
    for(var i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1){
            newList.push(arr1[i]);
        }
    }
    for(var k = 0; k < arr2.length; k++){
        if(arr1.indexOf(arr2[k]) === -1){
            newList.push(arr2[k]);
        }
    }
    return Number(newList);
}