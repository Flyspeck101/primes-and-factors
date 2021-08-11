Number.prototype.isPrime = function() {
  let num = this;
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

};

Number.prototype.primeFactors = function() {
  let result = {};
  for (let i = 2; i < this / 2; i++) {
    if (this % i === 0) {
      result = (this/i).primeFactors();
      if (result[i]) { 
        result[i]++;
      } else {
        result[i] = 1;
      }
    }
  }
  return result;
}
