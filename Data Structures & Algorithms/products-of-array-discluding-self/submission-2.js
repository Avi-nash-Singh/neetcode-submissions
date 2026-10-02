class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
  let pre = new Array(n).fill(1)
  let post = new Array(n).fill(1)
  let res = []
  for(let i=1; i<n; i++){
    pre[i] = nums[i-1] * pre[i-1]
  }
  for(let i = n-2; i>=0; i--){
    post[i]=nums[i+1]* post[i+1]
  }
  let j =0
  while(j<n){
    res.push(pre[j]*post[j])
    j++
  }
  return res
    }
}
