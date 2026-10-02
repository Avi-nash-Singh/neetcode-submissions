class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
        for(let i of strs){
            let sortedChar = i.split('').sort().join('')
            if(!obj[sortedChar]){
                obj[sortedChar]=[]
            }
            obj[sortedChar].push(i)
        }
        return Object.values(obj)
    }
}
