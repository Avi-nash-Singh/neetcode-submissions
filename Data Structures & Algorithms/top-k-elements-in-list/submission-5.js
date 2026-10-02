class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}
        for(let i of nums){
            obj[i] = (obj[i] || 0) + 1
        }
        let freqArr = Object.entries(obj)
        freqArr.sort((a,b)=>b[1]-a[1])
        return freqArr.splice(0,k).map(([val,freq])=>([val].join()))
    }
}
