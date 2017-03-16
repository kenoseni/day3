module.exports = Array.prototype
Array.prototype.toTwenty = function() {
  for(var i = 1; i <= 20; i++){
    oneToTwenty.push(i);
  }
  return oneToTwenty;
};
var oneToTwenty = []

Array.prototype.toForty = function() {
  oneToForty = [];
  for(var i = 2; i <= 20; i+=2){
    oneToForty.push(i);
  }
  return oneToForty;
};

Array.prototype.toOneThousand = function() {
  tenToOneThousand = [];
  for(var i = 10; i <= 1000; i+=10){
    tenToOneThousand.push(i);
  }
  return tenToOneThousand;
};

Array.prototype.search = function(n) {
  let mid;
  let objectName = {};
  object.count = 0;
  object.index =-1;
  object.length = this.length;
  var midIndex = thislenght/2 |0;
  midElement = this[midIndex];
  
  for(var i =0; i < object.length; i++){
    if(midElement < n){
      object.count += 1;
    }else if(midElement == n){
      object.index = midElement;
    }
  }
  return object.index;

};