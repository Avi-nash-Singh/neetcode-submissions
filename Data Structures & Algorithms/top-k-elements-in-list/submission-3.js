class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}
        for(let i of nums){
            obj[i] = (obj[i] | 0) + 1
        }
        
        let arr =  Object.entries(obj).map(([num,freq])=>[freq,parseInt(num)])
        arr.sort((a,b)=>b[0]-a[0])
        return arr.splice(0,k).map(([freq,num])=>parseInt([num].join()))
    }
}