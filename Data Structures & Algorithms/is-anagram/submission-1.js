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
        let sortedS = [...s].sort().join('')
        let sortedT = [...t].sort().join('')
        if(sortedS === sortedT){
            return true
        }else{
            return false
        }
    }
}
