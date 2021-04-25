var intersection = function(nums1, nums2) {
  // return ([...new Set(nums1)].filter((item)=>new Set(nums2).has(item)))
  let obj = {};
  let res = [];
  for(let i = 0; i < nums1.length; i++){
    obj[nums1[i]] = true;
  };
  for(let j = 0; j < nums2.length; j++){
    if (obj[nums2[j]]) res.push(nums2[j]);
  };
  return res;
};

console.log(intersection([112,2232,211,112], [2,2,2232]));


/**
 *  给定两个数组，编写一个函数来计算它们的交集。
    示例 1：

    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2]
    示例 2：

    输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出：[9,4]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */