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
        let freqArr = Object.entries(obj).map(([val,freq])=>([(freq),val]))
        freqArr.sort((a,b)=>b[0]-a[0])
        return freqArr.splice(0,k).map(([freq,val])=>([val].join()))
    }
}
