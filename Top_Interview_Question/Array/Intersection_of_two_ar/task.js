/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length

  const s1 = new Set(nums1)
  const s2 = new Set(nums2)

  const c1 = {}
  const c2 = {}

  const res1 = []
  const res2 = []
  const res = []

  for(let i = 0; i < len1; i++){
    if (s2.has(nums1[i])) {
      res1.push(nums1[i])
      if(!c1.hasOwnProperty(nums1[i])) { c1[nums1[i]] = 1 }
      else { c1[nums1[i]] += 1 }
    }
  }

  for(let i = 0; i < len2; i++){
    if (s1.has(nums2[i])) {
      res2.push(nums2[i])
      if(!c2.hasOwnProperty(nums2[i])) { c2[nums2[i]] = 1 }
      else { c2[nums2[i]] += 1 }
    }
  }

  const len = res1.length

  for(let key in c1){
    let tmp = c1[key] < c2[key] ? c1[key] : c2[key]
    for(let i = 0; i < tmp; i++){
        res.push(Number(key))
      }
  }
  return res
};
