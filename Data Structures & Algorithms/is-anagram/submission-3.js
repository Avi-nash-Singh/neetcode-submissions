class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false
        }
        let obj = {}
        for(let i of s){
            obj[i] = (obj[i] || 0) + 1
        }
        for(let j of t){
            if(!obj[j]){
                return false
            }
            obj[j]--
        }
        return true
    }
}
