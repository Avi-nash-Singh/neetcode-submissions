class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}
        for(let i of nums){
            if(obj[i]){
                return true
            }else{
            obj[i] = (obj[i] || 0) + 1
            }
        }
        return false
    }
}
