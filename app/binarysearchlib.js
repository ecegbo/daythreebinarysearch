module.exports= function binarySearch (){
Array.prototype.toTwenty = function () {
for (var i = 1; i <= 20; i++){
  this.push(i);
}
return this;
};

Array.prototype.toForty = function () {
for (var i = 2; i <= 40; i+=2){
  this.push(i);
}
return this;
};

Array.prototype.toOneThousand = function () {
for (var i = 10; i <= 1000; i+=10){
  this.push(i);
}
return this;
}

Array.prototype.search = function binarySearch(randomNumber) {
var low = 0;
var high = this.length -1;
var outputObject = {count: 0, index: null, length: this.length};
while(low <= high) {
  var mid = Math.floor((low + high) /2);
  if(this[high] === randomNumber) {
    outputObject.index = high;
    return outputObject;
  }
  else {
     high = high - 1;
  }
 if(this[low] === randomNumber) {
    outputObject.index = low;
    return outputObject;
  }
  else {
     low = low + 1;
  }
  if(this[mid] === randomNumber) {
    outputObject.index = mid;
    return outputObject;
  }
  else if (this[mid] > randomNumber) high = mid -1;
  else if (this[mid] < randomNumber) low = mid + 1;
   outputObject.count ++;

}
 outputObject.index = -1;
 return outputObject;
}
};

