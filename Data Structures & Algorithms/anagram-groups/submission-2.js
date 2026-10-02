class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
        for(let i of strs){
            let sortedStr = i.split('').sort().join('')
            if(!obj[sortedStr]){
                obj[sortedStr] = []
            }
                obj[sortedStr].push(i)
        }
        return Object.values(obj)
    }
}
