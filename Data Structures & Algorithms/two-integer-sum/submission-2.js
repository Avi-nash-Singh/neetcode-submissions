class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {}
        for(let i = 0; i < nums.length; i++){
            obj[nums[i]] = i
        }
        for(let i=0; i < nums.length; i++){
            let check = target - nums[i]
            if(obj[check] !== undefined && obj[check] !== i){
                return [i, obj[check]]
            }
        }
        return []
    }
}
