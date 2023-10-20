function removeElement(nums: number[], val: number): number {
  let f = 0;
  let s = 0;
  for (f = 0; f < nums.length; f++) {
    if (nums[f] != val) {
      nums[s++] = nums[f];
    }
  }
  return s;
}
console.log(removeElement([3,2,2,3],3))