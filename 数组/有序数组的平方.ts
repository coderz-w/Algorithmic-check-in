function sortedSquares(nums: number[]): number[] {
    let newArray = nums
    let left = 0;
    let right = nums.length - 1;
    let k = 0;
    for (k = nums.length - 1; k >= 0; k--) {
      if (nums[right] >= nums[left]) {
        newArray[k] = nums[right] ** 2;
        right--;
      } else {
        newArray[k] = nums[left] ** 2;
        left++;
      }
    }
    return newArray;
  }
  console.log(sortedSquares([-4, -1, 0, 3, 10]));