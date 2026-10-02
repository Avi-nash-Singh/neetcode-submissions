class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {}
        for(let i =0; i<nums.length; i++){
            let check = target - nums[i]
            
            if(obj[check] !== undefined){
                return [obj[check], i]
            }
            obj[nums[i]] = i
        }
        return []
    }
}
