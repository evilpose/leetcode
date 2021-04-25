var mySqrt = function(x) {

  if(x < 0) return NaN;
  if(x == 0) return 0;

  let min = 1;
  let max = x;
  while(max - min > 1){
      let mid = Math.ceil((max + min)/2);
      if (mid*mid < x ) {
          min = mid;
      } else if (mid*mid > x) {
          max = mid;
      } else {
          return mid
      }
  };

  return min;

};

console.log(mySqrt(2));