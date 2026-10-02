class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let res = []
      for(let i of strs){
        res.push(String(i.length),'#',i)
      }
      return res.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let res = []
    let i =0
    while (i < str.length){
        let hash = str.indexOf('#', i)
        let count = parseInt(str.slice(i, parseInt(hash)))
        let char = str.slice(hash + 1, hash + 1 + count)

        res.push(char)

        i = hash + 1 + count
    
    }
      
      return res
    }
}
