var reverseVowels = function(s) {
  let yuanyin = new Set(['a','e','i','o','u','A','E','I','O','U']);
  let arr = s.split('');
  let l = 0;
  let r = arr.length - 1;

  while(l < r){
    if (yuanyin.has(arr[l])) {
      if (yuanyin.has(arr[r])) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++
      }
      r--
    } else {
      l++
    }
  }
  return arr.join('');

  // let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
  // let arr = s.split('');
  // let i = 0;
  // let j = arr.length-1;
  // while(i<j){
  //     if(set.has(arr[i])){ // 左边是否有元音字母
  //         if(set.has(arr[j])){ // 如果左边有元音字母，右边也有，那么交换
  //             [arr[i],arr[j]] = [arr[j],arr[i]];
  //             i++;
  //         }
  //         j--;
  //     }else{
  //         i++;
  //     }
  // }
  // return arr.join('')
};

console.log(reverseVowels('hello'));

/**
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
    示例 1：

    输入："hello"
    输出："holle"
    示例 2：

    输入："leetcode"
    输出："leotcede"

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/reverse-vowels-of-a-string
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */