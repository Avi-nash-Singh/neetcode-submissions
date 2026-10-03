class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let n = nums.length
      let pref = new Array(n).fill(1)
      let suff = new Array(n).fill(1)
      let res = []
      for(let i = 1; i<n; i++){
          pref[i] = pref[i-1] * nums[i-1]
      }
      for(let i = n-2;i >= 0 ; i-- ){
        suff[i] = suff[i+1] * nums[i+1]
      }
      let j = 0
      while (j < n){
        res.push(pref[j]*suff[j])
        j++
      }
      return res
    }
}
