let houses = [1,2,3,4,5,6,7];
let heaters = [1,7];

var findRadius = function(houses, heaters) {
  houses = houses.sort((a, b) => a - b);
  heaters = heaters.sort((a, b) => a - b);

  let res = 0;
  let houses_min = 0;
  for(let i = 0; i < houses.length; i++){
      let min = 0; 
      let max = heaters.length - 1;
      while(max - min > 1){
          let mid = Math.floor((min+max)/2);
          if(houses[i] < heaters[mid]){
              max = mid;
          }else{
              min = mid;
          }
      }

      if ( Math.abs(heaters[max] - houses[i]) > Math.abs(heaters[min] - houses[i]) ){
        houses_min = Math.abs(heaters[min] - houses[i])
      } else {
        houses_min = Math.abs(heaters[max] - houses[i])
      }

      res = res > houses_min ? res : houses_min;
  }
  return res;
};

console.log(findRadius(houses, heaters));

/*
    冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

    在加热器的加热半径范围内的每个房屋都可以获得供暖。

    现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。

    说明：所有供暖器都遵循你的半径标准，加热的半径也一样。

     

    示例 1:

    输入: houses = [1,2,3], heaters = [2]
    输出: 1
    解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
    示例 2:

    输入: houses = [1,2,3,4], heaters = [1,4]
    输出: 1
    解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
    示例 3：

    输入：houses = [1,5], heaters = [2]
    输出：3
     

    提示：

    1 <= houses.length, heaters.length <= 3 * 104
    1 <= houses[i], heaters[i] <= 109

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/heaters
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
    
 */